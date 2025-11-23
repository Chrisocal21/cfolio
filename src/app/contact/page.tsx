import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import styles from './contact.module.css'

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1>Let&apos;s Work Together</h1>
          <p>Get in touch for photography sessions or web development projects</p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.icon}>📧</div>
              <h3>Email</h3>
              <Link href="mailto:your.email@example.com">
                your.email@example.com
              </Link>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.icon}>📱</div>
              <h3>Phone</h3>
              <Link href="tel:+1234567890">
                (123) 456-7890
              </Link>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.icon}>📍</div>
              <h3>Location</h3>
              <p>City, State, Country</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.icon}>💼</div>
              <h3>Availability</h3>
              <p>Currently accepting new projects</p>
            </div>
          </div>

          <div className={styles.socialSection}>
            <h2>Connect With Me</h2>
            <p className={styles.socialIntro}>
              Follow my work and stay updated on my latest projects
            </p>
            <div className={styles.socialLinks}>
              <Link 
                href="https://github.com/yourusername" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>💻</span>
                <div>
                  <h4>GitHub</h4>
                  <p>@yourusername</p>
                </div>
              </Link>
              <Link 
                href="https://linkedin.com/in/yourusername" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <p>/in/yourusername</p>
                </div>
              </Link>
              <Link 
                href="https://twitter.com/yourusername" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>🐦</span>
                <div>
                  <h4>Twitter</h4>
                  <p>@yourusername</p>
                </div>
              </Link>
              <Link 
                href="https://instagram.com/yourusername" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>📸</span>
                <div>
                  <h4>Instagram</h4>
                  <p>@yourusername</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}
