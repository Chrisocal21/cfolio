import Navigation from '@/components/Navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import styles from './about.module.css'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1>About Me</h1>
          <p className={styles.tagline}>Photographer & Developer</p>
        </div>

        <div className={styles.content}>
          <div className={styles.bioSection}>
            <h2>My Story</h2>
            <div className={styles.bioIntro}>
              <p>
                I&apos;m Chris O&apos;Connell, founder of <strong>ChrisOC Digital</strong>—where photography 
                meets code. I grew up in San Diego, California and attended a trade high school where I learned to create. When everyone took trips to Europe 
                after graduation, I bought a Canon DSLR instead. Best decision I ever made.
              </p>
            </div>
            <details className={styles.storyDetails}>
              <summary className={styles.storySummary}>Read Full Story</summary>
              <div className={styles.storyContent}>
            <p>
              That camera took me to Japan and South Korea for three years as a destination photographer. 
              I was there during the tsunami. Life hit pause. What was supposed to be one year off turned 
              into several—retail, breweries, warehouses, construction. The whole &quot;find your footing&quot; era.
            </p>
            <p>
              In 2020, unemployed during the pandemic, I picked up HTML and automation. One line of code 
              turned into hours of curiosity. Then I discovered AI—not the hype version, but the &quot;this 
              can teach me&quot; version. It flipped everything. Visual Studio Code became my new creative 
              workspace. The same spark photography gave me came back, but expanded.
            </p>
            <p>
              What started as <strong>ChrisOCPhoto</strong> in 2007 evolved into <strong>ChrisOC Digital</strong>. 
              Photography remains active—event coverage, portraits, corporate media. Now it sits alongside web 
              development: Next.js, React, TypeScript, AI integration. Projects like PlanAI, GetEditly, URBNWX—each 
              one a different challenge solved.
            </p>
            <p>
              Today I&apos;m back where it started: creating. Photography and development, working together. 
              I like projects with purpose—whether that&apos;s capturing a moment or writing the logic that 
              powers a product.
            </p>
            <p>
              <em>If you&apos;re reading this thinking &quot;I&apos;ve been stuck in jobs that don&apos;t fit&quot; 
              or &quot;I learned something once but never went back to it&quot; or &quot;I don&apos;t know if I&apos;m 
              creative or technical&quot;—I get it. You don&apos;t have to pick one path forever. Skills can hibernate 
              and come back stronger. A camera can lead to code. Makers keep making, no matter what form it takes. 
              Just keep building.</em>
            </p>
              </div>
            </details>
          </div>

          <div className={styles.skillsSection}>
            <h2>What I Do</h2>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <div className={styles.skillHeader}>
                  <div className={styles.skillIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                  </div>
                  <h3>Photography & Media</h3>
                </div>
                <p className={styles.skillDescription}>
                  Capturing professional moments through event photography, corporate portraits, and media content creation with advanced editing capabilities.
                </p>
                <div className={styles.skillTags}>
                  <span>Event Photography</span>
                  <span>Corporate Portraits</span>
                  <span>Media Content</span>
                  <span>Adobe Photoshop</span>
                  <span>Lightroom</span>
                  <span>Illustrator</span>
                  <span>Premiere Pro</span>
                  <span>Canon DSLR</span>
                </div>
              </div>
              <div className={styles.skillCategory}>
                <div className={styles.skillHeader}>
                  <div className={styles.skillIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                      <polyline points="16 18 22 12 16 6"/>
                      <polyline points="8 6 2 12 8 18"/>
                    </svg>
                  </div>
                  <h3>Web Development</h3>
                </div>
                <p className={styles.skillDescription}>
                  Building modern, responsive web applications with cutting-edge technologies, AI integration, and seamless user experiences.
                </p>
                <div className={styles.skillTags}>
                  <span>Next.js & React</span>
                  <span>TypeScript</span>
                  <span>AI Integration</span>
                  <span>API Development</span>
                  <span>Responsive Design</span>
                  <span>WordPress</span>
                  <span>E-Commerce</span>
                  <span>Automation</span>
                </div>
              </div>
              <div className={styles.skillCategory}>
                <div className={styles.skillHeader}>
                  <div className={styles.skillIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <h3>Strategy & Leadership</h3>
                </div>
                <p className={styles.skillDescription}>
                  Managing projects from concept to completion with strategic planning, client communication, and creative problem-solving.
                </p>
                <div className={styles.skillTags}>
                  <span>Project Management</span>
                  <span>Client Relations</span>
                  <span>Team Leadership</span>
                  <span>Strategic Planning</span>
                  <span>Brand Development</span>
                  <span>Creative Direction</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.experienceSection}>
            <h2>Experience</h2>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>Dec 2007 - Present</div>
                <div className={styles.timelineContent}>
                  <h4>Founder & Creative Director</h4>
                  <p className={styles.company}>ChrisOC Digital (formerly ChrisOCPhoto), Oceanside, CA</p>
                  <p>Founded as ChrisOCPhoto in 2007, evolved into ChrisOC Digital—a full-service creative studio. ChrisOCPhoto remains an active division offering professional photography services including event coverage, corporate media content, and professional portraits. Expanded to include modern web development specializing in responsive applications with Next.js, React, and TypeScript. Manage all business operations, client relations, project coordination, and strategic planning. Deliver end-to-end creative solutions from concept to execution across both photography and digital development.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>Sep 2008 - Oct 2011</div>
                <div className={styles.timelineContent}>
                  <h4>Head Destination Photographer</h4>
                  <p className={styles.company}>Campus Photography International, Japan & South Korea</p>
                  <p>Led comprehensive photography operations across multiple U.S. military bases throughout Japan and South Korea. Supervised and mentored team of professional photographers, coordinating schedules, quality standards, and client deliverables. Managed all aspects of client relations from initial consultations through final product delivery. Built strong relationships with military personnel and families while navigating cultural nuances and diverse shooting environments. Consistently delivered high-quality portrait and event photography under tight deadlines.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.resumeSection}>
            <h2>Let&apos;s Connect</h2>
            <p>Interested in working together? Download my resume or get in touch to discuss your project.</p>
            <div className={styles.resumeActions}>
              <a 
                href="/resume/Chris-OConnell-Resume.pdf" 
                download
                className={styles.downloadButton}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                Download Resume
              </a>
              <a href="/contact" className={styles.contactButton}>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}
