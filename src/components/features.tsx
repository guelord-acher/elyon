import { Cloud, Code2, FileCode, ScanEye, Terminal, Zap } from "lucide-react"

const FEATURES = [
  {
    icon: Code2,
    title: "API RESTful",
    description:
      "Intégrez l'impression à vos applications avec notre API REST documentée. Envoi de documents, gestion des files d'attente et suivi en temps réel.",
  },
  {
    icon: Terminal,
    title: "CLI & Outils",
    description:
      "Une suite d'outils en ligne de commande pour automatiser vos flux d'impression, du développement à la production.",
  },
  {
    icon: FileCode,
    title: "SDK Multi-langages",
    description:
      "Des SDK natifs pour Python, JavaScript, Go, Rust et plus encore. Une expérience de développement cohérente quelque soit votre langage.",
  },
  {
    icon: ScanEye,
    title: "Rendu Haute Performance",
    description:
      "Moteur de rendu optimisé pour produire des documents d'une qualité exceptionnelle, à grande échelle et en un temps record.",
  },
  {
    icon: Cloud,
    title: "Impression Cloud",
    description:
      "Infrastructure d'impression scalable dans le cloud. Plus besoin de gérer des serveurs, concentrez-vous sur votre code.",
  },
  {
    icon: Zap,
    title: "Automatisation",
    description:
      "Pipelines d'impression automatisés, intégration CI/CD, traitement par lot et déclencheurs par événements.",
  },
]

export function Features() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:py-32">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Gradient blobs */}
      <div className="pointer-events-none absolute -left-40 top-1/2 size-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 top-1/2 size-[350px] -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1220px]">
        {/* Section header */}
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Tout ce qu'il vous faut pour
            <br />
            <span className="text-primary">révolutionner l'impression</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Des outils conçus pour les développeurs modernes. Intégration rapide,
            documentation complète et scalabilité infinie.
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-border/50 bg-background/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-background/80 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex size-10 items-center justify-center rounded-lg border border-border/50 bg-muted/50 transition-colors group-hover:border-primary/30 group-hover:bg-primary/5">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
