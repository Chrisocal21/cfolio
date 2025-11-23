import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>
          <h2>About Me</h2>
          <p className={styles.intro}>
            I&apos;m a creative professional who bridges the worlds of visual arts and technology.
          </p>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.bioSection}>
            <h3>My Story</h3>
            <p>
              With a passion for both photography and web development, I bring a unique perspective
              to every project. Whether I&apos;m capturing the perfect shot or crafting elegant code,
              I focus on attention to detail and creating meaningful experiences.
            </p>
            <p>
              My journey started with [add your background], and has evolved into a career where
              I can combine technical expertise with creative vision.
            </p>
          </div>

          <div className={styles.skillsSection}>
            <h3>Skills & Expertise</h3>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <h4>📷 Photography</h4>
                <ul>
                  <li>Portrait Photography</li>
                  <li>Landscape & Nature</li>
                  <li>Photo Editing & Retouching</li>
                  <li>Adobe Lightroom & Photoshop</li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h4>💻 Development</h4>
                <ul>
                  <li>React & Next.js</li>
                  <li>TypeScript & JavaScript</li>
                  <li>HTML/CSS & Responsive Design</li>
                  <li>UI/UX Design Principles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
