interface HeroProps {
  title: string;
  subtitle: string;
  image?: {
    url: string;
    imgix_url: string;
  };
  showCTA?: boolean;
}

export default function Hero({ title, subtitle, image, showCTA = true }: HeroProps) {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white min-h-[80vh] flex items-center">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-gradient">{title}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              {subtitle}
            </p>
            
            {showCTA && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/pricing"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Order Pendant and Unlimited Plan Bundle For $399
                </a>
                <div className="text-center sm:text-left">
                  <span className="text-primary font-semibold">Save $388</span>
                </div>
              </div>
            )}
          </div>

          {/* Image */}
          {image && (
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                  alt={title}
                  className="w-full h-auto rounded-2xl shadow-2xl animate-float"
                  width="800"
                  height="600"
                />
              </div>
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-600/20 rounded-2xl transform rotate-6 scale-105"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}