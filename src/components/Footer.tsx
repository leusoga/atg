import Link from 'next/link'

const Phone = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const Mail = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const MapPin = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-secondary-bg border-t border-border-color">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
          <div>
            <div className="flex items-center space-x-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-accent-primary to-accent-secondary">
                <span className="text-primary-bg font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-primary-text tracking-tight">AURO TECHNOLOGY GROUP</span>
            </div>
            <p className="text-secondary-text text-sm leading-relaxed">
              Phoenix Valley's trusted IT solutions provider for small and medium businesses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-primary-text mb-4 text-sm tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-secondary-text hover:text-accent-primary transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-secondary-text hover:text-accent-primary transition text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#approach" className="text-secondary-text hover:text-accent-primary transition text-sm">
                  Approach
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-secondary-text hover:text-accent-primary transition text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary-text mb-4 text-sm tracking-wide uppercase">Services</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="#services" className="text-secondary-text hover:text-accent-primary transition text-sm">
                  Backup & DR
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-secondary-text hover:text-accent-primary transition text-sm">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-secondary-text hover:text-accent-primary transition text-sm">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-secondary-text hover:text-accent-primary transition text-sm">
                  VoIP Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary-text mb-4 text-sm tracking-wide uppercase">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:480-900-8030"
                className="flex items-center gap-2.5 text-secondary-text hover:text-accent-primary transition text-sm"
              >
                <Phone />
                <span>480-900-8030</span>
              </a>
              <a
                href="mailto:info@auronetworks.com"
                className="flex items-center gap-2.5 text-secondary-text hover:text-accent-primary transition text-sm"
              >
                <Mail />
                <span>info@auronetworks.com</span>
              </a>
              <div className="flex items-start gap-2.5 text-secondary-text text-sm">
                <div className="flex-shrink-0 mt-0.5">
                  <MapPin />
                </div>
                <span>Phoenix Valley, AZ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border-color pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-text text-sm">
              © {currentYear} Auro Technology Group. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-secondary-text hover:text-accent-primary transition text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-secondary-text hover:text-accent-primary transition text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
