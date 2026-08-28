import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

const services = [
  {
    title: 'Network Design & Cybersecurity',
    description:
      'Build secure networks and defend against modern cyber threats with comprehensive security strategies built around how your business actually operates.',
    span: 'md:col-span-2 md:row-span-2',
    icon: (
      <svg className="w-7 h-7 text-primary-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Cloud & Virtualization',
    description: 'Modernize your infrastructure with scalable cloud solutions and virtual environments.',
    span: 'md:col-span-1',
    icon: (
      <svg className="w-6 h-6 text-primary-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'Backup & Disaster Recovery',
    description: 'Enterprise-grade backup and rapid recovery solutions for your critical business data.',
    span: 'md:col-span-1',
    icon: (
      <svg className="w-6 h-6 text-primary-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19H3v-2h2m0 0V9a2 2 0 012-2h10a2 2 0 012 2v8h2v2h-2m-6-2H9m0 0h6m-6 0v3m0-3V9" />
      </svg>
    ),
  },
  {
    title: 'VoIP Services',
    description: 'Streamline communication with unified VoIP solutions tailored to your business needs.',
    span: 'md:col-span-2',
    icon: (
      <svg className="w-6 h-6 text-primary-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
]

export default function ServicesBento() {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary-bg border-y border-border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-accent-primary text-sm font-semibold tracking-wide uppercase">Core Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-text mt-3 mb-4 tracking-tight">
              Everything your business actually needs
            </h2>
            <p className="text-lg text-secondary-text">
              Comprehensive solutions designed for SMB success — no bloat, no busywork.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[180px] gap-5">
          {services.map((service, idx) => (
            <Reveal key={service.title} delay={idx * 0.08} className={service.span}>
              <div className="group h-full bg-tertiary-bg border border-border-color rounded-2xl p-7 flex flex-col justify-between hover:border-accent-primary/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
                <div>
                  <div className="w-11 h-11 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-text mb-2">{service.title}</h3>
                  <p className="text-secondary-text leading-relaxed">{service.description}</p>
                </div>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-accent-primary hover:text-accent-secondary font-semibold text-sm mt-5 transition"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
