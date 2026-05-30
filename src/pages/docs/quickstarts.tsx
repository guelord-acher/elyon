import { Rocket, ArrowRight, Code2, Terminal, Globe, BookOpen, ChevronRight, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

const GUIDES = [
  {
    icon: Code2,
    lang: "Python",
    color: "from-blue-500/20",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-400",
    code: "pip install elyon-sdk",
    desc: "Installez le SDK pip, initialisez le client et lancez votre première impression en 5 lignes de code.",
    time: "5 min",
    features: ["Async support", "Type hints", "Pydantic models"],
  },
  {
    icon: Code2,
    lang: "JavaScript",
    color: "from-yellow-500/20",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    text: "text-yellow-400",
    code: "npm install @elyon/sdk",
    desc: "Utilisez notre package npm pour intégrer l'impression dans vos applications Node.js ou frontend.",
    time: "5 min",
    features: [],
  },
  {
    icon: Code2,
    lang: "Go",
    color: "from-cyan-500/20",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    code: "go get github.com/elyon/sdk",
    desc: "Importez le module Go et bénéficiez de la typage statique et de la concurrence native de Go.",
    time: "5 min",
    features: [],
  },
  {
    icon: Terminal,
    lang: "CLI",
    color: "from-violet-500/20",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-400",
    code: "elyon print document.pdf",
    desc: "Installez le CLI et imprimez votre premier document en une seule commande depuis le terminal.",
    time: "2 min",
    features: ["Auto-completion", "Pipe support", "JSON output"],
  },
  {
    icon: Globe,
    lang: "API REST",
    color: "from-emerald-500/20",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    code: "curl -X POST $ELYON_URL/print",
    desc: "Appelez notre API directement avec curl. Parfait pour les langages sans SDK officiel.",
    time: "5 min",
    features: [],
  },
  {
    icon: BookOpen,
    lang: "Templates",
    color: "from-rose-500/20",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    text: "text-rose-400",
    code: '<template>\n  <h1>{{title}}</h1>\n</template>',
    desc: "Créez votre premier template HTML et transformez-le en PDF avec notre moteur de rendu.",
    time: "10 min",
    features: [],
  },
]

function CodeBlock({ code, lang }: { code: string; lang: string }) {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border/50 bg-black/40 backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-border/30 px-4 py-2">
        <span className="text-xs text-muted-foreground">Terminal</span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-red-500/60" />
          <span className="size-2 rounded-full bg-yellow-500/60" />
          <span className="size-2 rounded-full bg-green-500/60" />
        </span>
      </div>
      <div className="px-4 py-3">
        <div className="flex items-start gap-2">
          <span className="mt-0.5 shrink-0 text-xs text-muted-foreground">$</span>
          <code className="text-xs leading-relaxed text-foreground/90 whitespace-pre">{code}</code>
        </div>
      </div>
    </div>
  )
}

