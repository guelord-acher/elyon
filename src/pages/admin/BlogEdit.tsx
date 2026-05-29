import { useEffect, useState, useRef, type FormEvent } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { useNavigate, useParams } from "react-router-dom"
import {
  Bold, Italic, Heading2, Heading3, Link2,
  List, ListOrdered, Quote, Code, Eye, Edit3,
} from "lucide-react"

interface FormData {
  title: string
  slug: string
  content: string
  excerpt: string
  tags: string
  published: boolean
}

function wrapSelection(textarea: HTMLTextAreaElement, before: string, after: string) {
  const start = textarea.selectionStart
  const end = textarea.selectionEnd
  const selected = textarea.value.slice(start, end)
  const replacement = before + selected + after
  const newValue = textarea.value.slice(0, start) + replacement + textarea.value.slice(end)
  return { value: newValue, cursorPos: start + before.length + selected.length }
}

function insertAtCursor(textarea: HTMLTextAreaElement, text: string) {
  const start = textarea.selectionStart
  const newValue = textarea.value.slice(0, start) + text + textarea.value.slice(textarea.selectionEnd)
  return { value: newValue, cursorPos: start + text.length }
}

export function BlogEdit() {
  const { token } = useAuth()
  const navigate = useNavigate()
  const { id } = useParams()
  const isNew = !id
  const [loading, setLoading] = useState(!isNew)
  const [preview, setPreview] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
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

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const exec = (before: string, after: string) => () => {
    const ta = textareaRef.current
    if (!ta) return
    const result = wrapSelection(ta, before, after)
    updateField("content", result.value)
    requestAnimationFrame(() => {
      ta.focus()
      ta.setSelectionRange(ta.selectionStart, ta.selectionStart)
    })
  }

  const execLink = () => {
    const ta = textareaRef.current
    if (!ta) return
    const url = prompt("URL du lien :")
    if (!url) return
    const hasSelection = ta.selectionStart !== ta.selectionEnd
    if (!hasSelection) {
      const result = insertAtCursor(ta, `<a href="${url}">lien</a>`)
      updateField("content", result.value)
    } else {
      const result = wrapSelection(ta, `<a href="${url}">`, "</a>")
      updateField("content", result.value)
    }
  }

  const execImg = () => {
    const ta = textareaRef.current
    if (!ta) return
    const url = prompt("URL de l'image :")
    if (!url) return
    const alt = prompt("Texte alternatif :") || ""
    const result = insertAtCursor(ta, `<img src="${url}" alt="${alt}" />`)
    updateField("content", result.value)
  }

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
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(body),
    })

    if (r.ok) navigate("/admin/blog")
  }

  if (loading) return <p className="text-muted-foreground px-6 pt-6">Chargement...</p>

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">{isNew ? "Nouvel article" : "Modifier l'article"}</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
        {/* Title */}
        <input
          value={form.title}
          onChange={(e) => updateField("title", e.target.value)}
          placeholder="Titre de l'article"
          className="w-full border-0 border-b border-border bg-transparent px-0 pb-2 text-2xl font-bold focus:outline-none focus:border-primary transition-colors"
          required
        />

        {/* Meta row */}
        <div className="flex gap-4 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs font-medium text-muted-foreground mb-1">Slug</label>
            <input
              value={form.slug}
              onChange={(e) => updateField("slug", e.target.value)}
              className="w-full border rounded-lg px-3 py-2 bg-background text-sm font-mono"
              required
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs font-medium text-muted-foreground mb-1">Tags (séparés par des virgules)</label>
            <input
              value={form.tags}
              onChange={(e) => updateField("tags", e.target.value)}
              className="w-full border rounded-lg px-3 py-2 bg-background text-sm"
            />
          </div>
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1">Extrait</label>
          <textarea
            value={form.excerpt}
            onChange={(e) => updateField("excerpt", e.target.value)}
            className="w-full border rounded-lg px-3 py-2 bg-background text-sm"
            rows={2}
          />
        </div>

        {/* Toolbar + Editor + Preview */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Toolbar */}
          <div className="flex items-center gap-1 flex-wrap border border-border rounded-t-lg bg-muted/30 px-2 py-1.5">
            <button type="button" onClick={exec("<strong>", "</strong>")} title="Gras" className="p-1.5 rounded hover:bg-muted transition-colors">
              <Bold className="size-4" />
            </button>
            <button type="button" onClick={exec("<em>", "</em>")} title="Italique" className="p-1.5 rounded hover:bg-muted transition-colors">
              <Italic className="size-4" />
            </button>
            <span className="w-px h-5 bg-border mx-1" />
            <button type="button" onClick={exec("<h2>", "</h2>")} title="Titre H2" className="p-1.5 rounded hover:bg-muted transition-colors">
              <Heading2 className="size-4" />
            </button>
            <button type="button" onClick={exec("<h3>", "</h3>")} title="Titre H3" className="p-1.5 rounded hover:bg-muted transition-colors">
              <Heading3 className="size-4" />
            </button>
            <span className="w-px h-5 bg-border mx-1" />
            <button type="button" onClick={execLink} title="Lien" className="p-1.5 rounded hover:bg-muted transition-colors">
              <Link2 className="size-4" />
            </button>
            <button type="button" onClick={execImg} title="Image" className="p-1.5 rounded hover:bg-muted transition-colors">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E" alt="Image" className="size-4" />
            </button>
            <span className="w-px h-5 bg-border mx-1" />
            <button type="button" onClick={exec("<ul><li>", "</li></ul>")} title="Liste à puces" className="p-1.5 rounded hover:bg-muted transition-colors">
              <List className="size-4" />
            </button>
            <button type="button" onClick={exec("<ol><li>", "</li></ol>")} title="Liste numérotée" className="p-1.5 rounded hover:bg-muted transition-colors">
              <ListOrdered className="size-4" />
            </button>
            <span className="w-px h-5 bg-border mx-1" />
            <button type="button" onClick={exec("<blockquote>", "</blockquote>")} title="Citation" className="p-1.5 rounded hover:bg-muted transition-colors">
              <Quote className="size-4" />
            </button>
            <button type="button" onClick={exec("<pre><code>", "</code></pre>")} title="Code" className="p-1.5 rounded hover:bg-muted transition-colors">
              <Code className="size-4" />
            </button>

            <div className="ml-auto">
              <button
                type="button"
                onClick={() => setPreview(!preview)}
                className={`p-1.5 rounded transition-colors ${preview ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
                title="Aperçu"
              >
                {preview ? <Edit3 className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>

          {/* Editor / Preview panes */}
          <div className="flex-1 flex min-h-0 border-l border-r border-b border-border rounded-b-lg overflow-hidden">
            {!preview && (
              <textarea
                ref={textareaRef}
                value={form.content}
                onChange={(e) => updateField("content", e.target.value)}
                className="flex-1 resize-none border-0 bg-background px-4 py-3 text-sm font-mono focus:outline-none"
                placeholder="Écrivez votre contenu en HTML..."
                required
              />
            )}
            {preview && (
              <div className="flex-1 overflow-y-auto bg-background p-6">
                <div className="prose prose-neutral dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: form.content }} />
              </div>
            )}
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between gap-3 pt-2 pb-1">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) => updateField("published", e.target.checked)}
              className="rounded"
            />
            Publié
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => navigate("/admin/blog")}
              className="border rounded-lg px-4 py-2 text-sm hover:bg-muted transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {isNew ? "Publier" : "Enregistrer"}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
