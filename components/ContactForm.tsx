'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      {/* Contact Information */}
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
          <p className="text-muted-foreground mb-8">
            Have a question or interested in partnering with us? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Abuja */}
        <div className="space-y-3 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-md">
          <h4 className="font-semibold text-foreground">Abuja Office</h4>
          <div className="flex gap-3">
            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              13 Lord Lugard Street, Asokoro, FCT Abuja, Nigeria
            </p>
          </div>
          <div className="flex gap-3">
            <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <p>+234 (0) 8033813543</p>
              <p>+234 (0) 8136982664</p>
            </div>
          </div>
        </div>

        {/* Bayelsa */}
        <div className="space-y-3 p-4 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-md">
          <h4 className="font-semibold text-foreground">Bayelsa Office</h4>
          <div className="flex gap-3">
            <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              Along Gloryland Hospital Drive, Off Isaac Boro Expressway, Opolo, Yenagoa, Nigeria
            </p>
          </div>
          <div className="flex gap-3">
            <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <p>+234 (0) 7032159915</p>
              <p>+234 (0) 9064027227</p>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-3 p-4 rounded-xl bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-md">
          <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <p>info@obodofeieltd.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="md:col-span-2 space-y-5 bg-gradient-to-br from-card to-card/50 p-6 md:p-8 rounded-2xl border border-border/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
        {submitted && (
          <div className="p-4 bg-green-50 text-green-700 rounded-xl text-sm border border-green-200 animate-in fade-in slide-in-from-top-2 duration-300">
            Thank you for your message! We&apos;ll get back to you shortly.
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background transition-all duration-300 hover:border-primary/50 focus:border-primary"
            placeholder="Your name"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background transition-all duration-300 hover:border-primary/50 focus:border-primary"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background transition-all duration-300 hover:border-primary/50 focus:border-primary"
              placeholder="+234..."
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background transition-all duration-300 hover:border-primary/50 focus:border-primary"
          >
            <option value="">Select a subject</option>
            <option value="partnership">Business Partnership</option>
            <option value="investment">Investment Inquiry</option>
            <option value="services">Services Inquiry</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background transition-all duration-300 hover:border-primary/50 focus:border-primary resize-none"
            placeholder="Your message here..."
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3.5 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative">Send Message</span>
        </button>
      </form>
    </div>
  )
}
