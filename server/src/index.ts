import express from "express"
import cors from "cors"
import path from "path"
import { fileURLToPath } from "url"
import { router as authRouter } from "./routes/auth.js"
import blogRouter from "./routes/blog.js"
import { initDb } from "./db.js"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: "http://localhost:5173" }))
app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/blog", blogRouter)

// Serve built client in production
const clientDist = path.join(__dirname, "..", "..", "dist")
app.use(express.static(clientDist))
app.get("*", (_req, res) => {
  res.sendFile(path.join(clientDist, "index.html"))
})

// Global error handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err)
  res.status(500).json({ error: "Erreur interne du serveur" })
})

await initDb()

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
