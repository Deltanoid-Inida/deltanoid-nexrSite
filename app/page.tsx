import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, TrendingUp, Star, CheckCircle, Globe, Zap, Target } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deltanoid — We Build. We Scale. You Relax. | Growth Agency',
  description: 'Award-winning growth agency helping SaaS, wellness, and hospitality businesses scale. 25+ clients across India, GCC & Southeast Asia. Expert SaaS development, performance marketing & reputation management. Get your free consultation today.',
  openGraph: {
    title: 'Deltanoid — We Build. We Scale. You Relax.',
    description: 'Award-winning growth agency with 25+ clients across India, GCC & SEA. Expert SaaS development, performance marketing & reputation management.',
    type: 'website',
    url: 'https://www.deltanoid.in',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deltanoid — We Build. We Scale. You Relax.',
    description: 'Award-winning growth agency for SaaS, wellness & hospitality. 25+ clients. Expert development & marketing.',
  },
  alternates: {
    canonical: 'https://www.deltanoid.in',
  },
};

export default function Home() {
  const clients = [
    "Adhira Spa", "Nava", "Ayara", "Nirantara Resort", "Modern Zen Spa",
    "DevTown", "Sundown Pub", "More..."
  ];

  const services = [
    {
      icon: Code,
      title: "SaaS & App Development",
      description: "Smart builds that scale with ease."
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "Campaigns that work harder, so you don't have to."
    },
    {
      icon: Star,
      title: "Reputation & Content",
      description: "Keep your brand shining, stress-free."
    }
  ];

  const caseStudies = [
    {
      icon: Zap,
      result: "50K+ users in 6 months",
      description: "SaaS platform scaled globally."
    },
    {
      icon: TrendingUp,
      result: "100K installs, 4.8★ rating",
      description: "Consumer app launch in India."
    },
    {
      icon: Target,
      result: "35% more bookings",
      description: "Spa & resort growth in Bangalore & Gurgaon."
    }
  ];

  const whyDeltanoid = [
    {
      icon: CheckCircle,
      title: "Simple Process",
      description: "No jargon, no chaos."
    },
    {
      icon: Target,
      title: "Proven Results",
      description: "25+ brands already thriving."
    },
    {
      icon: Globe,
      title: "Global + Local",
      description: "Agile like India, polished like the world."
    },
    {
      icon: Zap,
      title: "Tech + Marketing Together",
      description: "We don't just build, we help you scale."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Deltanoid offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer three core services: SaaS & App Development, Performance Marketing, and Reputation & Content Management. We help businesses scale through smart technology, data-driven marketing campaigns, and strategic brand management."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries do you specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in three main sectors: Wellness & Lifestyle (spas, salons, fitness), Hospitality & Resorts, and Tech & SaaS platforms. We've delivered successful results for 25+ clients across these industries."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Deltanoid located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our headquarters are in Bangalore and Gurgaon, India. We serve clients across India, GCC (Dubai, UAE), Southeast Asia (Singapore), and remote clients in USA & Europe."
        }
      },
      {
        "@type": "Question",
        "name": "How much do your services cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every project is unique, so we customize our pricing based on your specific needs and goals. Contact us for a free consultation, and we'll provide a transparent quote tailored to your business requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Results vary by service. For marketing campaigns, clients typically see initial traction within 30-60 days. For SaaS development, MVPs can launch in 2-3 months. We focus on delivering measurable growth at every stage."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer free consultations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer free consultations to understand your business goals and challenges. Schedule a call with us through our contact page, and we'll discuss how we can help your business grow."
        }
      }
    ]
  };

  const testimonials = [
    {
      quote: "They made growth feel easy. Our bookings jumped 30% in just months.",
      author: "Adhira Wellness Spa",
      role: "Spa Owner, Bangalore"
    },
    {
      quote: "Reliable, fast, and surprisingly chill to work with.",
      author: "Nirantara Resort",
      role: "Resort Management Team"
    },
    {
      quote: "They understand tech & marketing equally — a rare mix.",
      author: "DevTown",
      role: "Co-Founder"
    }
  ];

  return (
      <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            We Build. We Scale. You Relax.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
            From spas and resorts to SaaS platforms and startups, Deltanoid helps businesses 
            grow smarter, faster, and stress-free — across India and the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/lets-talk">
              <Button size="lg" data-testid="button-start-growth-journey">
                Start Your Growth Journey
              </Button>
            </Link>
            <Link href="/our-work">
              <Button size="lg" variant="outline" data-testid="button-see-our-work">
                See Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg font-semibold text-muted-foreground mb-8">
            25+ Businesses Already Growing With Us
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium px-4"
                data-testid={`client-${client.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Growth Toolkit, Made Simple.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="p-4 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8" aria-label={service.title} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/what-we-do">
              <Button size="lg" className="group" data-testid="button-explore-services">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Results That Speak for Themselves
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="p-4 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <study.icon className="h-8 w-8" aria-label={study.description} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {study.result}
                  </h3>
                  <p className="text-muted-foreground">
                    {study.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/our-work">
              <Button size="lg" variant="outline" className="group" data-testid="button-view-more-stories">
                View More Stories
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Deltanoid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Growth, Without the Stress.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyDeltanoid.map((item, index) => (
              <div key={index} className="text-center">
                <div className="p-4 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8" aria-label={item.title} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hear From People Like You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Proof */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Credibility, Without the Noise.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Verified client projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">India, GCC & SEA</div>
                <div className="text-muted-foreground">Clients across regions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">★★★★★</div>
                <div className="text-muted-foreground">Partner ratings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about working with Deltanoid.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What services does Deltanoid offer?
                </h3>
                <p className="text-muted-foreground">
                  We offer three core services: SaaS & App Development, Performance Marketing, and Reputation & Content Management. We help businesses scale through smart technology, data-driven marketing campaigns, and strategic brand management.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Which industries do you specialize in?
                </h3>
                <p className="text-muted-foreground">
                  We specialize in three main sectors: Wellness & Lifestyle (spas, salons, fitness), Hospitality & Resorts, and Tech & SaaS platforms. We've delivered successful results for 25+ clients across these industries.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Where is Deltanoid located?
                </h3>
                <p className="text-muted-foreground">
                  Our headquarters are in Bangalore and Gurgaon, India. We serve clients across India, GCC (Dubai, UAE), Southeast Asia (Singapore), and remote clients in USA & Europe.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  How much do your services cost?
                </h3>
                <p className="text-muted-foreground">
                  Every project is unique, so we customize our pricing based on your specific needs and goals. Contact us for a free consultation, and we'll provide a transparent quote tailored to your business requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  How long does it take to see results?
                </h3>
                <p className="text-muted-foreground">
                  Results vary by service. For marketing campaigns, clients typically see initial traction within 30-60 days. For SaaS development, MVPs can launch in 2-3 months. We focus on delivering measurable growth at every stage.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Do you offer free consultations?
                </h3>
                <p className="text-muted-foreground">
                  Yes! We offer free consultations to understand your business goals and challenges. Schedule a call with us through our contact page, and we'll discuss how we can help your business grow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Growth, Handled.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Focus on what you do best. We'll take care of building, scaling, and growing — stress-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/lets-talk">
              <Button size="lg" data-testid="button-book-consultation">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/lets-talk">
              <Button size="lg" variant="outline" data-testid="button-lets-talk">
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </div>
  );
}