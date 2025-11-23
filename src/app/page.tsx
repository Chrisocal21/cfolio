import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <Navigation />
      </header>

      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
