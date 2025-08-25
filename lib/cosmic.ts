import { createBucketClient } from '@cosmicjs/sdk'
import { Page, Component, PricingPlan, TeamMember, FAQItem } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Get a single page by slug
export async function getPage(slug: string): Promise<Page | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'pages',
      slug
    }).depth(1)
    
    return response.object as Page
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error(`Failed to fetch page: ${slug}`)
  }
}

// Get all pages
export async function getPages(): Promise<Page[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'pages' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Page[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch pages')
  }
}

// Get all components
export async function getComponents(): Promise<Component[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'components' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Component[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch components')
  }
}

// Get all pricing plans
export async function getPricingPlans(): Promise<PricingPlan[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'pricing-plans' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const plans = response.objects as PricingPlan[]
    
    // Sort by display order or default order
    return plans.sort((a, b) => {
      const orderA = a.metadata?.display_order || 0
      const orderB = b.metadata?.display_order || 0
      return orderA - orderB
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch pricing plans')
  }
}

// Get all team members
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const members = response.objects as TeamMember[]
    
    // Sort by display order or default order
    return members.sort((a, b) => {
      const orderA = a.metadata?.display_order || 0
      const orderB = b.metadata?.display_order || 0
      return orderA - orderB
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch team members')
  }
}

// Get all FAQ items
export async function getFAQItems(): Promise<FAQItem[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'faq-items' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const items = response.objects as FAQItem[]
    
    // Sort by display order or default order
    return items.sort((a, b) => {
      const orderA = a.metadata?.display_order || 0
      const orderB = b.metadata?.display_order || 0
      return orderA - orderB
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch FAQ items')
  }
}

// Get FAQ items by category
export async function getFAQItemsByCategory(category: string): Promise<FAQItem[]> {
  try {
    const allItems = await getFAQItems()
    return allItems.filter(item => 
      item.metadata?.category?.key === category
    )
  } catch (error) {
    throw new Error(`Failed to fetch FAQ items for category: ${category}`)
  }
}