import { ModeToggle } from "@/components/mode-toggle"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    <span >Documentation</span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex items-center gap-2 ml-auto">
              <ModeToggle />
              <UserButton/>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
            <h2 className="text-2xl font-bold">Project Documentation</h2>
            <p>This project, Period Cramp Soother, is designed to help users track their menstrual cycles and manage symptoms effectively.</p>
            <h3 className="text-xl font-semibold">Features</h3>
            <ul className="list-disc pl-5">
              <li>Dashboard for quick insights on cycle status</li>
              <li>Period tracking with customizable reminders</li>
              <li>Device control for connected health devices</li>
              <li>AI chatbot for personalized advice and support</li>
              <li>Comprehensive documentation for user guidance</li>
            </ul>
            <h3 className="text-xl font-semibold">Getting Started</h3>
            <p>To get started with the Period Cramp Soother, follow these steps:</p>
            <ol className="list-decimal pl-5">
              <li>Clone the repository: <code className="bg-gray-200 rounded p-1">git clone https://github.com/yourusername/period-cramp-soother.git</code></li>
              <li>Install dependencies: <code className="bg-gray-200 rounded p-1">npm install</code></li>
              <li>Run the application: <code className="bg-gray-200 rounded p-1">npm run dev</code></li>
            </ol>
            <h3 className="text-xl font-semibold">Contributing</h3>
            <p>We welcome contributions! Please read our <a href="/docs/contributing" className="text-blue-500 underline">contributing guidelines</a> for more information.</p>
            <h3 className="text-xl font-semibold">License</h3>
            <p>This project is licensed under the MIT License. See the <a href="/LICENSE" className="text-blue-500 underline">LICENSE</a> file for details.</p>
            <h3 className="text-xl font-semibold">Technologies Used</h3>
            <p>This project utilizes the following technologies:</p>
            <ul className="list-disc pl-5">
              <li>Frontend: Built using Next.js, TypeScript, and CSS-in-JS styling.</li>
              <li>Backend: Utilizes a RESTful API built with Node.js and Prisma for data storage.</li>
              <li>Authentication: Implements user authentication and authorization using OAuth and JWT.</li>
            </ul>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}