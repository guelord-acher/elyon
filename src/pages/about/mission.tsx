import { Crosshair, ArrowRight, Target, Heart, Lightbulb, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

const VALUES = [
  {
    icon: Target,
    title: "La précision avant tout",
    desc: "Chaque pixel compte. Nous nous engageons à fournir un rendu d'une fidélité absolue, quel que soit le volume ou la complexité.",
  },
  {
    icon: Heart,
    title: "Centré développeur",
    desc: "Nous construisons des outils que nous aimerions utiliser nous-mêmes. API propre, documentation complète, SDK idiomatiques.",
  },
  {
    icon: Lightbulb,
    title: "Innovation continue",
    desc: "L'impression n'a pas beaucoup évolué depuis 30 ans. Nous sommes là pour changer cela, un commit à la fois.",
  },
  {
    icon: Eye,
    title: "Transparence radicale",
    desc: "Statut des services en temps réel, roadmap publique, prix prévisibles. Pas de surprises, pas de clauses cachées.",
  },
]

export function Mission() {
  return (
    <div className="min-h-svh pt-24">
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="pointer-events-none absolute -top-40 left-0 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 right-0 size-[400px] rounded-full bg-primary/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1220px]">
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">&larr; Retour à l'accueil</a>
          <div className="mt-4 flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
            <Crosshair className="size-7 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">Notre mission</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Révolutionner l'impression pour les développeurs. Nous construisons
            l'infrastructure d'impression que nous aurions aimé avoir.
          </p>

          <hr className="my-20 border-border/50" />
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold sm:text-2xl">Notre histoire</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Elyon est né d'une frustration : intégrer l'impression dans une application moderne
              était bien trop compliqué. Des API obsolètes, des SDK inexistants, une documentation
              pauvre. Nous avons décidé de construire la plateforme d'impression que nous
              aurions voulu utiliser.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Aujourd'hui, Elyon est utilisé par des centaines d'entreprises à travers le monde,
              des startups aux grands comptes. Nous traitons des millions de documents chaque mois
              et notre plateforme ne cesse de s'améliorer.
            </p>
          </div>

          <hr className="my-20 border-border/50" />
          <h2 className="text-xl font-semibold sm:text-2xl">Nos valeurs</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {VALUES.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="rounded-2xl border border-border/50 bg-background/50 p-6">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-border/50 bg-muted/50"><Icon className="size-5 text-primary" /></div>
                  <h3 className="mt-4 font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
