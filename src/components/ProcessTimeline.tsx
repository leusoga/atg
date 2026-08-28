import Reveal from '@/components/ui/Reveal'

const steps = [
  {
    number: '01',
    title: 'Assess',
    description: 'A thorough audit of your current infrastructure — we uncover vulnerabilities and learn what makes your business tick.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.669 0-3.218.51-4.5 1.385A7.962 7.962 0 009 4.804z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Plan',
    description: 'A customized technology roadmap aligned with your objectives, budget, and where you actually want the business to go.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Deploy',
    description: 'Deployment with minimal disruption — a smooth transition, full team training, and no surprises.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Support',
    description: 'Ongoing monitoring, maintenance, and optimization — technology that scales as your business does.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

export default function ProcessTimeline() {
  return (
    <section className="py-20 md:py-28 bg-secondary-bg border-y border-border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-accent-primary text-sm font-semibold tracking-wide uppercase">How We Work</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-text mt-3 mb-4 tracking-tight">
              Our approach
            </h2>
            <p className="text-lg text-secondary-text">
              A proven 4-step process to transform your IT infrastructure.
            </p>
          </div>
        </Reveal>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-accent-primary via-accent-primary/40 to-transparent" />

          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1} className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-tertiary-bg border border-accent-primary/30 flex items-center justify-center text-accent-primary shadow-lg shadow-black/10">
                  {step.icon}
                </div>
                <span className="text-4xl font-bold text-border-color">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-2">{step.title}</h3>
              <p className="text-secondary-text leading-relaxed">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
