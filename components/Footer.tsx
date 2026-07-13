import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-foreground/5 to-foreground/10 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info with Logo */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <div className="relative h-20 w-20 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg">
                <Image
                  src="/logo.png"
                  alt="Obodofei Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Moving beyond traditional contracting to acting as a strategic partner in the energy sector.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Abuja Office */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Abuja Office</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <p className="text-muted-foreground leading-snug">13 Lord Lugard Street, Asokoro, FCT Abuja, Nigeria</p>
              </div>
              <div className="flex gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div className="text-muted-foreground">
                  <p>+234 (0) 8033813543</p>
                  <p>+234 (0) 8136982664</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bayelsa Office */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Bayelsa Office</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <p className="text-muted-foreground leading-snug">Along Gloryland Hospital Drive, Off Isaac Boro Expressway, Opolo, Yenagoa, Nigeria</p>
              </div>
              <div className="flex gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div className="text-muted-foreground">
                  <p>+234 (0) 7032159915</p>
                  <p>+234 (0) 9064027227</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Obodofei Integrated Services Limited. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/contact" className="hover:text-primary transition-colors duration-200">
                Contact
              </Link>
              <Link href="/sustainability" className="hover:text-primary transition-colors duration-200">
                Sustainability
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
