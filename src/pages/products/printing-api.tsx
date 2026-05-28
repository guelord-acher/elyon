import { Code2, ArrowRight, Check, BookOpen, Webhook, Shield, Database, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"

const FEATURES = [
  {
    icon: BookOpen,
    title: "Documentation interactive",
    desc: "Une documentation complète avec des exemples de code en Python, JavaScript, Go et Rust. Essayez les endpoints directement depuis votre navigateur.",
  },
  {
    icon: Webhook,
    title: "Webhooks temps réel",
    desc: "Soyez notifié instantanément des changements de statut de vos impressions. Plus besoin de poller, notre système push vous tient informé.",
  },
  {
    icon: Shield,
    title: "Sécurité intégrée",
    desc: "Authentification par clé API, chiffrement TLS, et tokens d'accès limités dans le temps. Vos documents sont chiffrés au repos comme en transit.",
  },
  {
    icon: Database,
    title: "Files d'attente intelligentes",
    desc: "Gérez des priorités, des règles de routage et des politiques de rétention. Chaque file d'attente est isolée et scalable indépendamment.",
  },
  {
    icon: Gauge,
    title: "Rate limiting adaptatif",
    desc: "Des limites configurables par clé API avec bursting automatique. Notre système s'adapte à votre charge sans rejet brutal.",
  },
  {
    icon: Code2,
    title: "Mode sandbox",
    desc: "Un environnement de test isolé avec des données factices. Développez et testez sans consommer de ressources d'impression réelles.",
  },
]

export function PrintingApi() {
  return (
    <div className="min-h-svh pt-24">
      <section className="relative overflow-hidden px-4 py-24">
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="pointer-events-none absolute -top-40 right-0 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-0 size-[400px] rounded-full bg-primary/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1220px]">
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">&larr; Retour à l'accueil</a>

          <div className="mt-4 flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
            <Code2 className="size-7 text-primary" />
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">
            API d'impression
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Intégrez l'impression à vos applications avec notre API REST
            puissante et documentée. Envoyez des documents, gérez les files
            d'attente et suivez l'état de vos impressions en temps réel.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="rounded-lg normal-case text-base font-medium tracking-normal">
              Essayer l'API
              <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-lg normal-case text-base font-medium tracking-normal">
              Voir la documentation
            </Button>
          </div>

          <hr className="my-20 border-border/50" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="rounded-2xl border border-border/50 bg-background/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-background/80">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-border/50 bg-muted/50">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              )
            })}
          </div>

          <hr className="my-20 border-border/50" />

          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/[0.06] via-background/50 to-background/50 p-8 sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Prêt à démarrer ?</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Créez un compte gratuit et obtenez une clé API en moins d'une minute.
              Premier palier gratuit, sans carte bancaire.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-lg normal-case text-base font-medium tracking-normal">
                Créer un compte gratuit
                <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg normal-case text-base font-medium tracking-normal">
                Voir la documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
