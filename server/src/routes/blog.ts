import { Router, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { getPosts, getPostBySlug, getPostById, createPost, updatePost, deletePost } from "../db.js"
import { JWT_SECRET } from "./auth.js"

const router = Router()

function getUser(token: string): any {
  try {
    return jwt.verify(token.replace("Bearer ", ""), JWT_SECRET)
  } catch {
    return null
  }
}

// GET /api/blog — public, only published
router.get("/", (req: Request, res: Response) => {
  const auth = req.headers.authorization
  const admin = auth ? getUser(auth) : null
  const posts = getPosts(!admin)
  res.json(posts)
})

// GET /api/blog/:slug — public
router.get("/:slug", (req: Request, res: Response) => {
  const post = getPostBySlug(req.params.slug)
  if (!post) {
    res.status(404).json({ error: "Article introuvable" })
    return
  }
  res.json(post)
})

// POST /api/blog — admin only
router.post("/", (req: Request, res: Response) => {
  const user = getUser(req.headers.authorization || "")
  if (!user) {
    res.status(401).json({ error: "Non authentifié" })
    return
  }

  const { title, slug, content, excerpt, tags, published } = req.body
  if (!title || !slug || !content) {
    res.status(400).json({ error: "Titre, slug et contenu requis" })
    return
  }

  const existing = getPostBySlug(slug)
  if (existing) {
    res.status(409).json({ error: "Ce slug existe déjà" })
    return
  }

  const post = createPost({
    title, slug, content,
    excerpt: excerpt || "",
    tags: tags || [],
    author: user.name,
    published: !!published,
  })

  res.status(201).json(post)
})

// PUT /api/blog/:id — admin only
router.put("/:id", (req: Request, res: Response) => {
  const user = getUser(req.headers.authorization || "")
  if (!user) {
    res.status(401).json({ error: "Non authentifié" })
    return
  }

  const id = parseInt(req.params.id)
  const existing = getPostById(id)
  if (!existing) {
    res.status(404).json({ error: "Article introuvable" })
    return
  }

  const { title, slug, content, excerpt, tags, published } = req.body
  updatePost(id, { title, slug, content, excerpt: excerpt || "", tags: tags || [], published: !!published, author: user.name })
  res.json({ success: true })
})

// DELETE /api/blog/:id — admin only
router.delete("/:id", (req: Request, res: Response) => {
  const user = getUser(req.headers.authorization || "")
  if (!user) {
    res.status(401).json({ error: "Non authentifié" })
    return
  }

  const id = parseInt(req.params.id)
  deletePost(id)
  res.json({ success: true })
})

export default router
