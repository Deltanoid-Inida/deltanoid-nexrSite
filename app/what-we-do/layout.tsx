import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What We Do - SaaS Development, Marketing & Reputation Management',
  description: 'Deltanoid delivers three core services: SaaS & App Development, Performance Marketing, and Reputation & Content Management. Smart tech, proven results, zero chaos.',
  openGraph: {
    title: 'What We Do - Deltanoid Services',
    description: 'SaaS Development, Performance Marketing, and Reputation Management services that deliver measurable growth.',
    url: 'https://www.deltanoid.in/what-we-do',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deltanoid Services - SaaS, Marketing, Reputation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What We Do - Deltanoid Services',
    description: 'SaaS Development, Performance Marketing, and Reputation Management services that deliver measurable growth.',
  },
  alternates: {
    canonical: 'https://www.deltanoid.in/what-we-do',
  },
}

export default function WhatWeDoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
