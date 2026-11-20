'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { id: 'about', label: 'À propos' },
  { id: 'experience', label: 'Parcours' },
  { id: 'skills', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
]

interface NavigationProps {
  mobile?: boolean
  onNavClick?: () => void
}

export default function Navigation({ mobile, onNavClick }: NavigationProps) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )

    const ids = ['hero', ...navItems.map((item) => item.id)]
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  if (mobile) {
    return (
      <nav className="flex flex-col px-4 py-2">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={onNavClick}
            className={`rounded-xl px-4 py-3 text-base transition-colors ${
              activeSection === item.id ? 'bg-surface text-fg' : 'text-muted hover:text-fg'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    )
  }

  return (
    <nav className="hidden items-center gap-7 md:flex">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          aria-current={activeSection === item.id ? 'true' : undefined}
          className={`text-sm transition-colors ${
            activeSection === item.id ? 'text-fg' : 'text-muted hover:text-fg'
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}
