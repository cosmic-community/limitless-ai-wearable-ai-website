interface FeaturesSectionProps {
  title: string;
  subtitle: string;
  content: string;
  image?: {
    url: string;
    imgix_url: string;
  };
}

export default function FeaturesSection({ title, subtitle, content, image }: FeaturesSectionProps) {
  // Parse features from HTML content
  const parseFeatures = (htmlContent: string): string[] => {
    // Extract list items from HTML
    const matches = htmlContent.match(/<li>(.*?)<\/li>/g)
    if (matches) {
      return matches.map(match => match.replace(/<\/?li>/g, ''))
    }
    return []
  }

  const features = parseFeatures(content)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-gray-600 mb-8">
                {subtitle}
              </p>
            )}
            
            {features.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Image */}
          {image && (
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={`${image.imgix_url}?w=600&h=500&fit=crop&auto=format,compress`}
                  alt={title}
                  className="w-full h-auto rounded-2xl shadow-lg"
                  width="600"
                  height="500"
                />
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-100 rounded-full blur-2xl opacity-60"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-200 rounded-full blur-3xl opacity-40"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}