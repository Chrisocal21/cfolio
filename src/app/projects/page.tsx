import Link from 'next/link'
import Image from 'next/image'
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
      title: 'ChrisOCPhoto',
      category: 'Photography Portfolio',
      description: 'Professional photography portfolio showcasing creative work with elegant galleries and client booking system.',
      tech: ['WordPress', 'Custom Theme', 'Gallery Plugin'],
      url: 'https://www.chrisocphoto.com',
      link: 'https://www.chrisocphoto.com',
      github: undefined,
      screenshot: '/screenshots/chrisocphoto.png'
    },
    {
      id: 2,
      title: 'CookbookVerse',
      category: 'Recipe Platform',
      description: 'Digital cookbook platform for discovering, saving, and sharing recipes with an intuitive user experience.',
      tech: ['React', 'Node.js', 'Database'],
      url: 'https://www.cookbookverse.com',
      link: 'https://www.cookbookverse.com',
      github: undefined,
      screenshot: '/screenshots/cookbookverse.png'
    },
    {
      id: 3,
      title: 'GetEditly',
      category: 'SaaS Platform',
      description: 'Web-based editing tool with collaborative features and real-time updates for content creators.',
      tech: ['Next.js', 'TypeScript', 'WebSockets'],
      url: 'https://www.geteditly.com',
      link: 'https://www.geteditly.com',
      github: undefined,
      screenshot: '/screenshots/geteditly.png'
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
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectImageLink}>
                <div className={styles.projectImage}>
                  <div className={styles.screenshotContainer}>
                    <div className={styles.placeholderFallback}>
                      <span className={styles.projectIcon}>
                        {project.category.includes('Photo') ? '📷' : project.category.includes('Recipe') ? '🍳' : '✏️'}
                      </span>
                      <p className={styles.projectTitle}>{project.title}</p>
                      <p className={styles.projectUrl}>{project.url.replace('https://www.', '')}</p>
                    </div>
                  </div>
                  <div className={styles.imageOverlay}>
                    <span className={styles.viewButton}>View Live Site →</span>
                  </div>
                </div>
              </Link>
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
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  Visit Site →
                </Link>
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    GitHub →
                  </Link>
                )}
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
