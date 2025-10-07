import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, TrendingUp, Star, CheckCircle, Globe, Zap, Target, Sparkles, Rocket, Award } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

// Animation utility classes
const fadeInUp = "animate-in fade-in-0 slide-in-from-bottom-4 duration-1000";
const fadeInLeft = "animate-in fade-in-0 slide-in-from-left-4 duration-1000";
const fadeInRight = "animate-in fade-in-0 slide-in-from-right-4 duration-1000";
const staggerAnimation = (index: number) => `animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 fill-mode-both delay-${index * 150}`;

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
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-primary/3 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-primary/4 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 animate-bounce delay-300">
            <Sparkles className="h-6 w-6 text-primary/30" />
          </div>
          <div className="absolute top-32 right-1/4 animate-bounce delay-700">
            <Rocket className="h-8 w-8 text-primary/40" />
          </div>
          <div className="absolute bottom-32 left-1/6 animate-bounce delay-500">
            <Award className="h-7 w-7 text-primary/35" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-300% animate-gradient">
              We Build. We Scale. You Relax.
            </h1>
          </div>
          <div className={`${fadeInUp} delay-300`}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              From spas and resorts to SaaS platforms and startups, Deltanoid helps businesses 
              grow smarter, faster, and stress-free — across India and the world.
            </p>
          </div>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${fadeInUp} delay-500`}>
            <Link href="/lets-talk">
              <Button size="lg" className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" data-testid="button-start-growth-journey">
                <Rocket className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                Start Your Growth Journey
              </Button>
            </Link>
            <Link href="/our-work">
              <Button size="lg" variant="outline" className="group hover:scale-105 transition-all duration-300 border-2 hover:bg-primary/5" data-testid="button-see-our-work">
                See Our Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 border-y border-border bg-gradient-to-r from-card/30 via-background to-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={fadeInUp}>
            <p className="text-center text-lg font-semibold text-muted-foreground mb-8 flex items-center justify-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              25+ Businesses Already Growing With Us
              <Award className="h-5 w-5 text-primary" />
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clients.map((client, index) => (
              <div 
                key={index}
                className={`text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300 text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary/5 cursor-default ${staggerAnimation(index)}`}
                data-testid={`client-${client.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/2 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${fadeInUp}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Growth Toolkit, Made Simple.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`hover-elevate transition-all duration-500 text-center group hover:scale-105 hover:shadow-2xl border-0 bg-gradient-to-br from-card to-card/80 ${staggerAnimation(index + 1)}`}>
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                  <div className="relative">
                    <div className="p-4 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 text-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <service.icon className="h-8 w-8" aria-label={service.title} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className={`text-center mt-12 ${fadeInUp} delay-700`}>
            <Link href="/what-we-do">
              <Button size="lg" className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" data-testid="button-explore-services">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gradient-to-br from-card/30 via-card/50 to-card/30 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_hsl(var(--primary)/0.03)_100%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${fadeInUp}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real numbers, real growth, real businesses transformed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className={`hover-elevate transition-all duration-500 group hover:scale-105 bg-gradient-to-br from-background to-card/80 border-primary/10 hover:border-primary/20 ${staggerAnimation(index + 1)}`}>
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="p-4 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 text-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <study.icon className="h-8 w-8" aria-label={study.description} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {study.result}
                    </h3>
                    <p className="text-muted-foreground">
                      {study.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className={`text-center mt-12 ${fadeInUp} delay-700`}>
            <Link href="/our-work">
              <Button size="lg" variant="outline" className="group hover:scale-105 transition-all duration-300 border-2 hover:bg-primary/5" data-testid="button-view-more-stories">
                View More Stories
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Deltanoid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/2 via-transparent to-primary/2"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/3 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${fadeInUp}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Growth, Without the Stress.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyDeltanoid.map((item, index) => (
              <div key={index} className={`text-center group hover:scale-105 transition-all duration-300 ${staggerAnimation(index)}`}>
                <div className="p-4 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 text-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <item.icon className="h-8 w-8" aria-label={item.title} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-card/40 via-card/60 to-card/40 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--primary)/0.02)_100%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${fadeInUp}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hear From People Like You
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from real clients who've experienced growth with Deltanoid
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={`hover-elevate transition-all duration-500 group hover:scale-105 bg-gradient-to-br from-background to-card/90 border-primary/5 hover:border-primary/10 ${staggerAnimation(index)}`}>
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                  <div className="relative">
                    <div className="text-primary/20 mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                    <p className="text-muted-foreground mb-6 italic leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Proof */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-background to-primary/5 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_hsl(var(--primary)/0.02)_50%,_transparent_75%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 ${fadeInUp}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Credibility, Without the Noise.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`group hover:scale-105 transition-all duration-300 ${staggerAnimation(0)}`}>
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 group-hover:from-primary/10 group-hover:to-primary/15 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">25+</div>
                  <div className="text-muted-foreground font-medium">Verified client projects</div>
                </div>
              </div>
              <div className={`group hover:scale-105 transition-all duration-300 ${staggerAnimation(1)}`}>
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 group-hover:from-primary/10 group-hover:to-primary/15 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">India, GCC & SEA</div>
                  <div className="text-muted-foreground font-medium">Clients across regions</div>
                </div>
              </div>
              <div className={`group hover:scale-105 transition-all duration-300 ${staggerAnimation(2)}`}>
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 group-hover:from-primary/10 group-hover:to-primary/15 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">★★★★★</div>
                  <div className="text-muted-foreground font-medium">Partner ratings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-24 bg-gradient-to-br from-card/40 via-card/60 to-card/40 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_hsl(var(--primary)/0.02)_100%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 ${fadeInUp}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about working with Deltanoid.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="space-y-6">
            <Card className={`hover-elevate transition-all duration-500 group hover:scale-[1.02] bg-gradient-to-br from-background to-card/90 border-primary/5 hover:border-primary/10 ${staggerAnimation(0)}`}>
              <CardContent className="p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                <div className="relative">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    What services does Deltanoid offer?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We offer three core services: SaaS & App Development, Performance Marketing, and Reputation & Content Management. We help businesses scale through smart technology, data-driven marketing campaigns, and strategic brand management.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className={`hover-elevate transition-all duration-500 group hover:scale-[1.02] bg-gradient-to-br from-background to-card/90 border-primary/5 hover:border-primary/10 ${staggerAnimation(1)}`}>
              <CardContent className="p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                <div className="relative">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    Which industries do you specialize in?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We specialize in three main sectors: Wellness & Lifestyle (spas, salons, fitness), Hospitality & Resorts, and Tech & SaaS platforms. We've delivered successful results for 25+ clients across these industries.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className={`hover-elevate transition-all duration-500 group hover:scale-[1.02] bg-gradient-to-br from-background to-card/90 border-primary/5 hover:border-primary/10 ${staggerAnimation(2)}`}>
              <CardContent className="p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                <div className="relative">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    Where is Deltanoid located?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our headquarters are in Bangalore and Gurgaon, India. We serve clients across India, GCC (Dubai, UAE), Southeast Asia (Singapore), and remote clients in USA & Europe.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className={`hover-elevate transition-all duration-500 group hover:scale-[1.02] bg-gradient-to-br from-background to-card/90 border-primary/5 hover:border-primary/10 ${staggerAnimation(3)}`}>
              <CardContent className="p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                <div className="relative">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    How much do your services cost?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every project is unique, so we customize our pricing based on your specific needs and goals. Contact us for a free consultation, and we'll provide a transparent quote tailored to your business requirements.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className={`hover-elevate transition-all duration-500 group hover:scale-[1.02] bg-gradient-to-br from-background to-card/90 border-primary/5 hover:border-primary/10 ${staggerAnimation(4)}`}>
              <CardContent className="p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                <div className="relative">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    How long does it take to see results?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Results vary by service. For marketing campaigns, clients typically see initial traction within 30-60 days. For SaaS development, MVPs can launch in 2-3 months. We focus on delivering measurable growth at every stage.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className={`hover-elevate transition-all duration-500 group hover:scale-[1.02] bg-gradient-to-br from-background to-card/90 border-primary/5 hover:border-primary/10 ${staggerAnimation(5)}`}>
              <CardContent className="p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                <div className="relative">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    Do you offer free consultations?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes! We offer free consultations to understand your business goals and challenges. Schedule a call with us through our contact page, and we'll discuss how we can help your business grow.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-primary/3 to-background relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-1/4 animate-bounce delay-300">
            <Rocket className="h-6 w-6 text-primary/30" />
          </div>
          <div className="absolute bottom-20 right-1/4 animate-bounce delay-700">
            <Target className="h-8 w-8 text-primary/40" />
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-300% animate-gradient">
              Your Growth, Handled.
            </h2>
          </div>
          <div className={`${fadeInUp} delay-300`}>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Focus on what you do best. We'll take care of building, scaling, and growing — stress-free.
            </p>
          </div>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${fadeInUp} delay-500`}>
            <Link href="/lets-talk">
              <Button size="lg" className="group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl" data-testid="button-book-consultation">
                <Sparkles className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/lets-talk">
              <Button size="lg" variant="outline" className="group hover:scale-105 transition-all duration-300 border-2 hover:bg-primary/5" data-testid="button-lets-talk">
                Let's Talk
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </div>
  );
}