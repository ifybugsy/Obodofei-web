import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { MapPin, Zap, Gauge } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <Hero
        title="Flagship Projects & Developments"
        subtitle="Our Projects"
        description="Pioneering energy infrastructure projects shaping Nigeria's industrial future."
        image="/images/cng-plant.png"
      />

      {/* Main Project */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-card border-2 border-secondary p-8 md:p-12 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
              Bayelsa CNG Mother Station & Industrial Park
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Gauge className="h-6 w-6 text-secondary" />
                  <h3 className="font-semibold text-foreground">Gas Processing</h3>
                </div>
                <p className="text-3xl font-bold text-secondary mb-2">25 MMSCFD</p>
                <p className="text-sm text-muted-foreground">Compressed Natural Gas Processing Capacity</p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="h-6 w-6 text-secondary" />
                  <h3 className="font-semibold text-foreground">Power Generation</h3>
                </div>
                <p className="text-3xl font-bold text-secondary mb-2">70 MW</p>
                <p className="text-sm text-muted-foreground">Gas-Fired Power Plant Capacity</p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-6 w-6 text-secondary" />
                  <h3 className="font-semibold text-foreground">Location</h3>
                </div>
                <p className="font-bold text-secondary mb-2">Ogboloma Town</p>
                <p className="text-sm text-muted-foreground">Yenagoa, Bayelsa State, Nigeria</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Bayelsa CNG Mother Station Project stands as a beacon of progress in Nigeria&apos;s energy landscape. At the heart of this flagship facility is a comprehensive integrated approach to gas processing and power generation, serving as a model for gas commercialization and decentralized power generation across the Niger Delta and beyond.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Strategic Objectives</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-muted-foreground">Accelerate transition from liquid fuels to cleaner natural gas</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-muted-foreground">Support Nigeria's Decade of Gas Initiative</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-muted-foreground">Implement Presidential CNG Initiative (PCNGI)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-muted-foreground">Advance National Gas Expansion Programme (NGEP)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-muted-foreground">Create decentralized power generation capacity</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Infrastructure Components</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-muted-foreground">CNG Processing Plant (25 MMSCFD)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-muted-foreground">Gas Turbine Power Plant (70 MW)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-muted-foreground">Gas-Delivery Pipelines</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-muted-foreground">CNG Trailer Filling Stations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-muted-foreground">Logistics & Product Evacuation Assets</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Strategic Partnerships</h3>
                <p className="text-muted-foreground mb-3">
                  We work collaboratively with key stakeholders to maximize value creation and market reach:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-muted-foreground">Nigerian Gas Marketing Limited (NGML)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-muted-foreground">Geometric Power ABA Limited</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-muted-foreground">Enugu Electricity Distribution Company (EEDC)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-muted-foreground">Bayelsa State Government</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Park Section */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Industrial Park Development</h2>
          <p className="text-lg text-muted-foreground mb-6">
            In strategic partnership with the Bayelsa State Government, Obodofei Integrated Services is developing a vast Industrial Park in Yenagoa. This innovative development initiative creates an integrated energy ecosystem providing optimal conditions for off-takers and strategic partners.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-3 text-secondary">Key Benefits</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Centralized energy infrastructure hub</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Access to 25 MMSCFD CNG capacity</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>70 MW reliable power supply</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Professional industrial environment</span>
                </li>
              </ul>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-3 text-secondary">Market Opportunities</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Gas commercialization across Niger Delta</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Clean energy fuel transition</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Industrial development catalyst</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Regional economic growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
