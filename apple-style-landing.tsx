'use client'

import { useState } from 'react'
import { Search, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Banner */}
      <div className="bg-[#1d1d1f] text-sm py-2 px-4 text-center">
        <p>Get special launch offers on our AI solutions. <a href="#" className="text-blue-500 hover:underline">Learn more &gt;</a></p>
      </div>

      {/* Navigation */}
      <nav className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Hii Varun
              </a>
              <div className="hidden md:flex space-x-6 text-sm">
                <a href="#" className="hover:text-blue-400">Solutions</a>
                <a href="#" className="hover:text-blue-400">Services</a>
                <a href="#" className="hover:text-blue-400">About</a>
                <a href="#" className="hover:text-blue-400">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5" />
              <ShoppingBag className="w-5 h-5" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R8iDsSDMlU1vVp1dqY1Ttlv6p7G3Ww.png"
            alt="CST Mumbai"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 space-y-4 max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold">AI & ML Solutions</h1>
          <p className="text-2xl md:text-3xl text-gray-300">Built for tomorrow's challenges.</p>
          <div className="flex justify-center space-x-4 mt-8">
            <Button variant="link" className="text-blue-400 hover:text-blue-300">Learn more &gt;</Button>
            <Button variant="link" className="text-blue-400 hover:text-blue-300">Get started &gt;</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#1d1d1f]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Meet the Expert</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/3">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fv8S8UQo3uovugm8AnfECyn11RuS97.png"
                alt="Varun Dubey"
                className="w-48 h-48 object-cover rounded-full border-2 border-blue-400 mx-auto md:mx-0"
              />
            </div>
            <div className="md:w-2/3 space-y-6">
              <div>
                <h3 className="text-2xl font-bold">Varun Dubey</h3>
                <p className="text-xl text-gray-400">Visionary Leader in AI and Machine Learning</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400">Hii Varun</h4>
                  <p className="text-gray-300">Founder & CEO</p>
                  <p className="text-gray-400 mt-2">Email: hiivarun1@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-400">Navicon Logistics</h4>
                  <p className="text-gray-300">Sales Executive</p>
                  <p className="text-gray-400 mt-2">Email: vdubey@naviconindia.com</p>
                </div>
              </div>
              <p className="text-gray-300">Phone: +91 8591 1864 57</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4">Advanced Analytics</h3>
              <p className="text-gray-400">Transform your business with our cutting-edge AI solutions that deliver actionable insights.</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4">Machine Learning</h3>
              <p className="text-gray-400">Leverage the power of ML to automate processes and make data-driven decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1d1d1f] py-8">
        <div className="max-w-6xl mx-auto px-4 text-sm text-gray-400">
          <div className="border-t border-gray-800 pt-8">
            <p>Copyright © 2024 Hii Varun. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}