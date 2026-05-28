import { useState } from "react"
import { ArrowRight, Eye, EyeOff, Mail, Lock, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Signup() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-svh pt-24">
      <section className="relative flex items-center justify-center overflow-hidden px-4 py-24">
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="pointer-events-none absolute -top-40 left-0 size-[500px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-md">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Créer un compte</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Rejoignez Elyon et commencez à imprimer en quelques minutes.
          </p>

          <form className="mt-8 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="text-sm font-medium">Nom complet</label>
              <div className="mt-1.5 relative">
                <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="name"
                  type="text"
                  placeholder="Jean Dupont"
                  className="w-full rounded-xl border border-border/50 bg-background/50 py-2.5 pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium">Adresse email</label>
              <div className="mt-1.5 relative">
                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  placeholder="vous@exemple.com"
                  className="w-full rounded-xl border border-border/50 bg-background/50 py-2.5 pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium">Mot de passe</label>
              <div className="mt-1.5 relative">
                <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Au moins 8 caractères"
                  className="w-full rounded-xl border border-border/50 bg-background/50 py-2.5 pl-10 pr-10 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-border/50 bg-background/50 text-primary focus:ring-primary/20" />
                <span>J'accepte les <a href="#" className="text-primary hover:underline">conditions d'utilisation</a></span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-border/50 bg-background/50 text-primary focus:ring-primary/20" />
                <span>Je souhaite recevoir les actualités techniques</span>
              </label>
            </div>

            <Button size="lg" className="rounded-lg normal-case text-base font-medium tracking-normal">
              Créer mon compte
              <ArrowRight className="size-4" />
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Déjà un compte ?{" "}
            <a href="/login" className="text-primary hover:underline">Se connecter</a>
          </p>
        </div>
      </section>
    </div>
  )
}
