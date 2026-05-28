import { Activity, ArrowRight, CheckCircle, AlertCircle, Clock, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
const SERVICES = [
  { name: "API d'impression", status: "OpÃ©rationnel", uptime: "99.99%" },
  { name: "Moteur de rendu", status: "OpÃ©rationnel", uptime: "99.98%" },
  { name: "SDK Registry", status: "OpÃ©rationnel", uptime: "100%" },
  { name: "CLI Updates", status: "OpÃ©rationnel", uptime: "99.95%" },
  { name: "Dashboard", status: "OpÃ©rationnel", uptime: "99.99%" },
  { name: "Webhooks", status: "OpÃ©rationnel", uptime: "99.97%" },
]
export function Status() {
  return (
    <div className="min-h-svh pt-24">
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="pointer-events-none absolute -top-40 right-0 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-0 size-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-[1220px]">
          
          <div className="mt-4 flex items-center gap-3">
            <div className="flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
              <Activity className="size-7 text-primary" />
            </div>
            <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1">
              <div className="size-2 rounded-full bg-green-500" />
              <span className="text-xs font-medium text-green-500">Tous les systÃ¨mes opÃ©rationnels</span>
            </div>
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl">Statut des services</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Suivez en temps rÃ©el l'Ã©tat de nos services. Nous croyons en la
            transparence totale sur notre disponibilitÃ©.
          </p>
          <hr className="my-20 border-border/50" />
          <div className="grid gap-3">
            {SERVICES.map((s) => (
              <div key={s.name} className="flex items-center justify-between rounded-2xl border border-border/50 bg-background/50 p-5">
                <div className="flex items-center gap-3">
                  <CheckCircle className="size-4 text-green-500" />
                  <span className="font-medium text-sm">{s.name}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs text-muted-foreground">Uptime: {s.uptime}</span>
                  <span className="text-xs font-medium text-green-500">{s.status}</span>
                </div>
              </div>
            ))}
          </div>
          <hr className="my-20 border-border/50" />
          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/[0.06] via-background/50 to-background/50 p-8 sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Abonnez-vous aux alertes</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Recevez des notifications par email ou webhook en cas d'incident sur nos services.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-lg normal-case text-base font-medium tracking-normal">
                S'abonner aux alertes <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg normal-case text-base font-medium tracking-normal">
                Voir l'historique
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
