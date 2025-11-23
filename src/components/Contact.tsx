import Link from 'next/link'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Get In Touch</h2>
      <p>Let&apos;s connect! Update with your contact information.</p>
      <div className={styles.socialLinks}>
        <Link 
          href="https://github.com/yourusername" 
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        <Link 
          href="https://linkedin.com/in/yourusername" 
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        <Link 
          href="mailto:your.email@example.com" 
          className={styles.socialLink}
        >
          Email
        </Link>
      </div>
    </section>
  )
}
