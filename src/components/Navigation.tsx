import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>MY_PORTFOLIO</div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#work">Work</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
