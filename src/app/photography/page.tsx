'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import styles from './photography.module.css'

const photos = [
  { src: '/photography/Yosemite falls.jpg', alt: 'Yosemite Falls' },
  { src: '/photography/Death Valley 060.jpg', alt: 'Death Valley' },
  { src: '/photography/whitneys portal.jpg', alt: 'Whitney\'s Portal' },
  { src: '/photography/morobay.jpg', alt: 'Morro Bay' },
  { src: '/photography/Gview.jpg', alt: 'Garden View' },
  { src: '/photography/IMG_5613.JPG', alt: 'Nature Photography' },
  { src: '/photography/14733575_1792749324276055_6134730289726881792_n.jpg', alt: 'Landscape Photography' },
  { src: '/photography/14733127_790065137799827_7646785865724723200_n.jpg', alt: 'Nature Scene' },
  { src: '/photography/14727432_319095848448310_4245529409219461120_n.jpg', alt: 'Scenic View' },
  { src: '/photography/14723469_1669243566719997_5672245599953485824_n.jpg', alt: 'Outdoor Photography' },
  { src: '/photography/12142143_443914715793745_489165632_n.jpg', alt: 'Photography Sample' },
  { src: '/photography/12142143_1653976954875483_212987198_n.jpg', alt: 'Photography Collection' },
  { src: '/photography/12135239_735646073248668_1679387215_n.jpg', alt: 'Photo Series' },
  { src: '/photography/12120526_163674963984590_1526845879_n.jpg', alt: 'Photo Gallery' },
  { src: '/photography/12081170_914457225314351_1637501026_n.jpg', alt: 'Photography Work' },
  { src: '/photography/12071192_476443895894043_1233713200_n.jpg', alt: 'Photo Collection' },
  { src: '/photography/11856692_906244889458062_215255781_n.jpg', alt: 'Photography Portfolio' },
  { src: '/photography/11349189_192521327747333_1881580269_n.jpg', alt: 'Photo Showcase' },
]

export default function PhotographyPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }
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
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className={styles.photoCard}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                className={styles.photoImage}
                quality={85}
              />
              <div className={styles.photoOverlay}>
                <p>{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {lightboxOpen && (
          <div className={styles.lightbox} onClick={closeLightbox}>
            <button 
              className={styles.closeButton}
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <button 
              className={styles.navButton + ' ' + styles.prevButton}
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button 
              className={styles.navButton + ' ' + styles.nextButton}
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              aria-label="Next image"
            >
              ›
            </button>
            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
              <Image
                src={photos[currentIndex].src}
                alt={photos[currentIndex].alt}
                width={1920}
                height={1080}
                className={styles.lightboxImage}
                quality={95}
              />
              <div className={styles.lightboxCaption}>
                <p>{photos[currentIndex].alt}</p>
                <span className={styles.imageCounter}>
                  {currentIndex + 1} / {photos.length}
                </span>
              </div>
            </div>
          </div>
        )}

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
