import Reveal from '@/components/ui/Reveal'

const rows = [
  { auro: 'Quality over quantity — hand-picked technicians', other: 'Whoever answers the ticket queue' },
  { auro: 'Turnkey solutions built around your business', other: 'One-size-fits-all packages' },
  { auro: 'Gold-standard tools chosen with cost in mind', other: 'Whatever vendor pays the best commission' },
  { auro: 'A partnership that grows with you', other: 'A contract that locks you in' },
  { auro: 'Straight answers, no jargon', other: 'Mumbo-jumbo and upsells' },
]

export default function ComparisonSection() {
  return (
    <section id="approach" className="py-20 md:py-28 bg-primary-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-accent-primary text-sm font-semibold tracking-wide uppercase">The Auro Difference</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-text mt-3 mb-4 tracking-tight">
              Not your average IT provider
            </h2>
            <p className="text-lg text-secondary-text">
              We believe the spirit under which your company was formed is a vital part of its future growth.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border-color overflow-hidden">
            <div className="grid grid-cols-2 bg-secondary-bg">
              <div className="px-6 py-5 border-r border-border-color">
                <span className="text-accent-primary font-bold text-sm md:text-base tracking-wide">AURO TECHNOLOGY GROUP</span>
              </div>
              <div className="px-6 py-5">
                <span className="text-secondary-text font-semibold text-sm md:text-base tracking-wide">TYPICAL IT PROVIDERS</span>
              </div>
            </div>
            {rows.map((row, idx) => (
              <div
                key={row.auro}
                className={`grid grid-cols-2 ${idx !== rows.length - 1 ? 'border-b border-border-color' : ''}`}
              >
                <div className="px-6 py-5 border-r border-border-color flex items-start gap-3 bg-accent-primary/[0.03]">
                  <svg className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-primary-text text-sm md:text-base">{row.auro}</span>
                </div>
                <div className="px-6 py-5 flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary-text/50 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-secondary-text text-sm md:text-base">{row.other}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
