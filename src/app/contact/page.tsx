'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import styles from './contact.module.css'

type ModalType = 'email' | 'location' | 'availability' | null

export default function ContactPage() {
  const [activeModal, setActiveModal] = useState<ModalType>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    budget: '',
    timeline: ''
  })

  // Dynamic availability status (you can update this based on your workload)
  const availabilityStatus = {
    status: 'available', // 'available', 'busy', 'booked'
    statusText: 'Currently Accepting Projects',
    nextAvailable: 'Immediate availability',
    responseTime: '24-48 hours'
  }

  const getStatusColor = () => {
    switch(availabilityStatus.status) {
      case 'available': return '#10b981' // green
      case 'busy': return '#f59e0b' // orange
      case 'booked': return '#ef4444' // red
      default: return '#6b7280'
    }
  }

  const [aiAnalysis, setAiAnalysis] = useState<any>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const analyzeInquiry = async () => {
    if (!formData.message || !formData.name || !formData.email) return

    setIsAnalyzing(true)
    try {
      const response = await fetch('/api/contact-analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        const data = await response.json()
        setAiAnalysis(data.analysis)
      }
    } catch (error) {
      console.error('Analysis error:', error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Analyze with AI first
    await analyzeInquiry()
    
    // Here you can add form submission logic (e.g., send to API, email service, etc.)
    console.log('Form submitted:', formData)
    console.log('AI Analysis:', aiAnalysis)
    
    alert(`Thank you for reaching out! I'll get back to you within ${availabilityStatus.responseTime}.`)
    setActiveModal(null)
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
      budget: '',
      timeline: ''
    })
    setAiAnalysis(null)
  }

  return (
    <>
      <Navigation />
      <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1>Let&apos;s Work Together</h1>
          <p>Get in touch for photography sessions or web development projects</p>
          
          {/* Availability Indicator */}
          <div className={styles.availabilityBanner}>
            <div className={styles.statusIndicator}>
              <span 
                className={styles.statusDot}
                style={{ backgroundColor: getStatusColor() }}
              />
              <span className={styles.statusText}>{availabilityStatus.statusText}</span>
            </div>
            <div className={styles.availabilityDetails}>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '0.25rem'}}>
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                {availabilityStatus.nextAvailable}
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '0.25rem'}}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Response: {availabilityStatus.responseTime}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <button 
              className={styles.infoCard}
              onClick={() => setActiveModal('email')}
            >
              <div className={styles.icon} role="img" aria-label="Email icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="48" height="48">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p className={styles.infoLink}>chrisocdigital@gmail.com</p>
              <span className={styles.clickHint}>Click to send inquiry</span>
            </button>

            <button 
              className={styles.infoCard}
              onClick={() => setActiveModal('location')}
            >
              <div className={styles.icon} role="img" aria-label="Location icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="48" height="48">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Location</h3>
              <p className={styles.infoLink}>Oceanside, CA</p>
              <span className={styles.clickHint}>Click for details</span>
            </button>

            <button 
              className={styles.infoCard}
              onClick={() => setActiveModal('availability')}
            >
              <div className={styles.icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="48" height="48">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3>Availability</h3>
              <p className={styles.infoLink}>View Schedule</p>
              <span className={styles.clickHint}>Click to check availability</span>
            </button>
          </div>

          <div className={styles.socialSection}>
            <h2>Social Media</h2>
            <p className={styles.socialIntro}>
              Follow my photography and projects on social platforms
            </p>
            <div className={styles.socialLinks}>
              <Link 
                href="https://github.com/Chrisocal21" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </span>
                <div>
                  <h4>GitHub</h4>
                  <p>@Chrisocal21</p>
                </div>
              </Link>
              <Link 
                href="https://instagram.com/chrisocphoto" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
                <div>
                  <h4>Instagram - Photography</h4>
                  <p>@chrisocphoto</p>
                </div>
              </Link>
              <Link 
                href="https://instagram.com/cookbookverse" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
                <div>
                  <h4>Instagram - CookbookVerse</h4>
                  <p>@cookbookverse</p>
                </div>
              </Link>
            </div>
          </div>

          <div className={styles.websitesSection}>
            <h2>My Websites</h2>
            <p className={styles.socialIntro}>
              Explore my professional work and projects
            </p>
            <div className={styles.socialLinks}>
              <Link 
                href="https://www.chrisocphoto.com" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                    <circle cx="12" cy="13" r="4"/>
                  </svg>
                </span>
                <div>
                  <h4>ChrisOC Photography</h4>
                  <p>chrisocphoto.com</p>
                </div>
              </Link>
              <Link 
                href="https://www.cookbookverse.com" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                </span>
                <div>
                  <h4>CookbookVerse</h4>
                  <p>cookbookverse.com</p>
                </div>
              </Link>
              <Link 
                href="https://www.geteditly.com" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socialIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </span>
                <div>
                  <h4>GetEditly</h4>
                  <p>geteditly.com</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Modal Overlays */}
      {activeModal && (
        <div className={styles.modalOverlay} onClick={() => setActiveModal(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.modalClose}
              onClick={() => setActiveModal(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            {activeModal === 'email' && (
              <div className={styles.modalBody}>
                <h2>📧 Send an Inquiry</h2>
                <p>Fill out the form below and I&apos;ll get back to you within 24-48 hours.</p>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="projectType">Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="photography">Photography Session</option>
                      <option value="event">Event Photography</option>
                      <option value="web">Web Development</option>
                      <option value="webapp">Web Application</option>
                      <option value="both">Photography + Web Dev</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                    >
                      <option value="">Select budget range</option>
                      <option value="under1k">Under $1,000</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-plus">$10,000+</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="timeline">Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">ASAP (Within 1 week)</option>
                      <option value="soon">1-2 weeks</option>
                      <option value="month">1 month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                    />
                  </div>
                  
                  {aiAnalysis && (
                    <div className={styles.aiInsights}>
                      <h4>✨ AI Analysis</h4>
                      <div className={styles.insightGrid}>
                        <div className={styles.insightItem}>
                          <strong>Category:</strong> {aiAnalysis.category}
                        </div>
                        <div className={styles.insightItem}>
                          <strong>Urgency:</strong> <span className={styles[`urgency${aiAnalysis.urgency}`]}>{aiAnalysis.urgency}</span>
                        </div>
                        <div className={styles.insightItem}>
                          <strong>Project Type:</strong> {aiAnalysis.projectType}
                        </div>
                        <div className={styles.insightItem}>
                          <strong>Priority:</strong> {aiAnalysis.priorityScore}/10
                        </div>
                      </div>
                      {aiAnalysis.keyRequirements && (
                        <div className={styles.requirements}>
                          <strong>Key Requirements:</strong>
                          <ul>
                            {aiAnalysis.keyRequirements.map((req: string, idx: number) => (
                              <li key={idx}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <button type="submit" className={styles.submitButton} disabled={isAnalyzing}>
                    {isAnalyzing ? 'Analyzing...' : 'Send Inquiry'}
                  </button>
                </form>
                <p className={styles.directEmail}>
                  Or email directly: <a href="mailto:chrisocdigital@gmail.com">chrisocdigital@gmail.com</a>
                </p>
              </div>
            )}

            {activeModal === 'location' && (
              <div className={styles.modalBody}>
                <h2>📍 Location & Service Areas</h2>
                <div className={styles.locationInfo}>
                  <div className={styles.locationCard}>
                    <h3>🏠 Based In</h3>
                    <p>Oceanside, California</p>
                    <p className={styles.subtext}>San Diego County</p>
                  </div>
                  <div className={styles.locationCard}>
                    <h3>📷 Photography Services</h3>
                    <ul>
                      <li>Local: San Diego County & Orange County</li>
                      <li>Regional: Southern California</li>
                      <li>Destination: Available for travel</li>
                    </ul>
                  </div>
                  <div className={styles.locationCard}>
                    <h3>💻 Web Development</h3>
                    <p>100% Remote</p>
                    <p className={styles.subtext}>Serving clients worldwide</p>
                  </div>
                  <div className={styles.locationCard}>
                    <h3>🌎 Available For</h3>
                    <ul>
                      <li>On-location shoots</li>
                      <li>Studio sessions (Vista, CA)</li>
                      <li>Virtual consultations</li>
                      <li>Destination projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeModal === 'availability' && (
              <div className={styles.modalBody}>
                <h2>💼 Current Availability</h2>
                <div className={styles.availabilityStatus}>
                  <div className={styles.statusBadge} style={{ backgroundColor: getStatusColor() }}>
                    <span className={styles.statusDot} style={{ backgroundColor: '#fff' }} />
                    {availabilityStatus.statusText}
                  </div>
                  <div className={styles.availabilityGrid}>
                    <div className={styles.availItem}>
                      <span className={styles.availIcon}>⚡</span>
                      <div>
                        <strong>Next Available:</strong>
                        <p>{availabilityStatus.nextAvailable}</p>
                      </div>
                    </div>
                    <div className={styles.availItem}>
                      <span className={styles.availIcon}>📬</span>
                      <div>
                        <strong>Response Time:</strong>
                        <p>{availabilityStatus.responseTime}</p>
                      </div>
                    </div>
                    <div className={styles.availItem}>
                      <span className={styles.availIcon}>📅</span>
                      <div>
                        <strong>Booking Window:</strong>
                        <p>2-4 weeks recommended</p>
                      </div>
                    </div>
                    <div className={styles.availItem}>
                      <span className={styles.availIcon}>🎯</span>
                      <div>
                        <strong>Project Capacity:</strong>
                        <p>Taking 2-3 new clients/month</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.currentProjects}>
                    <h3>Current Focus</h3>
                    <div className={styles.projectTags}>
                      <span className={styles.tag}>Photography Sessions</span>
                      <span className={styles.tag}>Web Development</span>
                      <span className={styles.tag}>Event Coverage</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActiveModal('email')} 
                    className={styles.bookButton}
                  >
                    Book a Consultation
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
