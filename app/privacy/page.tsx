import { getPage, getFAQItems } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Hero from '@/components/Hero'
import FAQSection from '@/components/FAQSection'

export default async function PrivacyPage() {
  const [page, faqItems] = await Promise.all([
    getPage('privacy'),
    getFAQItems()
  ])
  
  if (!page) {
    notFound()
  }

  // Filter FAQ items for privacy category
  const privacyFAQs = faqItems.filter(item => 
    item.metadata?.category?.key === 'privacy'
  )

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

      {/* Privacy Features */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Secure by Design */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Secure by Design
              </h3>
              <p className="text-gray-600">
                We use Apple's Accessory Kit for secure authentication and encrypted transfers, ensuring data moves only between your device and phone.
              </p>
            </div>

            {/* HIPAA Compliant */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                HIPAA Compliant
              </h3>
              <p className="text-gray-600">
                Our platform is fully HIPAA compliant, ensuring all your data is protected according to medical-grade standards of privacy and security.
              </p>
            </div>

            {/* Data Controls */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Granular Data Controls
              </h3>
              <p className="text-gray-600">
                Easily manage, download, or delete your data at any time. Audio retention settings allow you to automatically delete audio after a set period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy FAQ */}
      {privacyFAQs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Privacy FAQ
            </h2>
            <FAQSection items={privacyFAQs} />
          </div>
        </section>
      )}
    </div>
  )
}

export async function generateMetadata() {
  const page = await getPage('privacy')
  
  return {
    title: page?.metadata?.page_title || 'Privacy - Limitless AI',
    description: page?.metadata?.meta_description || 'Learn how Limitless protects your privacy with HIPAA-compliant security and encryption.',
  }
}