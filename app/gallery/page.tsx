'use client';

import { useState } from 'react';
import Image from 'next/image';
import { studentGalleryImages } from '@/lib/studentGallery';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = studentGalleryImages;
  const selectedItem =
    selectedImage !== null
      ? galleryItems.find((item) => item.id === selectedImage)
      : null;

  return (
    <div>
      {/* Banner/Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${galleryItems[0]?.image ?? '/images/school.jpeg'})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-900/80" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-2xl">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto">
              Capturing Moments of Excellence
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mt-4">
              Explore our school&apos;s vibrant student life and activities
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              Showing {galleryItems.length} student photos
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer group"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="aspect-square overflow-hidden relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-white/80 text-xs capitalize">{item.category}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 truncate">{item.title}</h3>
                  <p className="text-sm text-gray-500 capitalize mt-1">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal/Lightbox */}
      {selectedImage !== null && selectedItem && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-6xl max-h-full relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 md:top-4 md:right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-10 transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full flex justify-center">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                width={1200}
                height={800}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white text-2xl font-bold mb-1">{selectedItem.title}</h3>
              <p className="text-white/80 capitalize">{selectedItem.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* Statistics Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            {[
              { number: galleryItems.length.toString(), label: 'Student Photos', icon: '📸' },
              { number: '1', label: 'School Album', icon: '📁' },
              { number: '1000+', label: 'Memories', icon: '❤️' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
