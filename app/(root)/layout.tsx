import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from '@/components/site-header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Period Cramp Soother',
  description: 'Manage and alleviate period cramps with ease',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SiteHeader />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer/>
          </ThemeProvider>
        </body>
      </html>

  )
}