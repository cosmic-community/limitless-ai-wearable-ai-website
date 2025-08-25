import { getPricingPlans, getFAQItems } from '@/lib/cosmic'
import PricingCard from '@/components/PricingCard'
import FAQSection from '@/components/FAQSection'

export default async function PricingPage() {
  const [pricingPlans, faqItems] = await Promise.all([
    getPricingPlans(),
    getFAQItems()
  ])

  // Filter FAQ items for pricing category
  const pricingFAQs = faqItems.filter(item => 
    item.metadata?.category?.key === 'pricing'
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary-50 to-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capture every moment with Limitless
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container">
          {pricingPlans.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan) => (
                <PricingCard 
                  key={plan.id} 
                  plan={plan}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No pricing plans available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      {pricingFAQs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <FAQSection items={pricingFAQs} />
          </div>
        </section>
      )}
    </div>
  )
}

export const metadata = {
  title: 'Pricing - Limitless AI',
  description: 'Choose the perfect Limitless AI plan for your needs. From free to unlimited transcription hours.',
}