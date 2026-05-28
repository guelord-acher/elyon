import { BookOpen, ArrowRight, Search, BookMarked, Video, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
const SECTIONS = [
  {
    icon: BookMarked,
    title: "Guide d'installation",
    desc: "Installez le SDK, configurez votre clÃ© API et lancez votre premiÃ¨re impression en 5 minutes.",
  },
  {
    icon: Video,
    title: "Tutoriels vidÃ©o",
    desc: "Des vidÃ©os pas Ã  pas pour maÃ®triser l'API, le CLI, les templates et l'automatisation.",
  },
  {
    icon: HelpCircle,
    title: "FAQ technique",
    desc: "Les rÃ©ponses aux questions les plus frÃ©quentes sur l'intÃ©gration, la tarification et le dÃ©pannage.",
  },
  {
    icon: Search,
    title: "Recherche dans la doc",
    desc: "Une recherche full-text sur l'ensemble de la documentation pour trouver rapidement ce que vous cherchez.",
  },
]
export function Documentation() {
  return (
    <div className="min-h-svh pt-24">
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="pointer-events-none absolute -top-40 right-0 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-0 size-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-[1220px]">
          
          <div className="mt-4 flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
            <BookOpen className="size-7 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">Documentation</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Une documentation complÃ¨te pour vous accompagner Ã  chaque Ã©tape.
            Guides, tutoriels, rÃ©fÃ©rences API et exemples de code.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="rounded-lg normal-case text-base font-medium tracking-normal">
              Guide d'installation <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-lg normal-case text-base font-medium tracking-normal">
              API Reference
            </Button>
          </div>
          <hr className="my-20 border-border/50" />
          <div className="grid gap-8 sm:grid-cols-2">
            {SECTIONS.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="rounded-2xl border border-border/50 bg-background/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-background/80">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-border/50 bg-muted/50"><Icon className="size-5 text-primary" /></div>
                  <h3 className="mt-4 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
