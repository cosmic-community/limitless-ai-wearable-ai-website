interface ContentBlockProps {
  title: string;
  subtitle: string;
  content: string;
  image?: {
    url: string;
    imgix_url: string;
  };
}

export default function ContentBlock({ title, subtitle, content, image }: ContentBlockProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-gray-600 mb-8">
              {subtitle}
            </p>
          )}
          {image && (
            <div className="mb-8">
              <img
                src={`${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
                alt={title}
                className="w-full h-auto rounded-2xl shadow-lg mx-auto"
                width="800"
                height="500"
              />
            </div>
          )}
          {content && (
            <div 
              className="prose max-w-none mx-auto"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </div>
      </div>
    </section>
  )
}