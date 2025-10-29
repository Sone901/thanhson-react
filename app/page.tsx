"use client"
import Header from "@/components/header"
import About from "@/components/about"
import Contact from "@/components/contact"
import SocialCards from "@/components/social-cards"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto bg-slate-900 rounded-3xl shadow-2xl overflow-hidden">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-12 lg:p-16">
          <About />
          <Contact />
        </div>

        <SocialCards />
        <Footer />
      </div>
    </div>
  )
}
