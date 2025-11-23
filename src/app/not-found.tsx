import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.iconContainer}>
            <span className={styles.icon}>📷</span>
            <span className={styles.icon}>💻</span>
          </div>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Page Not Found</h2>
          <p className={styles.description}>
            Looks like this page took a wrong turn. Let&apos;s get you back on track.
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/" className={styles.homeButton}>
              ← Back to Home
            </Link>
            <Link href="/photography" className={styles.secondaryButton}>
              View Photography
            </Link>
            <Link href="/projects" className={styles.secondaryButton}>
              View Projects
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
