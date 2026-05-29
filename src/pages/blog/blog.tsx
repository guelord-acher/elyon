import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FileEdit, Calendar, Clock, Heart } from "lucide-react"

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
  likeCount: number
  commentCount: number
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function excerptHtml(html: string, max = 120) {
  const text = html.replace(/<[^>]*>/g, "")
  return text.length > max ? text.slice(0, max) + "…" : text
}

export function Blog() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetch("/api/blog")
      .then((r) => r.json())
      .then(setPosts)
      .catch(() => {})
  }, [])

  return (
    <div className="min-h-svh pt-24">
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="pointer-events-none absolute -top-40 left-0 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 right-0 size-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-[1220px]">
          
          <div className="mt-4 flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
            <FileEdit className="size-7 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">Blog</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Actualités, articles techniques et tutoriels. Suivez l'évolution
            d'Elyon et les coulisses de notre développement.
          </p>
          <hr className="my-20 border-border/50" />
          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground">Aucun article publié pour le moment.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <article
                  key={p.id}
                  onClick={() => navigate(`/blog/${p.slug}`)}
                  className="group rounded-2xl border border-border/50 bg-background/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-background/80 cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{t}</span>
                    ))}
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="size-3" />
                      {formatDate(p.createdAt)}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="size-3" />
                      {Math.max(1, Math.ceil(p.content.replace(/<[^>]*>/g, "").split(/\s+/).length / 200))} min
                    </div>
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">{p.excerpt || excerptHtml(p.content)}</p>
                  <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Heart className="size-3" /> {p.likeCount || 0}</span>
                    <span className="flex items-center gap-1">{p.commentCount || 0} commentaire{(p.commentCount || 0) > 1 ? "s" : ""}</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
