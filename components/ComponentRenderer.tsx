import { Component } from '@/types'
import FeaturesSection from '@/components/FeaturesSection'
import CTASection from '@/components/CTASection'
import ContentBlock from '@/components/ContentBlock'

interface ComponentRendererProps {
  component: Component;
}

export default function ComponentRenderer({ component }: ComponentRendererProps) {
  const { metadata } = component

  // Early return if no metadata
  if (!metadata) {
    return null
  }

  const componentType = metadata.component_type?.key

  switch (componentType) {
    case 'hero':
      return (
        <CTASection
          title={metadata.title || ''}
          subtitle={metadata.subtitle || ''}
          content={metadata.content || ''}
          image={metadata.image}
          buttonText={metadata.button_text}
          buttonLink={metadata.button_link}
        />
      )

    case 'features':
      return (
        <FeaturesSection
          title={metadata.title || ''}
          subtitle={metadata.subtitle || ''}
          content={metadata.content || ''}
          image={metadata.image}
        />
      )

    case 'cta':
      return (
        <CTASection
          title={metadata.title || ''}
          subtitle={metadata.subtitle || ''}
          content={metadata.content || ''}
          image={metadata.image}
          buttonText={metadata.button_text}
          buttonLink={metadata.button_link}
        />
      )

    case 'content_block':
      return (
        <ContentBlock
          title={metadata.title || ''}
          subtitle={metadata.subtitle || ''}
          content={metadata.content || ''}
          image={metadata.image}
        />
      )

    default:
      // Default to content block for unknown types
      return (
        <ContentBlock
          title={metadata.title || ''}
          subtitle={metadata.subtitle || ''}
          content={metadata.content || ''}
          image={metadata.image}
        />
      )
  }
}