import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import About from '@/components/About'
import Services from '@/components/Services'
import Map from '@/components/Map'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <About />
      <Services />
      <Map />
      <Contact />
      <Footer />
    </main>
  )
}
