import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Period Cramp Soother',
  description: 'Manage and alleviate period cramps with ease',
  site: {
    webmanifest: '/site.webmanifest',
    favicon: '/favicon.ico',
    logo: '/logo.png',
  },
  openGraph: {
    images: [
      {
        url: 'og.png',
        width: 800,
        height: 600,
        alt: 'Period Cramp Soother',
      },
    ],
  },
  metadataBase: new URL('https://period-cramp-soother.vercel.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <Analytics />
            <SpeedInsights />
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}