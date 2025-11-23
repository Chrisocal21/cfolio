import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import styles from './projects.module.css'

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <ProjectsContent />
      <Footer />
    </>
  )
}

function ProjectsContent() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Application',
      description: 'A full-featured e-commerce platform with cart, checkout, and payment integration built with Next.js and Stripe.',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
      image: '/placeholder.jpg',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      category: 'Web Design',
      description: 'Responsive portfolio website for a creative professional with smooth animations and great UX.',
      tech: ['React', 'Framer Motion', 'Tailwind CSS'],
      image: '/placeholder.jpg',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      category: 'Web Application',
      description: 'Collaborative task management tool with real-time updates and team features.',
      tech: ['Next.js', 'Firebase', 'Material-UI'],
      image: '/placeholder.jpg',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'Web Application',
      description: 'Real-time weather dashboard with forecasts and interactive maps.',
      tech: ['React', 'OpenWeather API', 'Chart.js'],
      image: '/placeholder.jpg',
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Blog Platform',
      category: 'CMS',
      description: 'Modern blog platform with markdown support and SEO optimization.',
      tech: ['Next.js', 'MDX', 'Contentful'],
      image: '/placeholder.jpg',
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      category: 'Mobile App',
      description: 'Mobile-first fitness tracking app with workout plans and progress charts.',
      tech: ['React Native', 'Firebase', 'Chart.js'],
      image: '/placeholder.jpg',
      link: '#',
      github: '#'
    }
  ]

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1>💻 Development Projects</h1>
          <p>Building digital experiences with modern web technologies</p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.imagePlaceholder}>
                  <span>Project Screenshot</span>
                </div>
              </div>
              <div className={styles.projectContent}>
                <span className={styles.category}>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((tech, index) => (
                    <span key={index} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className={styles.projectFooter}>
                <Link href={project.link} className={styles.projectLink}>
                  View Live →
                </Link>
                <Link href={project.github} className={styles.projectLink}>
                  GitHub →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.pageFooter}>
          <Link href="/about" className={styles.nextLink}>
            Learn More About Me →
          </Link>
        </div>
      </div>
      </div>
  )
}
