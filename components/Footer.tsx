export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Mustapha Essaàdaoui</p>
        <a href="#hero" className="transition-colors hover:text-fg">
          Haut de page
        </a>
      </div>
    </footer>
  )
}
