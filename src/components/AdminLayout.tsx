import { Outlet, Link, useNavigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"

export function AdminLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="flex min-h-svh">
      <aside className="w-60 border-r bg-muted/30 p-4 flex flex-col gap-4">
        <Link to="/admin" className="font-bold text-lg text-primary">Elyon</Link>
        <nav className="flex flex-col gap-1">
          <Link to="/admin/blog" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
            Articles
          </Link>
        </nav>
        <div className="mt-auto flex flex-col gap-2">
          <span className="text-xs text-muted-foreground px-3">{user?.name}</span>
          <button
            onClick={() => { logout(); navigate("/admin/login") }}
            className="px-3 py-2 rounded-lg hover:bg-destructive/10 text-destructive text-sm text-left transition-colors"
          >
            Déconnexion
          </button>
        </div>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}
