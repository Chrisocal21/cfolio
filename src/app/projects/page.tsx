import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CodeExplainer from '@/components/CodeExplainer'
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
      github: 'https://github.com/Chrisocal21/chrisocphoto',
      date: '2024',
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
      github: 'https://github.com/Chrisocal21/cookbookverse',
      date: '2024',
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
      github: 'https://github.com/Chrisocal21/geteditly',
      date: '2023 - Present',
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
                <div className={styles.projectHeader}>
                  <span className={styles.category}>{project.category}</span>
                  <span className={styles.projectDate}>{project.date}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((tech, index) => (
                    <span key={index} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className={styles.projectFooter}>
                <div className={styles.projectLinks}>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Visit Site
                  </Link>
                  {project.github && (
                    <Link href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </Link>
                  )}
                </div>
                <CodeExplainer projectName={project.title} />
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
