import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights - Growth Tips, SaaS Strategies & Marketing Guides',
  description: 'Practical growth advice for SaaS founders, wellness businesses, and hospitality brands. Learn about marketing, reputation management, and scaling strategies.',
  openGraph: {
    title: 'Insights - Deltanoid Blog',
    description: 'Practical growth advice for SaaS founders, wellness businesses, and hospitality brands.',
    url: 'https://www.deltanoid.in/insights',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deltanoid Insights - Growth Strategies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights - Deltanoid Blog',
    description: 'Practical growth advice for SaaS founders, wellness businesses, and hospitality brands.',
  },
  alternates: {
    canonical: 'https://www.deltanoid.in/insights',
  },
}

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
