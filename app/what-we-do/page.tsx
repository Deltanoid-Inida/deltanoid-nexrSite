import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code, TrendingUp, Star } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What We Do',
  description: 'Deltanoid offers SaaS & App Development, Performance Marketing, and Reputation & Content Management. We help businesses scale through smart technology, data-driven campaigns, and strategic brand management.',
  openGraph: {
    title: 'What We Do | Deltanoid',
    description: 'Expert SaaS development, performance marketing, and reputation management services.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.deltanoid.in/what-we-do',
  },
};

export default function WhatWeDo() {
  const services = [
    {
      icon: Code,
      title: "SaaS & App Development",
      headline: "We Build Products That Grow With You.",
      copy: "From MVPs to fully scaled platforms, our team designs and develops SaaS products and consumer apps that win users. We focus on clean UX, scalability, and real adoption metrics — not just code.",
      benefits: [
        "Faster go-to-market launches",
        "Intuitive designs users love",
        "Built to scale globally"
      ],
      caseHighlight: "Scaled a SaaS platform from pilot to 50K+ users in 6 months.",
      ctaText: "Build With Us",
      ctaLink: "/lets-talk"
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      headline: "Campaigns That Work While You Sleep.",
      copy: "We design and run ROI-first campaigns across Google, Meta, and global ad platforms — blending AI-driven targeting with human creativity. Our approach = lower costs, higher conversions.",
      benefits: [
        "More leads, less waste",
        "Transparent dashboards",
        "Global campaign execution with local insights"
      ],
      caseHighlight: "Boosted spa & resort bookings by 35% while reducing cost per lead by 8%.",
      ctaText: "Scale My Business",
      ctaLink: "/lets-talk"
    },
    {
      icon: Star,
      title: "Reputation & Content",
      headline: "Keep Your Brand Shining.",
      copy: "Your brand deserves a strong, positive presence. We manage online reputation, create engaging content, and craft stories that connect across borders.",
      benefits: [
        "Protect brand image online",
        "SEO-friendly, conversion-focused content",
        "Build trust with your audience"
      ],
      caseHighlight: "Helped multiple spas maintain 4.5★+ ratings and consistent client engagement.",
      ctaText: "Strengthen My Brand",
      ctaLink: "/lets-talk"
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Growth Services",
    "provider": {
      "@type": "Organization",
      "name": "Deltanoid",
      "url": "https://www.deltanoid.in"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country",
        "name": "Singapore"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Deltanoid Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SaaS & App Development",
            "description": "From MVPs to fully scaled platforms, our team designs and develops SaaS products and consumer apps that win users. We focus on clean UX, scalability, and real adoption metrics."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Marketing",
            "description": "We design and run ROI-first campaigns across Google, Meta, and global ad platforms — blending AI-driven targeting with human creativity. Our approach = lower costs, higher conversions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reputation & Content Management",
            "description": "Your brand deserves a strong, positive presence. We manage online reputation, create engaging content, and craft stories that connect across borders."
          }
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Growth Toolkit, Made Simple.
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you're building an app, scaling a SaaS, or boosting bookings for a spa 
            or resort — we'll help you grow smarter, faster, and stress-free.
          </p>
          <Link href="/lets-talk">
            <Button size="lg" data-testid="button-talk-to-expert">
              Talk to an Expert
            </Button>
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Services
          </h2>
          <div className="space-y-16">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary">{service.title}</Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {service.headline}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.copy}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={service.ctaLink}>
                      <Button className="group" data-testid={`button-${service.ctaText.toLowerCase().replace(/\s+/g, '-')}`}>
                        {service.ctaText}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 flex flex-col justify-center">
                    <div className="text-sm font-semibold text-primary mb-2">
                      Case Highlight
                    </div>
                    <p className="text-lg text-foreground font-medium">
                      {service.caseHighlight}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We'll help you figure it out. No jargon, no stress — just clear solutions 
            tailored to your goals.
          </p>
          <Link href="/lets-talk">
            <Button size="lg" className="group" data-testid="button-start-growth">
              Start Your Growth Journey
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}