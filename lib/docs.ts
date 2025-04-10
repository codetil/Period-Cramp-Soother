import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "AI Chatbot",
      href: "/chatbot",
      event: "header_cta_clicked",
      label: "New",
    },
    {
      title: "Medication",
      href: "/medication",
    },
  ],
  sidebarNav: [
    
  ],
};
