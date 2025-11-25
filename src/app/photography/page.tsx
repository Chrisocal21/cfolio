'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import styles from './photography.module.css'

// To categorize photos, add category property to each photo object
// Available categories: 'landscape', 'event', 'portrait', 'blackwhite', 'nature', 'sports'
// Example: { src: '...', alt: '...', title: '...', category: 'landscape' }
const photos = [
  { src: '/photography/Yosemite falls.jpg', alt: 'Yosemite Falls cascades from the granite cliffs, framed by towering pines and an open meadow below. Captured in black and white, the scene feels timeless — nature’s power and stillness balanced in a single frame.', title: 'Yosemite Falls' },
  { src: '/photography/Death Valley 060.jpg', alt: 'A decaying wooden structure stands against the stark landscape of Death Valley, its weathered beams framing the desert beyond. Captured in black and white, the image echoes the ghosts of the mining era — a reminder of human grit slowly surrendering to time and sand.', title: 'Death Valley Dunes' },
  { src: '/photography/whitneys portal.jpg', alt: 'Framed by the natural arch of Whitney Portal, the Sierra peaks rise in quiet strength beyond. The black-and-white tones draw out the contrast between the smooth stone foreground and the rugged, snow-capped mountains — a perfect window into California’s wild heights.', title: 'Whitney\'s Portal' },
  { src: '/photography/morobay.jpg', alt: 'Serene coastal scene at Morro Bay featuring the iconic Morro Rock at sunset', title: 'Morro Bay Sunset' },
  { src: '/photography/Gview.jpg', alt: 'Coastal view with expansive ocean and rugged cliffs under a clear sky', title: 'Grand View' },
  { src: '/photography/IMG_5613.JPG', alt: 'Desert landscape with Joshua trees', title: 'Joshua Tree' },
  { src: '/photography/14733575_1792749324276055_6134730289726881792_n.jpg', alt: 'Wrigley Field baseball stadium in Chicago filled with fans during a game', title: 'Wrigley Field' },
  { src: '/photography/14733127_790065137799827_7646785865724723200_n.jpg', alt: 'Cubs vs Indians baseball game at Wrigley Field', title: 'Cubs vs Indians' },
  { src: '/photography/14727432_319095848448310_4245529409219461120_n.jpg', alt: 'Chicago River flowing through downtown Chicago with city skyline in the background', title: 'Downtown Chicago' },
  { src: '/photography/14723469_1669243566719997_5672245599953485824_n.jpg', alt: 'Chicago River during sunset with vibrant colors reflecting on the water', title: 'Downtown Chicago' },
  { src: '/photography/12142143_443914715793745_489165632_n.jpg', alt: 'Carlsbad Flower Fields with vibrant blooms stretching across rolling hills', title: 'Carlsbad, CA' },
  { src: '/photography/12142143_1653976954875483_212987198_n.jpg', alt: 'Delete', title: 'Delete' },
  { src: '/photography/12135239_735646073248668_1679387215_n.jpg', alt: 'A river in South Korea ', title: 'South Korea River' },
  { src: '/photography/12120526_163674963984590_1526845879_n.jpg', alt: 'Nightlife at Desert Hearts Festival', title: 'Desert Hearts Festival' },
  { src: '/photography/12081170_914457225314351_1637501026_n.jpg', alt: 'Daytime at Desert Hearts Festival', title: 'Desert Hearts Festival' },
  { src: '/photography/12071192_476443895894043_1233713200_n.jpg', alt: 'Death Valley Mines', title: 'Death Valley, California' },
  { src: '/photography/11856692_906244889458062_215255781_n.jpg', alt: 'A lonely stretch of road cuts through the John Muir Wilderness, framed by rugged pines and distant Sierra peaks — a quiet invitation into the wild.', title: 'John Muir Wilderness' },
  { src: '/photography/11349189_192521327747333_1881580269_n.jpg', alt: 'Cape Shiriyazaki', title: 'Misawa, Japan' },
]

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'landscape', label: 'Landscape' },
  { id: 'event', label: 'Events' },
  { id: 'portrait', label: 'Portraits' },
  { id: 'blackwhite', label: 'Black & White' },
  { id: 'nature', label: 'Nature' },
  { id: 'sports', label: 'Sports' },
]

export default function PhotographyPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => (photo as any).category === activeCategory)

  const openLightbox = (index: number) => {
    // Find the actual index in the full photos array
    const photo = filteredPhotos[index]
    const actualIndex = photos.findIndex(p => p.src === photo.src)
    setCurrentIndex(actualIndex)
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
          <h1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '0.5rem'}}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg> Photography</h1>
          <p>Capturing moments and telling stories through images</p>
        </div>

        <div className={styles.filterBar}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.filterButton} ${activeCategory === category.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
              <span className={styles.filterCount}>
                {category.id === 'all' 
                  ? photos.length 
                  : photos.filter(p => (p as any).category === category.id).length}
              </span>
            </button>
          ))}
        </div>
        
        <div className={styles.galleryGrid}>
          {filteredPhotos.map((photo, index) => (
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
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA3gAA="
              />
              <div className={styles.photoOverlay}>
                <p>{photo.title}</p>
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
                priority
              />
              <div className={styles.lightboxCaption}>
                <h3>{photos[currentIndex].title}</h3>
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
