"use client"

import { useEffect, useState } from "react"

interface WeatherData {
  temperature: number
  description: string
  windSpeed: number
}

export default function Contact() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=10.7769&longitude=106.7009&current=temperature_2m,weather_code,wind_speed_10m&timezone=Asia/Ho_Chi_Minh",
        )
        const data = await response.json()
        const current = data.current

        const weatherDescriptions: Record<number, string> = {
          0: "Clear Sky",
          1: "Mostly Clear",
          2: "Partly Cloudy",
          3: "Overcast",
          45: "Foggy",
          48: "Depositing Rime Fog",
          51: "Light Drizzle",
          61: "Rain",
          80: "Rain Showers",
          95: "Thunderstorm",
        }

        setWeather({
          temperature: current.temperature_2m,
          description: weatherDescriptions[current.weather_code] || "Unknown",
          windSpeed: current.wind_speed_10m,
        })
      } catch (error) {
        console.error("Error fetching weather:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  const contactItems = [
    {
      icon: "📧",
      label: "Email",
      value: "thson.tran.2004@gmail.com",
      href: "mailto:thson.tran.2004@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+84 358 893 537",
      href: "tel:+84358893537",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Ho Chi Minh City, Vietnam",
      href: "#",
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-400 pb-3 border-b-2 border-purple-500">Contact</h2>

      <div className="space-y-3">
        {contactItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors border-l-4 border-purple-600"
          >
            <span className="text-2xl">{item.icon}</span>
            <div>
              <p className="font-semibold text-gray-300">{item.label}</p>
              <a href={item.href} className="text-blue-400 hover:text-purple-400 transition-colors">
                {item.value}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 text-white p-6 rounded-lg shadow-lg border border-purple-700">
        <h3 className="font-bold mb-3">Current Weather</h3>
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="animate-spin">⏳</div>
            <span>Loading weather...</span>
          </div>
        ) : weather ? (
          <div className="space-y-2 text-sm">
            <p>{weather.description}</p>
            <p>
              Temperature: <strong>{weather.temperature}°C</strong>
            </p>
            <p>
              Wind Speed: <strong>{weather.windSpeed} km/h</strong>
            </p>
          </div>
        ) : (
          <p>Unable to load weather information</p>
        )}
      </div>
    </div>
  )
}
