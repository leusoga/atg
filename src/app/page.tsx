import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import ServicesBento from '@/components/ServicesBento'
import AudienceSegmentation from '@/components/AudienceSegmentation'
import ProcessTimeline from '@/components/ProcessTimeline'
import ComparisonSection from '@/components/ComparisonSection'
import AssessmentForm from '@/components/AssessmentForm'
import Reveal from '@/components/ui/Reveal'
import BlobBackground from '@/components/ui/BlobBackground'

const philosophy = [
  {
    title: 'Using The Best Tools',
    description:
      'We only use tools and vendor partners that meet our high gold standards and your business goals while considering costs.',
  },
  {
    title: 'Well-Minded Innovation',
    description:
      'We believe the spirit under which your company was formed is vital to its future growth. We provide innovative but simple technological solutions.',
  },
  {
    title: 'Quality Over Quantity',
    description:
      "Because we are a smaller company, we've picked the very best technicians based on their experience and positive attitude that fit our philosophy.",
  },
]

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesBento />
      <AudienceSegmentation />
      <ProcessTimeline />

      {/* Philosophy Section */}
      <section id="about" className="relative overflow-hidden py-20 md:py-28 bg-primary-bg">
        <BlobBackground
          variant="dual"
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] opacity-60"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-accent-primary text-sm font-semibold tracking-wide uppercase">Our Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-bold text-primary-text mt-3 mb-4 tracking-tight">
                The spirit behind the work
              </h2>
              <p className="text-lg text-secondary-text">
                Delivering value through partnership and expertise, not tickets and templates.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <Reveal className="lg:col-span-2">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border-color shadow-2xl shadow-black/20 max-w-sm mx-auto lg:max-w-none">
                <Image
                  src="https://images.unsplash.com/photo-1536148935331-408321065b18?auto=format&fit=crop&w=800&q=80"
                  alt="An IT professional focused on a workstation"
                  fill
                  sizes="(max-width: 1024px) 80vw, 35vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="lg:col-span-3 flex flex-col gap-5">
              {philosophy.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.1}>
                  <div className="bg-secondary-bg p-7 rounded-2xl border border-border-color hover:border-accent-primary/30 transition">
                    <h3 className="text-xl font-bold text-accent-primary mb-2">{item.title}</h3>
                    <p className="text-secondary-text leading-relaxed">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ComparisonSection />

      {/* CTA Banner */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-light">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay text-primary-bg">
          <svg width="100%" height="100%" aria-hidden="true">
            <pattern id="ctaDots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#ctaDots)" />
          </svg>
        </div>
        <Reveal className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-bg mb-4 tracking-tight">
            Leave technology worries to us
          </h2>
          <p className="text-lg text-primary-bg/80 mb-8 max-w-xl mx-auto">
            Let us worry about complex technology issues while you focus on growing your business.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-bg text-accent-primary rounded-xl font-semibold hover:bg-primary-text transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </Reveal>
      </section>

      <AssessmentForm />
    </>
  )
}
