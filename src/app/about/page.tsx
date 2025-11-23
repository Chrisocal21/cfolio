import Navigation from '@/components/Navigation'
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
            <p>
              I&apos;m a creative professional who bridges the worlds of visual arts and technology.
              With a passion for both photography and web development, I bring a unique perspective
              to every project. Whether I&apos;m capturing the perfect shot or crafting elegant code,
              I focus on attention to detail and creating meaningful experiences.
            </p>
            <p>
              My journey started with [add your background here - e.g., &quot;a camera in high school and
              curiosity about how websites worked&quot;], and has evolved into a career where I can combine
              technical expertise with creative vision. I believe that both disciplines share a common
              goal: telling stories and connecting with people.
            </p>
            <p>
              When I&apos;m not behind a camera or keyboard, you can find me [add your hobbies/interests].
              I&apos;m always learning, always creating, and always looking for the next challenge.
            </p>
          </div>

          <div className={styles.skillsSection}>
            <h2>Skills & Expertise</h2>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <h3>📷 Photography</h3>
                <ul>
                  <li>Portrait Photography</li>
                  <li>Landscape & Nature</li>
                  <li>Event Photography</li>
                  <li>Photo Editing & Retouching</li>
                  <li>Adobe Lightroom</li>
                  <li>Adobe Photoshop</li>
                  <li>Color Grading</li>
                  <li>Studio Lighting</li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3>💻 Web Development</h3>
                <ul>
                  <li>React & Next.js</li>
                  <li>TypeScript & JavaScript</li>
                  <li>HTML/CSS & Responsive Design</li>
                  <li>UI/UX Design Principles</li>
                  <li>Git & Version Control</li>
                  <li>Web Performance Optimization</li>
                  <li>SEO Best Practices</li>
                  <li>Accessibility (a11y)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.experienceSection}>
            <h2>Experience</h2>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2023 - Present</div>
                <div className={styles.timelineContent}>
                  <h4>Freelance Photographer & Developer</h4>
                  <p>Working with clients on photography projects and web development work.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2021 - 2023</div>
                <div className={styles.timelineContent}>
                  <h4>[Previous Role/Position]</h4>
                  <p>Add your work history here.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2019 - 2021</div>
                <div className={styles.timelineContent}>
                  <h4>[Previous Role/Position]</h4>
                  <p>Add your work history here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}
