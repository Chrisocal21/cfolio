'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import styles from './featured.module.css'

export default function FeaturedPage() {
  const photos = [
    { type: 'photo', src: '/photography/1.jpg', title: 'Sunset Vista', category: 'Landscape', description: 'Golden hour landscape capturing the serene beauty of nature.' },
    { type: 'photo', src: '/photography/2.jpg', title: 'Urban Nights', category: 'Event', description: 'City life after dark with vibrant energy and atmosphere.' },
    { type: 'photo', src: '/photography/3.jpg', title: 'Studio Portrait', category: 'Portrait', description: 'Professional studio portrait with creative lighting.' },
    { type: 'photo', src: '/photography/4.jpg', title: 'Golden Hour', category: 'Landscape', description: 'Natural beauty bathed in warm evening light.' },
    { type: 'photo', src: '/photography/5.jpg', title: 'City Lights', category: 'Event', description: 'Urban landscape illuminated by city glow.' }
  ]

  const projects = [
    { type: 'project', title: 'ChrisOCPhoto', screenshot: '/screenshots/chrisocphoto sc.jpg', url: 'https://chrisocphoto.vercel.app', category: 'Photography Portfolio', description: 'Professional photography portfolio with elegant galleries and booking system.' },
    { type: 'project', title: 'GetEditly', screenshot: '/screenshots/geteditly sc.jpg', url: 'https://www.geteditly.com', category: 'Photo Editor', description: 'AI-powered photo editor with smart enhancements and auto-editing.' },
    { type: 'project', title: 'PlanAI', screenshot: '/screenshots/planai sc.jpg', url: 'https://plan-ai-livid.vercel.app', category: 'AI Assistant', description: 'AI planning assistant for organizing tasks and projects.' },
    { type: 'project', title: 'URBNWX', screenshot: '/screenshots/URBN SC.jpg', url: 'https://emergency-urbn.vercel.app', category: 'Weather App', description: 'Real-time weather application with accurate forecasts.' },
    { type: 'project', title: 'Munch', screenshot: '/screenshots/munch sc.jpg', url: 'https://www.munch.com', category: 'E-Commerce', description: 'Modern healthy snack company with curated selections.' },
    { type: 'project', title: 'CookbookVerse', screenshot: '/screenshots/cookbookverse sc.jpg', url: 'https://www.cookbookverse.com', category: 'Recipe Platform', description: 'Digital cookbook for discovering and sharing recipes.' },
    { type: 'project', title: 'UltimateNotes', screenshot: '/screenshots/ultimatenotes sc.jpg', url: 'https://www.ultimatenotes.com', category: 'Productivity App', description: 'All-in-one digital journal for work and organization.' },
    { type: 'project', title: 'DevPadAI', screenshot: '/screenshots/devpadai sc.jpg', url: 'https://www.devpadai.com', category: 'Developer Tool', description: 'AI-enhanced code editor with intelligent completion.' }
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
                  {randomFeatured.type === 'project' ? (
                    <Image
                      src={randomFeatured.screenshot}
                      alt={randomFeatured.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 1200px"
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                  ) : (
                    <div className={styles.photoPlaceholder}>
                      <span className={styles.photoIcon}>📷</span>
                      <p>{randomFeatured.title}</p>
                    </div>
                  )}
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
                    <div className={styles.photoPlaceholder}>
                      <span className={styles.photoIcon}>📷</span>
                      <p>{photo.title}</p>
                    </div>
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
