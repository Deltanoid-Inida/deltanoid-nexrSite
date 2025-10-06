import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe2, MapPin } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are',
  description: 'Born in India. Built for the World. Deltanoid combines technology, marketing, and storytelling to make business growth feel natural. Trusted by 25+ brands across India, GCC & Southeast Asia.',
  openGraph: {
    title: 'Who We Are | Deltanoid',
    description: 'Born in India. Built for the World. Deltanoid helps businesses scale through technology, marketing, and storytelling.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.deltanoid.in/who-we-are',
  },
};

export default function WhoWeAre() {
  const stats = [
    { value: "25+", label: "Trusted clients" },
    { value: "100+", label: "Projects delivered" },
    { value: "10+", label: "Countries served" },
    { value: "30%+", label: "Avg. ROI uplift" }
  ];

  const values = [
    {
      title: "Clarity over Complexity",
      description: "Growth doesn't have to be confusing."
    },
    {
      title: "Balance of Tech + Human",
      description: "Data drives us, empathy guides us."
    },
    {
      title: "Results with Calm",
      description: "No stress, no chaos — just steady outcomes."
    }
  ];

  const regions = [
    { location: "India", details: "HQ – Bangalore, Gurgaon" },
    { location: "UAE", details: "Dubai clients" },
    { location: "Singapore", details: "" },
    { location: "Remote", details: "USA & Europe" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Born in India. Built for the World.
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We believe scaling a business shouldn't feel stressful. That's why we combine 
            technology, marketing, and storytelling — so growth feels natural, not forced.
          </p>
          <Link href="/lets-talk">
            <Button size="lg" data-testid="button-start-journey">
              Start Your Growth Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We started by helping local businesses in India — from spas and salons 
                to resorts — grow their bookings and strengthen their brands.
              </p>
              <p>
                Along the way, we partnered with startups and SaaS founders, applying 
                the same growth-first mindset to the digital world.
              </p>
              <p>
                Today, Deltanoid is trusted by 25+ brands across India, GCC, and Southeast Asia, 
                spanning wellness, hospitality, lifestyle, and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-muted-foreground">
                  To simplify growth — blending tech, marketing, and content so businesses can breathe easy.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-lg text-muted-foreground">
                  By 2030, we aim to empower 1,000+ businesses worldwide with easy, effective, 
                  and scalable growth solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Local Roots. Global Footprint.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-primary/10 text-primary w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="h-6 w-6" aria-label={region.location} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {region.location}
                  </h3>
                  {region.details && (
                    <p className="text-sm text-muted-foreground">
                      {region.details}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proof & Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Numbers That Keep Us Grounded.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how our team can help bring your vision to life.
          </p>
          <Link href="/lets-talk">
            <Button size="lg" className="group" data-testid="button-lets-talk">
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}