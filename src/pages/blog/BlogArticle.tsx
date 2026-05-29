import { useEffect, useState, useCallback } from "react"
import { useParams, Link } from "react-router-dom"
import { Calendar, Clock, ArrowLeft, Heart, MessageSquare, Share2, Check } from "lucide-react"

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
  likes: string[]
  likeCount: number
  commentCount: number
}

interface Comment {
  id: number
  author: string
  content: string
  createdAt: string
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function getVisitorId(): string {
  let id = localStorage.getItem("visitorId")
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem("visitorId", id)
  }
  return id
}

export function BlogArticle() {
  const { slug } = useParams()
  const [post, setPost] = useState<Post | null>(null)
  const [notFound, setNotFound] = useState(false)
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const [comments, setComments] = useState<Comment[]>([])
  const [commentAuthor, setCommentAuthor] = useState("")
  const [commentContent, setCommentContent] = useState("")
  const [copied, setCopied] = useState(false)
  const visitorId = getVisitorId()

  const fetchPost = useCallback(() => {
    if (!slug) return
    fetch(`/api/blog/${slug}`)
      .then((r) => {
        if (!r.ok) throw new Error("not found")
        return r.json()
      })
      .then((p: Post) => {
        setPost(p)
        setLiked((p.likes || []).includes(visitorId))
        setLikeCount(p.likeCount || 0)
      })
      .catch(() => setNotFound(true))
  }, [slug, visitorId])

  const fetchComments = useCallback(() => {
    if (!slug) return
    fetch(`/api/blog/${slug}/comments`)
      .then((r) => r.json())
      .then(setComments)
  }, [slug])

  useEffect(() => { fetchPost(); fetchComments() }, [fetchPost, fetchComments])

  const handleLike = async () => {
    if (!post) return
    const r = await fetch(`/api/blog/${post.id}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ visitorId }),
    })
    if (r.ok) {
      const data = await r.json()
      setLiked(data.liked)
      setLikeCount(data.count)
    }
  }

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!slug || !commentAuthor || !commentContent) return
    const r = await fetch(`/api/blog/${slug}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author: commentAuthor, content: commentContent }),
    })
    if (r.ok) {
      setCommentContent("")
      fetchComments()
    }
  }

  const handleShare = async () => {
    const url = window.location.href
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
      const input = document.createElement("input")
      input.value = url
      document.body.appendChild(input)
      input.select()
      document.execCommand("copy")
      document.body.removeChild(input)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (notFound) {
    return (
      <div className="min-h-svh pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Article introuvable</h1>
          <Link to="/blog" className="text-primary hover:underline mt-2 inline-block">Retour au blog</Link>
        </div>
      </div>
    )
  }

  if (!post) return null

  const readTime = Math.max(1, Math.ceil(post.content.replace(/<[^>]*>/g, "").split(/\s+/).length / 200))

  return (
    <div className="min-h-svh pt-24">
      <article className="mx-auto max-w-[720px] px-4 py-16">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="size-4" /> Retour au blog
        </Link>

        <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground flex-wrap">
          {post.tags.map((t) => (
            <span key={t} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{t}</span>
          ))}
          <span className="flex items-center gap-1"><Calendar className="size-3.5" /> {formatDate(post.createdAt)}</span>
          <span className="flex items-center gap-1"><Clock className="size-3.5" /> {readTime} min de lecture</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">{post.title}</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Interactions bar */}
        <hr className="border-border/50 mb-6" />
        <div className="flex items-center gap-4">
          <button
            onClick={handleLike}
            className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
              liked
                ? "border-red-200 bg-red-50 text-red-600 dark:border-red-800 dark:bg-red-950 dark:text-red-400"
                : "border-border hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:hover:border-red-800 dark:hover:bg-red-950 dark:hover:text-red-400"
            }`}
          >
            <Heart className={`size-4 ${liked ? "fill-current" : ""}`} />
            {likeCount > 0 ? likeCount : "J'aime"}
          </button>

          <button
            onClick={handleShare}
            className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
              copied
                ? "border-green-200 bg-green-50 text-green-600 dark:border-green-800 dark:bg-green-950 dark:text-green-400"
                : "border-border hover:bg-muted"
            }`}
          >
            {copied ? <Check className="size-4" /> : <Share2 className="size-4" />}
            {copied ? "Lien copié !" : "Partager"}
          </button>
        </div>

        {/* Comments section */}
        <hr className="border-border/50 my-8" />
        <section>
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <MessageSquare className="size-5" /> Commentaires ({comments.length})
          </h2>

          <form onSubmit={handleComment} className="mb-8 space-y-3">
            <input
              value={commentAuthor}
              onChange={(e) => setCommentAuthor(e.target.value)}
              placeholder="Votre nom"
              className="w-full border rounded-lg px-3 py-2 bg-background text-sm"
              required
            />
            <textarea
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
              placeholder="Écrivez votre commentaire..."
              className="w-full border rounded-lg px-3 py-2 bg-background text-sm resize-none"
              rows={3}
              required
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Envoyer
            </button>
          </form>

          {comments.length === 0 && (
            <p className="text-sm text-muted-foreground">Aucun commentaire pour le moment.</p>
          )}

          <div className="space-y-4">
            {comments.map((c) => (
              <div key={c.id} className="rounded-lg border border-border/50 p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">{c.author}</span>
                  <span className="text-xs text-muted-foreground">{formatDate(c.createdAt)}</span>
                </div>
                <p className="text-sm leading-relaxed">{c.content}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}
