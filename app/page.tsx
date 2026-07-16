import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSlider from '@/components/HeroSlider'
import ServiceCard from '@/components/ServiceCard'
import StatsSection from '@/components/StatsSection'
import OurInterests from '@/components/OurInterests'
import { Zap, Flame, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const sliderSlides = [
    {
      title: 'Strategic Partner in Energy Infrastructure',
      subtitle: 'Obodofei Integrated Services',
      description: 'Moving beyond traditional contracting to shape Nigeria\'s energy future through innovative CNG processing and reliable power generation solutions.',
      image: '/images/industrial-facility.png',
      cta: { text: 'Explore Our Vision', href: '/about' },
    },
    {
      title: '25 MMSCFD CNG Processing Facility',
      subtitle: 'Bayelsa CNG Mother Station',
      description: 'State-of-the-art compressed natural gas processing at the forefront of Nigeria\'s energy commercialization. Leading the transition to cleaner natural gas solutions.',
      image: '/images/cng-plant.png',
      cta: { text: 'Learn More', href: '/services' },
    },
    {
      title: '70 MW Gas-Fired Power Generation',
      subtitle: 'Clean Energy Solutions',
      description: 'Reliable and efficient power generation supporting Nigeria\'s energy security and industrial development across the Niger Delta region.',
      image: '/images/industrial-facility.png',
      cta: { text: 'View Projects', href: '/gallery' },
    },
    {
      title: 'Leading Energy Solutions Provider',
      subtitle: 'Obodofei Integrated Services',
      description: 'Delivering innovative gas processing and power generation solutions with our professional team committed to excellence in Nigeria\'s energy sector.',
      image: '/images/obodofei-promo.jpg',
      cta: { text: 'Learn More', href: '/about' },
    },
  ]

  const stats = [
    { value: '25', label: 'MMSCFD CNG', description: 'Processing Capacity' },
    { value: '70', label: 'MW Power', description: 'Generation Capacity' },
    { value: '2011', label: 'Founded', description: 'Year Established' },
    { value: '2', label: 'Offices', description: 'Abuja & Bayelsa' },
  ]

  const services = [
    {
      icon: Flame,
      title: 'Gas Processing',
      description: 'Advanced CNG processing facility at the forefront of energy commercialization.',
      details: [
        '25 MMSCFD Compressed Natural Gas processing capacity (Start-up Project)',
        'State-of-the-art compression technology',
        'CNG trailer filling stations',
        'Gas-delivery pipeline infrastructure',
      ],
      highlight: true,
    },
    {
      icon: Zap,
      title: 'Power Generation',
      description: 'Reliable gas-fired power generation supporting energy transition.',
      details: [
        '70 Megawatt Gas-fired Power Plant (Start-up Project)',
        'Clean energy production',
        'Regional electricity supply',
        'Industrial park power solutions',
      ],
      highlight: false,
    },
  ]

  return (
    <>
      <Header />

      {/* Hero Slider Section */}
      <HeroSlider slides={sliderSlides} />

      {/* Services Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm md:text-base font-semibold text-secondary mb-4 uppercase tracking-wide">
              Our Core Offerings
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flagship Projects & Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At the heart of our operations is the Bayelsa CNG Mother Station Project, serving as a model for gas commercialization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                details={service.details}
                highlight={service.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Interests Section */}
      <OurInterests />

      {/* Stats Section */}
      <StatsSection
        title="By The Numbers"
        description="Our scale and commitment to excellence in energy infrastructure"
        stats={stats}
      />

      {/* Why Choose Us Section */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-secondary mb-4 uppercase tracking-wide">
                Why Choose Obodofei
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                More Than a Company, A Partnership
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We distinguish ourselves by being considerably more than a service provider. With our deep expertise in oil & gas, energy, and infrastructure sectors, we&apos;re your strategic partner in achieving competitive advantage.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Industry Expertise</h3>
                    <p className="text-muted-foreground">Deep experience across oil & gas, energy, construction, and infrastructure sectors</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Local Capacity Development</h3>
                    <p className="text-muted-foreground">Dedicated to skill transfer and knowledge development of local talent</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Strategic Innovation</h3>
                    <p className="text-muted-foreground">Innovative approaches aligned with national energy transition priorities</p>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>

            <div className="rounded-lg overflow-hidden h-96 md:h-full">
              <img
                src="/images/team-meeting.png"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Partnership Opportunities?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Join us in shaping Nigeria&apos;s energy future. We welcome strategic partners, investors, and stakeholders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
