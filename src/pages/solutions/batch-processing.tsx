import { Layers, ArrowRight, Gauge, Split, Clock, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
const FEATURES = [
  {
    icon: Gauge,
    title: "Traitement parallÃ¨le",
    desc: "Des milliers de documents traitÃ©s simultanÃ©ment. Notre rÃ©partiteur de charge distribue le travail sur l'ensemble de nos nÅ“uds.",
  },
  {
    icon: Split,
    title: "Ordonnancement intelligent",
    desc: "Priorisez les lots par urgence, taille ou client. Les lots urgents passent avant sans bloquer le flux principal.",
  },
  {
    icon: Clock,
    title: "Planification diffÃ©rÃ©e",
    desc: "Programmez vos traitements de masse aux heures creuses pour optimiser les coÃ»ts et les ressources.",
  },
  {
    icon: AlertTriangle,
    title: "Reprise automatique",
    desc: "En cas d'Ã©chec d'un document, le lot continue et les erreurs sont isolÃ©es. Reprise automatique sans perte de donnÃ©es.",
  },
]
export function BatchProcessing() {
  return (
    <div className="min-h-svh pt-24">
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="pointer-events-none absolute -top-40 left-0 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 right-0 size-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-[1220px]">
          
          <div className="mt-4 flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
            <Layers className="size-7 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">Traitement par lot</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Traitez des millions de documents en une seule opÃ©ration. Notre moteur
            batch gÃ¨re la rÃ©partition, la priorisation et la reprise automatique.
          </p>
          <div className="mt-10">
            <Button size="lg" className="rounded-lg normal-case text-base font-medium tracking-normal">
              Essayer le traitement batch <ArrowRight className="size-4" />
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
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">PrÃªt Ã  traiter en masse ?</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Soumettez un fichier JSON avec des milliers de documents et laissez notre infrastructure faire le reste.
            </p>
            <Button size="lg" className="mt-6 rounded-lg normal-case text-base font-medium tracking-normal" asChild>
              <a href="/docs">Voir la documentation batch <ArrowRight className="size-4" /></a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
