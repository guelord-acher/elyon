import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import bcrypt from "bcryptjs"

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
  likes: string[]
}

interface Comment {
  id: number
  postId: number
  author: string
  content: string
  createdAt: string
}

interface Data {
  users: User[]
  posts: Post[]
  comments: Comment[]
  nextUserId: number
  nextPostId: number
  nextCommentId: number
}

let data: Data = {
  users: [],
  posts: [],
  comments: [],
  nextUserId: 1,
  nextPostId: 1,
  nextCommentId: 1,
}

function load() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"))
      if (!data.comments) data.comments = []
      if (!data.nextCommentId) data.nextCommentId = 1
      data.posts.forEach((p) => { if (!p.likes) p.likes = [] })
    }
  } catch {
    data = { users: [], posts: [], comments: [], nextUserId: 1, nextPostId: 1, nextCommentId: 1 }
  }
}

function save() {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8")
}

load()

export async function initDb() {
  const admin = data.users.find((u) => u.email === "admin@elyon.dev")
  if (!admin) {
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
  const list = publishedOnly
    ? data.posts.filter((p) => p.published)
    : data.posts
  return [...list].reverse().map((p) => ({
    ...p,
    likes: p.likes || [],
    likeCount: (p.likes || []).length,
  })) as any
}

export function getPostBySlug(slug: string): Post | undefined {
  const post = data.posts.find((p) => p.slug === slug && p.published)
  if (!post) return undefined
  return { ...post, likes: post.likes || [], likeCount: (post.likes || []).length } as any
}

export function getPostById(id: number): Post | undefined {
  return data.posts.find((p) => p.id === id)
}

export function createPost(post: Omit<Post, "id" | "createdAt" | "updatedAt" | "likes">): Post {
  const newPost: Post = {
    ...post,
    id: data.nextPostId++,
    likes: [],
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
  data.comments = data.comments.filter((c) => c.postId !== id)
  save()
  return true
}

export function getUserByEmail(email: string): User | undefined {
  return data.users.find((u) => u.email === email)
}

export function createUser(email: string, password: string, name: string): User {
  const user: User = {
    id: data.nextUserId++,
    email,
    password,
    name,
    createdAt: new Date().toISOString(),
  }
  data.users.push(user)
  save()
  return user
}

export function getUserCount(): number {
  return data.users.length
}

export function getAllUsers(): Omit<User, "password">[] {
  return data.users.map(({ password, ...rest }) => rest)
}

export function getUserById(id: number): User | undefined {
  return data.users.find((u) => u.id === id)
}

export function deleteUserById(id: number): boolean {
  const idx = data.users.findIndex((u) => u.id === id)
  if (idx === -1) return false
  data.users.splice(idx, 1)
  save()
  return true
}

export function toggleLike(postId: number, visitorId: string): { liked: boolean; count: number } {
  const post = data.posts.find((p) => p.id === postId)
  if (!post) throw new Error("Post not found")
  if (!post.likes) post.likes = []
  const idx = post.likes.indexOf(visitorId)
  if (idx === -1) {
    post.likes.push(visitorId)
    save()
    return { liked: true, count: post.likes.length }
  } else {
    post.likes.splice(idx, 1)
    save()
    return { liked: false, count: post.likes.length }
  }
}

export function getComments(postId: number): Comment[] {
  return data.comments
    .filter((c) => c.postId === postId)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export function addComment(postId: number, author: string, content: string): Comment {
  const comment: Comment = {
    id: data.nextCommentId++,
    postId,
    author,
    content,
    createdAt: new Date().toISOString(),
  }
  data.comments.push(comment)
  save()
  return comment
}

export { data }
