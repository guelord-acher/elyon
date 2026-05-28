import { Icon } from "@iconify/react"

const FOOTER_LINKS = [
  {
    label: "Produits",
    links: [
      { title: "API d'impression", href: "/products/printing-api" },
      { title: "SDK & Bibliothèques", href: "/products/sdk-libraries" },
      { title: "CLI & Outils", href: "/products/cli-tools" },
      { title: "Moteur de rendu", href: "/products/render-engine" },
    ],
  },
  {
    label: "Solutions",
    links: [
      { title: "Impression Cloud", href: "/solutions/cloud-printing" },
      { title: "Automatisation", href: "/solutions/automation" },
      { title: "CI/CD Print", href: "/solutions/cicd-print" },
      { title: "Traitement par lot", href: "/solutions/batch-processing" },
    ],
  },
  {
    label: "Développeur",
    links: [
      { title: "Documentation", href: "/docs" },
      { title: "API Reference", href: "/docs/api-reference" },
      { title: "Guides de démarrage", href: "/docs/quickstarts" },
      { title: "Statut des services", href: "/status" },
    ],
  },
  {
    label: "Société",
    links: [
      { title: "À propos", href: "/about/mission" },
      { title: "Blog", href: "/blog" },
      { title: "Carrières", href: "/careers" },
      { title: "Contact", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-[1220px] px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 text-base font-semibold">
              <Icon icon="ic:baseline-auto-awesome-mosaic" className="size-5" />
              Elyon
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              L'infrastructure d'impression conçue pour les développeurs.
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.label}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                {group.label}
              </h4>
              <ul className="mt-4 flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border/50 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Elyon. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
