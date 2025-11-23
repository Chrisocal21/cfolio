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
              I&apos;m Chris O&apos;Connell, founder of <strong>ChrisOC Studios</strong>—a creative 
              studio specializing in professional photography and modern web development. Since 2007, 
              I&apos;ve built a multifaceted business that bridges visual storytelling with digital innovation, 
              helping clients bring their vision to life through compelling imagery and cutting-edge web solutions.
            </p>
            <p>
              <strong>ChrisOC Studios</strong> encompasses two core services: <strong>ChrisOCPhoto</strong>, 
              my photography division offering event coverage, professional portraits, and media content creation; 
              and my web development practice, where I build responsive, user-friendly websites and applications 
              using modern frameworks like Next.js, React, and TypeScript. Whether you need stunning visuals 
              for your brand or a custom web platform to showcase your work, ChrisOC Studios delivers 
              end-to-end creative solutions.
            </p>
            <p>
              My journey has taken me from managing photography operations across U.S. military bases in 
              Japan and South Korea, to leading production teams at Ballast Point Brewing Company and 
              educating customers as a Certified GoPro Educator at REI. This diverse background in operations 
              management, customer service, and creative work gives me a unique perspective—I understand both 
              the technical execution and the business strategy needed to deliver results.
            </p>
            <p>
              Based in Oceanside, California, I currently work in production management at Swanky Badger 
              while growing ChrisOC Studios. I thrive in fast-paced environments where attention to detail, 
              strategic planning, and creative problem-solving intersect. Whether I&apos;m capturing the 
              perfect shot, crafting elegant code, or collaborating with clients to bring their ideas to life, 
              I bring the same commitment to excellence and passion for continuous learning.
            </p>
          </div>

          <div className={styles.skillsSection}>
            <h2>Skills & Expertise</h2>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <h3>📷 Photography & Media</h3>
                <ul>
                  <li>Event Photography</li>
                  <li>Professional Media Content Creation</li>
                  <li>Canon DSLR & GoPro</li>
                  <li>Adobe Photoshop & Illustrator</li>
                  <li>Adobe Premiere (Video Editing)</li>
                  <li>Certified GoPro Educator</li>
                  <li>Photo Editing & Retouching</li>
                  <li>Client Relations & Project Coordination</li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3>💻 Web Development</h3>
                <ul>
                  <li>HTML & Next.js</li>
                  <li>C# & Java</li>
                  <li>TypeScript & JavaScript</li>
                  <li>WordPress, Wix, Squarespace</li>
                  <li>Responsive Design</li>
                  <li>Microsoft Dynamics AX</li>
                  <li>E-Commerce Platforms</li>
                  <li>Web Content Management</li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3>🏭 Operations & Management</h3>
                <ul>
                  <li>Production Planning & Management</li>
                  <li>Team Leadership & Development</li>
                  <li>Inventory Management</li>
                  <li>Safety & Compliance</li>
                  <li>Warehouse Logistics</li>
                  <li>Customer Service Excellence</li>
                  <li>E-Commerce & Client Relations</li>
                  <li>Strategic Planning</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.experienceSection}>
            <h2>Experience</h2>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>Oct 2024 - Present</div>
                <div className={styles.timelineContent}>
                  <h4>Production, Warehouse, Travel Rep</h4>
                  <p className={styles.company}>Swanky Badger, Vista, CA</p>
                  <p>Oversee end-to-end production processes ensuring efficiency and quality standards. Operate precision engraving machinery for custom products. Manage comprehensive warehouse logistics including inventory control, shipping, and receiving operations. Travel to conventions, trade shows, and corporate events as onsite staff representative. Certified forklift operator maintaining strict safety protocols and OSHA compliance across all warehouse operations.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>Dec 2007 - Present</div>
                <div className={styles.timelineContent}>
                  <h4>Founder & Creative Director</h4>
                  <p className={styles.company}>ChrisOC Studios, Oceanside, CA</p>
                  <p>Full-service creative studio offering professional photography (ChrisOCPhoto) and modern web development. Specializing in event photography, media content creation, and building responsive web applications with Next.js and React. Manage all business operations, client relations, project coordination, and strategic planning.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>Mar 2021 - Oct 2024</div>
                <div className={styles.timelineContent}>
                  <h4>Construction Assistant</h4>
                  <p className={styles.company}>Bittner Enterprise, San Diego, CA</p>
                  <p>Assisted in diverse demolition, repair, and construction projects across residential and commercial sites. Coordinated with contractors and project managers to ensure timelines were met while maintaining strict adherence to safety standards and building codes. Handled material logistics, site preparation, and quality control checks. Developed problem-solving skills working on varied construction challenges from structural repairs to complete renovations.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>Sep 2015 - Oct 2020</div>
                <div className={styles.timelineContent}>
                  <h4>Production Manager</h4>
                  <p className={styles.company}>Ballast Point Brewing Company, San Diego, CA</p>
                  <p>Led and developed high-performing production teams in fast-paced brewery environment. Supervised daily operations including brewing, packaging, and quality control processes. Trained new staff on production protocols, safety procedures, and quality standards. Collaborated with cross-functional teams across operations, quality assurance, and logistics to resolve operational challenges. Utilized Microsoft Dynamics AX enterprise system for managing production orders, inventory tracking, and supply chain coordination. Ensured adherence to FDA regulations and company quality standards while optimizing production efficiency.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>Oct 2012 - Mar 2016</div>
                <div className={styles.timelineContent}>
                  <h4>Customer Service Representative</h4>
                  <p className={styles.company}>Recreational Equipment Inc. (REI), San Diego, CA</p>
                  <p>Delivered exceptional customer service in high-volume retail environment both in-store and via phone support. Served as Certified GoPro Educator, providing expert product knowledge, technical demonstrations, and creative guidance to customers on action cameras and accessories. Educated customers on outdoor gear, photography equipment, and adventure technology. Built strong customer relationships through personalized recommendations and technical expertise. Consistently exceeded sales targets while maintaining focus on customer satisfaction and education.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>Sep 2008 - Oct 2011</div>
                <div className={styles.timelineContent}>
                  <h4>Head Destination Photographer</h4>
                  <p className={styles.company}>Campus Photography International, San Diego, CA</p>
                  <p>Led comprehensive photography operations across multiple U.S. military bases throughout Japan and South Korea. Supervised and mentored team of professional photographers, coordinating schedules, quality standards, and client deliverables. Managed all aspects of client relations from initial consultations through final product delivery. Handled logistics for international travel, equipment management, and on-location shoots. Built strong relationships with military personnel and families while navigating cultural nuances and diverse shooting environments. Consistently delivered high-quality portrait and event photography under tight deadlines in challenging conditions.</p>
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
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}
