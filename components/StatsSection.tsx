interface Stat {
  value: string
  label: string
  description?: string
}

interface StatsSectionProps {
  title?: string
  description?: string
  stats: Stat[]
}

export default function StatsSection({ title, description, stats }: StatsSectionProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-muted/40 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {(title || description) && (
          <div className="text-center mb-16">
            {title && <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{title}</h2>}
            {description && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 text-center rounded-2xl bg-gradient-to-br from-background to-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    {stat.value}
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{stat.label}</h3>
                {stat.description && (
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
