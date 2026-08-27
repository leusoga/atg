'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-secondary-bg border-b border-border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-bg font-bold text-lg">A</span>
            </div>
            <span className="text-primary-text font-bold text-lg hidden sm:inline">
              AURO NETWORKS
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-primary-text hover:text-accent-primary transition">
              HOME
            </Link>
            <Link href="#services" className="text-primary-text hover:text-accent-primary transition">
              SERVICES
            </Link>
            <Link href="#about" className="text-primary-text hover:text-accent-primary transition">
              ABOUT
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 bg-accent-primary text-primary-bg rounded-lg font-semibold hover:bg-accent-secondary transition"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-text hover:text-accent-primary transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4 border-t border-border-color pt-4">
            <Link href="/" className="block text-primary-text hover:text-accent-primary transition">
              HOME
            </Link>
            <Link href="#services" className="block text-primary-text hover:text-accent-primary transition">
              SERVICES
            </Link>
            <Link href="#about" className="block text-primary-text hover:text-accent-primary transition">
              ABOUT
            </Link>
            <Link
              href="#contact"
              className="block px-4 py-2 bg-accent-primary text-primary-bg rounded-lg font-semibold text-center hover:bg-accent-secondary transition"
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
