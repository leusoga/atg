import Link from 'next/link'
import { HardDrive, Cloud, Shield, Phone } from 'lucide-react'

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
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-secondary-bg border border-border-color p-8 rounded-xl hover:border-accent-primary transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-accent-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary-bg" size={24} />
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
