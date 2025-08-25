// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Page object type
export interface Page extends CosmicObject {
  type: 'pages';
  metadata: {
    page_title: string;
    meta_description?: string;
    hero_title?: string;
    hero_subtitle?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    content?: string;
    components?: Component[];
  };
}

// Component object type
export interface Component extends CosmicObject {
  type: 'components';
  metadata: {
    component_name: string;
    component_type: {
      key: string;
      value: string;
    };
    title?: string;
    subtitle?: string;
    content?: string;
    image?: {
      url: string;
      imgix_url: string;
    };
    button_text?: string;
    button_link?: string;
  };
}

// Pricing Plan object type
export interface PricingPlan extends CosmicObject {
  type: 'pricing-plans';
  metadata: {
    plan_name: string;
    price: string;
    billing_period?: string;
    features?: string;
    is_popular?: boolean;
    button_text?: string;
    button_link?: string;
    display_order?: number;
  };
}

// Team Member object type
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name: string;
    role: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    bio?: string;
    display_order?: number;
  };
}

// FAQ Item object type
export interface FAQItem extends CosmicObject {
  type: 'faq-items';
  metadata: {
    question: string;
    answer: string;
    category?: {
      key: string;
      value: string;
    };
    display_order?: number;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Component component types
export type ComponentType = 'hero' | 'features' | 'testimonials' | 'cta' | 'content_block';

// FAQ categories
export type FAQCategory = 'general' | 'pricing' | 'privacy' | 'technical';

// Type guards
export function isPage(obj: CosmicObject): obj is Page {
  return obj.type === 'pages';
}

export function isComponent(obj: CosmicObject): obj is Component {
  return obj.type === 'components';
}

export function isPricingPlan(obj: CosmicObject): obj is PricingPlan {
  return obj.type === 'pricing-plans';
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team-members';
}

export function isFAQItem(obj: CosmicObject): obj is FAQItem {
  return obj.type === 'faq-items';
}