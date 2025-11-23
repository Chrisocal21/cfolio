import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Hello, I&apos;m <span className={styles.highlight}>[Your Name]</span>
      </h1>
      <p className={styles.subtitle}>
        Building amazing things, one project at a time.
      </p>
      <div className={styles.ctaButtons}>
        <Link href="#work" className={`${styles.btn} ${styles.btnPrimary}`}>
          View My Work
        </Link>
        <Link href="#contact" className={`${styles.btn} ${styles.btnSecondary}`}>
          Get In Touch
        </Link>
      </div>
    </section>
  )
}
