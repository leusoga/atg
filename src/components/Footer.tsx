import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-bg border-t border-border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-bg font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-primary-text">AURO NETWORKS</span>
            </div>
            <p className="text-secondary-text text-sm">
              Phoenix Valley's trusted IT solutions provider for small and medium businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-primary-text mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary-text hover:text-accent-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-secondary-text hover:text-accent-primary transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-secondary-text hover:text-accent-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-primary-text mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-secondary-text hover:text-accent-primary transition">
                  Backup & DR
                </Link>
              </li>
              <li>
                <Link href="#" className="text-secondary-text hover:text-accent-primary transition">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-secondary-text hover:text-accent-primary transition">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="#" className="text-secondary-text hover:text-accent-primary transition">
                  VoIP Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-primary-text mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:480-900-8030"
                className="flex items-center gap-2 text-secondary-text hover:text-accent-primary transition"
              >
                <Phone size={18} />
                <span>480-900-8030</span>
              </a>
              <a
                href="mailto:info@auronetworks.com"
                className="flex items-center gap-2 text-secondary-text hover:text-accent-primary transition"
              >
                <Mail size={18} />
                <span>info@auronetworks.com</span>
              </a>
              <div className="flex items-start gap-2 text-secondary-text">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Phoenix Valley, AZ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
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
