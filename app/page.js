"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Your artwork data
  const artworks = [
    { id: 1, title: "Summer Memory", image: "/", size: "tall" },
    { id: 2, title: "Ocean Dreams", image: "/", size: "wide" },
    { id: 3, title: "Forest Whisper", image: "/", size: "square" },
    { id: 4, title: "Midnight Star", image: "/artwork4.jpg", size: "tall" },
    { id: 5, title: "Golden Hour", image: "/artwork5.jpg", size: "tall" },
    { id: 6, title: "Silent Moon", image: "/artwork6.jpg", size: "wide" },
    { id: 7, title: "Dream Walker", image: "/artwork7.jpg", size: "square" },
    { id: 8, title: "Night Sky", image: "/artwork8.jpg", size: "tall" },
  ];

  return (
    <div className="min-h-screen">
      
      {/* HERO SECTION */}
      <div className="min-h-[50vh] flex items-center justify-center relative bg-black">
        <div className="text-center px-3 z-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black">
            <span className="text-white">MY DRAWING</span>
            <br />
            <span className="text-red-600">MEMORY</span>
          </h1>
        </div>
      </div>
      
<div      style={{
          backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/022/277/135/small/realistic-black-wooden-board-background-free-vector.jpg'), radial-gradient(circle at center, #8B7355 0%, #5C4033 100%)",
          backgroundBlendMode: "overlay"
        }} >
      {/* WALL GALLERY - Masonry layout with NO empty spaces */}
      <div 
        className="py-20 px-4"
        // style={{
        //   backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/022/277/135/small/realistic-black-wooden-board-background-free-vector.jpg'), radial-gradient(circle at center, #8B7355 0%, #5C4033 100%)",
        //   backgroundBlendMode: "overlay"
        // }}
      >
        <div className="max-w-7xl mx-auto">
          {/* MASONRY GRID - Like Pinterest, no gaps! */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {artworks.map((artwork, idx) => (
              <div 
                key={artwork.id} 
                className="break-inside-avoid mb-6 group cursor-pointer"
                onClick={() => setSelectedImage(artwork)}
              >
                {/* Frame with dynamic height based on content */}
                <div className="bg-black p-2 shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:scale-[1.02]">
                  <div className="bg-black p-1 border border-gray-800">
                    <div className="bg-white p-3">
                      <div className="relative overflow-hidden bg-gray-200">
                        {/* Dynamic aspect ratio based on size */}
                        <div className={`
                          ${artwork.size === 'tall' ? 'aspect-[3/4]' : ''}
                          ${artwork.size === 'wide' ? 'aspect-[4/3]' : ''}
                          ${artwork.size === 'square' ? 'aspect-square' : ''}
                        `}>
                          <img
                            src={artwork.image}
                            alt={artwork.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/400?text=Art";
                            }}
                          />
                          
                          {/* Hover overlay */}
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
                
                {/* Title on hover */}
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
                    />
                  </div>
                  <div className="text-center mt-6">
                    <h2 className="text-2xl font-bold text-gray-800">{selectedImage.title}</h2>
                    <p className="text-gray-500 mt-1 text-sm">Digital Painting</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-16 text-white text-5xl hover:text-red-500 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = artworks.findIndex(a => a.id === selectedImage.id);
                const prevIndex = (currentIndex - 1 + artworks.length) % artworks.length;
                setSelectedImage(artworks[prevIndex]);
              }}
            >
              ←
            </button>
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-16 text-white text-5xl hover:text-red-500 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = artworks.findIndex(a => a.id === selectedImage.id);
                const nextIndex = (currentIndex + 1) % artworks.length;
                setSelectedImage(artworks[nextIndex]);
              }}
            >
              →
            </button>
          </div>
        </div>
      )}
      {/* pastelwork card */}
{/* PASTELWORK SECTION - Image on LEFT, Content on RIGHT */}
<div className="py-32 px-4 ">
  <div className="max-w-6xl mx-auto">
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-light text-white mb-3 tracking-wide">
        PASTELWORK
      </h2>
      <div className="w-20 h-0.5 bg-red-600 mx-auto"></div>
      <p className="text-gray-400 mt-4 text-sm tracking-wider">Soft tones, lasting impressions</p>
    </div>

    {/* Pastelwork Card - Image LEFT, Content RIGHT */}
    <div className="group">
      <div className="flex flex-col md:flex-row bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-red-900/20 transition-all duration-500 hover:transform hover:scale-[1.01] border border-gray-700/50">
        
        {/* Image Section - LEFT */}
        <div className="md:w-1/2 relative overflow-hidden">
          <div className="relative h-72 md:h-full">
            <img
              src="/pikachu.png"
              alt="Pastel artwork"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Content Section - RIGHT */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-4">
            <span className="text-xs font-light tracking-wider text-red-400 border border-red-400/30 px-3 py-1 rounded-full">
              SOFT COLLECTION
            </span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Soft Dreams
          </h3>
          
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
            Discover the delicate beauty of pastel impressions. Each stroke captures fleeting moments in gentle hues, creating lasting memories that soothe the soul.
          </p>
          
          <div className="mb-8 p-4 bg-white/5 rounded-lg border-l-2 border-red-500">
            <p className="text-gray-400 text-xs italic">
              "In soft colors, we find the loudest emotions. This collection explores memory through gentle gradients and tender touches."
            </p>
          </div>
          
          <Link href="/component/pastelwork">
            <button className="group/btn relative overflow-hidden bg-transparent border-2 border-red-600 text-white px-8 py-3 rounded-full font-light tracking-wider transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-600/25">
              <span className="relative z-10">EXPLORE COLLECTION</span>
              <span className="absolute inset-0 bg-red-600 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

