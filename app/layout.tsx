import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Period Cramp Soother',
  description: 'Manage and alleviate period cramps with ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
         <Navbar />
         <main className="container mx-auto px-4 py-8">
          {children}
         </main>
         <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}