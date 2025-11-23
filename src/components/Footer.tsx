import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} ChrisOC Studios. All rights reserved.</p>
    </footer>
  )
}
