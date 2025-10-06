import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Who We Are - Born in India, Built for the World',
  description: 'Meet Deltanoid: Your trusted growth partner with 25+ clients across India, GCC, and Southeast Asia. We combine tech expertise with human empathy to deliver measurable results.',
  openGraph: {
    title: 'Who We Are - Deltanoid',
    description: 'Meet Deltanoid: Your trusted growth partner with 25+ clients across India, GCC, and Southeast Asia.',
    url: 'https://www.deltanoid.in/who-we-are',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deltanoid Team - Global Growth Partners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Who We Are - Deltanoid',
    description: 'Meet Deltanoid: Your trusted growth partner with 25+ clients across India, GCC, and Southeast Asia.',
  },
  alternates: {
    canonical: 'https://www.deltanoid.in/who-we-are',
  },
}

export default function WhoWeAreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
