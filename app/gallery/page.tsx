import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'

export default function GalleryPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <Hero
        title="Gallery"
        subtitle="Visual Showcase"
        description="Discover our state-of-the-art facilities, ongoing projects, and team moments that define our commitment to excellence in energy infrastructure."
        image="/images/gallery-hero.png"
        cta={{ text: 'Get in Touch', href: '/contact' }}
      />

      {/* Gallery Content */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Gallery />
        </div>
      </section>

      <Footer />
    </>
  )
}