export function Quickstarts() {
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

        <div className="relative z-10 mx-auto max-w-[1120px]">
          <div className="flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
            <Rocket className="size-7 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">
            Guides de démarrage
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Choisissez votre langage et lancez-vous en quelques minutes.
            Des quickstarts conçus pour vous rendre productif immédiatement.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-6">
            {/* Python — 3 cols wide, 2 rows tall */}
            <div className="group relative col-span-1 row-span-2 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-blue-500/[0.03] to-transparent p-6 transition-all duration-500 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 sm:col-span-3">
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-blue-500/5 blur-2xl transition-all duration-500 group-hover:bg-blue-500/10" />
              <div className="absolute -bottom-10 -left-10 size-24 rounded-full bg-blue-500/5 blur-2xl" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
                    <Code2 className="size-6 text-blue-400" />
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                    <span className="size-1.5 rounded-full bg-blue-400" />
                    {GUIDES[0].time}
                  </span>
                </div>
                <div className="mt-4 flex-1">
                  <h3 className="text-xl font-semibold">Python</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{GUIDES[0].desc}</p>
                </div>
                <CodeBlock code={GUIDES[0].code} lang="bash" />
                <div className="mt-4 flex flex-wrap gap-2">
                  {GUIDES[0].features.map((f) => (
                    <span key={f} className="rounded-full border border-border/50 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CLI — 3 cols wide, full height */}
            <div className="group relative col-span-1 row-span-2 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-violet-500/[0.03] to-transparent p-6 transition-all duration-500 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 sm:col-span-3">
              <div className="absolute -right-10 -top-10 size-28 rounded-full bg-violet-500/5 blur-2xl transition-all duration-500 group-hover:bg-violet-500/10" />
              <div className="absolute -bottom-8 left-1/2 size-20 rounded-full bg-violet-500/5 blur-2xl" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
                    <Terminal className="size-6 text-violet-400" />
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                    <span className="size-1.5 rounded-full bg-violet-400" />
                    {GUIDES[3].time}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">CLI</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{GUIDES[3].desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {GUIDES[3].features.map((f) => (
                    <span key={f} className="rounded-full border border-border/50 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground">
                      {f}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <CodeBlock code={GUIDES[3].code} lang="bash" />
                </div>
              </div>
            </div>

            {/* JavaScript */}
            <div className="group relative col-span-1 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-yellow-500/[0.03] to-transparent p-6 transition-all duration-500 hover:border-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/5 sm:col-span-2">
              <div className="absolute -right-8 -top-8 size-20 rounded-full bg-yellow-500/5 blur-2xl transition-all duration-500 group-hover:bg-yellow-500/10" />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-yellow-500/20 bg-yellow-500/10">
                    <Code2 className="size-5 text-yellow-400" />
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2.5 py-0.5 text-xs font-medium text-yellow-400">
                    <span className="size-1.5 rounded-full bg-yellow-400" />
                    {GUIDES[1].time}
                  </span>
                </div>
                <h3 className="mt-3 font-semibold">JavaScript</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{GUIDES[1].desc}</p>
                <CodeBlock code={GUIDES[1].code} lang="bash" />
              </div>
            </div>

            {/* Go */}
            <div className="group relative col-span-1 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-cyan-500/[0.03] to-transparent p-6 transition-all duration-500 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 sm:col-span-2">
              <div className="absolute -right-8 -top-8 size-20 rounded-full bg-cyan-500/5 blur-2xl transition-all duration-500 group-hover:bg-cyan-500/10" />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10">
                    <Code2 className="size-5 text-cyan-400" />
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium text-cyan-400">
                    <span className="size-1.5 rounded-full bg-cyan-400" />
                    {GUIDES[2].time}
                  </span>
                </div>
                <h3 className="mt-3 font-semibold">Go</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{GUIDES[2].desc}</p>
                <CodeBlock code={GUIDES[2].code} lang="bash" />
              </div>
            </div>

            {/* API REST */}
            <div className="group relative col-span-1 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-emerald-500/[0.03] to-transparent p-6 transition-all duration-500 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 sm:col-span-2">
              <div className="absolute -right-8 -top-8 size-20 rounded-full bg-emerald-500/5 blur-2xl transition-all duration-500 group-hover:bg-emerald-500/10" />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10">
                    <Globe className="size-5 text-emerald-400" />
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    {GUIDES[4].time}
                  </span>
                </div>
                <h3 className="mt-3 font-semibold">API REST</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{GUIDES[4].desc}</p>
                <CodeBlock code={GUIDES[4].code} lang="bash" />
              </div>
            </div>

            {/* Templates — Full width */}
            <div className="group relative col-span-1 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-rose-500/[0.03] to-transparent p-6 transition-all duration-500 hover:border-rose-500/30 hover:shadow-lg hover:shadow-rose-500/5 sm:col-span-6 sm:p-8">
              <div className="absolute -right-16 -top-16 size-48 rounded-full bg-rose-500/5 blur-3xl transition-all duration-500 group-hover:bg-rose-500/10" />
              <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10">
                      <BookOpen className="size-6 text-rose-400" />
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-400">
                      <span className="size-1.5 rounded-full bg-rose-400" />
                      {GUIDES[5].time}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Templates</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{GUIDES[5].desc}</p>
                </div>
                <div className="sm:w-1/2">
                  <CodeBlock code={GUIDES[5].code} lang="html" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
