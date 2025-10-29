"use client"

import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <header className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white py-16 px-8 text-center">
      <div className="flex flex-col items-center gap-6">
        <div
          className="relative w-40 h-40 rounded-full border-4 border-white shadow-lg transition-transform duration-300 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transform: isHovered ? "scale(1.05) rotateZ(5deg)" : "scale(1)",
          }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-I4QfiSJYGZhnH83rWiDvZHA0JuBBJJ.jpg"
            alt="Tran Thanh Son Avatar"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-5xl font-bold mb-2 drop-shadow-lg">Tran Thanh Son</h1>
          <p className="text-xl font-semibold opacity-95">Full Stack Developer | Web Designer</p>
          <p className="text-base opacity-85 italic mt-2">
            4th Year Student - University of Science | Passionate about web development and UI/UX design
          </p>
        </div>
      </div>
    </header>
  )
}
