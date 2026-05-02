"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PastelworkPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Pastelwork specific artwork data
  const pastelArtworks = [
    { id: 1, title: "Soft Horizon", image: "/mt-green.png", size: "wide", description: "Gentle gradients meet the edge of dawn", year: "2024" },
    { id: 2, title: "Whispering Petals", image: "/pastel2.jpg", size: "tall", description: "Delicate flowers in soft spring tones", year: "2023" },
    { id: 3, title: "Dreamy Waters", image: "/pastel3.jpg", size: "square", description: "Calm reflections in pastel blues", year: "2024" },
    { id: 4, title: "Cotton Clouds", image: "/pastel4.jpg", size: "wide", description: "Fluffy dreams painted in soft pinks", year: "2023" },
    { id: 5, title: "Misty Morning", image: "/pastel5.jpg", size: "tall", description: "The quiet beauty of early light", year: "2024" },
    { id: 6, title: "Blushing Sky", image: "/pastel6.jpg", size: "square", description: "Sunset whispers in pastel hues", year: "2023" },
    { id: 7, title: "Gentle Breeze", image: "/pastel7.jpg", size: "wide", description: "Soft winds through pastel meadows", year: "2024" },
    { id: 8, title: "Tranquil Soul", image: "/pastel8.jpg", size: "tall", description: "Inner peace in soft gradients", year: "2024" },
    { id: 9, title: "Sugar Dreams", image: "/pastel9.jpg", size: "square", description: "Sweet visions in candy colors", year: "2023" },
    { id: 10, title: "Lavender Fields", image: "/pastel10.jpg", size: "wide", description: "Endless purple softness", year: "2024" },
  ];

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/022/277/135/small/realistic-black-wooden-board-background-free-vector.jpg'), radial-gradient(circle at center, #8B7355 0%, #5C4033 100%)",
        backgroundBlendMode: "overlay"
      }}
    >
      {/* HERO SECTION - Pastel themed */}
      <div className="min-h-[50vh] flex items-center justify-center relative">
        <div className="text-center px-4 z-10">
          <div className="inline-block mb-4 px-3 py-1 bg-red-600/20 backdrop-blur-sm rounded-full border border-red-500/30">
            <span className="text-xs tracking-wider text-red-300">SOFT COLLECTION</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black">
            <span className="text-white">PASTEL</span>
            <br />
            <span className="text-red-500">DREAMS</span>
          </h1>
          <p className="text-md md:text-xl text-gray-300 mt-6 tracking-widest max-w-2xl mx-auto">
            Soft tones, gentle strokes — memories painted in whispers of color
          </p>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-0.5 bg-red-500 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
              SOFT IMPRESSIONS
            </h2>
            <p className="text-gray-400 mt-3 text-sm tracking-wider">Each piece tells a gentle story</p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {pastelArtworks.map((artwork, idx) => (
              <div 
                key={artwork.id} 
                className="break-inside-avoid mb-6 group cursor-pointer"
                onClick={() => setSelectedImage(artwork)}
              >
                {/* Frame with pastel accent */}
                <div className="bg-black p-2 shadow-2xl hover:shadow-red-900/30 transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="bg-black p-1 border border-gray-800">
                    <div className="bg-white p-3">
                      <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50">
                        {/* Dynamic aspect ratio */}
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
                              e.target.src = "https://placehold.co/600x800/FFD1DC/9370DB?text=Pastel+Dream";
                            }}
                          />
                          
                          {/* Hover overlay - Soft pastel theme */}
                          <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-red-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                            <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                              <span className="text-white text-sm tracking-wider block mb-2">VIEW DETAILS</span>
                              <div className="w-8 h-0.5 bg-red-400 mx-auto"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Title and meta on hover */}
                <div className="text-center mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-white text-sm font-light tracking-wide drop-shadow-lg">
                    {artwork.title}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{artwork.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ARTIST NOTE SECTION */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="w-12 h-0.5 bg-red-500 mx-auto mb-6"></div>
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide">
              About Pastel Collection
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              "Pastel colors speak in whispers, yet they leave the loudest impressions on the heart. 
              This collection explores the delicate balance between light and shadow, where soft hues 
              capture fleeting moments of beauty and transform them into lasting memories."
            </p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BACK TO HOME BUTTON */}
      <div className="py-12 px-4 text-center border-t border-white/10">
        <Link href="/" className="group inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors duration-300">
          <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
          <span className="text-sm tracking-wider">BACK TO HOME</span>
        </Link>
      </div>

      {/* LIGHTBOX MODAL - with pastel theme details */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button 
              className="absolute -top-12 right-0 text-white text-4xl hover:text-red-500 transition-colors"
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
                        e.target.src = "https://placehold.co/800x1000/FFD1DC/9370DB?text=Pastel+Dream";
                      }}
                    />
                  </div>
                  <div className="text-center mt-6">
                    <h2 className="text-2xl font-bold text-gray-800">{selectedImage.title}</h2>
                    <p className="text-gray-500 mt-1 text-sm">{selectedImage.description}</p>
                    <p className="text-gray-400 text-xs mt-2">{selectedImage.year} • Pastel on Paper</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-16 text-white text-5xl hover:text-red-500 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = pastelArtworks.findIndex(a => a.id === selectedImage.id);
                const prevIndex = (currentIndex - 1 + pastelArtworks.length) % pastelArtworks.length;
                setSelectedImage(pastelArtworks[prevIndex]);
              }}
            >
              ←
            </button>
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-16 text-white text-5xl hover:text-red-500 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = pastelArtworks.findIndex(a => a.id === selectedImage.id);
                const nextIndex = (currentIndex + 1) % pastelArtworks.length;
                setSelectedImage(pastelArtworks[nextIndex]);
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