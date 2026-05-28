import { Users, ArrowRight, MessageCircle, GitFork, MessageSquare, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const CHANNELS = [
  {
    icon: MessageCircle,
    name: "Discord",
    desc: "Rejoignez notre communauté Discord. Posez vos questions, partagez vos projets et échangez avec l'équipe.",
    cta: "Rejoindre Discord",
    href: "#",
  },
  {
    icon: GitFork,
    name: "GitHub",
    desc: "Explorez nos repos open-source, signalez des issues et contribuez au code.",
    cta: "Voir sur GitHub",
    href: "#",
  },
  {
    icon: MessageSquare,
    name: "Forum",
    desc: "Un forum de discussion pour les questions approfondies, les suggestions et les retours d'expérience.",
    cta: "Accéder au forum",
    href: "#",
  },
  {
    icon: Globe,
    name: "X / Twitter",
    desc: "Suivez-nous pour les annonces, les astuces et les actualités de la plateforme.",
    cta: "Nous suivre",
    href: "#",
  },
]

export function Community() {
  return (
    <div className="min-h-svh pt-24">
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="pointer-events-none absolute -top-40 left-0 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 right-0 size-[400px] rounded-full bg-primary/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1220px]">
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">&larr; Retour à l'accueil</a>
          <div className="mt-4 flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
            <Users className="size-7 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">Communauté</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Rejoignez une communauté passionnée de développeurs et d'ingénieurs
            qui construisent l'avenir de l'impression.
          </p>

          <hr className="my-20 border-border/50" />
          <div className="grid gap-6 sm:grid-cols-2">
            {CHANNELS.map((ch) => {
              const Icon = ch.icon
              return (
                <div key={ch.name} className="rounded-2xl border border-border/50 bg-background/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-background/80">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-border/50 bg-muted/50"><Icon className="size-5 text-primary" /></div>
                  <h3 className="mt-4 font-semibold">{ch.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ch.desc}</p>
                  <Button variant="outline" size="sm" className="mt-4 rounded-lg normal-case text-sm font-medium tracking-normal" asChild>
                    <a href={ch.href}>{ch.cta} <ArrowRight className="size-3.5" /></a>
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
