import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import styles from './photography.module.css'

export default function PhotographyPage() {
  return (
    <>
      <Navigation />
      <div className={styles.page}>
        <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1>📷 Photography</h1>
          <p>Capturing moments and telling stories through images</p>
        </div>
        
        <div className={styles.galleryGrid}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <div key={item} className={styles.photoCard}>
              <div className={styles.photoPlaceholder}>
                <span>Photo {item}</span>
              </div>
              <div className={styles.photoOverlay}>
                <p>Click to view full size</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.pageFooter}>
          <Link href="/projects" className={styles.nextLink}>
            View Development Projects →
          </Link>
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}
