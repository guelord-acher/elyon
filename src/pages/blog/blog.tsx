import { FileEdit, ArrowRight, Calendar, Clock, Eye, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
const POSTS = [
  {
    title: "Comment nous avons rÃ©duit le temps de rendu de 60%",
    desc: "Les optimisations qui ont transformÃ© notre moteur de rendu : caching intelligent, rendu distribuÃ© et compilation JIT.",
    date: "15 Mai 2026",
    readTime: "8 min",
    tag: "Technique",
  },
  {
    title: "Pourquoi nous avons choisi Rust pour notre moteur de rendu",
    desc: "Retour sur notre choix technologique : performances, sÃ©curitÃ© mÃ©moire et Ã©cosystÃ¨me. Les leÃ§ons apprises aprÃ¨s 2 ans de production.",
    date: "28 Avril 2026",
    readTime: "12 min",
    tag: "Technique",
  },
  {
    title: "L'impression dans le CI/CD : guide pratique",
    desc: "Comment intÃ©grer des tests de rendu et de l'impression automatisÃ©e dans vos pipelines GitHub Actions et GitLab CI.",
    date: "10 Avril 2026",
    readTime: "6 min",
    tag: "Guide",
  },
  {
    title: "Notre roadmap pour le prochain trimestre",
    desc: "DÃ©couvrez ce qui vous attend : nouveau SDK, API v2, file d'attente prioritaire, et bien plus.",
    date: "1 Avril 2026",
    readTime: "5 min",
    tag: "Produit",
  },
  {
    title: "Comment nous garantissons 99.99% d'uptime",
    desc: "Les coulisses de notre infrastructure : dÃ©ploiement multi-rÃ©gions, failover automatique et monitoring en temps rÃ©el.",
    date: "15 Mars 2026",
    readTime: "10 min",
    tag: "Infra",
  },
  {
    title: "IntÃ©grer l'impression avec Python en 5 minutes",
    desc: "Un tutoriel pas Ã  pas pour installer le SDK Python, configurer votre premiÃ¨re file d'attente et imprimer votre premier document.",
    date: "1 Mars 2026",
    readTime: "4 min",
    tag: "Tutoriel",
  },
]
export function Blog() {
  return (
    <div className="min-h-svh pt-24">
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="pointer-events-none absolute -top-40 left-0 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 right-0 size-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-[1220px]">
          
          <div className="mt-4 flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
            <FileEdit className="size-7 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">Blog</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            ActualitÃ©s, articles techniques et tutoriels. Suivez l'Ã©volution
            d'Elyon et les coulisses de notre dÃ©veloppement.
          </p>
          <hr className="my-20 border-border/50" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p) => (
              <article key={p.title} className="group rounded-2xl border border-border/50 bg-background/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-background/80 cursor-pointer">
                <div className="flex items-center gap-2 mb-4">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{p.tag}</span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="size-3" />
                    {p.date}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="size-3" />
                    {p.readTime}
                  </div>
                </div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
