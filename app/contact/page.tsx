import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      <Header />

      <Hero
        title="Get in Touch"
        subtitle="Contact Us"
        description="Have questions or interested in partnership opportunities? We&apos;d love to hear from you."
        image="/images/contact-hero.png"
      />

      {/* Contact Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  )
}
