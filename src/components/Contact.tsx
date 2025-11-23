import Link from 'next/link'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2>Let&apos;s Work Together</h2>
            <p className={styles.contactDescription}>
              I&apos;m always interested in hearing about new projects and opportunities.
              Whether you need a photographer for an event or a developer for your next web project,
              feel free to reach out!
            </p>
            
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>📧</div>
                <div>
                  <h3>Email</h3>
                  <Link href="mailto:your.email@example.com">
                    your.email@example.com
                  </Link>
                </div>
              </div>
              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>💼</div>
                <div>
                  <h3>Availability</h3>
                  <p>Currently accepting new projects</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.socialSection}>
            <h3>Connect With Me</h3>
            <div className={styles.socialLinks}>
              <Link 
                href="https://github.com/yourusername" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>💻</span>
                <span>GitHub</span>
              </Link>
              <Link 
                href="https://linkedin.com/in/yourusername" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>💼</span>
                <span>LinkedIn</span>
              </Link>
              <Link 
                href="https://twitter.com/yourusername" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>🐦</span>
                <span>Twitter</span>
              </Link>
              <Link 
                href="https://instagram.com/yourusername" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>📸</span>
                <span>Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
