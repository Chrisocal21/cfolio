'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Breadcrumbs.module.css'

export default function Breadcrumbs() {
  const pathname = usePathname()
  
  // Don't show breadcrumbs on home page
  if (pathname === '/') return null

  const pathSegments = pathname.split('/').filter(segment => segment)
  
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    ...pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/')
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      return { label, href }
    })
  ]

  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ol className={styles.breadcrumbList}>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className={styles.breadcrumbItem}>
            {index < breadcrumbs.length - 1 ? (
              <>
                <Link href={crumb.href} className={styles.breadcrumbLink}>
                  {crumb.label}
                </Link>
                <span className={styles.separator}>/</span>
              </>
            ) : (
              <span className={styles.current}>{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
