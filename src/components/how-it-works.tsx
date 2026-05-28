import { Code2, FileCheck, Rocket, Zap } from "lucide-react"

const STEPS = [
  {
    icon: Code2,
    title: "Intégrez",
    description:
      "Installez notre SDK ou appelez notre API REST. Une documentation claire et des exemples prêts à l'emploi pour tous les langages.",
  },
  {
    icon: FileCheck,
    title: "Configurez",
    description:
      "Paramétrez vos modèles, flux d'impression et règles de gestion en quelques lignes de code ou via notre dashboard.",
  },
  {
    icon: Zap,
    title: "Automatisez",
    description:
      "Déclenchez l'impression depuis votre CI/CD, vos webhooks ou vos événements métier. Plus aucune intervention manuelle.",
  },
  {
    icon: Rocket,
    title: "Scalez",
    description:
      "Notre infrastructure s'adapte automatiquement à votre volume. De quelques centaines à des millions de documents par jour.",
  },
]

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:py-32">
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="pointer-events-none absolute -left-40 top-1/3 size-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 top-2/3 size-[350px] -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1220px]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Prêt en quelques minutes,
            <br />
            <span className="text-primary">pas en quelques jours</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Une intégration simple et rapide, de la première ligne de code à la
            production.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative">
                {index < STEPS.length - 1 && (
                  <div className="absolute top-6 left-10 hidden h-px w-[calc(100%-2.5rem)] border-t border-dashed border-border/50 lg:block" />
                )}
                <div className="relative flex items-start gap-4 sm:flex-col sm:items-center sm:text-center">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="sm:mt-2">
                    <div className="flex items-center gap-2 sm:justify-center">
                      <span className="text-xs font-semibold tracking-widest text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-base font-semibold">{step.title}</h3>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
