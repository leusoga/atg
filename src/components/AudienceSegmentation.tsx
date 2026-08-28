import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

type Track = {
  label: string
  title: string
  description: string
  points: string[]
  featured: boolean
}

const tracks: Track[] = [
  {
    label: 'Fully Managed',
    title: 'Hand us the keys',
    description:
      "Let us handle IT for you — strategy, support, and everything in between. You focus on running your business; we'll worry about the technology.",
    points: ['Turnkey onboarding', 'Proactive monitoring', 'Single point of contact'],
    featured: false,
  },
  {
    label: 'Co-Managed',
    title: 'We fill the gaps',
    description:
      "Already have an internal setup? We slot in wherever you need — overflow support, strategic guidance, or coverage when your team is stretched thin.",
    points: ['Flexible engagement', 'Works with your existing stack', 'Scales with demand'],
    featured: true,
  },
  {
    label: 'Cybersecurity',
    title: 'Keep the network safe',
    description:
      "Protecting your business isn't as easy as plugging in endpoint software. We build comprehensive security strategies built for how you actually work.",
    points: ['Network design & hardening', 'Threat-aware architecture', 'Ongoing risk review'],
    featured: false,
  },
]

export default function AudienceSegmentation() {
  return (
    <section className="py-20 md:py-28 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-accent-primary text-sm font-semibold tracking-wide uppercase">How We Work With You</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-text mt-3 mb-4 tracking-tight">
              Three ways to partner
            </h2>
            <p className="text-lg text-secondary-text">
              No one-size-fits-all package. We tailor the engagement to how your business actually runs.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((track, idx) => (
            <Reveal key={track.label} delay={idx * 0.1}>
              <div
                className={`h-full rounded-2xl p-8 border transition-all hover:-translate-y-1 ${
                  track.featured
                    ? 'bg-gradient-to-b from-accent-primary/10 to-secondary-bg border-accent-primary/40 shadow-xl shadow-accent-primary/10'
                    : 'bg-secondary-bg border-border-color hover:border-accent-primary/30'
                }`}
              >
                <span
                  className={`inline-block text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-5 ${
                    track.featured
                      ? 'bg-accent-primary text-primary-bg'
                      : 'bg-tertiary-bg text-accent-primary'
                  }`}
                >
                  {track.label}
                </span>
                <h3 className="text-2xl font-bold text-primary-text mb-3">{track.title}</h3>
                <p className="text-secondary-text leading-relaxed mb-6">{track.description}</p>
                <ul className="space-y-2.5 mb-8">
                  {track.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm text-secondary-text">
                      <svg className="w-4 h-4 text-accent-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition ${
                    track.featured ? 'text-accent-light hover:text-accent-primary' : 'text-accent-primary hover:text-accent-secondary'
                  }`}
                >
                  Talk to us
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
