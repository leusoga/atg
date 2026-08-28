import Image from 'next/image'
import Link from 'next/link'
import BlobBackground from '@/components/ui/BlobBackground'
import DotGrid from '@/components/ui/DotGrid'
import Reveal from '@/components/ui/Reveal'

const trustPills = [
  'Phoenix Valley Local',
  'SMB Specialists',
  'Gold-Standard Vendor Partners',
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border-color">
      <div className="absolute inset-0 text-border-color/40">
        <DotGrid className="w-full h-full" />
      </div>
      <BlobBackground className="absolute -top-24 -right-24 w-[560px] h-[560px] md:w-[720px] md:h-[720px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/10 text-accent-light text-xs font-semibold tracking-wide uppercase mb-8">
              Managed IT Services
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-text leading-[1.05] tracking-tight mb-6">
              IT support
              <br />
              <span className="bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-light bg-clip-text text-transparent">
                that just works.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-lg md:text-xl text-secondary-text mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Quick, reliable IT solutions for Phoenix Valley's small and medium size businesses —
              without the jargon, the runaround, or the mediocrity.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent-primary text-primary-bg rounded-xl font-semibold hover:bg-accent-secondary transition-all hover:shadow-xl hover:shadow-accent-primary/25 hover:-translate-y-0.5"
              >
                Request an Assessment
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="tel:480-900-8030"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-border-color text-primary-text rounded-xl font-semibold hover:bg-tertiary-bg hover:border-accent-primary/40 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                480-900-8030
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {trustPills.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary-bg/70 border border-border-color text-sm text-secondary-text"
                >
                  <svg className="w-3.5 h-3.5 text-accent-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden border border-border-color shadow-2xl shadow-black/30">
            <Image
              src="https://images.unsplash.com/photo-1758691737568-a1572060ce5a?auto=format&fit=crop&w=900&q=80"
              alt="A small business team collaborating on technology strategy"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/70 via-transparent to-transparent" />
          </div>
          <div className="hidden lg:flex absolute -bottom-6 -left-6 items-center gap-3 bg-secondary-bg border border-border-color rounded-2xl px-5 py-4 shadow-xl shadow-black/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-primary" />
            </span>
            <span className="text-sm text-primary-text font-medium">Available for emergency support</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
