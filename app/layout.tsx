import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mustapha Essaàdaoui - Front-End / JavaScript Developer',
  description: 'Portfolio professionnel de Mustapha Essaàdaoui, développeur Front-End spécialisé en JavaScript, React et Next.js.',
  keywords: ['développeur web', 'front-end', 'JavaScript', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Mustapha Essaàdaoui' }],
  creator: 'Mustapha Essaàdaoui',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://mustapha-essaadaoui.vercel.app',
    title: 'Mustapha Essaàdaoui - Front-End / JavaScript Developer',
    description: 'Portfolio professionnel de Mustapha Essaàdaoui, développeur Front-End spécialisé en JavaScript, React et Next.js.',
    siteName: 'Mustapha Essaàdaoui Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mustapha Essaàdaoui - Front-End / JavaScript Developer',
    description: 'Portfolio professionnel de Mustapha Essaàdaoui, développeur Front-End spécialisé en JavaScript, React et Next.js.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
