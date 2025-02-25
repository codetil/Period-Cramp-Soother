"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Toilet,
  Book,
} from "lucide-react"

import { useUser } from "@clerk/nextjs"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Footprints } from "lucide-react"
import { title } from "process"

// This is sample data.
const data = {
  
  teams: [
    {
      name: "Period Cramp Soother",
      logo: Footprints,
      plan: "Basic",
    },
  ],
  navMain: [
    {
      title: "Platform",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
        },
        {
          title: "Period Tracker",
          url: "/dashboard",
        },
        {
          title: "Device Control",
          url: "/dashboard",
        },

      ]
    },
    {
      title: "Medication",
      url: "/medication",
      icon: Command,
    },
    {
      title: "Recommendation",
      url: "/rec",
      icon: PieChart,
    },
    {
      title: "AI Chatbot",
      url: "/chatbot",
      icon: Bot,
    },

    {
      title : "Near by Washroom",
      url: "#",
      icon: Toilet,
    },
    
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
    },
    
  ],
  projects: [
    {
      name: "Blogs",
      url: "#",
      icon: Book,
    },
    {
      name: "Documentation",
      url: "/docs",
      icon: BookOpen,
    },

  ],
}



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser()

  const userData = user ? {
    name: user.fullName || "",
    email: user.emailAddresses[0]?.emailAddress || "",
    avatar: user.imageUrl || ""
  } : undefined
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
      <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}