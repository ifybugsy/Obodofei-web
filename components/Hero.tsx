import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  image?: string
  cta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
}

export default function Hero({
  title,
  subtitle,
  description,
  image,
  cta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative w-full py-24 md:py-40 overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 min-h-screen md:min-h-auto">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient Orbs with enhanced animations */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/25 rounded-full blur-3xl animate-pulse" style={{animationDuration: '3s'}} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/25 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s', animationDelay: '0.5s'}} />
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '3.5s', animationDelay: '1s'}} />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{animationDuration: '4s'}} />
      </div>

      {/* Background Image */}
      {image && (
        <>
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 z-5 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        </>
      )}

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          {subtitle && (
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/50 backdrop-blur-sm group animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/50" />
              <p className="text-sm md:text-base font-semibold text-accent uppercase tracking-wide">
                {subtitle}
              </p>
            </div>
          )}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-foreground via-primary to-secondary mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            {cta && (
              <Link
                href={cta.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-110 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  {cta.text}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm hover:border-primary/80 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">{secondaryCta.text}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
