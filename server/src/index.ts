import express from "express"
import cors from "cors"
import { router as authRouter } from "./routes/auth.js"
import blogRouter from "./routes/blog.js"
import { initDb } from "./db.js"

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: "http://localhost:5173" }))
app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/blog", blogRouter)

await initDb()

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
