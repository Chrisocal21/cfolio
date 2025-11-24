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
            <div className={styles.ctaIcon}>📷</div>
            <h3>Photography</h3>
            <p>View my photo gallery</p>
          </Link>
          <Link href="/projects" className={styles.ctaCard}>
            <div className={styles.ctaIcon}>💻</div>
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
