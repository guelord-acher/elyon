import { Quote } from "lucide-react"

const TESTIMONIALS = [
  {
    quote:
      "On est passé de 3 heures par jour de travail manuel à une pipeline automatisée. L'API est incroyablement bien conçue.",
    author: "Sarah Chen",
    role: "CTO, PrintCorp",
  },
  {
    quote:
      "Le SDK Python nous a permis d'intégrer l'impression en une après-midi. La documentation est claire et les exemples fonctionnent du premier coup.",
    author: "Marcus Dubois",
    role: "Lead Developer, DocuFlow",
  },
  {
    quote:
      "On imprime des millions de documents par mois sans aucun incident. L'infrastructure tient vraiment ses promesses.",
    author: "Aïsa Diallo",
    role: "Engineering Manager, PaperStack",
  },
]

export function Testimonials() {
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

      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1220px]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Ils nous font <span className="text-primary">confiance</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Des équipes du monde entier utilisent Elyon pour leur infrastructure
            d'impression.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="group relative rounded-2xl border border-border/50 bg-background/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-background/80 hover:shadow-lg hover:shadow-primary/5"
            >
              <Quote className="size-6 text-primary/30" />
              <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 border-t border-border/50 pt-4">
                <div className="font-medium text-sm">{t.author}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
