'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Navigation from './Navigation'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Échap ferme le menu mobile.
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="text-base font-semibold tracking-tight text-fg" translate="no">
          Mustapha Essaàdaoui
        </a>
        <div className="flex items-center gap-4">
          <Navigation />
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted md:hidden"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            aria-controls="menu-mobile"
          >
            {mobileOpen ? <X className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" /> : <Menu className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="menu-mobile" className="border-t border-line bg-bg md:hidden">
          <Navigation mobile onNavClick={() => setMobileOpen(false)} />
        </div>
      )}
    </header>
  )
}
