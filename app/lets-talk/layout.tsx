import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get Your Free Growth Consultation',
  description: 'Ready to grow your business? Contact Deltanoid for a free consultation. We help SaaS, wellness, and hospitality businesses scale with smart marketing and development. Call +91 99837 42739 or schedule a call today.',
  keywords: ['contact Deltanoid', 'free consultation', 'business growth consultation', 'SaaS development inquiry', 'marketing consultation India', 'Bangalore digital agency', 'Dubai marketing agency'],
  openGraph: {
    title: 'Contact Deltanoid - Free Growth Consultation',
    description: 'Get in touch with Deltanoid for a free consultation. We help businesses grow through SaaS development, performance marketing, and reputation management.',
    url: 'https://www.deltanoid.in/lets-talk',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Deltanoid - Free Consultation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Deltanoid - Free Growth Consultation',
    description: 'Get in touch for a free consultation. We help businesses scale through tech, marketing, and reputation management.',
  },
  alternates: {
    canonical: 'https://www.deltanoid.in/lets-talk',
  },
}

export default function LetsTalkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
