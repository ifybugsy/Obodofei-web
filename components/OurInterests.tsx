import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function OurInterests() {
  const interestsContent = `We welcome strategic partners, investors, and stakeholders to join us in realizing this vision and creating a lasting impact.

One of those partnerships is the Bayelsa State Government Of Nigeria's interest in providing Obodofei Integrated Services Limited a vast portion of land for an Industrial Park Development, which is one of our innovative strategies for off-takers and our marketing partner Geometric Power ABA Limited, Enugu Electricity Distribution Company (EEDC).

At the heart of its operations is the flagship Bayelsa Gas & CNG Hub Project, which features a 25 Million Standard Cubic Feet Per Day (MMSCFD) Compressed Natural Gas (CNG) Processing Plant and a 70 Megawatt (MGW) Gas-Fired Power Plant in Ogboloma Town, Yenagoa, Bayelsa State, Nigeria.

This flagship project will serve as a model for gas commercialization across the Niger Delta, displacing high-emission fuels while supporting the Decade of Gas Initiative, Presidential CNG Initiative (PCNGI), and the National Gas Expansion Programme (NGEP).

The facility will include associated infrastructure such as gas-delivery pipelines, compression units, CNG trailer filling stations, and logistics assets for product evacuation.

The Bayelsa CNG Mother Station is designed to accelerate the transition from liquid fuels to cleaner natural gas, in full alignment with national priorities such as the Decade of Gas Initiative and the Energy Transition Plan.`

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 text-primary">
                OUR INTEREST
              </h2>
            </div>

            {/* Preview Text */}
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We welcome strategic partners, investors, and stakeholders to join us in realizing this vision and creating a lasting impact.
              </p>
              
              {/* Eye-catching credential highlight */}
              <div className="bg-gradient-to-r from-primary/15 to-secondary/15 border-l-4 border-primary p-5 rounded-lg my-6">
                <p className="text-base font-semibold text-primary mb-2 uppercase tracking-wide">Key Achievements</p>
                <p className="text-lg text-foreground font-bold leading-relaxed">
                  We have secured our Gas Sales Agreement with Nigerian Gas Marketing Limited and the License to Establish a Compressed Natural Gas Plant in Bayelsa State, Nigeria.
                </p>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">
                One of those partnerships is the Bayelsa State Government Of Nigeria&apos;s interest in providing Obodofei Integrated Services Limited a vast portion of land for an Industrial Park Development, which is one of our innovative strategies for off-takers and our marketing partner Geometric Power ABA Limited, Enugu Electricity Distribution Company (EEDC).
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                At the heart of our operations is the flagship Bayelsa Gas & CNG Hub Project, which features a 25 MMSCFD Compressed Natural Gas Processing Plant and a 70 Megawatt Gas-Fired Power Plant in Ogboloma Town, Yenagoa, Bayelsa State, Nigeria.
              </p>
            </div>

            {/* Read More Button */}
            <Link
              href="/about#our-interests-full"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 group relative overflow-hidden mt-6"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Read More</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden border border-border/50 shadow-xl group">
            <img
              src="/images/industrial-facility.png"
              alt="Industrial Park Development"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl md:text-2xl font-bold text-white">Bayelsa CNG Hub Project</h3>
              <p className="text-sm text-white/80 mt-2">25 MMSCFD Processing + 70 MW Power Generation</p>
            </div>
          </div>
        </div>

        {/* Credentials Section */}
        <div className="mt-20 md:mt-32 pt-16 md:pt-20 border-t border-border/50">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Credentials & Partnerships
          </h3>

          {/* Credentials Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="group relative rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-card to-card/50 p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground">Evidence of Engagement</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Nigerian Gas Marketing Limited (NGML)
              </p>
              
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-secondary font-semibold">Strategic Partnership</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Certified engagement with NGML for gas marketing and distribution operations across Nigeria's energy sector.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-card to-card/50 p-8 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground">Regulatory License</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Compressed Natural Gas Plant Establishment
              </p>
              
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-secondary font-semibold">Operating Authorization</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Official license to establish and operate a 25 MMSCFD CNG processing facility in Bayelsa State, Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
