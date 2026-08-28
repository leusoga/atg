'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-secondary-bg/70 backdrop-blur-xl border-b border-border-color shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[4.5rem] py-3">
          <Link href="/" className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-accent-primary to-accent-secondary shadow-lg shadow-accent-primary/20">
              <span className="text-primary-bg font-bold text-lg">A</span>
            </div>
            <span className="text-primary-text font-bold text-lg tracking-tight hidden sm:inline">
              AURO NETWORKS
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 rounded-lg text-sm font-medium text-secondary-text hover:text-primary-text hover:bg-tertiary-bg/60 transition">
              Home
            </Link>
            <Link href="#services" className="px-4 py-2 rounded-lg text-sm font-medium text-secondary-text hover:text-primary-text hover:bg-tertiary-bg/60 transition">
              Services
            </Link>
            <Link href="#approach" className="px-4 py-2 rounded-lg text-sm font-medium text-secondary-text hover:text-primary-text hover:bg-tertiary-bg/60 transition">
              Approach
            </Link>
            <Link href="#about" className="px-4 py-2 rounded-lg text-sm font-medium text-secondary-text hover:text-primary-text hover:bg-tertiary-bg/60 transition">
              About
            </Link>
            <Link
              href="#contact"
              className="ml-2 px-5 py-2.5 rounded-lg bg-accent-primary text-primary-bg text-sm font-semibold hover:bg-accent-secondary transition shadow-lg shadow-accent-primary/20"
            >
              Get Assessment
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-text hover:text-accent-primary transition"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 border-t border-border-color pt-4">
            <Link href="/" className="block px-4 py-2 rounded-lg text-secondary-text hover:text-primary-text hover:bg-tertiary-bg/60 transition">
              Home
            </Link>
            <Link href="#services" className="block px-4 py-2 rounded-lg text-secondary-text hover:text-primary-text hover:bg-tertiary-bg/60 transition">
              Services
            </Link>
            <Link href="#approach" className="block px-4 py-2 rounded-lg text-secondary-text hover:text-primary-text hover:bg-tertiary-bg/60 transition">
              Approach
            </Link>
            <Link href="#about" className="block px-4 py-2 rounded-lg text-secondary-text hover:text-primary-text hover:bg-tertiary-bg/60 transition">
              About
            </Link>
            <Link
              href="#contact"
              className="block mt-2 px-4 py-2.5 rounded-lg bg-accent-primary text-primary-bg font-semibold text-center hover:bg-accent-secondary transition"
            >
              Get Assessment
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
