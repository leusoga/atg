import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Auro Technology Group | IT Solutions for SMB',
  description:
    'Phoenix Valley\'s trusted IT support and services provider. Backup, cloud, cybersecurity, and VoIP solutions for small and medium businesses.',
  keywords: [
    'IT support',
    'IT services',
    'cloud solutions',
    'cybersecurity',
    'backup and disaster recovery',
    'VoIP services',
    'Phoenix',
    'Arizona',
  ],
  openGraph: {
    title: 'Auro Technology Group',
    description: 'Your trusted IT partner for business growth',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-primary-bg text-primary-text">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
