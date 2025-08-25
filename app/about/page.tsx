import { getPage, getTeamMembers } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Hero from '@/components/Hero'
import TeamMemberCard from '@/components/TeamMemberCard'

export default async function AboutPage() {
  const [page, teamMembers] = await Promise.all([
    getPage('about'),
    getTeamMembers()
  ])
  
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
              className="prose max-w-4xl mx-auto"
              dangerouslySetInnerHTML={{ __html: page.metadata.content }}
            />
          </div>
        </section>
      )}

      {/* Team Section */}
      {teamMembers.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We're here to do the best work of our lives. We put our hearts into solving real problems for real people.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard 
                  key={member.id} 
                  member={member}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export async function generateMetadata() {
  const page = await getPage('about')
  
  return {
    title: page?.metadata?.page_title || 'About - Limitless AI',
    description: page?.metadata?.meta_description || 'Learn about Limitless\'s mission to free the human mind from biological limitations through AI.',
  }
}