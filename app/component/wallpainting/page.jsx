"use client";
import { useState } from "react";
import Link from "next/link";

export default function WallPaintingPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Wall Painting artwork data
  const wallArtworks = [
    { id: 1, title: "Urban Rhythms", image: "/wall1.jpg", size: "wide", description: "The heartbeat of city streets captured in bold strokes", year: "2024" },
    { id: 2, title: "Abstract Rebellion", image: "/wall2.jpg", size: "tall", description: "Bold colors breaking conventional boundaries", year: "2023" },
    { id: 3, title: "Monumental Dreams", image: "/wall3.jpg", size: "square", description: "Large-scale visions on urban walls", year: "2024" },
    { id: 4, title: "Street Symphony", image: "/wall4.jpg", size: "wide", description: "Where graffiti meets fine art", year: "2023" },
    { id: 5, title: "Concrete Poetry", image: "/wall5.jpg", size: "tall", description: "Words and shapes on raw surfaces", year: "2024" },
    { id: 6, title: "Mural Evolution", image: "/wall6.jpg", size: "square", description: "Transforming blank walls into stories", year: "2023" },
    { id: 7, title: "Neon Conversations", image: "/wall7.jpg", size: "wide", description: "Electric dialogues on brick", year: "2024" },
    { id: 8, title: "Epic Scale", image: "/wall8.jpg", size: "tall", description: "Monumental art for massive spaces", year: "2024" },
  ];

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/022/277/135/small/realistic-black-wooden-board-background-free-vector.jpg'), radial-gradient(circle at center, #8B7355 0%, #5C4033 100%)",
        backgroundBlendMode: "overlay"
      }}
    >
      {/* HERO SECTION - Wall Painting Theme */}
      <div className="min-h-[50vh] flex items-center justify-center relative">
        <div className="text-center px-4 z-10">
          <div className="inline-block mb-4 px-3 py-1 bg-red-600/20 backdrop-blur-sm rounded-full border border-red-500/30">
            <span className="text-xs tracking-wider text-red-300">BOLD COLLECTION</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black">
            <span className="text-white">WALL</span>
            <br />
            <span className="text-red-500">PAINTING</span>
          </h1>
          <p className="text-md md:text-xl text-gray-300 mt-6 tracking-widest max-w-2xl mx-auto">
            Bold strokes, wall statements — transforming spaces into living art
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
              WALL GALLERY
            </h2>
            <p className="text-gray-400 mt-3 text-sm tracking-wider">Murals that command attention</p>
          </div>

          {/* Masonry Grid - Same as pastelwork */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {wallArtworks.map((artwork) => (
              <div 
                key={artwork.id} 
                className="break-inside-avoid mb-6 group cursor-pointer"
                onClick={() => setSelectedImage(artwork)}
              >
                <div className="bg-black p-2 shadow-2xl hover:shadow-red-900/30 transition-all duration-500 group-hover:scale-[1.02]">
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
                              e.target.src = "https://placehold.co/600x800/1a1a1a/ff3333?text=Wall+Art";
                            }}
                          />
                          
                          <div className="absolute inset-0 bg-red-800/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
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
            <div className="w-12 h-0.5 bg-red-500 mx-auto mb-6"></div>
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide">
              The Wall Speaks
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              Every wall is a canvas waiting to be awakened. My wall paintings transform empty spaces 
              into powerful statements, where scale meets emotion and color commands attention. 
              These murals are not just decorations — they are conversations with architecture itself.
            </p>
          </div>
        </div>
      </div>

      {/* BACK BUTTON */}
      <div className="py-12 px-4 text-center border-t border-white/10">
        <Link href="/" className="group inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors duration-300">
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
                        e.target.src = "https://placehold.co/800x1000/1a1a1a/ff3333?text=Wall+Art";
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
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-16 text-white text-5xl hover:text-red-500 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = wallArtworks.findIndex(a => a.id === selectedImage.id);
                const prevIndex = (currentIndex - 1 + wallArtworks.length) % wallArtworks.length;
                setSelectedImage(wallArtworks[prevIndex]);
              }}
            >
              ←
            </button>
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-16 text-white text-5xl hover:text-red-500 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = wallArtworks.findIndex(a => a.id === selectedImage.id);
                const nextIndex = (currentIndex + 1) % wallArtworks.length;
                setSelectedImage(wallArtworks[nextIndex]);
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