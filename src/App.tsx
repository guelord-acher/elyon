import { Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout"
import { Home } from "@/pages/home"
import { PrintingApi } from "@/pages/products/printing-api"
import { SdkLibraries } from "@/pages/products/sdk-libraries"
import { CliTools } from "@/pages/products/cli-tools"
import { RenderEngine } from "@/pages/products/render-engine"
import { CloudPrinting } from "@/pages/solutions/cloud-printing"
import { Automation } from "@/pages/solutions/automation"
import { CicdPrint } from "@/pages/solutions/cicd-print"
import { BatchProcessing } from "@/pages/solutions/batch-processing"
import { Documentation } from "@/pages/docs/documentation"
import { ApiReference } from "@/pages/docs/api-reference"
import { Quickstarts } from "@/pages/docs/quickstarts"
import { Community } from "@/pages/community/community"
import { Status } from "@/pages/community/status"
import { Mission } from "@/pages/about/mission"
import { Team } from "@/pages/about/team"
import { Blog } from "@/pages/blog/blog"
import { BlogArticle } from "@/pages/blog/BlogArticle"
import { Careers } from "@/pages/careers/careers"
import { Login } from "@/pages/login"
import { Signup } from "@/pages/signup"
import { AdminLayout } from "@/components/AdminLayout"
import { AdminLogin } from "@/pages/admin/login"
import { BlogList } from "@/pages/admin/BlogList"
import { BlogEdit } from "@/pages/admin/BlogEdit"
import { Navigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"

function AdminGuard() {
  const { user, loading } = useAuth()
  if (loading) return null
  if (!user) return <Navigate to="/admin/login" replace />
  return <AdminLayout />
}

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products/printing-api" element={<PrintingApi />} />
        <Route path="/products/sdk-libraries" element={<SdkLibraries />} />
        <Route path="/products/cli-tools" element={<CliTools />} />
        <Route path="/products/render-engine" element={<RenderEngine />} />
        <Route path="/solutions/cloud-printing" element={<CloudPrinting />} />
        <Route path="/solutions/automation" element={<Automation />} />
        <Route path="/solutions/cicd-print" element={<CicdPrint />} />
        <Route path="/solutions/batch-processing" element={<BatchProcessing />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/docs/api-reference" element={<ApiReference />} />
        <Route path="/docs/quickstarts" element={<Quickstarts />} />
        <Route path="/community" element={<Community />} />
        <Route path="/status" element={<Status />} />
        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/careers" element={<Careers />} />
      </Route>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route element={<AdminGuard />}>
        <Route path="/admin" element={<Navigate to="/admin/blog" replace />} />
        <Route path="/admin/blog" element={<BlogList />} />
        <Route path="/admin/blog/new" element={<BlogEdit />} />
        <Route path="/admin/blog/:id/edit" element={<BlogEdit />} />
      </Route>
    </Routes>
  )
}

export default App
