import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work - Real Results from Real Clients',
  description: 'Explore Deltanoid case studies: 416K+ profile views for Nirantara Resort, 133K+ for Natural Body Spa, 55K+ for Ayara Thai Spa. Real clients, real growth.',
  openGraph: {
    title: 'Our Work - Deltanoid Case Studies',
    description: 'Real results from 25+ clients across wellness, hospitality, and tech sectors. See how we help businesses grow.',
    url: 'https://www.deltanoid.in/our-work',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deltanoid Case Studies - Real Results',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work - Deltanoid Case Studies',
    description: 'Real results from 25+ clients across wellness, hospitality, and tech sectors.',
  },
  alternates: {
    canonical: 'https://www.deltanoid.in/our-work',
  },
}

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
