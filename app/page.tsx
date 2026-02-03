'use client'

import { Code, Database, Wrench, Mail, Linkedin, Github, Phone, ArrowDown, Briefcase, GraduationCap, Palette } from 'lucide-react'
import Link from 'next/link'

const experiences = [
  {
    title: 'Développeur Front-end',
    company: 'Aikini Web & Tech',
    location: 'Marrakesh',
    period: 'de avr. 2022 à ce jour',
  },
  {
    title: 'Développeur Front-end',
    company: 'Sahadina',
    location: 'Marrakech',
    period: 'de avr. 2013 à mars 2022',
  },
  {
    title: 'Intégrateur HTML',
    company: 'Anfa Communication',
    location: 'Marrakech',
    period: 'de janv. 2010 à juin 2013',
  },
  {
    title: 'Développeur Web',
    company: '212Communication',
    location: 'Marrakech',
    period: 'de sept. 2009 à déc. 2009',
  },
]

const formation = {
  diploma: 'BTS/INTIC',
  period: 'de janv. 2008 à déc. 2009',
}

const skills = {
  langages: {
    title: 'Langages & Frameworks',
    items: [
      'HTML5 & CSS3 : intégration sémantique, responsive design, Flexbox et Grid',
      'JavaScript & jQuery : interactivité, manipulation DOM, animations',
      'Bootstrap / Tailwind',
      'React / Next.js (basics) : création de composants simples, gestion du routing et rendu côté client/serveur (SSR/SSG)',
    ],
  },
  cms: {
    title: 'CMS',
    items: [
      'Drupal : theming, templates Twig',
      'PrestaShop : Smarty, thèmes, overrides front-end',
      'Shopify : Liquid, thèmes, sections dynamiques',
    ],
  },
  outils: {
    title: 'Outils & technologies',
    items: [
      'Git, GitHub, GitLab : versioning, collaboration',
      'Webpack, Grunt, Vite, NPM / Yarn : bundling, gestion des dépendances',
      'Chrome DevTools : debugging, optimisation performance, audit front-end',
      "Outils d'IA : assistance au développement front-end et optimisation des performances",
    ],
  },
  design: {
    title: 'Design & UI',
    items: [
      'Adobe XD, Figma : maquettes, prototypage',
      'Photoshop, Illustrator, InDesign : assets graphiques et intégration visuelle',
    ],
  },
}

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              Mustapha Essaàdaoui
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-600 dark:text-blue-400 font-semibold">
              Intégrateur Front-End
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6">
              Spécialisé dans le développement d&apos;interfaces web modernes, responsives et performantes, 
              avec une forte expérience sur les CMS et plateformes e-commerce.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              onClick={() => scrollToSection('skills')}
              className="group inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Mes Compétences
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 hover:scale-105"
            >
              Contact Me
            </button>
          </div>

          <div className="pt-8">
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 dark:bg-gray-900/50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                À propos de moi
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Intégrateur Front-End spécialisé dans le développement d&apos;interfaces web 
                  modernes, responsives et performantes, avec une forte expérience sur les CMS et 
                  plateformes e-commerce (Drupal, PrestaShop, Shopify, WordPress...).
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  J&apos;interviens sur la transformation de maquettes UI/UX en interfaces fonctionnelles, 
                  l&apos;intégration front-end propre et maintenable.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Habitué à travailler en collaboration avec designers et développeurs back-end, je 
                  porte une attention particulière à la performance, à l&apos;accessibilité et à la 
                  compatibilité multi-navigateurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-gray-50 dark:bg-gray-900/50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white text-center">
              Expérience professionnelle
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">
                        {exp.location}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section id="formation" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white text-center">
            Formation
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {formation.diploma}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {formation.period}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="skills" className="bg-gray-50 dark:bg-gray-900/50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white text-center">
              Compétences
            </h2>

            {/* Langages & Frameworks */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skills.langages.title}
                </h3>
              </div>
              <ul className="space-y-2 ml-9">
                {skills.langages.items.map((item, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CMS */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skills.cms.title}
                </h3>
              </div>
              <ul className="space-y-2 ml-9">
                {skills.cms.items.map((item, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outils & technologies */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Wrench className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skills.outils.title}
                </h3>
              </div>
              <ul className="space-y-2 ml-9">
                {skills.outils.items.map((item, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Design & UI */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Palette className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skills.design.title}
                </h3>
              </div>
              <ul className="space-y-2 ml-9">
                {skills.design.items.map((item, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-pink-600 dark:text-pink-400 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 dark:bg-gray-900/50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                Contactez-moi
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Vous avez un projet en tête ? N&apos;hésitez pas à me contacter pour discuter
                de vos besoins en développement web.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <Link
                href="mailto:contact@example.com"
                className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    contact@example.com
                  </p>
                </div>
              </Link>

              {/* Téléphone */}
              <Link
                href="tel:+212635188930"
                className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Téléphone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    +212 635 188 930
                  </p>
                </div>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/mustaphaessaadaoui/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    LinkedIn
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    /in/mustaphaessaadaoui
                  </p>
                </div>
              </Link>

              {/* GitHub */}
              <Link
                href="https://github.com/MustaphaEssa"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <Github className="w-6 h-6 text-gray-900 dark:text-gray-100" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    GitHub
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    github.com/MustaphaEssa
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
