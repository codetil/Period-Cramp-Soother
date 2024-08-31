import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { CommandMenu } from '@/components/command-menu'


export default function Header() {
  return (
    <header>
      <nav className="flex items-center gap-4 text-sm lg:gap-6 justify-between py-1">
        <Link href="/" className="text-2xl font-bold py-2">
          Period Cramp Soother
        </Link>
        <div className="space-x-4">
          <Link href="/dashboard">
            <Button variant="ghost">Dashboard</Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost">Profile</Button>
          </Link>
          <CommandMenu data={undefined}/>
          <ModeToggle/>
        </div>
      </nav>
    </header>
  )
}