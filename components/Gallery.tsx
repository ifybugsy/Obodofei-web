'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryImage {
  id: string
  src: string
  alt: string
  title: string
}

export default function Gallery() {
  // Developer: Add images here by adding new objects to this array
  // Example: { id: '4', src: '/images/gallery/new-image.jpg', alt: 'Description', title: 'Image Title' }
  const [images] = useState<GalleryImage[]>([
    {
      id: '1',
      src: '/images/industrial-facility.png',
      alt: 'Industrial facility',
      title: 'State-of-the-Art Industrial Facility',
    },
    {
      id: '2',
      src: '/images/cng-plant.png',
      alt: 'CNG plant',
      title: 'CNG Processing Plant',
    },
    {
      id: '3',
      src: '/images/team-meeting.png',
      alt: 'Team meeting',
      title: 'Leadership Team Meeting',
    },
    // ADD NEW IMAGES HERE - Developer uploads only
    // {
    //   id: '4',
    //   src: '/images/gallery/your-image.jpg',
    //   alt: 'Description',
    //   title: 'Image Title',
    // },
  ])

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const handlePrevious = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
    setSelectedImage(images[(lightboxIndex - 1 + images.length) % images.length])
  }

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length)
    setSelectedImage(images[(lightboxIndex + 1) % images.length])
  }

  return (
    <div className="w-full space-y-12">
      {/* Gallery Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Gallery</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our state-of-the-art facilities, projects, and team moments that showcase our commitment to excellence in energy infrastructure.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Existing Images */}
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group relative h-64 md:h-72 rounded-2xl overflow-hidden border border-border/50 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20"
            onClick={() => {
              setSelectedImage(image)
              setLightboxIndex(index)
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white font-semibold text-lg">{image.title}</h3>
            </div>
          </div>
        ))}

        {/* Developer Notice */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/30">
          <p className="text-sm font-semibold text-foreground">Developer: To add more gallery images, edit the Gallery component and add image objects to the images array in the code.</p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors duration-300 z-50"
          >
            <X className="h-6 w-6 text-foreground" />
          </button>

          {/* Main Image */}
          <div className="relative w-full max-w-4xl h-96 md:h-[600px] rounded-2xl overflow-hidden border border-border/50">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 z-40 group"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 z-40 group"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-foreground/10 backdrop-blur-sm">
            <p className="text-sm font-semibold text-foreground">
              {lightboxIndex + 1} / {images.length}
            </p>
          </div>

          {/* Image Title */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center">
            <h3 className="text-xl font-bold text-foreground">{selectedImage.title}</h3>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border/50">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 text-center">
          <p className="text-3xl font-bold text-primary">{images.length}</p>
          <p className="text-sm text-muted-foreground mt-2">Total Images</p>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 text-center">
          <p className="text-3xl font-bold text-secondary">{Math.ceil(images.length / 3)}</p>
          <p className="text-sm text-muted-foreground mt-2">Gallery Collections</p>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 text-center">
          <p className="text-3xl font-bold text-accent">{6 - (images.length - 3)}</p>
          <p className="text-sm text-muted-foreground mt-2">Slots Available</p>
        </div>
      </div>
    </div>
  )
}
