"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div className="min-h-screen bg-black">
      
      {/* NAVIGATION BAR */}
      <div className="relative bg-gradient-to-r from-black via-gray-900 to-black border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-3 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="mb-6">
            <div className="w-12 h-12 md:w-10 md:h-10 rounded-full overflow-hidden border-4 border-red-600 mx-auto shadow-2xl shadow-red-900/50">
              <img
                src="/logo2.jpeg"
                alt="Artist"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white text-sm tracking-wider transition-colors">
            ← BACK TO GALLERY
          </Link>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="relative min-h-[30vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #ef4444 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }}></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4">
            <span className="text-white">My Simple</span>
            <span className="text-red-600"> Journey</span>
          </h1>
        </div>
      </div>

      {/* STORY SECTION - Where It All Began */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="space-y-20">
          
          {/* Section 1: Childhood */}
          <div className="group">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-red-600 text-6xl font-black opacity-20">01</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Where It All Began</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  My journey with art started in the earliest days of my childhood. 
                  My father used to bring home 
                  drawing elements — sketchbooks, colors, and pencils instead of toys — that became 
                  my most treasured possessions.
                </p>
                <p className="text-gray-400 leading-relaxed">
             Although it isn't my main profession, always my fevarite hobby.  I found my happiness in the 
                  strokes of a pencil and the blend of colors. Drawing wasn't just an 
                  activity; it was my language, my way of understanding the world 
                  around me.
                </p>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-red-900/20 to-gray-900 rounded-2xl overflow-hidden border border-gray-800">
                  <img
                    src="/other/WhatsApp Image 2026-05-08 at 2.48.15 AM.jpeg"
                    alt="Childhood art memories"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="text-gray-400 text-sm">Childhood Sketch</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Love for Nature */}
          <div className="group">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-red-600 text-6xl font-black opacity-20">02</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Love for Nature</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="aspect-square bg-gradient-to-br from-green-900/20 to-gray-900 rounded-2xl overflow-hidden border border-gray-800">
                  <img
                    src="/other/WhatsApp Image 2026-05-08 at 2.48.15 AM (2).jpeg"
                    alt="Nature inspiration"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                  />
              </div>
              </div>
              
              <div className="order-1 md:order-2 space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  From my earliest memories, I was captivated by the beauty of nature. 
                  Flowers became my first muses — their delicate petals, vibrant colors, 
                  and the way they danced in the breeze fascinated me endlessly.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I would spend hours sitting in gardens, observing how light played 
                  with leaves, how shadows created depth, and how each flower told 
                  its own unique story. Nature wasn't just around me — it was inside me, 
                  waiting to be expressed through art.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="text-xs px-3 py-1.5 bg-red-600/10 border border-red-600/30 text-red-400 rounded-full">🌺 Flowers</span>
                  <span className="text-xs px-3 py-1.5 bg-red-600/10 border border-red-600/30 text-red-400 rounded-full">🌿 Nature</span>
                  <span className="text-xs px-3 py-1.5 bg-red-600/10 border border-red-600/30 text-red-400 rounded-full">☀️ Light</span>
                  <span className="text-xs px-3 py-1.5 bg-red-600/10 border border-red-600/30 text-red-400 rounded-full">🎨 Colors</span>
                </div>
              </div>
            </div>
          </div>
</div>

      

      {/* CALL TO ACTION */}
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Explore My <span className="text-red-600">Collections</span>
        </h2>
        <p className="text-gray-400 mb-8">Discover the art born from childhood memories</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/component/pastelwork">
            <button className="group relative overflow-hidden bg-transparent border-2 border-red-600 text-white px-8 py-3 rounded-full font-light tracking-wider transition-all duration-300 hover:bg-red-600">
              PASTELWORK
            </button>
          </Link>
          <Link href="/component/wallpainting">
            <button className="group relative overflow-hidden bg-transparent border-2 border-red-600 text-white px-8 py-3 rounded-full font-light tracking-wider transition-all duration-300 hover:bg-red-600">
              WALL PAINTING
            </button>
          </Link>
          <Link href="/component/watercoler">
            <button className="group relative overflow-hidden bg-transparent border-2 border-red-600 text-white px-8 py-3 rounded-full font-light tracking-wider transition-all duration-300 hover:bg-red-600">
              WATERCOLOR
            </button>
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t border-gray-800 py-6 text-center">
        <Link href="/" className="text-gray-500 hover:text-white text-sm tracking-wider transition-colors">
          ← BACK TO GALLERY
        </Link>
      </div>
    </div>
    </div>
  )
}

export default page