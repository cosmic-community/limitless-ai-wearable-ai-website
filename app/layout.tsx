import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Limitless AI - Go beyond your mind\'s limitations',
  description: 'Personalized AI powered by what you\'ve seen, said, and heard. The world\'s most wearable AI device.',
  keywords: ['AI', 'wearable', 'artificial intelligence', 'pendant', 'limitless'],
  openGraph: {
    title: 'Limitless AI - Go beyond your mind\'s limitations',
    description: 'Personalized AI powered by what you\'ve seen, said, and heard.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Access environment variable on server side
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js"></script>
      </head>
      <body className="min-h-screen bg-white">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
        {/* Pass bucket slug as prop to client component */}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}