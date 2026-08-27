import HeroSection from '@/components/HeroSection'
import ServicesBento from '@/components/ServicesBento'
import ProcessTimeline from '@/components/ProcessTimeline'
import AssessmentForm from '@/components/AssessmentForm'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesBento />
      <ProcessTimeline />

      {/* Philosophy Section */}
      <section id="about" className="py-20 md:py-32 bg-secondary-bg border-y border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">Our Philosophy</h2>
            <p className="text-xl text-secondary-text">
              Delivering exceptional value through partnership and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-tertiary-bg p-8 rounded-xl border border-border-color">
              <h3 className="text-2xl font-bold text-accent-primary mb-3">Using The Best Tools</h3>
              <p className="text-secondary-text leading-relaxed">
                We only use tools and vendor partners that meet our high gold standards and your business goals
                while considering costs.
              </p>
            </div>

            <div className="bg-tertiary-bg p-8 rounded-xl border border-border-color">
              <h3 className="text-2xl font-bold text-accent-primary mb-3">Well-Minded Innovation</h3>
              <p className="text-secondary-text leading-relaxed">
                We believe the spirit under which your company was formed is vital to its future growth. We provide
                innovative but simple technological solutions.
              </p>
            </div>

            <div className="bg-tertiary-bg p-8 rounded-xl border border-border-color">
              <h3 className="text-2xl font-bold text-accent-primary mb-3">Quality Over Quantity</h3>
              <p className="text-secondary-text leading-relaxed">
                Because we are a smaller company, we've picked the very best technicians based on their experience and
                positive attitude that fit our philosophy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Auro */}
      <section className="py-20 md:py-32 bg-primary-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">Why Choose Auro</h2>
            <p className="text-xl text-secondary-text">
              6 reasons to partner with Auro Technology Group
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Keep Your Network Safe',
                description:
                  'Protecting your small business isn\'t as easy as plugging in endpoint protection software. We provide comprehensive security strategies.',
              },
              {
                title: 'Let Us Handle IT For You',
                description:
                  'Don\'t risk further damaging your business. Let us help you manage IT while you focus on what you do best.',
              },
              {
                title: 'Turnkey Solutions',
                description:
                  'We\'ll help you all the way and create a package that fits your business perfectly, from implementation to support.',
              },
              {
                title: 'Gold Standard Services',
                description:
                  'We offer professional services that help you achieve your business goals with a guarantee: follow our plan or don\'t pay.',
              },
              {
                title: 'Comprehensive Solutions',
                description:
                  'Our dynamic programs cover businesses in a variety of stages and sizes, whether startups or medium organizations.',
              },
              {
                title: 'The Best Results',
                description:
                  'We\'ve worked with companies from single-person startups to medium organizations. We deliver where it matters most: in your results.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-secondary-bg p-8 rounded-xl border border-border-color">
                <h3 className="text-xl font-bold text-accent-primary mb-3">{item.title}</h3>
                <p className="text-secondary-text leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-accent-primary to-accent-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-bg mb-4">
            Leave Technology Worries To Us
          </h2>
          <p className="text-lg text-primary-bg mb-8">
            Let us worry about complex technology issues while you focus on growing your business.
          </p>
        </div>
      </section>

      {/* Assessment Form */}
      <AssessmentForm />
    </>
  )
}
