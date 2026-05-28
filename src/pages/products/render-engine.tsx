import { ScanEye, ArrowRight, Check, FileText, Palette, Gauge, Lock, Crop, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
const CAPABILITIES = [
  "Rendu HTML vers PDF haute fidÃ©litÃ©",
  "Support CSS Paged Media complet",
  "Encodage automatique des polices et images",
  "Mode brouillon et mode production",
  "Filigrane et signatures numÃ©riques",
  "Optimisation automatique de la taille des fichiers",
  "Support des encres et profils colorimÃ©triques",
  "GÃ©nÃ©ration de PDF/A pour l'archivage lÃ©gal",
]
const STATS = [
  { label: "Documents/seconde", value: "~50" },
  { label: "Temps moyen de rendu", value: "<200ms" },
  { label: "Taille max. document", value: "100 Mo" },
  { label: "Uptime garanti", value: "99.99%" },
]
const FEATURES = [
  {
    icon: FileText,
    title: "HTML vers PDF",
    desc: "Transformez n'importe quel template HTML en PDF prÃªt Ã  imprimer. Support de CSS moderne, Flexbox, Grid et variables CSS.",
  },
  {
    icon: Palette,
    title: "Paged Media",
    desc: "ContrÃ´le prÃ©cis des sauts de page, en-tÃªtes, pieds de page, marges et numÃ©rotation. IdÃ©al pour les documents multi-pages.",
  },
  {
    icon: Gauge,
    title: "Rendu asynchrone",
    desc: "Soumettez des documents volumineux sans attendre. Recevez une notification dÃ¨s que le rendu est terminÃ©, prÃªt Ã  tÃ©lÃ©charger.",
  },
  {
    icon: Lock,
    title: "SÃ©curitÃ© des documents",
    desc: "Chiffrement de bout en bout, protection par mot de passe, permissions d'impression et certificats numÃ©riques.",
  },
  {
    icon: Crop,
    title: "Optimisation automatique",
    desc: "Compression intelligente des images, subsetting des polices et dÃ©duction des pages blanches. Des fichiers jusqu'Ã  80% plus lÃ©gers.",
  },
  {
    icon: Zap,
    title: "Rendu distribuÃ©",
    desc: "Notre moteur rÃ©partit automatiquement la charge sur plusieurs nÅ“uds. Les gros volumes sont traitÃ©s en parallÃ¨le.",
  },
]
export function RenderEngine() {
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
        <div className="pointer-events-none absolute -top-40 left-0 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 right-0 size-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-[1220px]">
          
          <div className="mt-4 flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
            <ScanEye className="size-7 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">
            Moteur de rendu
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Un moteur de rendu haute performance pour transformer vos
            templates HTML en documents PDF prÃªts Ã  imprimer. Rapide,
            fiable et d'une qualitÃ© exceptionnelle.
          </p>
          <div className="mt-10">
            <Button size="lg" className="rounded-lg normal-case text-base font-medium tracking-normal">
              Essayer le rendu
              <ArrowRight className="size-4" />
            </Button>
          </div>
          <hr className="my-20 border-border/50" />
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border/50 bg-background/50 p-8">
              <h2 className="text-xl font-semibold sm:text-2xl">CapacitÃ©s</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {CAPABILITIES.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/50 bg-background/50 p-8">
              <h2 className="text-xl font-semibold sm:text-2xl">Performances</h2>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-border/50 bg-muted/30 p-4 text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
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
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Testez le rendu gratuitement</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              CrÃ©ez un compte gratuit et effectuez vos 100 premiers rendus sans frais.
              Aucune carte bancaire requise.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-lg normal-case text-base font-medium tracking-normal" asChild>
                <a href="/signup">
                  Commencer gratuitement
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg normal-case text-base font-medium tracking-normal" asChild>
                <a href="/docs">Documentation technique</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
