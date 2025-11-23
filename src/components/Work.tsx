import Link from 'next/link'
import styles from './Work.module.css'

export default function Work() {
  // Placeholder projects - replace with real data
  const projects = [
    {
      id: 1,
      title: 'Project Name',
      category: 'development',
      description: 'A modern web application built with Next.js and TypeScript.',
      tech: ['Next.js', 'TypeScript', 'CSS'],
      image: '/placeholder.jpg',
      link: '#'
    },
    {
      id: 2,
      title: 'Another Project',
      category: 'development',
      description: 'Responsive website with smooth animations and great UX.',
      tech: ['React', 'JavaScript', 'Tailwind'],
      image: '/placeholder.jpg',
      link: '#'
    },
    {
      id: 3,
      title: 'Portfolio Site',
      category: 'development',
      description: 'Custom portfolio website for a creative professional.',
      tech: ['Next.js', 'CSS Modules'],
      image: '/placeholder.jpg',
      link: '#'
    }
  ]

  return (
    <>
      {/* Photography Section */}
      <section id="photography" className={styles.workSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>📷 Photography</h2>
            <p>Capturing moments and telling stories through images</p>
          </div>
          
          <div className={styles.galleryGrid}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className={styles.photoCard}>
                <div className={styles.photoPlaceholder}>
                  <span>Photo {item}</span>
                </div>
                <div className={styles.photoOverlay}>
                  <p>Click to view full size</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sectionFooter}>
            <Link href="#contact" className={styles.ctaLink}>
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.workSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>💻 Development Projects</h2>
            <p>Building digital experiences with modern web technologies</p>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <Link href={project.link} key={project.id} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <div className={styles.imagePlaceholder}>
                    <span>Project Screenshot</span>
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.techStack}>
                    {project.tech.map((tech, index) => (
                      <span key={index} className={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.projectFooter}>
                  <span className={styles.viewProject}>View Project →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.sectionFooter}>
            <Link href="#contact" className={styles.ctaLink}>
              See All Projects →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
