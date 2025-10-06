import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Testimonials — Real Results from Real Businesses',
  description: 'Read what our clients say about working with Deltanoid. 25+ businesses trust us for SaaS development, performance marketing, and reputation management. 99% client satisfaction, 4.9 average rating. See real success stories from Bangalore, Dubai, Singapore, and beyond.',
  openGraph: {
    title: 'Client Testimonials — What Our Clients Say About Deltanoid',
    description: 'Real testimonials from 25+ clients. 99% satisfaction rate. See why businesses trust Deltanoid for growth.',
    type: 'website',
    url: 'https://www.deltanoid.in/testimonials',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Testimonials — Deltanoid',
    description: '99% client satisfaction. 25+ happy clients. Real results from real businesses.',
  },
  alternates: {
    canonical: 'https://www.deltanoid.in/testimonials',
  },
};

export default function Testimonials() {
  const testimonials = [
    {
      quote: "They made growth feel easy. Our bookings jumped 30% in just months.",
      author: "Spa Owner",
      location: "Bangalore"
    },
    {
      quote: "Reliable, fast, and surprisingly chill to work with.",
      author: "Resort Manager",
      location: "Nirantara"
    },
    {
      quote: "They understand tech & marketing equally — a rare mix.",
      author: "Co-Founder",
      location: "DevTown"
    },
    {
      quote: "Clear communication, no jargon, just results.",
      author: "Client",
      location: "Singapore"
    },
    {
      quote: "We finally felt like someone had our back — they handled everything.",
      author: "Founder",
      location: "Wellness Chain, Mumbai"
    },
    {
      quote: "The best decision we made was partnering with Deltanoid. They transformed our digital presence.",
      author: "CEO",
      location: "Tech Startup, Bangalore"
    }
  ];

  const stats = [
    { value: "99%", label: "Client Satisfaction" },
    { value: "25+", label: "Happy Clients" },
    { value: "4.9", label: "Average Rating" },
    { value: "95%", label: "Repeat Clients" }
  ];

  const metrics = [
    {
      value: "300%",
      label: "Average Performance Increase",
      description: "Our solutions consistently deliver significant performance improvements"
    },
    {
      value: "$2M+",
      label: "Cost Savings Generated",
      description: "Total cost savings achieved for our clients through optimization"
    },
    {
      value: "180%",
      label: "Average ROI Improvement",
      description: "Return on investment improvement across all client projects"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            From Bangalore spas to global startups, our partners trust us to make growth simple.
          </p>
          <Link href="/lets-talk">
            <Button size="lg" data-testid="button-start-journey">
              Start Your Growth Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover-elevate transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Quote className="w-12 h-12 text-primary mx-auto mb-6" aria-hidden="true" />
              <blockquote className="text-2xl text-foreground font-medium leading-relaxed mb-6">
                "They made growth feel easy. Our bookings jumped 30% in just months. 
                Working with Deltanoid has been one of the best decisions we've made for our business."
              </blockquote>
              <div className="font-semibold text-foreground">
                — Spa Owner, Bangalore
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-sm font-medium text-foreground">
                    — {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our clients don't just get solutions—they get results that drive their business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-foreground font-medium mb-2">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">
                    {metric.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help transform your business and create your own success story with Deltanoid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/lets-talk">
              <Button size="lg" className="group" data-testid="button-book-consultation">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/our-work">
              <Button size="lg" variant="outline" data-testid="button-view-case-studies">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}