{/* WALL PAINTING SECTION - Image on LEFT, Content on RIGHT */}
<div className="py-32 px-4 ">
  <div className="max-w-6xl mx-auto">
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-light text-white mb-3 tracking-wide">
        WALL PAINTING
      </h2>
      <div className="w-20 h-0.5 bg-red-600 mx-auto"></div>
      <p className="text-gray-400 mt-4 text-sm tracking-wider">Bold strokes, wall statements</p>
    </div>

    {/* Wall Painting Card - Image LEFT, Content RIGHT */}
    <div className="group">
      <div className="flex flex-col md:flex-row bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-red-900/20 transition-all duration-500 hover:transform hover:scale-[1.01] border border-gray-700/50">
        {/* Content Section - RIGHT */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-4">
            <span className="text-xs font-light tracking-wider text-red-400 border border-red-400/30 px-3 py-1 rounded-full">
              MURALS & WALL ART
            </span>
          </div>
               {/* Image Section - LEFT */}

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Walls That Speak
          </h3>
          
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
            Transform your space with bold wall paintings. Each mural tells a story, turning blank walls into captivating canvases that command attention and inspire.
          </p>
          
          <div className="mb-8 p-4 bg-white/5 rounded-lg border-l-2 border-red-500">
            <p className="text-gray-400 text-xs italic">
              "Walls are my canvas, stories are my paint. Every stroke brings life to empty spaces."
            </p>
          </div>
          
          <Link href="/component/wallpainting">
            <button className="group/btn relative overflow-hidden bg-transparent border-2 border-red-600 text-white px-8 py-3 rounded-full font-light tracking-wider transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-600/25">
              <span className="relative z-10">EXPLORE WALL ART</span>
              <span className="absolute inset-0 bg-red-600 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></span>
            </button>
          </Link>
        </div>
         {/* Image Section - LEFT */}
        <div className="md:w-1/2 relative overflow-hidden">
          <div className="relative h-72 md:h-full">
            <img
              src="/wallpainting-image.jpg"
              alt="Wall painting artwork"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
        </div>


      </div>
    </div>
  </div>
</div>

{/* WATERCOLOR SECTION - Image on LEFT, Content on RIGHT */}
<div className="py-32 px-4 ">
  <div className="max-w-6xl mx-auto">
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-light text-white mb-3 tracking-wide">
        WATERCOLOR
      </h2>
      <div className="w-20 h-0.5 bg-red-600 mx-auto"></div>
      <p className="text-gray-400 mt-4 text-sm tracking-wider">Fluid emotions, flowing colors</p>
    </div>

    {/* Watercolor Card - Image LEFT, Content RIGHT */}
    <div className="group">
      <div className="flex flex-col md:flex-row bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-red-900/20 transition-all duration-500 hover:transform hover:scale-[1.01] border border-gray-700/50">
        
        {/* Image Section - LEFT */}
        <div className="md:w-1/2 relative overflow-hidden">
          <div className="relative h-72 md:h-full">
            <img
              src="/watercolor-image.jpg"
              alt="Watercolor artwork"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Content Section - RIGHT */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-4">
            <span className="text-xs font-light tracking-wider text-red-400 border border-red-400/30 px-3 py-1 rounded-full">
              FLUID ART
            </span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Flowing Dreams
          </h3>
          
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
            Experience the magic of watercolor where colors dance and blend. Each piece captures the unpredictable beauty of fluid movements and transparent layers.
          </p>
          
          <div className="mb-8 p-4 bg-white/5 rounded-lg border-l-2 border-red-500">
            <p className="text-gray-400 text-xs italic">
              "Like water seeking its path, my colors find their way to create something unexpectedly beautiful."
            </p>
          </div>
          
          <Link href="/component/watercoler">
            <button className="group/btn relative overflow-hidden bg-transparent border-2 border-red-600 text-white px-8 py-3 rounded-full font-light tracking-wider transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-600/25">
              <span className="relative z-10">EXPLORE WATERCOLOR</span>
              <span className="absolute inset-0 bg-red-600 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
   </div>
  );
}