import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-0 sm:pb-32 sm:pt-0">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Gradient blobs */}
      <div className="pointer-events-none absolute -left-40 top-0 size-[400px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-[350px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1220px]">
        <div className="flex flex-col items-start gap-8 rounded-2xl border border-border/50 bg-gradient-to-br from-primary/[0.08] via-background/50 to-background/50 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Vous ne savez pas où commencer ?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Répondez à quelques questions et nous vous guiderons vers la
              solution idéale pour vos besoins d'impression.
            </p>
          </div>
          <Button
            size="lg"
            className="shrink-0 rounded-lg normal-case text-base font-medium tracking-normal"
          >
            Trouvez ce qui vous convient
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
