import Head from 'next/head'
import Hero from '../components/Hero'
import WhyNeed from '../components/WhyNeed'
import Services from '../components/Services'
import Benefits from '../components/Benefits'
import Process from '../components/Process'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jasa Web Development | Konsultasi Gratis</title>
        <meta name="description" content="Jasa pembuatan website, web app, dan sistem bisnis custom. Konsultasi gratis & garansi dukungan." />
      </Head>

      <div className="min-h-screen">
        <Hero />
        <main className="px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto space-y-20">
            <WhyNeed />
            <Services />
            <Benefits />
            <Process />
            <Portfolio />
            <Testimonials />
            <Pricing />
            <Contact />
            <FAQ />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}