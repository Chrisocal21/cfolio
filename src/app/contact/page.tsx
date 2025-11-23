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
              <div className={styles.icon} role="img" aria-label="Email icon">📧</div>
              <h3>Email</h3>
              <Link href="mailto:hello@chrisocstudios.com">
                hello@chrisocstudios.com
              </Link>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.icon} role="img" aria-label="Phone icon">📱</div>
              <h3>Phone</h3>
              <Link href="tel:+1234567890">
                Available upon request
              </Link>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.icon} role="img" aria-label="Location icon">📍</div>
              <h3>Location</h3>
              <p>Remote / Available Worldwide</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.icon}>💼</div>
              <h3>Availability</h3>
              <p>Currently accepting new projects</p>
            </div>
          </div>

          <div className={styles.socialSection}>
            <h2>Social Media</h2>
            <p className={styles.socialIntro}>
              Follow my photography and projects on social platforms
            </p>
            <div className={styles.socialLinks}>
              <Link 
                href="https://github.com/Chrisocal21" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </span>
                <div>
                  <h4>GitHub</h4>
                  <p>@Chrisocal21</p>
                </div>
              </Link>
              <Link 
                href="https://instagram.com/chrisocphoto" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
                <div>
                  <h4>Instagram - Photography</h4>
                  <p>@chrisocphoto</p>
                </div>
              </Link>
              <Link 
                href="https://instagram.com/cookbookverse" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
                <div>
                  <h4>Instagram - CookbookVerse</h4>
                  <p>@cookbookverse</p>
                </div>
              </Link>
            </div>
          </div>

          <div className={styles.websitesSection}>
            <h2>My Websites</h2>
            <p className={styles.socialIntro}>
              Explore my professional work and projects
            </p>
            <div className={styles.socialLinks}>
              <Link 
                href="https://www.chrisocphoto.com" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                    <circle cx="12" cy="13" r="4"/>
                  </svg>
                </span>
                <div>
                  <h4>ChrisOC Photography</h4>
                  <p>chrisocphoto.com</p>
                </div>
              </Link>
              <Link 
                href="https://www.cookbookverse.com" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                </span>
                <div>
                  <h4>CookbookVerse</h4>
                  <p>cookbookverse.com</p>
                </div>
              </Link>
              <Link 
                href="https://www.geteditly.com" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </span>
                <div>
                  <h4>GetEditly</h4>
                  <p>geteditly.com</p>
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
