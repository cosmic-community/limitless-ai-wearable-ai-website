import { getPage } from '@/lib/cosmic'
import { Page } from '@/types'
import Hero from '@/components/Hero'
import ComponentRenderer from '@/components/ComponentRenderer'
import { notFound } from 'next/navigation'

export default async function HomePage() {
  const page = await getPage('home')
  
  if (!page) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {page.metadata?.hero_title && (
        <Hero
          title={page.metadata.hero_title}
          subtitle={page.metadata.hero_subtitle || ''}
          image={page.metadata.hero_image}
        />
      )}
      
      {/* Main Content */}
      {page.metadata?.content && (
        <section className="py-16 bg-white">
          <div className="container">
            <div 
              className="prose max-w-4xl mx-auto text-center"
              dangerouslySetInnerHTML={{ __html: page.metadata.content }}
            />
          </div>
        </section>
      )}

      {/* Dynamic Components */}
      {page.metadata?.components && page.metadata.components.length > 0 && (
        <div>
          {page.metadata.components.map((component) => (
            <ComponentRenderer 
              key={component.id} 
              component={component}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export async function generateMetadata(): Promise<{ title: string; description: string }> {
  const page = await getPage('home')
  
  return {
    title: page?.metadata?.page_title || 'Limitless AI - Go beyond your mind\'s limitations',
    description: page?.metadata?.meta_description || 'Personalized AI powered by what you\'ve seen, said, and heard.',
  }
}