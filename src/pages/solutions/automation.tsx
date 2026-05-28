import { Zap, ArrowRight, Workflow, Webhook, Calendar, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

const FEATURES = [
  {
    icon: Workflow,
    title: "Pipelines visuelles",
    desc: "Créez des workflows d'impression complexes avec notre éditeur visuel. Déclencheurs, filtres, transformations et actions en cascade.",
  },
  {
    icon: Webhook,
    title: "Déclencheurs automatiques",
    desc: "Lancez des impressions depuis n'importe quel événement : webhook entrant, commit Git, email, upload SFTP ou programmation cron.",
  },
  {
    icon: Calendar,
    title: "Planification avancée",
    desc: "Programmez vos impressions à l'avance avec une syntaxe cron. Idéal pour les rapports périodiques, factures et relevés.",
  },
  {
    icon: BarChart3,
    title: "Analytics & reporting",
    desc: "Suivez vos flux d'impression en temps réel. Tableaux de bord, métriques d'utilisation et alertes personnalisables.",
  },
]

export function Automation() {
  return (
    <div className="min-h-svh pt-24">
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="pointer-events-none absolute -top-40 left-0 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 right-0 size-[400px] rounded-full bg-primary/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1220px]">
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">&larr; Retour à l'accueil</a>
          <div className="mt-4 flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
            <Zap className="size-7 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">Automatisation</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Automatisez vos flux d'impression de bout en bout. Plus de tâches manuelles,
            vos documents s'impriment automatiquement selon vos règles.
          </p>
          <div className="mt-10">
            <Button size="lg" className="rounded-lg normal-case text-base font-medium tracking-normal">
              Créer un workflow <ArrowRight className="size-4" />
            </Button>
          </div>

          <hr className="my-20 border-border/50" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="rounded-2xl border border-border/50 bg-background/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-background/80">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-border/50 bg-muted/50"><Icon className="size-5 text-primary" /></div>
                  <h3 className="mt-4 font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              )
            })}
          </div>

          <hr className="my-20 border-border/50" />
          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/[0.06] via-background/50 to-background/50 p-8 sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Passez à l'automatisation</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Découvrez comment nos clients ont réduit leur charge manuelle de 85% grâce à l'automatisation.
            </p>
            <Button size="lg" className="mt-6 rounded-lg normal-case text-base font-medium tracking-normal">
              Voir les cas clients <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
