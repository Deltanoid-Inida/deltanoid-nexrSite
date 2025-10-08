import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe2, MapPin, Heart, Users, Target, Award, Sparkles, Rocket, Star } from 'lucide-react';
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
      <section className="py-16 bg-gradient-to-br from-card/50 via-primary/5 to-card/50 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 animate-float delay-0">
            {/* <Globe2 className="h-8 w-8 text-primary/20" /> */}
          </div>
          <div className="absolute top-32 right-16 animate-float delay-300">
            {/* <Sparkles className="h-6 w-6 text-primary/20" /> */}
          </div>
          <div className="absolute bottom-20 left-20 animate-float delay-700">
            {/* <Heart className="h-10 w-10 text-primary/20" /> */}
          </div>
          <div className="absolute bottom-32 right-12 animate-float delay-500">
            {/* <Rocket className="h-7 w-7 text-primary/20" /> */}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-gradient">
              Born in India. Built for the World.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up delay-300 leading-relaxed">
            We believe scaling a business shouldn't feel stressful. That's why we combine 
            technology, marketing, and storytelling — so growth feels natural, not forced.
          </p>
          <div className="animate-fade-in-up delay-500">
            <Link href="/lets-talk">
              <Button size="lg" className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" data-testid="button-start-journey">
                Start Your Growth Journey
                <Rocket className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:rotate-12" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 relative">
        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-16 right-10 animate-pulse">
            <Star className="h-4 w-4 text-primary/10" />
          </div>
          <div className="absolute bottom-20 left-8 animate-pulse delay-500">
            <Users className="h-6 w-6 text-primary/10" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
              Our Story
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="animate-fade-in-up delay-150 text-lg hover:text-foreground/80 transition-colors duration-300">
                We started by helping local businesses in India — from spas and salons 
                to resorts — grow their bookings and strengthen their brands.
              </p>
              <p className="animate-fade-in-up delay-300 text-lg hover:text-foreground/80 transition-colors duration-300">
                Along the way, we partnered with startups and SaaS founders, applying 
                the same growth-first mindset to the digital world.
              </p>
              <p className="animate-fade-in-up delay-450 text-lg hover:text-foreground/80 transition-colors duration-300">
                Today, Deltanoid is trusted by 25+ brands across India, GCC, and Southeast Asia, 
                spanning wellness, hospitality, lifestyle, and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-r from-card/30 via-card/50 to-card/30 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-12 left-12 animate-float delay-0">
            <Target className="h-8 w-8 text-primary/15" />
          </div>
          <div className="absolute bottom-16 right-16 animate-float delay-700">
            <Award className="h-6 w-6 text-primary/15" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="hover-elevate transition-all duration-300 animate-fade-in-up delay-150 group hover:shadow-2xl border-primary/20 hover:border-primary/40">
              <CardContent className="p-8 relative">
                <div className="absolute top-4 right-4">
                  <Target className="h-6 w-6 text-primary/30 group-hover:text-primary/60 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  Our Mission
                </h3>
                <p className="text-lg text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  To simplify growth — blending tech, marketing, and content so businesses can breathe easy.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300 animate-fade-in-up delay-300 group hover:shadow-2xl border-primary/20 hover:border-primary/40">
              <CardContent className="p-8 relative">
                <div className="absolute top-4 right-4">
                  <Rocket className="h-6 w-6 text-primary/30 group-hover:text-primary/60 transition-colors duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  Our Vision
                </h3>
                <p className="text-lg text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  By 2030, we aim to empower 1,000+ businesses worldwide with easy, effective, 
                  and scalable growth solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 relative">
        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-16 animate-pulse delay-300">
            <Heart className="h-5 w-5 text-primary/10" />
          </div>
          <div className="absolute bottom-24 right-20 animate-pulse delay-700">
            <Sparkles className="h-4 w-4 text-primary/10" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className={`hover-elevate transition-all duration-300 animate-fade-in-up delay-${150 + index * 150} group hover:shadow-xl hover:scale-105 border-primary/10 hover:border-primary/30`}>
                <CardContent className="p-6 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 relative z-10">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 relative z-10">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 bg-gradient-to-br from-card/40 via-primary/3 to-card/40 relative overflow-hidden">
        {/* Animated world map background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-12 animate-float delay-0">
            <Globe2 className="h-12 w-12 text-primary/10" />
          </div>
          <div className="absolute bottom-20 right-16 animate-float delay-500">
            <Globe2 className="h-8 w-8 text-primary/10 rotate-45" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Local Roots. Global Footprint.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <Card key={index} className={`hover-elevate transition-all duration-300 animate-fade-in-up delay-${150 + index * 100} group hover:shadow-xl hover:scale-105 border-primary/10 hover:border-primary/30`}>
                <CardContent className="p-6 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  <div className="p-3 rounded-full bg-primary/10 text-primary w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 relative z-10">
                    <MapPin className="h-6 w-6 group-hover:animate-bounce" aria-label={region.location} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 relative z-10">
                    {region.location}
                  </h3>
                  {region.details && (
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300 relative z-10">
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
      <section className="py-16 relative">
        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-12 right-12 animate-pulse">
            <Award className="h-6 w-6 text-primary/10" />
          </div>
          <div className="absolute bottom-16 left-16 animate-pulse delay-500">
            <Star className="h-8 w-8 text-primary/10" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 animate-fade-in-up">
              Numbers That Keep Us Grounded.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className={`animate-fade-in-up delay-${150 + index * 100} group`}>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-card/40 via-primary/5 to-card/50 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-12 animate-float delay-0">
            <Sparkles className="h-8 w-8 text-primary/20" />
          </div>
          <div className="absolute top-20 right-16 animate-float delay-300">
            <Heart className="h-6 w-6 text-primary/20" />
          </div>
          <div className="absolute bottom-16 left-20 animate-float delay-700">
            <Users className="h-7 w-7 text-primary/20" />
          </div>
          <div className="absolute bottom-20 right-12 animate-float delay-500">
            <Rocket className="h-9 w-9 text-primary/20" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up delay-300">
            Let's discuss how our team can help bring your vision to life.
          </p>
          <div className="animate-fade-in-up delay-500">
            <Link href="/lets-talk">
              <Button size="lg" className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary" data-testid="button-lets-talk">
                Let's Talk
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:scale-110" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}