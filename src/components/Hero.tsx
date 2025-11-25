import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          <span className={styles.welcomeText}>Welcome to</span>
          <span className={styles.brandLine}>
            <span className={styles.heroIcon}>◢</span>
            <span className={styles.brandName}>ChrisOC</span> <span className={styles.brandStudios}>Digital</span>
          </span>
        </h1>
        <p className={styles.subtitle}>
          Photographer & Developer
        </p>
        <p className={styles.description}>
          Capturing moments through the lens and crafting digital experiences through code.
          Explore my journey in visual storytelling and web development.
        </p>
        
        <div className={styles.ctaGrid}>
          <Link href="/photography" className={styles.ctaCard}>
            <div className={styles.ctaIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="40" height="40">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
            <h3>Photography</h3>
            <p>View my photo gallery</p>
          </Link>
          <Link href="/projects" className={styles.ctaCard}>
            <div className={styles.ctaIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="40" height="40">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <h3>Development</h3>
            <p>See my tech projects</p>
          </Link>
        </div>

        <div className={styles.quickLinks}>
          <Link href="/about" className={styles.linkBtn}>
            Learn More About Me
          </Link>
          <Link href="/contact" className={styles.linkBtn}>
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
