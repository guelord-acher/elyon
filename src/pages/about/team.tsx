import { Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const TEAM = [
  { name: "Alex Moreau", role: "CEO & Co-fondateur", desc: "Ancien CTO de PrintCorp. 15 ans d'expérience dans l'impression numérique." },
  { name: "Sophie Lambert", role: "CTO & Co-fondatrice", desc: "Ex-engineering lead chez DocuFlow. Spécialiste en systèmes distribués." },
  { name: "Hugo Petit", role: "Head of Engineering", desc: "A construit les systèmes de rendu de PaperStack. Passionné de Rust." },
  { name: "Léa Girard", role: "Product Designer", desc: "Designer produit spécialisée dans les outils développeurs et l'UX technique." },
  { name: "Thomas Bernard", role: "Developer Advocate", desc: "Développeur et créateur de contenu. Anime la communauté technique." },
  { name: "Camille Dubois", role: "Head of Sales", desc: "A déployé des solutions d'impression chez les plus grands comptes français." },
]

export function Team() {
  return (
    <div className="min-h-svh pt-24">
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="pointer-events-none absolute -top-40 right-0 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-0 size-[400px] rounded-full bg-primary/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1220px]">
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">&larr; Retour à l'accueil</a>
          <div className="mt-4 flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
            <Users className="size-7 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">L'équipe</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Une équipe passionnée, unie par la mission de moderniser l'impression
            pour les développeurs du monde entier.
          </p>

          <hr className="my-20 border-border/50" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <div key={m.name} className="rounded-2xl border border-border/50 bg-background/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-background/80">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  {m.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="mt-4 font-semibold">{m.name}</h3>
                <p className="text-xs text-primary font-medium">{m.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
