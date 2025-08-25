# Limitless AI - Wearable AI Website

![App Preview](https://imgix.cosmicjs.com/6c1b2250-815b-11f0-8dcc-651091f6a7c0-photo-1518770660439-4636190af475-1756089009993.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive website showcasing Limitless AI's revolutionary wearable AI technology. Built with Next.js 15 and powered by Cosmic CMS, this application replicates the professional design and functionality of the original Limitless AI site.

## Features

- 🏠 **Dynamic Homepage** - Hero section with product showcase and key features
- 💰 **Pricing Page** - Interactive pricing plans with feature comparisons
- 👥 **About Page** - Company mission and team member profiles
- 🔒 **Privacy Page** - Security features and privacy compliance information
- ❓ **FAQ Section** - Expandable questions and answers by category
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Performance Optimized** - Fast loading with image optimization and lazy loading
- 🎨 **Modern UI** - Clean design with purple brand colors and smooth animations

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=68abc7e84b337250ef91bb86&clone_repository=68abcc3c4b337250ef91bba9)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "External Web Content (https://www.limitless.ai) - HTML: Limitless Limitless Home Pricing Privacy Developers About Buy Sign In Buy Go beyond your mind's limitations Personalized AI powered by what you've seen, said, and heard. Order Pendant and Unlimited Plan Bundle For $399 Save $ 388 The world's most wearable AI. Preserve conversations and ask your personalized AI anything. Your data is secured with HIPAA-compliant medical grade privacy protection..."

### Code Generation Prompt

> "Clone the limitless website https://www.limitless.ai Add main pages (not developers)"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless content management
- **Imgix** - Image optimization and delivery

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the content model set up

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up your environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
4. Add your Cosmic credentials to `.env.local`:
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

5. Run the development server:
   ```bash
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Pages with Components
```typescript
import { cosmic } from '@/lib/cosmic'

export async function getPage(slug: string) {
  try {
    const response = await cosmic.objects.findOne({
      type: 'pages',
      slug
    }).depth(1)
    
    return response.object
  } catch (error) {
    if (error.status === 404) {
      return null
    }
    throw error
  }
}
```

### Getting Pricing Plans
```typescript
export async function getPricingPlans() {
  try {
    const response = await cosmic.objects.find({
      type: 'pricing-plans'
    }).props(['id', 'title', 'slug', 'metadata'])
    
    return response.objects.sort((a, b) => 
      (a.metadata?.display_order || 0) - (b.metadata?.display_order || 0)
    )
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
}
```

## Cosmic CMS Integration

This application uses the following content types:

- **Pages** - Main website pages with hero sections and components
- **Components** - Reusable page sections (hero, features, CTA)
- **Pricing Plans** - Product pricing with features and buttons
- **Team Members** - Company team with photos and bios
- **FAQ Items** - Questions and answers organized by category

The content is managed through your Cosmic dashboard and automatically syncs with the website.

## Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on git push

### Netlify
1. Connect your repository to Netlify
2. Add environment variables in Netlify dashboard
3. Set build command to `bun run build`
4. Set publish directory to `.next`

### Other Platforms
This Next.js application can be deployed to any platform that supports Node.js applications.

<!-- README_END -->