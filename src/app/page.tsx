import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
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
      </main>

      <Footer />
    </div>
  )
}
