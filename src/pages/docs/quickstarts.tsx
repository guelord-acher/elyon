import { Rocket, ArrowRight, Code2, Terminal, Globe, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const GUIDES = [
  {
    icon: Code2,
    lang: "Python",
    desc: "Installez le SDK pip, initialisez le client et lancez votre première impression en 5 lignes de code.",
    time: "5 min",
  },
  {
    icon: Code2,
    lang: "JavaScript",
    desc: "Utilisez notre package npm pour intégrer l'impression dans vos applications Node.js ou frontend.",
    time: "5 min",
  },
  {
    icon: Code2,
    lang: "Go",
    desc: "Importez le module Go et bénéficiez de la typage statique et de la concurrence native de Go.",
    time: "5 min",
  },
  {
    icon: Terminal,
    lang: "CLI",
    desc: "Installez le CLI et imprimez votre premier document en une seule commande depuis le terminal.",
    time: "2 min",
  },
  {
    icon: Globe,
    lang: "API REST",
    desc: "Appelez notre API directement avec curl. Parfait pour les langages sans SDK officiel.",
    time: "5 min",
  },
  {
    icon: BookOpen,
    lang: "Templates",
    desc: "Créez votre premier template HTML et transformez-le en PDF avec notre moteur de rendu.",
    time: "10 min",
  },
]

export function Quickstarts() {
  return (
    <div className="min-h-svh pt-24">
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="pointer-events-none absolute -top-40 right-0 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-0 size-[400px] rounded-full bg-primary/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1220px]">
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">&larr; Retour à l'accueil</a>
          <div className="mt-4 flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
            <Rocket className="size-7 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">Guides de démarrage</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Choisissez votre langage et lancez-vous en quelques minutes.
            Des quickstarts conçus pour vous rendre productif immédiatement.
          </p>

          <hr className="my-20 border-border/50" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((g) => {
              const Icon = g.icon
              return (
                <div key={g.lang} className="group rounded-2xl border border-border/50 bg-background/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-background/80">
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-lg border border-border/50 bg-muted/50"><Icon className="size-5 text-primary" /></div>
                    <span className="text-xs text-muted-foreground">{g.time}</span>
                  </div>
                  <h3 className="mt-4 font-semibold">{g.lang}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
