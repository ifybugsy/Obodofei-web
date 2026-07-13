import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  details?: string[]
  highlight?: boolean
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  details,
  highlight,
}: ServiceCardProps) {
  return (
    <div
      className={`group rounded-2xl p-6 md:p-8 transition-all duration-300 backdrop-blur-sm border transform hover:scale-105 ${
        highlight
          ? 'bg-gradient-to-br from-primary/15 to-secondary/15 border-primary/50 shadow-lg hover:shadow-primary/20'
          : 'bg-gradient-to-br from-background to-card border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10'
      }`}
    >
      {/* Icon Container */}
      <div className="mb-6">
        <div className={`inline-flex p-4 rounded-xl transition-all duration-300 ${
          highlight 
            ? 'bg-gradient-to-br from-accent/30 to-secondary/30 group-hover:from-accent/50 group-hover:to-secondary/50' 
            : 'bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30'
        }`}>
          <Icon className={`h-7 w-7 transition-transform group-hover:scale-110 ${highlight ? 'text-accent' : 'text-primary'}`} />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-6 text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Details List */}
      {details && details.length > 0 && (
        <ul className="space-y-3">
          {details.map((detail, index) => (
            <li key={index} className="flex gap-3 items-start text-sm">
              <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${
                highlight 
                  ? 'bg-accent/30 text-accent' 
                  : 'bg-primary/30 text-primary'
              }`}>
                ✓
              </span>
              <span className="text-foreground/80 leading-snug">{detail}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Gradient Border Accent */}
      <div className={`absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/20 to-secondary/20 blur`} />
    </div>
  )
}
