import { Router, Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { getPosts, getPostBySlug, getPostById, createPost, updatePost, deletePost, toggleLike, getComments, addComment } from "../db.js"
import { JWT_SECRET } from "./auth.js"

const router = Router()

function asyncHandler(fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) {
  return (req: Request, res: Response, next: NextFunction) => fn(req, res, next).catch(next)
}

function getUser(token: string): any {
  try {
    return jwt.verify(token.replace("Bearer ", ""), JWT_SECRET)
  } catch {
    return null
  }
}

router.get("/", (req: Request, res: Response) => {
  const auth = req.headers.authorization
  const admin = auth ? getUser(auth) : null
  const posts = getPosts(!admin)
  res.json(posts)
})

router.get("/:slug", (req: Request, res: Response) => {
  const post = getPostBySlug(req.params.slug)
  if (!post) {
    res.status(404).json({ error: "Article introuvable" })
    return
  }
  const comments = getComments(post.id)
  res.json({ ...post, commentCount: comments.length })
})

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

  const post = createPost({ title, slug, content, excerpt: excerpt || "", tags: tags || [], author: user.name, published: !!published })
  res.status(201).json(post)
})

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

// Toggle like
router.post("/:id/like", asyncHandler(async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const { visitorId } = req.body
  if (!visitorId) {
    res.status(400).json({ error: "visitorId requis" })
    return
  }
  const result = toggleLike(id, visitorId)
  res.json(result)
}))

// Get comments
router.get("/:slug/comments", (req: Request, res: Response) => {
  const post = getPostBySlug(req.params.slug)
  if (!post) {
    res.status(404).json({ error: "Article introuvable" })
    return
  }
  res.json(getComments(post.id))
})

// Add comment
router.post("/:slug/comments", (req: Request, res: Response) => {
  const post = getPostBySlug(req.params.slug)
  if (!post) {
    res.status(404).json({ error: "Article introuvable" })
    return
  }

  const { author, content } = req.body
  if (!author || !content) {
    res.status(400).json({ error: "Nom et contenu requis" })
    return
  }

  const comment = addComment(post.id, author.trim(), content.trim())
  res.status(201).json(comment)
})

export default router
