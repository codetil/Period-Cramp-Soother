import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ModeToggle'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


export default function Header() {
  return (
    <header>
  
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Period Cramp Soother
        </Link>
        <div className="space-x-4">
          <Link href="/dashboard">
            <Button variant="ghost">Dashboard</Button>
          </Link>
          
          <Link href="/profile">
            <Button variant="ghost">Profile</Button>
          </Link>
          <ModeToggle/>
          <Button variant="secondary">Logout</Button>
        </div>
      </nav>
    </header>
  )
}