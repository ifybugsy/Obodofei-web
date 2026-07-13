import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { Leaf, Shield, Users, Zap } from 'lucide-react'

export default function SustainabilityPage() {
  return (
    <>
      <Header />

      <Hero
        title="Sustainability & Social Impact"
        subtitle="Our Commitment"
        description="Building a sustainable energy future while creating positive impact for communities and the environment."
        image="/images/sustainability-hero.png"
      />

      {/* Environmental Commitment */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="h-8 w-8 text-secondary" />
                <h2 className="text-3xl md:text-4xl font-bold">Environmental Stewardship</h2>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                We are committed to minimizing the environmental and social impact of our activities while creating tangible benefits for surrounding communities.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Environmental Impact Assessments</h3>
                  <p className="text-muted-foreground">
                    We conduct comprehensive Environmental, Social and Health Impact Assessments (EIAs) for all development projects in accordance with Nigerian law. Our EIA reports detail impact management strategies and community benefits throughout the project lifecycle.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Regulatory Compliance</h3>
                  <p className="text-muted-foreground">
                    All EIA reports are scrutinized by regulatory authorities as part of the project approval process, ensuring the highest standards of environmental protection.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Clean Energy Transition</h3>
                  <p className="text-muted-foreground">
                    Our CNG processing and power generation projects are designed to displace high-emission fuels, supporting Nigeria&apos;s energy transition goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary to-secondary/80 p-8 rounded-lg text-secondary-foreground">
              <h3 className="text-2xl font-bold mb-6">Key Environmental Projects</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold mb-1">CNG Plant Assessment</p>
                  <p className="text-sm opacity-90">25 MMSCFD plant environmental management</p>
                </li>
                <li>
                  <p className="font-semibold mb-1">Power Plant Impact Analysis</p>
                  <p className="text-sm opacity-90">40 MW gas turbine environmental compliance</p>
                </li>
                <li>
                  <p className="font-semibold mb-1">Community Benefit Plans</p>
                  <p className="text-sm opacity-90">Local area development initiatives</p>
                </li>
                <li>
                  <p className="font-semibold mb-1">Emission Monitoring</p>
                  <p className="text-sm opacity-90">Continuous air quality management</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-primary to-primary/80 p-8 rounded-lg text-primary-foreground">
              <h3 className="text-2xl font-bold mb-6">Professional Security Operations</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Nigeria Police Force deployment</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Supernumerary Police (SPF) security services</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>UN-aligned security protocols</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Asset and facility protection</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Staff and personnel security</span>
                </li>
              </ul>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-secondary" />
                <h2 className="text-3xl md:text-4xl font-bold">Safety & Security Excellence</h2>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                We maintain the highest standards of safety and security operations, protecting our assets, facilities, employees, and stakeholders through professional, ethical security practices.
              </p>

              <p className="text-muted-foreground mb-6">
                Our security operations follow strict guidelines established in accordance with United Nations norms and codes, including the UN Code of Conduct for Law Enforcement Officials. We maintain a multi-layered security approach ensuring comprehensive protection across all operational areas.
              </p>

              <p className="text-muted-foreground">
                All security personnel are professionally trained and adhere to international standards of conduct, ensuring safe and secure operations while respecting human rights and civil liberties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social & Health Impact */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="h-8 w-8 text-secondary" />
              <h2 className="text-3xl md:text-4xl font-bold">Social & Health Impact</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment extends beyond energy production to meaningful community development and social wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-4 text-secondary">Community Development</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">▸</span>
                  <span className="text-muted-foreground">Local employment opportunities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">▸</span>
                  <span className="text-muted-foreground">Skill transfer programs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">▸</span>
                  <span className="text-muted-foreground">Capacity building initiatives</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">▸</span>
                  <span className="text-muted-foreground">Community benefit projects</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">▸</span>
                  <span className="text-muted-foreground">Educational partnerships</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-4 text-secondary">Health & Wellbeing</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">▸</span>
                  <span className="text-muted-foreground">Occupational health & safety programs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">▸</span>
                  <span className="text-muted-foreground">Community health initiatives</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">▸</span>
                  <span className="text-muted-foreground">Health impact assessments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">▸</span>
                  <span className="text-muted-foreground">Disease prevention campaigns</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">▸</span>
                  <span className="text-muted-foreground">Healthcare support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Transition Section */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="h-8 w-8 text-secondary" />
            <h2 className="text-3xl md:text-4xl font-bold">Supporting Nigeria's Energy Transition</h2>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Our operations directly support critical national energy initiatives and international climate commitments:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg border-l-4 border-secondary">
              <h3 className="font-bold text-lg mb-3">Decade of Gas Initiative</h3>
              <p className="text-sm text-muted-foreground">
                Accelerating Nigeria's gas commercialization and utilization across key sectors through affordable CNG and power solutions.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border-l-4 border-secondary">
              <h3 className="font-bold text-lg mb-3">Presidential CNG Initiative</h3>
              <p className="text-sm text-muted-foreground">
                Contributing to the transition of transportation and industrial sectors to cleaner natural gas fuel alternatives.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border-l-4 border-secondary">
              <h3 className="font-bold text-lg mb-3">National Gas Expansion Programme</h3>
              <p className="text-sm text-muted-foreground">
                Expanding gas distribution infrastructure and capacity to underserved regions and new markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
