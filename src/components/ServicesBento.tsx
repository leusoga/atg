import Link from 'next/link'

const services = [
  {
    icon: HardDrive,
    title: 'Backup & Disaster Recovery',
    description: 'Protect your critical business data with enterprise-grade backup and rapid recovery solutions.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Virtualization',
    description: 'Modernize your infrastructure with scalable cloud solutions and virtual environments.',
  },
  {
    icon: Shield,
    title: 'Network Design & Cybersecurity',
    description: 'Build secure networks and defend against modern cyber threats with comprehensive security strategies.',
  },
  {
    icon: Phone,
    title: 'VoIP Services',
    description: 'Streamline communication with unified VoIP solutions tailored to your business needs.',
  },
]

export default function ServicesBento() {
  return (
    <section id="services" className="py-20 md:py-32 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">Our Core Services</h2>
          <p className="text-xl text-secondary-text">
            Comprehensive IT solutions designed for SMB success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const icons = [
              <svg key="backup" className="w-6 h-6 text-primary-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19H3v-2h2m0 0V9a2 2 0 012-2h10a2 2 0 012 2v8h2v2h-2m-6-2H9m0 0h6m-6 0v3m0-3V9" />
              </svg>,
              <svg key="cloud" className="w-6 h-6 text-primary-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>,
              <svg key="shield" className="w-6 h-6 text-primary-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>,
              <svg key="phone" className="w-6 h-6 text-primary-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>,
            ]
            return (
              <div
                key={service.title}
                className="bg-secondary-bg border border-border-color p-8 rounded-xl hover:border-accent-primary transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-accent-primary rounded-lg flex items-center justify-center mb-4">
                  {icons[idx]}
                </div>
                <h3 className="text-xl font-bold text-accent-primary mb-3">{service.title}</h3>
                <p className="text-secondary-text mb-4 leading-relaxed">{service.description}</p>
                <Link
                  href="#contact"
                  className="inline-flex text-accent-primary hover:text-accent-secondary font-semibold transition"
                >
                  Learn More →
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
