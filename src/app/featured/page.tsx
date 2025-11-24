'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import styles from './featured.module.css'

export default function FeaturedPage() {
  const photos = [
    { type: 'photo', src: '/photography/Yosemite falls.jpg', title: 'Yosemite Falls', category: 'Landscape', description: 'Majestic Yosemite Falls cascading down granite cliffs in Yosemite National Park.' },
    { type: 'photo', src: '/photography/Death Valley 060.jpg', title: 'Death Valley Dunes', category: 'Landscape', description: 'Golden hour light illuminating the dramatic sand dunes and mountains of Death Valley.' },
    { type: 'photo', src: '/photography/morobay.jpg', title: 'Morro Bay Sunset', category: 'Landscape', description: 'Serene coastal scene at Morro Bay featuring the iconic Morro Rock at sunset.' }
  ]

  const projects = [
    { type: 'project', title: 'ChrisOCPhoto', screenshot: '/screenshots/chrisocphoto sc.jpg', url: 'https://chrisocphoto.vercel.app', category: 'Photography Portfolio', description: 'Professional photography portfolio with elegant galleries and booking system.' },
    { type: 'project', title: 'GetEditly', screenshot: '/screenshots/geteditly sc.jpg', url: 'https://www.geteditly.com', category: 'Photo Editor', description: 'AI-powered photo editor with smart enhancements and auto-editing.' },
    { type: 'project', title: 'CookbookVerse', screenshot: '/screenshots/cookbookverse sc.jpg', url: 'https://www.cookbookverse.com', category: 'Recipe Platform', description: 'Digital cookbook for discovering and sharing recipes.' },
    { type: 'project', title: 'PlanAI', screenshot: '/screenshots/planai sc.jpg', url: 'https://plan-ai-livid.vercel.app', category: 'AI Assistant', description: 'AI planning assistant for organizing tasks and projects.' }
  ]

  const [randomFeatured, setRandomFeatured] = useState<any>(null)

  useEffect(() => {
    const allContent = [...photos, ...projects]
    const randomIndex = Math.floor(Math.random() * allContent.length)
    setRandomFeatured(allContent[randomIndex])
  }, [])

  return (
    <>
      <Navigation />
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <h1>✨ Featured Work</h1>
            <p>A showcase of my best photography and development projects</p>
          </div>

          {randomFeatured && (
            <div className={styles.heroSection}>
              <div className={styles.heroLabel}>Featured This Visit</div>
              <Link 
                href={randomFeatured.type === 'photo' ? '/photography' : randomFeatured.url}
                className={styles.heroCard}
                target={randomFeatured.type === 'project' ? '_blank' : undefined}
                rel={randomFeatured.type === 'project' ? 'noopener noreferrer' : undefined}
              >
                <div className={styles.heroImage}>
                  <img
                    src={randomFeatured.type === 'project' ? randomFeatured.screenshot : randomFeatured.src}
                    alt={randomFeatured.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className={styles.heroOverlay}>
                    <span className={styles.heroIcon}>
                      {randomFeatured.type === 'photo' ? '📷' : '💻'}
                    </span>
                    <p>View {randomFeatured.type === 'photo' ? 'Photography' : 'Project'} →</p>
                  </div>
                </div>
                <div className={styles.heroInfo}>
                  <div className={styles.heroMeta}>
                    <span className={styles.heroCategory}>{randomFeatured.category}</span>
                    <span className={styles.heroType}>{randomFeatured.type === 'photo' ? 'Photography' : 'Development'}</span>
                  </div>
                  <h2>{randomFeatured.title}</h2>
                  <p>{randomFeatured.description}</p>
                </div>
              </Link>
            </div>
          )}

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>📷 Featured Photography</h2>
            <div className={styles.grid}>
              {photos.map((photo, index) => (
                <Link key={index} href="/photography" className={styles.card}>
                  <div className={styles.cardImage}>
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.cardOverlay}>
                      <span className={styles.cardIcon}>📷</span>
                    </div>
                  </div>
                  <div className={styles.cardInfo}>
                    <span className={styles.cardCategory}>{photo.category}</span>
                    <h3>{photo.title}</h3>
                    <p>{photo.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>💻 Featured Projects</h2>
            <div className={styles.grid}>
              {projects.map((project, index) => (
                <Link 
                  key={index} 
                  href={project.url} 
                  className={styles.card}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.cardImage}>
                    <Image
                      src={project.screenshot}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.cardOverlay}>
                      <span className={styles.cardIcon}>💻</span>
                    </div>
                  </div>
                  <div className={styles.cardInfo}>
                    <span className={styles.cardCategory}>{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Explore More</h2>
            <div className={styles.ctaButtons}>
              <Link href="/photography" className={styles.ctaButton}>
                <span className={styles.ctaIcon}>📷</span>
                <span>View All Photography</span>
              </Link>
              <Link href="/projects" className={styles.ctaButton}>
                <span className={styles.ctaIcon}>💻</span>
                <span>View All Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
