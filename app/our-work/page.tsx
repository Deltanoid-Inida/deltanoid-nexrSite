'use client'

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function OurWork() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Wellness & Lifestyle', 'Hospitality & Resorts', 'Tech & SaaS'];

  const projects = [
    {
      title: "Spa",
      location: "Bangalore",
      category: "Wellness & Lifestyle",
      challenge: "Struggling with low visibility and inconsistent walk-ins despite being in a prime location.",
      approach: "Implemented local SEO improvements and ran highly targeted Meta Ads designed to reach nearby audiences actively searching for spa services.",
      results: "40% increase in walk-ins, consistent 4.6★ average rating. Went from under-the-radar to a well-recognized neighborhood favorite."
    },
    {
      title: "Spa",
      location: "Indiranagar, Bangalore",
      category: "Wellness & Lifestyle",
      challenge: "Needed to stand out in the highly competitive Indiranagar market, where dozens of spas fight for attention.",
      approach: "Developed a precision Google Ads strategy and crafted content that highlighted Nava's premium offerings, positioning it as a top luxury experience.",
      results: "3x ROI within 90 days, stronger premium brand positioning in Indiranagar. Established itself as a go-to spa for discerning customers."
    },
    {
      title: "Spa",
      location: "Gurgaon",
      category: "Wellness & Lifestyle",
      challenge: "A new spa launch in Gurgaon, Modern Zen faced the challenge of being virtually unknown in a crowded market.",
      approach: "Combined performance marketing campaigns with an optimized Google Business profile to quickly build digital visibility and trust.",
      results: "200+ monthly leads generated within 3 months. Fast traction in a new market, became one of the most booked premium spas in the area."
    },
    {
      title: "Resort",
      location: "Bangalore",
      category: "Hospitality & Resorts",
      challenge: "Strong weekend traffic but struggled with weekday occupancy. Despite being a luxury retreat near the city, lacked consistent online visibility and direct bookings during off-peak days.",
      approach: "Optimized Google Business Profile and ran targeted Google Ads + remarketing campaigns focused on weekday staycations. Clear, compelling creative positioned Nirantara as the perfect quick getaway for working professionals.",
      results: "416K+ profile views in a year, 12,000+ direction requests, 3x increase in weekday bookings. Growth became steady, not seasonal — giving the resort a reliable revenue flow."
    },
    {
      title: "Spa",
      location: "JP Nagar, Bangalore",
      category: "Wellness & Lifestyle",
      challenge: "Had loyal clients but wanted to attract more new customers through search and maps. Despite being centrally located, their digital presence wasn't converting into foot traffic effectively.",
      approach: "Boosted local SEO, optimized Google Maps profile, and launched hyperlocal ads targeting spa-related keywords in JP Nagar and surrounding areas.",
      results: "133K+ total views across Google search & maps, 4,000+ calls generated directly from profile. Consistent monthly leads, turning Maps visibility into real walk-ins without relying solely on word-of-mouth."
    },
    {
      title: "Spa",
      location: "AECS Layout, Bangalore",
      category: "Wellness & Lifestyle",
      challenge: "Wanted to position itself as a premium experience in a competitive neighborhood. Their online presence wasn't reflecting the luxury and uniqueness of their offerings like jacuzzi & hammam.",
      approach: "Revamped Google Business profile, added rich content (photos, service highlights), and set up precision-targeted ads that highlighted their luxury treatments.",
      results: "55K+ profile views within a year, 1,200+ direct calls from potential customers. Consistent bookings and now recognized as one of the top spa destinations in AECS Layout."
    },
    {
      title: "Pub",
      location: "Electronic City, Bangalore",
      category: "Hospitality & Resorts",
      challenge: "Despite great ambience, struggled with weak local reach and low weekend turnout.",
      approach: "Ran engaging social media campaigns and partnered with influencers to boost awareness and buzz in the local community.",
      results: "70% increase in weekend footfall, stronger local brand recognition. Became a go-to spot for Electronic City weekends."
    },
    {
      title: "DevTown",
      location: "EdTech, Bangalore",
      category: "Tech & SaaS",
      challenge: "In the crowded EdTech market, DevTown needed rapid scale to stand out and grow its student community.",
      approach: "Built a SaaS-style marketing funnel and launched digital campaigns focused on lead generation and conversion.",
      results: "Fastest-growing learning community in India with 2M+ students onboarded. Positioned itself as a trusted name in tech education."
    },
    {
      title: "SaaS Platform",
      location: "Confidential",
      category: "Tech & SaaS",
      challenge: "After launching its MVP, this SaaS platform faced low adoption and high churn, making it difficult to scale.",
      approach: "Revamped the product experience and executed a growth marketing strategy aimed at user acquisition and retention.",
      results: "50K+ users in 6 months, 20% churn reduction. The platform shifted from struggling to scaling with confidence."
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Results That Speak for Themselves.
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Every business has a story. Here's how we turned challenges into growth — 
            across wellness, hospitality, and technology.
          </p>
          <Button size="lg" data-testid="button-request-case-study" asChild>
            <Link href="/lets-talk">
              Request a Case Study in Your Industry
            </Link>
          </Button>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                data-testid={`button-filter-${category.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.location}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.category.split(' & ')[0]}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Challenge:</h4>
                      <p className="text-sm text-muted-foreground">{project.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Approach:</h4>
                      <p className="text-sm text-muted-foreground">{project.approach}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">Results:</h4>
                      <p className="text-sm font-medium text-foreground">{project.results}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Callout Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Story Could Be Next.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We've helped 25+ brands across wellness, hospitality, and tech achieve measurable growth.
            Let's write your success story together.
          </p>
          <Button size="lg" className="group" data-testid="button-start-your-story" asChild>
            <Link href="/lets-talk">
              Start Your Growth Journey
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
