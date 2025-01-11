import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Period Cramp Soother</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Manage and alleviate period cramps with our web-based solution. 
        Track your intensity levels, battery life, and receive personalized recommendations.
      </p>
      <div className="flex space-x-4">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
        <Link href="/register">
          <Button variant="outline">Register</Button>
        </Link>
      </div>
    </div>
  )
}