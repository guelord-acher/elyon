import { Icon } from "@iconify/react"

const FOOTER_LINKS = [
  {
    label: "Produits",
    links: [
      { title: "API d'impression", href: "#" },
      { title: "SDK & Bibliothèques", href: "#" },
      { title: "CLI & Outils", href: "#" },
      { title: "Moteur de rendu", href: "#" },
    ],
  },
  {
    label: "Solutions",
    links: [
      { title: "Impression Cloud", href: "#" },
      { title: "Automatisation", href: "#" },
      { title: "CI/CD Print", href: "#" },
      { title: "Traitement par lot", href: "#" },
    ],
  },
  {
    label: "Développeur",
    links: [
      { title: "Documentation", href: "#" },
      { title: "API Reference", href: "#" },
      { title: "Guides de démarrage", href: "#" },
      { title: "Statut des services", href: "#" },
    ],
  },
  {
    label: "Société",
    links: [
      { title: "À propos", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Carrières", href: "#" },
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
            <a href="#" className="flex items-center gap-2 text-base font-semibold">
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
