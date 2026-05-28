import { FileCode, ArrowRight, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
const ENDPOINTS = [
  { method: "GET", path: "/v1/printers", desc: "Lister toutes les imprimantes" },
  { method: "POST", path: "/v1/printjobs", desc: "Soumettre un travail d'impression" },
  { method: "GET", path: "/v1/printjobs/{id}", desc: "Obtenir le statut d'un travail" },
  { method: "DELETE", path: "/v1/printjobs/{id}", desc: "Annuler un travail d'impression" },
  { method: "GET", path: "/v1/queues", desc: "Lister les files d'attente" },
  { method: "POST", path: "/v1/templates/render", desc: "Rendre un template" },
]
export function ApiReference() {
  return (
    <div className="min-h-svh pt-24">
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="pointer-events-none absolute -top-40 left-0 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 right-0 size-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-[1220px]">
          
          <div className="mt-4 flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
            <FileCode className="size-7 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">API Reference</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            La rÃ©fÃ©rence complÃ¨te de l'API REST Elyon. Tous les endpoints,
            paramÃ¨tres, codes d'erreur et exemples de requÃªtes.
          </p>
          <hr className="my-20 border-border/50" />
          <h2 className="text-xl font-semibold sm:text-2xl">Endpoints principaux</h2>
          <p className="mt-2 text-sm text-muted-foreground">Authentification requise via header <code className="rounded bg-muted/50 px-1.5 py-0.5 text-xs font-mono">X-API-Key</code>.</p>
          <div className="mt-8 grid gap-3">
            {ENDPOINTS.map((ep) => (
              <div key={ep.path} className="flex items-center gap-4 rounded-2xl border border-border/50 bg-background/50 p-5">
                <span className={`shrink-0 rounded-md px-2 py-0.5 text-xs font-bold font-mono ${ep.method === "GET" ? "bg-green-500/10 text-green-500" : "bg-primary/10 text-primary"}`}>
                  {ep.method}
                </span>
                <code className="flex-1 text-sm font-mono text-foreground">{ep.path}</code>
                <span className="hidden text-sm text-muted-foreground sm:block">{ep.desc}</span>
                <Copy className="size-4 shrink-0 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              </div>
            ))}
          </div>
          <hr className="my-20 border-border/50" />
          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/[0.06] via-background/50 to-background/50 p-8 sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Essayez l'API</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Utilisez notre playground interactif pour tester chaque endpoint directement depuis votre navigateur.
            </p>
            <Button size="lg" className="mt-6 rounded-lg normal-case text-base font-medium tracking-normal">
              Ouvrir le playground <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
