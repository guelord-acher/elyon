import { useState, type FormEvent } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export function AdminLogin() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError("")
    try {
      await login(email, password)
      navigate("/admin/blog")
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-svh flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-bold">Connexion admin</h1>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 bg-background text-sm"
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 bg-background text-sm"
          required
        />
        <button type="submit" className="w-full bg-primary text-primary-foreground rounded-lg px-3 py-2 text-sm font-medium">
          Se connecter
        </button>
      </form>
    </div>
  )
}
