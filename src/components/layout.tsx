import { Outlet } from "react-router-dom"
import { MegaNavbar } from "@/components/mega-navbar"
import { Footer } from "@/components/footer"

export function Layout() {
  return (
    <div className="min-h-svh overflow-x-hidden">
      <MegaNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
