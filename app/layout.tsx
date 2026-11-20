import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'

const sans = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://mustapha-essaadaoui.vercel.app'),
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0c0e' },
  ],
}

// Applique le thème avant le premier rendu pour éviter le flash clair/sombre.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}})()`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        <ThemeProvider>
          <a
            href="#contenu"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
          >
            Aller au contenu
          </a>
          <div className="flex min-h-[100dvh] flex-col">
            <Header />
            <main id="contenu" className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
