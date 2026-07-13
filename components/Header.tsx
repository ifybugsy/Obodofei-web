'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About', dropdown: true },
    { href: '/services', label: 'Services', dropdown: true },
    { href: '/contact', label: 'Contact' },
  ]

  const aboutDropdown = [
    { href: '/about', label: 'About Us' },
    { href: '/gallery', label: 'Gallery' },
  ]

  const servicesDropdown = [
    { href: '/services', label: 'Our Services' },
    { href: '/sustainability', label: 'Sustainability' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-24 w-24 md:h-32 md:w-32 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg">
              <Image
                src="/logo.png"
                alt="Obodofei Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className="px-5 py-2.5 text-sm font-medium text-foreground relative group overflow-hidden rounded-xl transition-all duration-300 hover:text-primary flex items-center gap-1"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative">{item.label}</span>
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute left-0 mt-0 w-48 bg-card border border-border/50 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50">
                      {(item.label === 'About' ? aboutDropdown : item.label === 'Services' ? servicesDropdown : []).map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block px-5 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/20 transition-all duration-200"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-5 py-2.5 text-sm font-medium text-foreground relative overflow-hidden rounded-xl transition-all duration-300 hover:text-primary"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative">{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-foreground hover:bg-accent/20 transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-1 animate-in fade-in slide-in-from-top-2">
            {navItems.map((item, index) => (
              <div key={item.href}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => {
                        if (item.label === 'About') setIsAboutDropdownOpen(!isAboutDropdownOpen)
                        if (item.label === 'Services') setIsServicesDropdownOpen(!isServicesDropdownOpen)
                      }}
                      className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:text-primary relative group overflow-hidden transition-all duration-300 flex items-center justify-between"
                      style={{
                        animationDelay: `${index * 50}ms`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative">{item.label}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${(item.label === 'About' ? isAboutDropdownOpen : item.label === 'Services' ? isServicesDropdownOpen : false) ? 'rotate-180' : ''}`} />
                    </button>
                    {((item.label === 'About' && isAboutDropdownOpen) || (item.label === 'Services' && isServicesDropdownOpen)) && (
                      <div className="pl-4 space-y-1 animate-in fade-in slide-in-from-top-2">
                        {(item.label === 'About' ? aboutDropdown : item.label === 'Services' ? servicesDropdown : []).map((subitem, subindex) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className="block px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:text-primary hover:bg-accent/20 transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                            style={{
                              animationDelay: `${(index + 1) * 50 + subindex * 30}ms`,
                            }}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:text-primary relative group overflow-hidden transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative">{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
