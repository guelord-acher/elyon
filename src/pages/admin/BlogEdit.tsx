import { useEffect, useState, type FormEvent } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { useNavigate, useParams } from "react-router-dom"

interface FormData {
  title: string
  slug: string
  content: string
  excerpt: string
  tags: string
  published: boolean
}

export function BlogEdit() {
  const { token } = useAuth()
  const navigate = useNavigate()
  const { id } = useParams()
  const isNew = !id
  const [loading, setLoading] = useState(!isNew)
  const [form, setForm] = useState<FormData>({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    tags: "",
    published: false,
  })

  useEffect(() => {
    if (!isNew) {
      fetch("/api/blog?all=true", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((r) => r.json())
        .then((posts) => {
          const p = posts.find((x: any) => x.id === parseInt(id!))
          if (p) {
            setForm({
              title: p.title,
              slug: p.slug,
              content: p.content,
              excerpt: p.excerpt || "",
              tags: Array.isArray(p.tags) ? p.tags.join(", ") : "",
              published: p.published,
            })
          }
        })
        .finally(() => setLoading(false))
    }
  }, [id, isNew, token])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const body = {
      ...form,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
    }

    const url = isNew ? "/api/blog" : `/api/blog/${id}`
    const method = isNew ? "POST" : "PUT"

    const r = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    })

    if (r.ok) navigate("/admin/blog")
  }

  if (loading) return <p className="text-muted-foreground">Chargement...</p>

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">{isNew ? "Nouvel article" : "Modifier l'article"}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Titre</label>
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 bg-background text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Slug</label>
          <input
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 bg-background text-sm font-mono"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Extrait</label>
          <textarea
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 bg-background text-sm"
            rows={2}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Contenu (HTML)</label>
          <textarea
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 bg-background text-sm font-mono"
            rows={15}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Tags (séparés par des virgules)</label>
          <input
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 bg-background text-sm"
          />
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.published}
            onChange={(e) => setForm({ ...form, published: e.target.checked })}
          />
          Publié
        </label>
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-medium"
          >
            {isNew ? "Créer" : "Enregistrer"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin/blog")}
            className="border rounded-lg px-4 py-2 text-sm"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  )
}
