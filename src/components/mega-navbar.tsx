import * as React from "react"
import { NavigationMenu } from "radix-ui"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"
import {
  Activity,
  ArrowRight,
  BookOpen,
  Briefcase,
  ChevronDownIcon,
  Cloud,
  Code2,
  Crosshair,
  FileCode,
  FileEdit,
  Layers,
  MenuIcon,
  MoonIcon,
  Package,
  RefreshCw,
  Rocket,
  ScanEye,
  SunIcon,
  Terminal,
  Users,
  XIcon,
  Zap,
} from "lucide-react"
import { useTheme } from "@/components/theme-provider"

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity, BookOpen, Briefcase, Cloud, Code2, Crosshair,
  FileCode, FileEdit, Layers, Package, RefreshCw, Rocket,
  ScanEye, Terminal, Users, Zap,
}

const NAV_ITEMS = [
  {
    label: "Produits",
    items: [
      { title: "API d'impression", href: "/products/printing-api", description: "Intégrez l'impression à vos applications", icon: "Code2" },
      { title: "SDK & Bibliothèques", href: "/products/sdk-libraries", description: "Python, JavaScript, Go, Rust", icon: "Package" },
      { title: "CLI & Outils", href: "/products/cli-tools", description: "Outils en ligne de commande pour le printing", icon: "Terminal" },
      { title: "Moteur de rendu", href: "/products/render-engine", description: "Rendu haute performance pour vos documents", icon: "ScanEye" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { title: "Impression Cloud", href: "/solutions/cloud-printing", description: "Infrastructure d'impression scalable", icon: "Cloud" },
      { title: "Automatisation", href: "/solutions/automation", description: "Pipelines d'impression automatisés", icon: "Zap" },
      { title: "CI/CD Print", href: "/solutions/cicd-print", description: "Tests d'impression intégrés à votre CI", icon: "RefreshCw" },
      { title: "Traitement par lot", href: "/solutions/batch-processing", description: "Traitement massif de documents", icon: "Layers" },
    ],
  },
  {
    label: "Développeur",
    items: [
      { title: "Documentation", href: "/docs", description: "Guides complets et tutoriels", icon: "BookOpen" },
      { title: "API Reference", href: "/docs/api-reference", description: "Référence complète de l'API REST", icon: "FileCode" },
      { title: "Guides de démarrage", href: "/docs/quickstarts", description: "Quickstarts par langage", icon: "Rocket" },
      { title: "Communauté", href: "/community", description: "Discord, GitHub, Forum, Stack Overflow", icon: "Users" },
      { title: "Statut des services", href: "/status", description: "Uptime et incidents", icon: "Activity" },
    ],
  },
  {
    label: "À propos",
    items: [
      { title: "Notre mission", href: "/about/mission", description: "Révolutionner l'impression pour les développeurs", icon: "Crosshair" },
      { title: "L'équipe", href: "/about/team", description: "Rencontrez notre équipe d'experts", icon: "Users" },
      { title: "Blog", href: "/blog", description: "Actualités et articles techniques", icon: "FileEdit" },
      { title: "Carrières", href: "/careers", description: "Rejoignez-nous", icon: "Briefcase" },
    ],
  },
]

function ListItem({
  className,
  title,
  href,
  icon,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { title: string; icon?: string }) {
  const IconComp = icon ? ICONS[icon] : null

  return (
    <li>
      <a
        className={cn(
          "flex items-start gap-3 rounded-lg p-2.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        href={href}
        {...props}
      >
        {IconComp && (
          <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-border/50 bg-muted/50">
            <IconComp className="size-4 text-primary" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </a>
    </li>
  )
}

export function MegaNavbar() {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <>
      {/* Desktop */}
      <NavigationMenu.Root
        data-slot="mega-navbar"
        className="fixed top-4 left-1/2 z-50 hidden -translate-x-1/2 md:block"
      >
        <div className="flex w-fit items-center gap-0 rounded-2xl border border-border/50 bg-background/70 pl-3 pr-1.5 py-1.5 shadow-lg backdrop-blur-xl">
          <a
            href="#"
            className="mr-2 flex items-center gap-2 text-base font-semibold whitespace-nowrap"
          >
            <Icon icon="ic:baseline-auto-awesome-mosaic" className="size-5" />
            Elyon
          </a>

          <NavigationMenu.List className="flex items-center gap-0">
            {NAV_ITEMS.map((section) => (
              <NavigationMenu.Item key={section.label}>
                <NavigationMenu.Trigger className="group flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground data-[state=open]:bg-accent data-[state=open]:text-foreground whitespace-nowrap">
                  {section.label}
                  <ChevronDownIcon className="size-3 transition-transform duration-150 group-data-[state=open]:rotate-180" />
                </NavigationMenu.Trigger>

                <NavigationMenu.Content>
                  <ul className="grid w-80 gap-0.5 p-1.5 md:w-[460px] md:grid-cols-2">
                    {section.items.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>

          <div className="ml-4 flex items-center gap-1">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="Changer le thème"
            >
              <SunIcon className="size-4 hidden dark:block" />
              <MoonIcon className="size-4 block dark:hidden" />
            </button>
            <a
              href="#"
              className="px-2 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-lg hover:bg-accent"
            >
              S'inscrire
            </a>
            <Button size="sm" className="normal-case text-sm font-medium tracking-normal rounded-lg">
              <ArrowRight className="size-4" />
              Se connecter
            </Button>
          </div>
        </div>

        <NavigationMenu.Viewport className="absolute top-full left-1/2 z-50 mt-3 w-full -translate-x-1/2 overflow-hidden rounded-xl border border-border/50 bg-popover shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90" />
      </NavigationMenu.Root>

      {/* Mobile */}
      <div className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] -translate-x-1/2 md:hidden">
        <div className="flex items-center justify-between rounded-2xl border border-border/50 bg-background/70 px-4 py-2 shadow-lg backdrop-blur-xl">
          <a href="#" className="flex items-center gap-2 text-base font-semibold whitespace-nowrap">
            <Icon icon="ic:baseline-auto-awesome-mosaic" className="size-5" />
            Elyon
          </a>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="Changer le thème"
            >
              <SunIcon className="size-4 hidden dark:block" />
              <MoonIcon className="size-4 block dark:hidden" />
            </button>
            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>

        {isMobileOpen && (
          <div className="mt-2 max-h-[70vh] overflow-y-auto rounded-2xl border border-border/50 bg-background/95 p-4 shadow-lg backdrop-blur-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((section) => (
                <div key={section.label}>
                  <div className="px-2 py-1.5 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    {section.label}
                  </div>
                  {section.items.map((item) => {
                    const MobileIcon = item.icon ? ICONS[item.icon] : null
                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        className="flex items-start gap-3 rounded-lg px-2 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {MobileIcon && (
                          <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-border/50 bg-muted/50">
                            <MobileIcon className="size-4 text-primary" />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <div className="font-medium">{item.title}</div>
                          <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              ))}
            </nav>

            <hr className="my-3 border-border/50" />

            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-lg hover:bg-accent px-2 py-1.5"
              >
                S'inscrire
              </a>
              <Button className="w-full normal-case text-sm font-medium tracking-normal rounded-lg">Se connecter</Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
