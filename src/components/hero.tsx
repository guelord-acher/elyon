import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Users } from "lucide-react"

const LOGOS = [
  {
    name: "PrintCorp",
    logo: (
      <svg width="110" height="32" viewBox="0 0 110 32" fill="none">
        <rect x="0" y="4" width="24" height="24" rx="5" fill="currentColor" className="text-primary" />
        <rect x="4" y="8" width="4" height="4" rx="1" fill="white" />
        <rect x="10" y="8" width="4" height="4" rx="1" fill="white" />
        <rect x="16" y="8" width="4" height="4" rx="1" fill="white" />
        <rect x="4" y="14" width="16" height="2" rx="1" fill="white" />
        <rect x="4" y="18" width="16" height="2" rx="1" fill="white" />
        <text x="32" y="21" fontSize="14" fontWeight="700" fill="currentColor" className="text-foreground">PrintCorp</text>
      </svg>
    ),
  },
  {
    name: "DocuFlow",
    logo: (
      <svg width="108" height="32" viewBox="0 0 108 32" fill="none">
        <rect x="0" y="2" width="10" height="14" rx="2" fill="currentColor" className="text-primary/70" />
        <rect x="0" y="18" width="10" height="12" rx="2" fill="currentColor" className="text-primary" />
        <rect x="12" y="2" width="10" height="12" rx="2" fill="currentColor" className="text-primary/50" />
        <rect x="12" y="18" width="10" height="12" rx="2" fill="currentColor" className="text-primary/70" />
        <text x="28" y="21" fontSize="14" fontWeight="700" fill="currentColor" className="text-foreground">DocuFlow</text>
      </svg>
    ),
  },
  {
    name: "PaperStack",
    logo: (
      <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
        <rect x="0" y="12" width="20" height="18" rx="3" fill="currentColor" className="text-primary/40" />
        <rect x="3" y="8" width="20" height="18" rx="3" fill="currentColor" className="text-primary/60" />
        <rect x="6" y="4" width="20" height="18" rx="3" fill="currentColor" className="text-primary" />
        <text x="32" y="21" fontSize="14" fontWeight="700" fill="currentColor" className="text-foreground">PaperStack</text>
      </svg>
    ),
  },
  {
    name: "InkLab",
    logo: (
      <svg width="94" height="32" viewBox="0 0 94 32" fill="none">
        <path d="M12 2L22 28H2L12 2Z" fill="currentColor" className="text-primary" />
        <circle cx="12" cy="22" r="3" fill="white" />
        <text x="28" y="21" fontSize="14" fontWeight="700" fill="currentColor" className="text-foreground">InkLab</text>
      </svg>
    ),
  },
  {
    name: "PressIO",
    logo: (
      <svg width="96" height="32" viewBox="0 0 96 32" fill="none">
        <circle cx="12" cy="16" r="12" fill="currentColor" className="text-primary" />
        <path d="M6 16L10 20L18 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="28" y="21" fontSize="14" fontWeight="700" fill="currentColor" className="text-foreground">PressIO</text>
      </svg>
    ),
  },
  {
    name: "FormaPrint",
    logo: (
      <svg width="114" height="32" viewBox="0 0 114 32" fill="none">
        <rect x="0" y="4" width="24" height="24" rx="6" stroke="currentColor" className="text-primary" strokeWidth="2" />
        <path d="M6 16H18M12 10V22" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" />
        <text x="30" y="21" fontSize="14" fontWeight="700" fill="currentColor" className="text-foreground">FormaPrint</text>
      </svg>
    ),
  },
  {
    name: "QuickProof",
    logo: (
      <svg width="116" height="32" viewBox="0 0 116 32" fill="none">
        <rect x="0" y="6" width="22" height="20" rx="5" fill="currentColor" className="text-primary" />
        <path d="M5 16L9 20L17 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="28" y="21" fontSize="14" fontWeight="700" fill="currentColor" className="text-foreground">QuickProof</text>
      </svg>
    ),
  },
  {
    name: "TypeSet",
    logo: (
      <svg width="96" height="32" viewBox="0 0 96 32" fill="none">
        <rect x="0" y="4" width="24" height="6" rx="3" fill="currentColor" className="text-primary" />
        <rect x="0" y="14" width="24" height="6" rx="3" fill="currentColor" className="text-primary/60" />
        <rect x="0" y="24" width="24" height="6" rx="3" fill="currentColor" className="text-primary/30" />
        <text x="28" y="21" fontSize="14" fontWeight="700" fill="currentColor" className="text-foreground">TypeSet</text>
      </svg>
    ),
  },
]

export function Hero() {
  const [userCount, setUserCount] = useState<number | null>(null)

  useEffect(() => {
    fetch("/api/auth/users/count")
      .then((r) => r.ok ? r.json() : null)
      .then((d) => { if (d) setUserCount(d.count) })
      .catch(() => {})
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Gradient blobs */}
      <div className="pointer-events-none absolute -top-40 right-0 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-0 size-[400px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1220px] flex-col items-center text-center">
        {/* Badge */}
        <a
          href="#"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
        >
          <Sparkles className="size-3.5" />
          Nouvelle plateforme disponible
          <ArrowRight className="size-3.5" />
        </a>

        {/* Headline */}
        <h1 className="max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
          L'infrastructure d'impression
          <br />
          <span className="text-primary">conçue pour les développeurs</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Des API REST puissantes, des SDK multi-langages et des outils CLI
          pour intégrer l'impression dans vos applications.
          Conçue par des développeurs, pour des développeurs.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="rounded-[0.225rem] normal-case text-base font-medium tracking-normal" asChild>
            <a href="/signup">
              Commencer gratuitement
              <ArrowRight className="size-4" data-icon="inline-end" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-[0.225rem] normal-case text-base font-medium tracking-normal"
            asChild
          >
            <a href="/docs">Documentation</a>
          </Button>
        </div>

        {/* User count */}
        {userCount !== null && (
          <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="size-4" />
            <span>
              <strong className="text-foreground">{userCount}</strong> développeur{userCount > 1 ? "s" : ""} déjà inscrit{userCount > 1 ? "s" : ""}
            </span>
          </div>
        )}

        {/* Social proof */}
        <div className="mt-20 flex w-full flex-col items-center gap-6">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Utilisé par des équipes du monde entier
          </p>
          <div className="relative w-full overflow-hidden">
            <div
              className="flex w-max items-center gap-16"
              style={{ animation: "marquee 24s linear infinite" }}
            >
              {/* First set */}
              {LOGOS.map((logo) => (
                <div
                  key={logo.name}
                  className="flex shrink-0 items-center"
                >
                  {logo.logo}
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {LOGOS.map((logo) => (
                <div
                  key={`${logo.name}-dup`}
                  className="flex shrink-0 items-center"
                >
                  {logo.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
