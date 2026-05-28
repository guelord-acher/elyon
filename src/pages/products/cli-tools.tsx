import { Terminal, ArrowRight, Download, Settings, FileCode, RefreshCw, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
const COMMANDS = [
  { cmd: "elyon print document.pdf", desc: "Imprimer un document" },
  { cmd: "elyon queue list", desc: "Lister les files d'attente" },
  { cmd: "elyon job status --id <id>", desc: "VÃ©rifier le statut d'un travail" },
  { cmd: "elyon template render --input doc.html --output result.pdf", desc: "Rendre un template HTML en PDF" },
  { cmd: "elyon config set --key API_KEY --value <key>", desc: "Configurer votre clÃ© API" },
  { cmd: "elyon batch submit --file jobs.json", desc: "Soumettre un lot d'impression" },
  { cmd: "elyon logs tail --level error", desc: "Suivre les logs en temps rÃ©el" },
  { cmd: "elyon version", desc: "Afficher la version installÃ©e" },
]
const FEATURES = [
  {
    icon: Download,
    title: "Installation simplifiÃ©e",
    desc: "Une seule commande pour installer le CLI sur macOS, Linux et Windows. Mises Ã  jour automatiques via notre registre.",
  },
  {
    icon: Settings,
    title: "Configuration flexible",
    desc: "Fichier de configuration YAML, variables d'environnement ou flags en ligne de commande. Choisissez votre mÃ©thode.",
  },
  {
    icon: FileCode,
    title: "Mode pipe",
    desc: "Utilisez le CLI dans vos pipelines shell et scripts bash. EntrÃ©e/sortie standard pour une intÃ©gration maximale.",
  },
  {
    icon: RefreshCw,
    title: "CI/CD natif",
    desc: "Des actions GitHub, GitLab CI et Jenkins prÃªtes Ã  l'emploi. IntÃ©grez l'impression dans vos pipelines de dÃ©ploiement.",
  },
  {
    icon: Users,
    title: "Mode Ã©quipe",
    desc: "Partagez la configuration et les templates entre collaborateurs. ContrÃ´le d'accÃ¨s par Ã©quipe et projet.",
  },
  {
    icon: BookOpen,
    title: "Auto-complÃ©tion",
    desc: "Shell completion pour bash, zsh et fish. Des suggestions contextuelles pour chaque commande et flag.",
  },
]
export function CliTools() {
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
            <Terminal className="size-7 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">
            CLI & Outils
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Une suite d'outils en ligne de commande pour intÃ©ragir avec
            votre infrastructure d'impression. IdÃ©al pour l'automatisation,
            le CI/CD et les power users.
          </p>
          <div className="mt-10">
            <Button size="lg" className="rounded-lg normal-case text-base font-medium tracking-normal">
              Installer le CLI
              <ArrowRight className="size-4" />
            </Button>
          </div>
          <hr className="my-20 border-border/50" />
          <h2 className="text-xl font-semibold sm:text-2xl">Commandes essentielles</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Toutes les commandes dont vous avez besoin pour piloter votre infrastructure depuis le terminal.
          </p>
          <div className="mt-8 grid gap-3">
            {COMMANDS.map((c) => (
              <div
                key={c.cmd}
                className="flex flex-col gap-1 rounded-2xl border border-border/50 bg-background/50 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <code className="text-sm font-mono text-primary">{c.cmd}</code>
                <span className="text-sm text-muted-foreground">{c.desc}</span>
              </div>
            ))}
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
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">PrÃªt Ã  installer ?</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Une seule ligne de commande et vous Ãªtes opÃ©rationnel.
              Compatible avec tous les terminaux modernes.
            </p>
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 rounded-xl border border-border/50 bg-background/80 px-5 py-3 font-mono text-sm">
                <span className="text-muted-foreground">$</span>
                <span className="text-primary">curl -fsSL https://elyon.dev/install.sh | bash</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
