import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-obsidian border-b border-border-color">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-text mb-6 leading-tight">
          Phoenix Valley's Business IT Support & Services Provider
        </h1>
        <p className="text-lg md:text-xl text-secondary-text mb-8 max-w-2xl mx-auto">
          ATG provides quick and reliable IT solutions for small and medium size businesses
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="tel:480-900-8030"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent-primary text-primary-bg rounded-lg font-semibold hover:bg-accent-secondary transition transform hover:scale-105"
          >
            <Phone size={20} />
            Emergency Support: 480-900-8030
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-accent-primary text-accent-primary rounded-lg font-semibold hover:bg-tertiary-bg transition"
          >
            Request IT Assessment
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
