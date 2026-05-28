import { useAuth } from "@/contexts/AuthContext"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

interface Post {
  id: number
  title: string
  slug: string
  published: boolean
  createdAt: string
}

export function BlogList() {
  const { token } = useAuth()
  const navigate = useNavigate()
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetch("/api/blog", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then(setPosts)
  }, [token])

  const handleDelete = async (id: number) => {
    if (!confirm("Supprimer cet article ?")) return
    await fetch(`/api/blog/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
    setPosts((p) => p.filter((x) => x.id !== id))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Articles</h1>
        <Link to="/admin/blog/new" className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-medium">
          Nouvel article
        </Link>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-left px-4 py-3 font-medium">Titre</th>
              <th className="text-left px-4 py-3 font-medium hidden sm:table-cell">Slug</th>
              <th className="text-center px-4 py-3 font-medium w-20">Publié</th>
              <th className="text-right px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-t">
                <td className="px-4 py-3">{post.title}</td>
                <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{post.slug}</td>
                <td className="px-4 py-3 text-center">{post.published ? "✓" : "—"}</td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button
                    onClick={() => navigate(`/admin/blog/${post.id}/edit`)}
                    className="text-primary hover:underline text-sm"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-destructive hover:underline text-sm"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">
                  Aucun article pour le moment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
