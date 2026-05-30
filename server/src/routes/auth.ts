import { Router, Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { getUserByEmail, getUserById, createUser, getUserCount, getAllUsers, deleteUserById } from "../db.js"

const router = Router()
const JWT_SECRET = process.env.JWT_SECRET || "elyon-dev-secret-change-in-production"

function asyncHandler(fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next)
  }
}

router.post("/login", asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(400).json({ error: "Email et mot de passe requis" })
    return
  }

  const user = getUserByEmail(email)
  if (!user) {
    res.status(401).json({ error: "Identifiants invalides" })
    return
  }

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    res.status(401).json({ error: "Identifiants invalides" })
    return
  }

  const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: "7d" })
  res.json({ token, user: { id: user.id, email: user.email, name: user.name } })
}))

router.get("/me", (req: Request, res: Response) => {
  const auth = req.headers.authorization
  if (!auth) {
    res.status(401).json({ error: "Non authentifié" })
    return
  }
  try {
    const decoded = jwt.verify(auth.replace("Bearer ", ""), JWT_SECRET) as any
    res.json({ id: decoded.id, email: decoded.email, name: decoded.name })
  } catch {
    res.status(401).json({ error: "Token invalide" })
  }
})

router.post("/signup", asyncHandler(async (req: Request, res: Response) => {
  const { email, password, name } = req.body
  if (!email || !password || !name) {
    res.status(400).json({ error: "Nom, email et mot de passe requis" })
    return
  }

  if (password.length < 8) {
    res.status(400).json({ error: "Le mot de passe doit contenir au moins 8 caractères" })
    return
  }

  const existing = getUserByEmail(email)
  if (existing) {
    res.status(409).json({ error: "Un compte avec cet email existe déjà" })
    return
  }

  const hash = await bcrypt.hash(password, 10)
  const user = createUser(email, hash, name)

  const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: "7d" })
  res.status(201).json({ token, user: { id: user.id, email: user.email, name: user.name } })
}))

router.get("/users/count", asyncHandler(async (_req: Request, res: Response) => {
  res.json({ count: getUserCount() })
}))

function requireAuth(req: Request): { id: number; email: string; name: string } | null {
  const auth = req.headers.authorization
  if (!auth) return null
  try {
    return jwt.verify(auth.replace("Bearer ", ""), JWT_SECRET) as any
  } catch {
    return null
  }
}

router.get("/users", asyncHandler(async (req: Request, res: Response) => {
  const user = requireAuth(req)
  if (!user) {
    res.status(401).json({ error: "Non authentifié" })
    return
  }
  const users = getAllUsers()
  res.json(users)
}))

router.delete("/users/:id", asyncHandler(async (req: Request, res: Response) => {
  const user = requireAuth(req)
  if (!user) {
    res.status(401).json({ error: "Non authentifié" })
    return
  }

  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.status(400).json({ error: "ID invalide" })
    return
  }

  if (id === user.id) {
    res.status(400).json({ error: "Vous ne pouvez pas supprimer votre propre compte" })
    return
  }

  const target = getUserById(id)
  if (!target) {
    res.status(404).json({ error: "Utilisateur introuvable" })
    return
  }

  deleteUserById(id)
  res.json({ success: true })
}))

export { router, JWT_SECRET }
