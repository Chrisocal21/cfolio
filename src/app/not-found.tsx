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
            <span className={styles.icon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="64" height="64">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </span>
            <span className={styles.icon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="64" height="64">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </span>
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
