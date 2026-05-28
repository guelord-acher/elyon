import { Package, ArrowRight, BookOpen, GitFork, Terminal, Wrench, Code2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const LANGUAGES = [
  { name: "Python", status: "Stable", color: "text-blue-500" },
  { name: "JavaScript", status: "Stable", color: "text-yellow-500" },
  { name: "Go", status: "Stable", color: "text-cyan-500" },
  { name: "Rust", status: "Beta", color: "text-orange-500" },
  { name: "Java", status: "Beta", color: "text-red-500" },
  { name: "PHP", status: "En développement", color: "text-purple-500" },
  { name: "Ruby", status: "En développement", color: "text-red-600" },
  { name: ".NET", status: "Planifié", color: "text-violet-500" },
  { name: "Swift", status: "Planifié", color: "text-orange-500" },
]

const TOOLS = [
  {
    icon: BookOpen,
    title: "Guides de démarrage",
    desc: "Des guides pas à pas pour chaque langage, de l'installation à votre première impression en 5 minutes.",
  },
  {
    icon: GitFork,
    title: "Exemples open-source",
    desc: "Des projets d'exemple complets sur GitHub. Forkez, clonez et lancez-vous sans tout construire depuis zéro.",
  },
  {
    icon: Terminal,
    title: "CLI companion",
    desc: "Notre CLI s'installe en une commande et s'intègre nativement avec tous nos SDK pour le débogage et les tests.",
  },
  {
    icon: Wrench,
    title: "Types et typages",
    desc: "Des définitions de types complètes pour TypeScript, Python (Pyright/mypy) et Go. Détection d'erreurs à la compilation.",
  },
  {
    icon: Code2,
    title: "Exemples prêts à l'emploi",
    desc: "Des snippets pour les cas d'usage courants : impression facture, envoi batch, génération rapports, et plus encore.",
  },
  {
    icon: ExternalLink,
    title: "Intégrations tierces",
    desc: "Des adaptateurs officiels pour les frameworks populaires : Django, Express, FastAPI, Rails, Spring Boot et Laravel.",
  },
]

export function SdkLibraries() {
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
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">&larr; Retour à l'accueil</a>

          <div className="mt-4 flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
            <Package className="size-7 text-primary" />
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">
            SDK & Bibliothèques
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Des SDK natifs pour les langages les plus populaires. Une
            expérience de développement cohérente et idiomatique, quel que
            soit votre écosystème.
          </p>

          <div className="mt-10">
            <Button size="lg" className="rounded-lg normal-case text-base font-medium tracking-normal">
              Voir les SDK
              <ArrowRight className="size-4" />
            </Button>
          </div>

          <hr className="my-20 border-border/50" />

          <h2 className="text-xl font-semibold sm:text-2xl">Langages supportés</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            SDK officiels maintenus par notre équipe. Chaque SDK suit les conventions du langage.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {LANGUAGES.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center justify-between rounded-2xl border border-border/50 bg-background/50 p-5"
              >
                <div className="flex items-center gap-3">
                  <div className={`size-2.5 rounded-full ${lang.color} bg-current`} />
                  <span className="font-medium">{lang.name}</span>
                </div>
                <span className={`text-xs font-medium ${lang.status === "Stable" ? "text-green-500" : lang.status === "Beta" ? "text-yellow-500" : "text-muted-foreground"}`}>
                  {lang.status}
                </span>
              </div>
            ))}
          </div>

          <hr className="my-20 border-border/50" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((t) => {
              const Icon = t.icon
              return (
                <div key={t.title} className="rounded-2xl border border-border/50 bg-background/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-background/80">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-border/50 bg-muted/50">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                </div>
              )
            })}
          </div>

          <hr className="my-20 border-border/50" />

          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/[0.06] via-background/50 to-background/50 p-8 sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Vous ne trouvez pas votre langage ?</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Notre API REST est utilisable depuis n'importe quel langage.
              Consultez notre documentation ou contribuez à nos SDK open-source.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-lg normal-case text-base font-medium tracking-normal">
                Documentation API
                <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg normal-case text-base font-medium tracking-normal">
                Contribuer sur GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
