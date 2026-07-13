import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import TeamCard from '@/components/TeamCard'
import { CheckCircle } from 'lucide-react'

export default function AboutPage() {
  const coreValues = [
    { title: 'Honesty', description: 'Transparent and truthful in all dealings' },
    { title: 'Integrity', description: 'Ethical conduct and moral principles' },
    { title: 'Respect', description: 'Valuing people and their contributions' },
    { title: 'Excellence', description: 'Commitment to highest standards' },
    { title: 'Teamwork', description: 'Collaborative approach to success' },
    { title: 'Professionalism', description: 'Expert service delivery at all times' },
  ]

  const leadership = [
    { name: 'Engr. Michael Bayo Akinola', title: 'Chairman', image: '/leadership/michael-akinola.jpg' },
    { name: 'Hon. Ken Embelede', title: 'Managing Director / CEO', image: '/leadership/ken-embelede.jpg' },
    { name: 'Ombe', title: 'Director, Policy', image: '/leadership/ombe.jpg' },
    { name: 'Engr. Pathfinder Araye (COREN)', title: 'Director, Engineering', image: '/leadership/pathfinder-araye.jpg' },
    { name: 'Lady Irene Tuguemi Digitemie', title: 'Board Director', image: '/leadership/irene-tuguemi.jpg' },
    { name: 'Suileman', title: 'Board Director', image: '/leadership/suileman.jpg' },
    { name: 'High Chief Ebizimor Preye Raphael', title: 'Board Director', image: '/leadership/high-chief-raphael.jpg' },
  ]

  return (
    <>
      <Header />

      <Hero
        title="About Obodofei Integrated Services"
        subtitle="Our Story"
        description="Transforming Nigeria's energy landscape through strategic partnerships and innovative infrastructure solutions."
        image="/images/about-hero.jpg"
      />

      {/* Company Overview */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Obodofei Integrated Services Limited (OISL) is a Nigerian energy infrastructure development company, incorporated on July 27, 2011, under the Corporate Affairs Commission (CAC) with Registration No. RC 968291.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We are strategically positioned at the intersection of Nigeria&apos;s energy-transition and industrial development agenda, with competence and operational capacity across oil & gas, energy, pipeline protection, vessel supply, transport & maintenance, and construction sectors.
              </p>
              <p className="text-lg text-muted-foreground">
                With a team of highly skilled and experienced professionals, we deliver innovative and practical &quot;hands-on&quot; solutions that give our clients a competitive edge in the marketplace.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-lg text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Established</h3>
              <p className="text-4xl font-bold mb-6">2011</p>
              <p className="text-sm opacity-90">
                Over a decade of experience delivering strategic energy infrastructure solutions across Nigeria and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-background p-8 rounded-lg border-2 border-secondary">
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To be the leading oil & gas company out of Africa, setting new standards for energy infrastructure excellence and sustainable development.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border-2 border-secondary">
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                We work with clients to enhance their competitive advantage while delivering value to our shareholders, stakeholders, and communities through innovative energy solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide all our relationships with clients, communities, agencies, employees, and business partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border hover:border-secondary transition-colors">
                <div className="flex gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seasoned professionals with deep expertise in energy infrastructure and strategic business development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                title={member.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Assurance Statement */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Assurance</h2>
          <p className="text-lg text-muted-foreground mb-6">
            At Obodofei, our assurance is to work cooperatively with our allies, stakeholders, and clients to guarantee that value development and efficiency are of paramount importance. Our commitment will not rest until this is perfectly achieved. We will continuously strive for quality in all we do while strategically positioning the local industry for competence inspiration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">100%</div>
              <p className="font-semibold">Quality Commitment</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">Continuous</div>
              <p className="font-semibold">Improvement Focus</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">Local</div>
              <p className="font-semibold">Capacity Building</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Interests Full Section */}
      <section id="our-interests-full" className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Our Interests</h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We welcome strategic partners, investors, and stakeholders to join us in realizing this vision and creating a lasting impact.
              </p>

              <p>
                One of those partnerships is the Bayelsa State Government Of Nigeria&apos;s interest in providing Obodofei Integrated Services Limited a vast portion of land for an Industrial Park Development, which is one of our innovative strategies for off-takers and our marketing partner Geometric Power ABA Limited, Enugu Electricity Distribution Company (EEDC).
              </p>

              <div className="my-8 rounded-2xl overflow-hidden border border-border/50 shadow-lg h-96">
                <img
                  src="/images/industrial-facility.png"
                  alt="Industrial Park Development"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-semibold text-foreground text-xl">
                Bayelsa Gas & CNG Hub Project
              </p>

              <p>
                At the heart of its operations is the flagship Bayelsa Gas & CNG Hub Project, which features a 25 Million Standard Cubic Feet Per Day (MMSCFD) Compressed Natural Gas (CNG) Processing Plant and a 70 Megawatt (MGW) Gas-Fired Power Plant in Ogboloma Town, Yenagoa, Bayelsa State, Nigeria.
              </p>

              <p>
                This flagship project will serve as a model for gas commercialization across the Niger Delta, displacing high-emission fuels while supporting the Decade of Gas Initiative, Presidential CNG Initiative (PCNGI), and the National Gas Expansion Programme (NGEP).
              </p>

              <p>
                The facility will include associated infrastructure such as gas-delivery pipelines, compression units, CNG trailer filling stations, and logistics assets for product evacuation.
              </p>

              <p>
                The Bayelsa CNG Mother Station is designed to accelerate the transition from liquid fuels to cleaner natural gas, in full alignment with national priorities such as the Decade of Gas Initiative and the Energy Transition Plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
