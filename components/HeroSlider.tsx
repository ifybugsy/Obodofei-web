'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  title: string
  subtitle: string
  description: string
  image: string
  cta: {
    text: string
    href: string
  }
}

interface HeroSliderProps {
  slides: Slide[]
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlay, slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative w-full h-screen md:h-[600px] overflow-hidden bg-foreground">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Subtle Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-start h-full px-4 md:px-12 lg:px-16">
        <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/30 to-secondary/30 border border-accent/50 backdrop-blur-sm group">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/50" />
            <p className="text-sm md:text-base font-semibold text-accent uppercase tracking-wide">
              {currentSlideData.subtitle}
            </p>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {currentSlideData.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
            {currentSlideData.description}
          </p>

          {/* CTA */}
          <Link
            href={currentSlideData.cta.href}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-110 group relative overflow-hidden w-fit"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              {currentSlideData.cta.text}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all duration-300 backdrop-blur-sm group"
      >
        <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all duration-300 backdrop-blur-sm group"
      >
        <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 backdrop-blur-sm rounded-full ${
              index === currentSlide
                ? 'bg-primary w-8 h-2.5 shadow-lg shadow-primary/50'
                : 'bg-white/40 hover:bg-white/60 w-2.5 h-2.5'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-30 text-white/60 text-sm font-medium backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  )
}
