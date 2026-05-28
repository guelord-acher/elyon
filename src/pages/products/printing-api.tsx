import { Code2, ArrowRight, Check, BookOpen, Webhook, Shield, Database, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"
const FEATURES = [
  {
    icon: BookOpen,
    title: "Documentation interactive",
    desc: "Une documentation complÃ¨te avec des exemples de code en Python, JavaScript, Go et Rust. Essayez les endpoints directement depuis votre navigateur.",
  },
  {
    icon: Webhook,
    title: "Webhooks temps rÃ©el",
    desc: "Soyez notifiÃ© instantanÃ©ment des changements de statut de vos impressions. Plus besoin de poller, notre systÃ¨me push vous tient informÃ©.",
  },
  {
    icon: Shield,
    title: "SÃ©curitÃ© intÃ©grÃ©e",
    desc: "Authentification par clÃ© API, chiffrement TLS, et tokens d'accÃ¨s limitÃ©s dans le temps. Vos documents sont chiffrÃ©s au repos comme en transit.",
  },
  {
    icon: Database,
    title: "Files d'attente intelligentes",
    desc: "GÃ©rez des prioritÃ©s, des rÃ¨gles de routage et des politiques de rÃ©tention. Chaque file d'attente est isolÃ©e et scalable indÃ©pendamment.",
  },
  {
    icon: Gauge,
    title: "Rate limiting adaptatif",
    desc: "Des limites configurables par clÃ© API avec bursting automatique. Notre systÃ¨me s'adapte Ã  votre charge sans rejet brutal.",
  },
  {
    icon: Code2,
    title: "Mode sandbox",
    desc: "Un environnement de test isolÃ© avec des donnÃ©es factices. DÃ©veloppez et testez sans consommer de ressources d'impression rÃ©elles.",
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
          
          <div className="mt-4 flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
            <Code2 className="size-7 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">
            API d'impression
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            IntÃ©grez l'impression Ã  vos applications avec notre API REST
            puissante et documentÃ©e. Envoyez des documents, gÃ©rez les files
            d'attente et suivez l'Ã©tat de vos impressions en temps rÃ©el.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="rounded-lg normal-case text-base font-medium tracking-normal">
              Essayer l'API
              <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-lg normal-case text-base font-medium tracking-normal" asChild>
              <a href="/docs">Voir la documentation</a>
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
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">PrÃªt Ã  dÃ©marrer ?</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              CrÃ©ez un compte gratuit et obtenez une clÃ© API en moins d'une minute.
              Premier palier gratuit, sans carte bancaire.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-lg normal-case text-base font-medium tracking-normal">
                CrÃ©er un compte gratuit
                <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg normal-case text-base font-medium tracking-normal" asChild>
                <a href="/docs">Voir la documentation</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
