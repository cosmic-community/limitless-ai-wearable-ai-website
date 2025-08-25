interface CTASectionProps {
  title: string;
  subtitle: string;
  content: string;
  image?: {
    url: string;
    imgix_url: string;
  };
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({ 
  title, 
  subtitle, 
  content, 
  image, 
  buttonText, 
  buttonLink 
}: CTASectionProps) {
  return (
    <section className="py-20 hero-gradient">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-primary-100 mb-6">
                {subtitle}
              </p>
            )}
            {content && (
              <div 
                className="text-primary-50 mb-8"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
            
            {buttonText && buttonLink && (
              <a
                href={buttonLink}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
              >
                {buttonText}
              </a>
            )}
          </div>

          {/* Image */}
          {image && (
            <div className="relative">
              <img
                src={`${image.imgix_url}?w=600&h=500&fit=crop&auto=format,compress`}
                alt={title}
                className="w-full h-auto rounded-2xl shadow-2xl"
                width="600"
                height="500"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}