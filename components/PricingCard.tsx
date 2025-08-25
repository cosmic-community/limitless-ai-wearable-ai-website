import { PricingPlan } from '@/types'

interface PricingCardProps {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  const { metadata } = plan
  
  // Parse features from string
  const features = metadata?.features ? 
    metadata.features.split('\n').filter(feature => feature.trim()) : []

  const isPopular = metadata?.is_popular || false

  return (
    <div className={`relative bg-white rounded-2xl shadow-lg p-8 ${isPopular ? 'ring-2 ring-primary' : ''}`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
            BEST VALUE
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {metadata?.plan_name}
        </h3>
        <div className="flex items-baseline justify-center mb-2">
          <span className="text-4xl font-bold text-gray-900">
            {metadata?.price}
          </span>
          {metadata?.billing_period && (
            <span className="text-gray-600 ml-1">
              {metadata.billing_period}
            </span>
          )}
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <svg 
              className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      {metadata?.button_text && metadata?.button_link && (
        <a
          href={metadata.button_link}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center ${
            isPopular
              ? 'bg-primary text-white hover:bg-primary-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          {metadata.button_text}
        </a>
      )}
    </div>
  )
}