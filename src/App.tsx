import { Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout"
import { Home } from "@/pages/home"
import { PrintingApi } from "@/pages/products/printing-api"
import { SdkLibraries } from "@/pages/products/sdk-libraries"
import { CliTools } from "@/pages/products/cli-tools"
import { RenderEngine } from "@/pages/products/render-engine"

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/printing-api" element={<PrintingApi />} />
        <Route path="/products/sdk-libraries" element={<SdkLibraries />} />
        <Route path="/products/cli-tools" element={<CliTools />} />
        <Route path="/products/render-engine" element={<RenderEngine />} />
      </Route>
    </Routes>
  )
}

export default App
