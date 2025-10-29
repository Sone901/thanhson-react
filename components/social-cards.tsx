"use client"

import type React from "react"

import { useState } from "react"

interface CardPosition {
  x: number
  y: number
}

interface SocialCard {
  id: number
  icon: string
  title: string
  url: string
  color: string
}

export default function SocialCards() {
  const [positions, setPositions] = useState<Record<number, CardPosition>>({})

  const cards: SocialCard[] = [
    {
      id: 1,
      icon: "🔵",
      title: "Facebook",
      url: "https://www.facebook.com/Thanhson09012004",
      color: "from-blue-600 to-blue-400",
    },
    {
      id: 2,
      icon: "⚫",
      title: "GitHub",
      url: "https://github.com/Sone901",
      color: "from-gray-700 to-gray-500",
    },
    {
      id: 3,
      icon: "🔷",
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/tranthanhson-20040109-tts/",
      color: "from-blue-700 to-cyan-500",
    },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: number) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPositions((prev) => ({
      ...prev,
      [cardId]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }))
  }

  return (
    <div className="w-full px-6 py-12 lg:py-16">
      <h2 className="text-3xl font-bold text-blue-400 mb-8 pb-3 border-b-2 border-purple-500 max-w-6xl mx-auto">
        Connect With Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative h-80 rounded-xl overflow-hidden group cursor-pointer"
            onMouseMove={(e) => handleMouseMove(e, card.id)}
          >
            {/* Background with mouse tracking effect */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 transition-all duration-300"
              style={{
                background:
                  positions[card.id] && card.id === 1
                    ? `radial-gradient(400px circle at ${positions[card.id].x}px ${positions[card.id].y}px, rgba(59, 130, 246, 0.2), rgba(14, 165, 233, 0.08) 40%)`
                    : "rgba(14, 165, 233, 0.08)",
              }}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center gap-4 bg-slate-900 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-colors">
              <div className="text-6xl">{card.icon}</div>
              <h3 className="text-2xl font-bold text-white">{card.title}</h3>
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-purple-900/30 border border-purple-600 rounded-lg text-purple-400 hover:bg-blue-500/20 hover:border-blue-600 transition-all flex items-center gap-2"
              >
                <span>🔗</span>
                <span>Follow me</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
