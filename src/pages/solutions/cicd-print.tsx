import { RefreshCw, ArrowRight, CheckCircle, GitBranch, TestTube, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const FEATURES = [
  {
    icon: GitBranch,
    title: "CI/CD natif",
    desc: "Actions GitHub, GitLab CI, Jenkins, CircleCI. Des pipelines prêts à l'emploi pour intégrer l'impression à vos déploiements.",
  },
  {
    icon: TestTube,
    title: "Tests de rendu",
    desc: "Validez automatiquement le rendu de vos documents à chaque commit. Détectez les régressions avant la mise en production.",
  },
  {
    icon: CheckCircle,
    title: "Validation qualité",
    desc: "Comparez les PDF générés avec des références. Vérifiez le nombre de pages, la taille, et le contenu textuel.",
  },
  {
    icon: Shield,
    title: "Validation PR",
    desc: "Déclenchez une impression de test sur chaque pull request. Vérifiez le résultat avant de merger.",
  },
]

export function CicdPrint() {
  return (
    <div className="min-h-svh pt-24">
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="pointer-events-none absolute -top-40 right-0 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-0 size-[400px] rounded-full bg-primary/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1220px]">
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">&larr; Retour à l'accueil</a>
          <div className="mt-4 flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
            <RefreshCw className="size-7 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">CI/CD Print</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Intégrez l'impression et les tests de rendu directement dans vos pipelines
            d'intégration et de déploiement continus.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="rounded-lg normal-case text-base font-medium tracking-normal">
              Voir les intégrations <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-lg normal-case text-base font-medium tracking-normal">
              Documentation CI/CD
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
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Prêt pour la CI/CD ?</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Ajoutez notre action GitHub en une ligne à votre workflow. Testé et approuvé par des milliers d'équipes.
            </p>
            <Button size="lg" className="mt-6 rounded-lg normal-case text-base font-medium tracking-normal">
              Voir le guide d'intégration <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
