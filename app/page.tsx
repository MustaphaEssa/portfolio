import { ArrowRight, ArrowUpRight } from 'lucide-react'

const experiences = [
  { title: 'Développeur Front-end', company: 'Aikini Web & Tech', start: 'Avr. 2022', end: "Aujourd'hui" },
  { title: 'Développeur Front-end', company: 'Sahadina', start: 'Avr. 2013', end: 'Mars 2022' },
  { title: 'Intégrateur HTML', company: 'Anfa Communication', start: 'Janv. 2010', end: 'Juin 2013' },
  { title: 'Développeur Web', company: '212Communication', start: 'Sept. 2009', end: 'Déc. 2009' },
]

const formation = { diploma: 'BTS / INTIC', start: 'Janv. 2008', end: 'Déc. 2009' }

type Skill = { name: string; detail?: string }
type SkillGroup = { title: string; items: Skill[]; className: string }

// Grille 12 colonnes : 7+5 puis 5+7 pour casser la symétrie. Une seule case teintée.
const skillGroups: SkillGroup[] = [
  {
    title: 'Langages & frameworks',
    className: 'md:col-span-7 bg-accent-soft',
    items: [
      { name: 'HTML5 & CSS3', detail: 'intégration sémantique, responsive, Flexbox et Grid' },
      { name: 'JavaScript & jQuery', detail: 'interactivité, manipulation du DOM, animations' },
      { name: 'Bootstrap / Tailwind' },
      { name: 'React / Next.js (bases)', detail: 'composants, routing, rendu SSR/SSG' },
    ],
  },
  {
    title: 'CMS',
    className: 'md:col-span-5 bg-surface',
    items: [
      { name: 'Drupal', detail: 'theming, templates Twig' },
      { name: 'PrestaShop', detail: 'Smarty, thèmes, overrides front-end' },
      { name: 'Shopify', detail: 'Liquid, thèmes, sections dynamiques' },
    ],
  },
  {
    title: 'Design & UI',
    className: 'md:col-span-5 border border-line',
    items: [
      { name: 'Adobe XD, Figma', detail: 'maquettes, prototypage' },
      { name: 'Photoshop, Illustrator, InDesign', detail: 'assets graphiques' },
    ],
  },
  {
    title: 'Outils',
    className: 'md:col-span-7 bg-surface',
    items: [
      { name: 'Git, GitHub, GitLab', detail: 'versioning, collaboration' },
      { name: 'Webpack, Grunt, Vite, npm / Yarn', detail: 'bundling, dépendances' },
      { name: 'Chrome DevTools', detail: 'debugging, audit de performance' },
      { name: "Outils d'IA", detail: "assistance au développement et à l'optimisation" },
    ],
  },
]

const contactLinks = [
  { label: 'Téléphone', value: '+212 635 188 930', href: 'tel:+212635188930' },
  { label: 'LinkedIn', value: '/in/mustaphaessaadaoui', href: 'https://www.linkedin.com/in/mustaphaessaadaoui/', external: true },
  { label: 'GitHub', value: 'MustaphaEssa', href: 'https://github.com/MustaphaEssa', external: true },
]

const container = 'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'
const sectionTitle = 'text-3xl font-semibold tracking-tight text-fg sm:text-4xl'
const delay = (i: number) => ({ '--i': i }) as React.CSSProperties

