import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Features } from '@/components/features'
import { ArrowRightIcon } from "@radix-ui/react-icons";
 
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { WordRotate } from '@/components/magicui/word-rotate';
import { SparklesText } from "@/components/magicui/sparkles-text";
 

export default function Home() {
  return (
    <>
      <div className="flex sm:min-h-[71vh] min-h-[68vh] flex-col items-center justify-center py-2">
      <div
        className={cn(
          "mb-10 group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Introducing Modern Solution</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
        <h1 className="text-4xl font-bold mb-8 text-center"><SparklesText> Modern Solution for    </SparklesText> 
        <WordRotate
      className="text-4xl font-bold text-black dark:text-white"
      words={["Period Cramps", "Menstrual Pain", "Cramp Relief"]}
    />
    
    </h1>
        <p className="text-xl mb-8 text-center max-w-2xl">
          Manage and alleviate period cramps with our web+hardware based solution. 
          Track your frequency levels, periods dates, and receive personalized recommendations.
        </p>
        <div className="flex space-x-4 justify-center">
          <Link href="/sign-in">
            <Button>Login</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline">Dashboard</Button>
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <Features />
      </div>
    </>
  )
}