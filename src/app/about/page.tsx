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
                I&apos;m Chris O&apos;Connell, founder of <strong>ChrisOC Digital</strong>—a creative 
                studio specializing in professional photography and modern web development. What began in 2007 
                as <strong>ChrisOCPhoto</strong>, a photography business focused on event coverage and portraits, 
                has evolved into a full-service creative studio that bridges visual storytelling with digital 
                innovation, helping clients bring their vision to life through compelling imagery and 
                cutting-edge web solutions.
              </p>
            </div>
            <details className={styles.storyDetails}>
              <summary className={styles.storySummary}>Read Full Story</summary>
              <div className={styles.storyContent}>
            <p>
              Today, <strong>ChrisOC Digital</strong> encompasses two core divisions: <strong>ChrisOCPhoto</strong>, 
              my established photography brand offering event coverage, professional portraits, and corporate media 
              content creation; and my web development practice, where I build responsive, user-friendly websites 
              and applications using modern frameworks like Next.js, React, and TypeScript. ChrisOCPhoto remains 
              an active part of the business, continuing to serve clients with the same dedication to quality 
              that defined its founding. Whether you need stunning visuals for your brand or a custom web platform 
              to showcase your work, ChrisOC Digital delivers end-to-end creative solutions.
            </p>
            <p>
              My journey began with managing photography operations across U.S. military bases in 
              Japan and South Korea, where I led teams and built strong client relationships in diverse, 
              challenging environments. This foundation in visual storytelling would later merge with an 
              unexpected passion for technology that emerged during the 2020 pandemic.
            </p>
            <p>
              While unemployed during the pandemic, I discovered a fascination with automation and code. 
              What started as automating social media posts and Discord channel content quickly evolved 
              into learning basic programming, then diving deeper into how AI could assist in sectioning 
              and understanding code. I taught myself Visual Studio Code, explored its rich history and 
              ecosystem, and began building real applications. This self-directed learning journey transformed 
              into a full web development practice, with projects ranging from AI-powered planning assistants 
              (PlanAI) and photo editors (GetEditly) to weather apps (URBNWX) and productivity tools (UltimateNotes).
            </p>
            <p>
              Today, my portfolio includes active projects, contracted client work, and experimental builds—each 
              one pushing my skills further. I specialize in Next.js and React applications with AI integrations, 
              creating tools that solve real problems. Some projects are live and serving users, others are 
              shelved but taught valuable lessons, and many are actively under development. This combination 
              of photography expertise and self-taught development skills gives me a unique perspective on 
              creating comprehensive digital solutions.
            </p>
            <p>
              Based in Oceanside, California, I thrive in fast-paced creative environments where attention 
              to detail, strategic planning, and innovative problem-solving intersect. Whether I&apos;m 
              capturing the perfect shot, crafting elegant code, or collaborating with clients to bring 
              their vision to life, I bring the same commitment to excellence and passion for continuous 
              learning to every project.
            </p>
              </div>
            </details>
          </div>

          <div className={styles.featuredProjects}>
            <h2>Featured Projects</h2>
            <div className={styles.featuredGrid}>
              <a href="https://chrisocphoto.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.featuredCard}>
                <div className={styles.featuredCardImage}>
                  <img src="/screenshots/chrisocphoto sc.jpg" alt="ChrisOCPhoto" />
                </div>
                <div className={styles.featuredCardContent}>
                  <h3>ChrisOCPhoto</h3>
                  <p className={styles.featuredCategory}>Photography Portfolio</p>
                  <p>Professional photography portfolio with elegant galleries and client booking system. Where it all began in 2007.</p>
                </div>
              </a>
              <a href="https://www.cookbookverse.com" target="_blank" rel="noopener noreferrer" className={styles.featuredCard}>
                <div className={styles.featuredCardImage}>
                  <img src="/screenshots/cookbookverse sc.jpg" alt="CookbookVerse" />
                </div>
                <div className={styles.featuredCardContent}>
                  <h3>CookbookVerse</h3>
                  <p className={styles.featuredCategory}>Recipe Platform</p>
                  <p>Digital cookbook platform for discovering, saving, and sharing recipes with an intuitive user experience.</p>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.skillsSection}>
            <h2>Skills & Expertise</h2>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <h3>📷 Photography & Media</h3>
                <ul>
                  <li>Event Photography</li>
                  <li>Professional Media Content Creation</li>
                  <li>Corporate Photography & Portraits</li>
                  <li>Canon DSLR & GoPro</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Lightroom</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe Premiere (Video Editing)</li>
                  <li>Photo Editing & Retouching</li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3>💻 Web Development</h3>
                <ul>
                  <li>Next.js & React Applications</li>
                  <li>TypeScript & JavaScript</li>
                  <li>AI Integration (OpenAI API)</li>
                  <li>Visual Studio Code</li>
                  <li>Automation & Scripting</li>
                  <li>API Development</li>
                  <li>Responsive Design</li>
                  <li>WordPress & E-Commerce</li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3>🎯 Business & Client Relations</h3>
                <ul>
                  <li>Project Management</li>
                  <li>Team Leadership & Collaboration</li>
                  <li>Client Relations & Communication</li>
                  <li>Strategic Planning</li>
                  <li>E-Commerce Solutions</li>
                  <li>Brand Development</li>
                  <li>Customer Service Excellence</li>
                  <li>Creative Problem-Solving</li>
                </ul>
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

          <div className={styles.educationSection}>
            <h2>Education</h2>
            <div className={styles.educationGrid}>
              <div className={styles.educationItem}>
                <h4>Palomar College</h4>
                <p>Studies in Business, Photography, Media Arts</p>
              </div>
              <div className={styles.educationItem}>
                <h4>MiraCosta College</h4>
                <p>Studies in Media Arts & Technologies, E-Commerce Business</p>
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
