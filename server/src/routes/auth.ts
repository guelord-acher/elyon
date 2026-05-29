import { Router, Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { getUserByEmail } from "../db.js"

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

export { router, JWT_SECRET }
