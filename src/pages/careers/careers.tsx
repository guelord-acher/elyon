import { Briefcase, ArrowRight, Heart, Users, Zap, Home, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
const OPENINGS = [
  {
    title: "Senior Backend Engineer",
    dept: "Engineering",
    location: "Paris / Remote",
    type: "CDI",
    desc: "Concevez et construisez les systÃ¨mes distribuÃ©s qui traitent des millions de documents chaque jour.",
  },
  {
    title: "Frontend Developer",
    dept: "Engineering",
    location: "Paris / Remote",
    type: "CDI",
    desc: "CrÃ©ez une expÃ©rience dÃ©veloppeur exceptionnelle pour notre dashboard et notre documentation interactive.",
  },
  {
    title: "Developer Advocate",
    dept: "Marketing",
    location: "Remote",
    type: "CDI",
    desc: "Animez notre communautÃ© technique, crÃ©ez du contenu et faites connaÃ®tre Elyon aux dÃ©veloppeurs.",
  },
  {
    title: "Product Designer",
    dept: "Produit",
    location: "Paris",
    type: "CDI",
    desc: "Concevez des interfaces intuitives pour des outils techniques complexes destinÃ©s aux dÃ©veloppeurs.",
  },
]
const PERKS = [
  { icon: Heart, text: "Mutuelle prise en charge Ã  100%" },
  { icon: Users, text: "Budget formation et confÃ©rences" },
  { icon: Zap, text: "MatÃ©riel de pointe au choix" },
  { icon: Home, text: "Remote-friendly, bureau Ã  Paris" },
  { icon: Coffee, text: "Tickets restaurant et snacks" },
  { icon: Briefcase, text: "BSPCE et intÃ©ressement" },
]
export function Careers() {
  return (
    <div className="min-h-svh pt-24">
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="pointer-events-none absolute -top-40 right-0 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-0 size-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-[1220px]">
          
          <div className="mt-4 flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
            <Briefcase className="size-7 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">CarriÃ¨res</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Rejoignez-nous pour construire l'avenir de l'impression.
            Nous recrutons des talents passionnÃ©s et bienveillants.
          </p>
          <div className="mt-10">
            <Button size="lg" className="rounded-lg normal-case text-base font-medium tracking-normal">
              Voir tous les postes <ArrowRight className="size-4" />
            </Button>
          </div>
          <hr className="my-20 border-border/50" />
          <h2 className="text-xl font-semibold sm:text-2xl">Postes ouverts</h2>
          <div className="mt-8 grid gap-4">
            {OPENINGS.map((o) => (
              <div key={o.title} className="flex flex-col gap-3 rounded-2xl border border-border/50 bg-background/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-background/80 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold">{o.title}</h3>
                  <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{o.dept}</span>
                    <span>&middot;</span>
                    <span>{o.location}</span>
                    <span>&middot;</span>
                    <span>{o.type}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.desc}</p>
                </div>
                <Button variant="outline" size="sm" className="shrink-0 rounded-lg normal-case text-sm font-medium tracking-normal">Postuler</Button>
              </div>
            ))}
          </div>
          <hr className="my-20 border-border/50" />
          <h2 className="text-xl font-semibold sm:text-2xl">Pourquoi nous rejoindre ?</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PERKS.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.text} className="flex items-center gap-3 rounded-2xl border border-border/50 bg-background/50 p-4">
                  <div className="flex size-9 items-center justify-center rounded-lg border border-border/50 bg-muted/50"><Icon className="size-4 text-primary" /></div>
                  <span className="text-sm">{p.text}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
