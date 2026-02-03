'use client'

import Navigation from './Navigation'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={scrollToTop}
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Mustapha Essaàdaoui
          </button>
          <div className="flex items-center gap-4">
            <Navigation />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
