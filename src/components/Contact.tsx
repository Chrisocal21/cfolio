import Link from 'next/link'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Get In Touch</h2>
      <p>Let&apos;s connect! Update with your contact information.</p>
      <div className={styles.socialLinks}>
        <Link href="#" className={styles.socialLink}>
          GitHub
        </Link>
        <Link href="#" className={styles.socialLink}>
          LinkedIn
        </Link>
        <Link href="#" className={styles.socialLink}>
          Email
        </Link>
      </div>
    </section>
  )
}
