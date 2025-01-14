import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex sm:min-h-[71vh] min-h-[68vh] flex-col items-center justify-center  py-2">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Period Cramp Soother</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Manage and alleviate period cramps with our web-based solution. 
        Track your frequency levels, periods dates, and receive personalized recommendations.
      </p>
      <div className="flex space-x-4 justify-center">
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button variant="ghost">Register</Button>
        </Link>
      </div>
    </div>
  )

}