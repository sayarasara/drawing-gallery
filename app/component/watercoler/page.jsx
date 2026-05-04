"use client";
import { useState } from "react";
import Link from "next/link";

export default function watercoler() {
  const [selectedImage, setSelectedImage] = useState(null);

// Watercolor artwork data
const watercolorArtworks = [
  { 
    id: 1, 
    title: "Morning Mist", 
    image: "/watercolor/WhatsApp Image 2026-05-04 at 9.30.11 PM (1).jpeg", 
    size: "tall", 
    description: "Soft morning light filtering through gentle mist, creating an ethereal atmosphere", 
    year: "2024" 
  },
  { 
    id: 2, 
    title: "Evening Reflections", 
    image: "/watercolor/WhatsApp Image 2026-05-04 at 9.30.11 PM.jpeg", 
    size: "wide", 
    description: "Golden hour light dancing on calm waters, capturing nature's tranquil moments", 
    year: "2024" 
  },
  { 
    id: 3, 
    title: "Whispering Waves", 
    image: "/watercolor/WhatsApp Image 2026-05-04 at 9.30.12 PM (1).jpeg", 
    size: "square", 
    description: "Ocean waves gently lapping at the shore in fluid watercolor strokes", 
    year: "2024" 
  },
  { 
    id: 4, 
    title: "Coastal Serenity", 
    image: "/watercolor/WhatsApp Image 2026-05-04 at 9.30.12 PM.jpeg", 
    size: "wide", 
    description: "Peaceful coastline where earth meets sea in harmonious color blends", 
    year: "2023" 
  },
  { 
    id: 5, 
    title: "", 
    image: "/watercolor/WhatsApp Image 2026-05-04 at 9.30.13 PM (1).jpeg", 
    size: "tall", 
    description: "First light touching mountain peaks through layers of atmospheric wash", 
    year: "2024" 
  },
  { 
    id: 6, 
    title: "Mountain Dawn", 
    image: "/watercolor/WhatsApp Image 2026-05-04 at 9.30.13 PM.jpeg", 
    size: "tall", 
    description: "First light touching mountain peaks through layers of atmospheric wash", 
    year: "2024" 
  },
  { 
    id: 7, 
    title: "Woodland Path", 
    image: "/watercolor/WhatsApp Image 2026-05-04 at 9.30.14 PM.jpeg", 
    size: "square", 
    description: "A gentle forest trail dappled with sunlight and shadow", 
    year: "2024" 
  },
];

  

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/022/277/135/small/realistic-black-wooden-board-background-free-vector.jpg'), radial-gradient(circle at center, #8B7355 0%, #5C4033 100%)",
        backgroundBlendMode: "overlay"
      }}
    >
      {/* HERO SECTION - Watercolor Theme */}
      <div className="min-h-[50vh] flex items-center justify-center relative">
        <div className="text-center px-4 z-10">
          <div className="inline-block mb-4 px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
            <span className="text-xs tracking-wider text-blue-300">FLUID COLLECTION</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black">
            <span className="text-white">WATER</span>
            <br />
            <span className="text-blue-400">COLOR</span>
          </h1>
          <p className="text-md md:text-xl text-gray-300 mt-6 tracking-widest max-w-2xl mx-auto">
            Fluid emotions, flowing colors — where water and pigment dance together
          </p>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-0.5 bg-blue-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
              WATERCOLOR GALLERY
            </h2>
            <p className="text-gray-400 mt-3 text-sm tracking-wider">Transparent layers, timeless beauty</p>
          </div>

          {/* Masonry Grid - Same as pastelwork */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {watercolorArtworks.map((artwork) => (
              <div 
                key={artwork.id} 
                className="break-inside-avoid mb-6 group cursor-pointer"
                onClick={() => setSelectedImage(artwork)}
              >
                <div className="bg-black p-2 shadow-2xl hover:shadow-blue-900/30 transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="bg-black p-1 border border-gray-800">
                    <div className="bg-white p-3">
                      <div className="relative overflow-hidden bg-gray-200">
                        <div className={`
                          ${artwork.size === 'tall' ? 'aspect-[3/4]' : ''}
                          ${artwork.size === 'wide' ? 'aspect-[4/3]' : ''}
                          ${artwork.size === 'square' ? 'aspect-square' : ''}
                        `}>
                          <img
                            src={artwork.image}
                            alt={artwork.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => {
                              e.target.src = "https://placehold.co/600x800/1a1a2e/4169E1?text=Watercolor";
                            }}
                          />
                          
                          <div className="absolute inset-0 bg-blue-800/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                            <span className="text-white text-sm tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 font-light">
                              VIEW
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-light tracking-wide drop-shadow-lg">
                    {artwork.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ARTIST STATEMENT */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="w-12 h-0.5 bg-blue-400 mx-auto mb-6"></div>
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide">
              The Fluidity of Dreams
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              Watercolor is the most responsive medium — it breathes, flows, and finds its own path. 
              Each painting is a collaboration between intention and chance, where water carries pigment 
              into unexpected territories. These works capture moments that can never be exactly replicated, 
              making each piece truly one-of-a-kind.
            </p>
          </div>
        </div>
      </div>

      {/* BACK BUTTON */}
      <div className="py-12 px-4 text-center border-t border-white/10">
        <Link href="/" className="group inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300">
          <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
          <span className="text-sm tracking-wider">BACK TO HOME</span>
        </Link>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button 
              className="absolute -top-12 right-0 text-black text-4xl hover:text-blue-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            
            <div className="bg-black p-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-black p-1 border border-gray-800">
                <div className="bg-white p-6">
                  <div className="flex items-center justify-center">
                    <img
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      className="max-w-full max-h-[70vh] object-contain"
                      onError={(e) => {
                        e.target.src = "https://placehold.co/800x1000/1a1a2e/4169E1?text=Watercolor";
                      }}
                    />
                  </div>
                  <div className="text-center mt-6">
                    <h2 className="text-2xl font-bold text-gray-800">{selectedImage.title}</h2>
                    <p className="text-gray-500 mt-1 text-sm">{selectedImage.description}</p>
                    <p className="text-gray-400 text-xs mt-2">{selectedImage.year}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-16 text-white text-5xl hover:text-blue-400 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = watercolorArtworks.findIndex(a => a.id === selectedImage.id);
                const prevIndex = (currentIndex - 1 + watercolorArtworks.length) % watercolorArtworks.length;
                setSelectedImage(watercolorArtworks[prevIndex]);
              }}
            >
              ←
            </button>
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-16 text-white text-5xl hover:text-blue-400 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = watercolorArtworks.findIndex(a => a.id === selectedImage.id);
                const nextIndex = (currentIndex + 1) % watercolorArtworks.length;
                setSelectedImage(watercolorArtworks[nextIndex]);
              }}
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}