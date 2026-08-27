const CheckCircle2 = () => (
  <svg className="text-accent-primary" size={20} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
)

const steps = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    description: 'We conduct a thorough IT audit to understand your current infrastructure, pain points, and business goals.',
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    description: 'Our experts create a customized technology roadmap aligned with your business objectives and budget.',
  },
  {
    number: '03',
    title: 'Implementation & Deployment',
    description: 'We deploy solutions with minimal disruption, ensuring a smooth transition and team training.',
  },
  {
    number: '04',
    title: 'Support & Optimization',
    description: 'Ongoing monitoring, maintenance, and optimization to keep your systems running at peak performance.',
  },
]

export default function ProcessTimeline() {
  return (
    <section className="py-20 md:py-32 bg-secondary-bg border-y border-border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">Our Approach</h2>
          <p className="text-xl text-secondary-text">
            A proven 4-step process to transform your IT infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent-primary to-transparent" />
              )}

              {/* Card */}
              <div className="bg-tertiary-bg border border-border-color p-8 rounded-xl h-full relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-primary rounded-full flex items-center justify-center text-primary-bg font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <CheckCircle2 className="text-accent-primary flex-shrink-0 mt-1" size={20} />
                </div>
                <h3 className="text-xl font-bold text-primary-text mb-3">{step.title}</h3>
                <p className="text-secondary-text leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