export default function Home() {
  const years = new Date().getFullYear() - 2009

  return (
    <>
      {/* Hero : texte à gauche, repère chiffré à droite */}
      <section id="hero" className={`${container} scroll-mt-16 pb-20 pt-16 md:pb-28 md:pt-24`}>
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="reveal text-sm font-medium text-accent" style={delay(0)}>
              Développeur Front-End
            </p>
            <h1
              className="reveal mt-4 text-5xl font-semibold leading-[1.02] tracking-tighter text-fg sm:text-6xl lg:text-7xl"
              style={delay(1)}
            >
              Mustapha Essaàdaoui
            </h1>
            <p className="reveal mt-6 max-w-[38ch] text-lg leading-relaxed text-muted sm:text-xl" style={delay(2)}>
              J&apos;intègre des maquettes en interfaces rapides, accessibles et maintenables, sur Shopify, PrestaShop,
              Drupal ou React.
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-3" style={delay(3)}>
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-transform active:scale-[0.98]"
              >
                Voir mon parcours
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center whitespace-nowrap rounded-full border border-line px-6 py-3 text-sm font-medium text-fg transition-colors hover:border-fg/40 active:scale-[0.98]"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="reveal md:col-span-4 md:border-l md:border-line md:pl-8" style={delay(4)}>
            <p className="text-7xl font-semibold leading-none tracking-tighter text-fg sm:text-8xl">
              {years}
              <span className="text-accent"> ans</span>
            </p>
            <p className="mt-3 max-w-[26ch] text-muted">d&apos;intégration front-end, en agence et en studio, depuis 2009.</p>
          </div>
        </div>
      </section>

      {/* À propos : phrase d'accroche large, puis deux colonnes */}
      <section id="about" className="scroll-mt-16 border-t border-line">
        <div className={`${container} reveal-on-scroll py-20 md:py-28`}>
          <h2 className={sectionTitle}>À propos</h2>
          <p className="mt-8 max-w-[34ch] text-2xl leading-snug text-fg sm:text-3xl">
            Je transforme des maquettes UI/UX en interfaces fonctionnelles, avec une forte expérience des CMS et de
            l&apos;e-commerce.
          </p>
          <div className="mt-10 grid gap-6 text-muted md:grid-cols-2 md:gap-12">
            <p className="max-w-[60ch] leading-relaxed">
              Drupal, PrestaShop, Shopify, WordPress : je livre une intégration front-end propre et maintenable, qui
              reste simple à faire évoluer après la mise en ligne.
            </p>
            <p className="max-w-[60ch] leading-relaxed">
              Habitué à travailler avec des designers et des développeurs back-end, je porte une attention
              particulière à la performance, à l&apos;accessibilité et à la compatibilité entre navigateurs.
            </p>
          </div>
        </div>
      </section>

      {/* Parcours : frise en lignes, période à gauche */}
      <section id="experience" className="scroll-mt-16 border-t border-line">
        <div className={`${container} reveal-on-scroll py-20 md:py-28`}>
          <h2 className={sectionTitle}>Parcours</h2>
          <ol className="mt-10 divide-y divide-line border-y border-line">
            {experiences.map((exp) => (
              <li key={exp.company} className="grid gap-1 py-6 md:grid-cols-12 md:items-baseline md:gap-6">
                <p className="font-mono text-xs text-muted md:col-span-3">
                  {exp.start} - {exp.end}
                </p>
                <h3 className="text-xl font-medium text-fg md:col-span-5">{exp.company}</h3>
                <p className="text-muted md:col-span-4 md:text-right">{exp.title}</p>
              </li>
            ))}
          </ol>

          <div id="formation" className="mt-16 scroll-mt-24">
            <h3 className="text-xl font-semibold tracking-tight text-fg">Formation</h3>
            <div className="mt-4 grid gap-1 border-y border-line py-6 md:grid-cols-12 md:items-baseline md:gap-6">
              <p className="font-mono text-xs text-muted md:col-span-3">
                {formation.start} - {formation.end}
              </p>
              <p className="text-xl font-medium text-fg md:col-span-9">{formation.diploma}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences : grille asymétrique 7/5 puis 5/7 */}
      <section id="skills" className="scroll-mt-16 border-t border-line">
        <div className={`${container} reveal-on-scroll py-20 md:py-28`}>
          <h2 className={sectionTitle}>Compétences</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-12">
            {skillGroups.map((group) => (
              <div key={group.title} className={`rounded-2xl p-6 sm:p-8 ${group.className}`}>
                <h3 className="text-lg font-semibold text-fg">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.name} className="leading-snug">
                      <span className="text-fg">{item.name}</span>
                      {item.detail && <span className="text-muted"> : {item.detail}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact : l'email comme élément principal */}
      <section id="contact" className="scroll-mt-16 border-t border-line">
        <div className={`${container} reveal-on-scroll py-20 md:py-28`}>
          <h2 className={sectionTitle}>Contact</h2>
          <p className="mt-4 max-w-[50ch] text-lg text-muted">
            Un projet en tête ? Écrivez-moi pour parler de vos besoins en développement web.
          </p>
          <a
            href="mailto:mustapha.essaadaoui@gmail.com"
            className="group mt-10 inline-flex max-w-full items-center gap-3 break-all text-2xl font-medium tracking-tight text-fg transition-colors hover:text-accent sm:text-4xl lg:text-5xl"
          >
            mustapha.essaadaoui@gmail.com
            <ArrowUpRight
              className="h-7 w-7 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-10 sm:w-10"
              strokeWidth={1.5}
            />
          </a>

          <dl className="mt-14 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
            {contactLinks.map((link) => (
              <div key={link.label}>
                <dt className="text-sm text-muted">{link.label}</dt>
                <dd className="mt-1">
                  <a
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-fg underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    {link.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
