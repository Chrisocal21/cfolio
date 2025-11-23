'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoIcon}>◢</span>
        <span className={styles.logoText}>ChrisOC</span>
        <span className={styles.logoStudio}>Studios</span>
      </Link>
      
      <button 
        className={styles.menuToggle}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className={styles.hamburger}></span>
        <span className={styles.hamburger}></span>
        <span className={styles.hamburger}></span>
      </button>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
        <li>
          <Link href="/photography" onClick={() => setIsMenuOpen(false)}>Photography</Link>
        </li>
        <li>
          <Link href="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
        </li>
        <li>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        </li>
        <li>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
