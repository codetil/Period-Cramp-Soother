'use client'
import { AppSidebar } from "@/components/app-sidebar"
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
import { ModeToggle } from "@/components/mode-toggle"
import Footer from '@/components/Footer';
import Device from "@/components/device"
import PeriodTracker from "@/components/PeriodTracker"
import { Card, CardContent } from "@/components/ui/card"
import { UserButton } from "@clerk/nextjs"
import WiFiset from "@/components/wifisetting"

export default function Page() {
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
                    Dashboard
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
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-2 mt-10">

              <Device/>

            <PeriodTracker/>
            
            
          </div>
               
          </div>
          <Footer/>
        </SidebarInset>
       
      </SidebarProvider>
  )
}
