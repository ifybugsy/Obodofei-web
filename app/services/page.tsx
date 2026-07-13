import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import { Flame, Zap, Droplets, Gauge } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Flame,
      title: 'CNG Processing',
      description: 'State-of-the-art compressed natural gas processing facility.',
      details: [
        '25 MMSCFD CNG processing capacity',
        'Advanced compression technology',
        'Quality assurance and testing',
        'Compliance with international standards',
      ],
    },
    {
      icon: Zap,
      title: 'Power Generation',
      description: 'Reliable gas-fired electricity generation.',
      details: [
        '70 Megawatt gas turbine capacity',
        'Grid-connected power supply',
        'Industrial power solutions',
        'Backup power systems',
      ],
    },
    {
      icon: Droplets,
      title: 'Pipeline Infrastructure',
      description: 'Integrated gas distribution network.',
      details: [
        'Gas-delivery pipeline systems',
        'Pressure regulation and control',
        'Safety monitoring systems',
        'Regular maintenance programs',
      ],
    },
    {
      icon: Gauge,
      title: 'CNG Distribution',
      description: 'Complete CNG supply chain solutions.',
      details: [
        'CNG trailer filling stations',
        'Logistics and evacuation assets',
        'Product distribution network',
        'Customer delivery coordination',
      ],
    },
  ]

  return (
    <>
      <Header />

      <Hero
        title="Comprehensive Energy Solutions"
        subtitle="Our Services"
        description="Integrated services spanning gas processing, power generation, and energy infrastructure development."
        image="/images/services-hero.png"
      />

      {/* Services Grid */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide end-to-end energy infrastructure solutions tailored to your needs.
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Specialized Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-secondary mb-3">Environmental Management</h3>
                <p className="text-muted-foreground">
                  Comprehensive environmental impact assessments and management plans in accordance with Nigerian regulations and international standards.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary mb-3">Safety & Security</h3>
                <p className="text-muted-foreground">
                  Professional security operations following UN standards and codes of conduct. Multi-layer security deployment for asset protection.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary mb-3">Industrial Park Development</h3>
                <p className="text-muted-foreground">
                  Strategic land development partnerships supporting off-takers and creating integrated energy ecosystems across the Niger Delta.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-secondary mb-3">Technical Expertise</h3>
                <p className="text-muted-foreground">
                  Team of seasoned engineers and technical professionals with deep experience in gas processing, power generation, and infrastructure development.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary mb-3">Partnership Solutions</h3>
                <p className="text-muted-foreground">
                  Strategic collaboration with industry leaders including Nigerian Gas Marketing Limited, Geometric Power, and EEDC for maximum market reach.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary mb-3">Community Impact</h3>
                <p className="text-muted-foreground">
                  Commitment to local development, skill transfer, and community benefits through sustainable operations and capacity building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
