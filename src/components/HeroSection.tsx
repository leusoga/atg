import Link from 'next/link'

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
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Emergency Support: 480-900-8030
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-accent-primary text-accent-primary rounded-lg font-semibold hover:bg-tertiary-bg transition"
          >
            Request IT Assessment
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
