export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Plateforme e-commerce moderne avec panier, authentification et paiement. Interface utilisateur intuitive et responsive.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '2',
    title: 'Dashboard Analytics',
    description: 'Tableau de bord analytique avec visualisation de données en temps réel. Graphiques interactifs et export de rapports.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '3',
    title: 'Application de Gestion de Tâches',
    description: 'Application de gestion de tâches collaborative avec synchronisation en temps réel et notifications.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '4',
    title: 'Blog Technique',
    description: 'Blog technique avec système de commentaires, recherche avancée et gestion de contenu markdown.',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '5',
    title: 'API RESTful',
    description: 'API RESTful robuste avec authentification JWT, validation de données et documentation Swagger.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com',
  },
]
