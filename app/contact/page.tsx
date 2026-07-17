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

      {/* Contact Information */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Office Address */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">Office Desk</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Obodofei Integrated Services Limited
              </p>
              <p className="text-base text-muted-foreground mt-2">
                Visit us for inquiries and consultations
              </p>
            </div>

            {/* Phone */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">Telephone</h3>
              <p className="text-lg font-semibold text-primary">
                +2349130195541
              </p>
              <p className="text-base text-muted-foreground mt-2">
                Call us during business hours
              </p>
            </div>

            {/* Email */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
              <h3 className="text-xl font-bold text-foreground mb-4">E-mail</h3>
              <p className="text-lg font-semibold text-secondary">
                contact@oisl.com
              </p>
              <p className="text-base text-muted-foreground mt-2">
                Send us your inquiries anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Send us a Message</h2>
              <p className="text-lg text-muted-foreground">
                We'll get back to you as soon as possible
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
