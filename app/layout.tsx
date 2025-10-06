import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'
import ChatbotWidget from '@/components/ChatbotWidget'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
})

const siteUrl = 'https://www.deltanoid.in'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Deltanoid — We Build. We Scale. You Relax. | SaaS Development & Growth Marketing',
    template: '%s | Deltanoid'
  },
  description: 'Award-winning growth agency helping SaaS, wellness, and hospitality businesses scale. 25+ clients across India, GCC & Southeast Asia. Expert SaaS development, performance marketing & reputation management. Get your free consultation today.',
  keywords: ['SaaS development India', 'performance marketing agency', 'reputation management', 'business growth consulting', 'digital marketing Bangalore', 'Dubai marketing agency', 'Singapore SaaS development', 'app development India', 'wellness marketing', 'hospitality marketing', 'startup growth', 'growth hacking'],
  authors: [{ name: 'Deltanoid' }],
  creator: 'Deltanoid',
  publisher: 'Deltanoid',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Deltanoid',
    title: 'Deltanoid — We Build. We Scale. You Relax.',
    description: 'Award-winning growth agency with 25+ clients across India, GCC & SEA. Expert SaaS development, performance marketing & reputation management. Free consultation available.',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deltanoid — Growth Agency for SaaS, Wellness & Hospitality',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deltanoid — We Build. We Scale. You Relax.',
    description: 'Award-winning growth agency for SaaS, wellness & hospitality. 25+ clients. Expert development & marketing.',
    images: ['/assets/og-image.jpg'],
    creator: '@deltanoid',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export const viewport = {
  themeColor: '#0b5cff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Deltanoid',
    url: siteUrl,
    logo: `${siteUrl}/assets/logo.png`,
    telephone: '+919983742739',
    email: 'admin@deltanoid.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '139, Oxford Towers, Unit 101, HAL Old Airport Road, Kodihalli',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560008',
      addressCountry: 'IN'
    },
    sameAs: [
      'https://www.linkedin.com/company/deltanoid',
      'https://www.facebook.com/deltanoid'
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
          <ChatbotWidget />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
