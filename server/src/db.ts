import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_FILE = path.join(__dirname, "..", "data.json")

interface User {
  id: number
  email: string
  password: string
  name: string
  createdAt: string
}

interface Post {
  id: number
  title: string
  slug: string
  content: string
  excerpt: string
  tags: string[]
  author: string
  published: boolean
  createdAt: string
  updatedAt: string
}

interface Data {
  users: User[]
  posts: Post[]
  nextUserId: number
  nextPostId: number
}

let data: Data = {
  users: [],
  posts: [],
  nextUserId: 1,
  nextPostId: 1,
}

function load() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"))
    }
  } catch {
    data = { users: [], posts: [], nextUserId: 1, nextPostId: 1 }
  }
}

function save() {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8")
}

load()

export async function initDb() {
  const admin = data.users.find((u) => u.email === "admin@elyon.dev")
  if (!admin) {
    const bcrypt = await import("bcryptjs")
    const hash = await bcrypt.hash("admin123", 10)
    data.users.push({
      id: data.nextUserId++,
      email: "admin@elyon.dev",
      password: hash,
      name: "Admin",
      createdAt: new Date().toISOString(),
    })
    save()
    console.log("Default admin created: admin@elyon.dev / admin123")
  }
}

export function getPosts(publishedOnly = true): Post[] {
  if (publishedOnly) {
    return data.posts.filter((p) => p.published).reverse()
  }
  return [...data.posts].reverse()
}

export function getPostBySlug(slug: string): Post | undefined {
  return data.posts.find((p) => p.slug === slug && p.published)
}

export function getPostById(id: number): Post | undefined {
  return data.posts.find((p) => p.id === id)
}

export function createPost(post: Omit<Post, "id" | "createdAt" | "updatedAt">): Post {
  const newPost: Post = {
    ...post,
    id: data.nextPostId++,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  data.posts.push(newPost)
  save()
  return newPost
}

export function updatePost(id: number, updates: Partial<Post>): boolean {
  const idx = data.posts.findIndex((p) => p.id === id)
  if (idx === -1) return false
  data.posts[idx] = { ...data.posts[idx], ...updates, updatedAt: new Date().toISOString() }
  save()
  return true
}

export function deletePost(id: number): boolean {
  const idx = data.posts.findIndex((p) => p.id === id)
  if (idx === -1) return false
  data.posts.splice(idx, 1)
  save()
  return true
}

export function getUserByEmail(email: string): User | undefined {
  return data.users.find((u) => u.email === email)
}

export { data }
