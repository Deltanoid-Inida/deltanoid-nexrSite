import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Clock, IndianRupee, Sprout, BookOpen, Globe, Smile } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at Deltanoid — Work. Grow. Relax.',
  description: 'Join Deltanoid and work on exciting SaaS, marketing, and growth projects. Remote opportunities available across India. We value balance, learning, and global exposure. View current openings in development, marketing, and content.',
  openGraph: {
    title: 'Careers at Deltanoid — Work. Grow. Relax.',
    description: 'Join our team working on SaaS development, performance marketing, and content strategy. Remote & hybrid opportunities available.',
    type: 'website',
    url: 'https://www.deltanoid.in/careers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Deltanoid',
    description: 'Join our growing team. Remote & hybrid opportunities in development, marketing, and content.',
  },
  alternates: {
    canonical: 'https://www.deltanoid.in/careers',
  },
};

export default function Careers() {
  const culture = [
    {
      icon: Sprout,
      title: "Balance",
      description: "We work smart, not chaotic."
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Hybrid exposure to tech + marketing."
    },
    {
      icon: Globe,
      title: "Global Exposure",
      description: "Projects across India, GCC & beyond."
    },
    {
      icon: Smile,
      title: "Chill & Professional",
      description: "We believe people do their best when they feel comfortable."
    }
  ];

  const openRoles = [
    {
      title: "Frontend Developer Intern",
      subTitle: "React/React Native",
      location: "Remote",
      duration: "6 months",
      compensation: "₹15,000/month"
    },
    {
      title: "Performance Marketing Associate",
      subTitle: "",
      location: "Bangalore/Remote",
      duration: "Full-time",
      compensation: "Competitive Pay"
    },
    {
      title: "Content Strategist",
      subTitle: "",
      location: "Remote",
      duration: "Full-time",
      compensation: "Flexible work environment"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Work. Grow. Relax.
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            At Deltanoid, we believe growth should feel natural — for our clients and for our team.
          </p>
          <a href="#open-roles">
            <Button size="lg" data-testid="button-see-open-roles">
              See Open Roles
            </Button>
          </a>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Join Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just about scaling businesses — we're about building careers where people can thrive without chaos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="hover-elevate transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="p-4 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8" aria-label={item.title} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Openings
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openRoles.map((role, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {role.title}
                        </h3>
                        {role.subTitle && (
                          <Badge variant="secondary">{role.subTitle}</Badge>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {role.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {role.duration}
                        </div>
                        <div className="flex items-center">
                          <IndianRupee className="w-4 h-4 mr-1" />
                          {role.compensation}
                        </div>
                      </div>
                    </div>
                    
                    <Link href="/lets-talk">
                      <Button data-testid={`button-apply-${role.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See Your Role */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We're Always Looking for Talent.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            If you're passionate about growth and want to work in a chill, ambitious environment, 
            send us your profile.
          </p>
          <Link href="/lets-talk">
            <Button size="lg" className="group" data-testid="button-send-profile">
              Send Your Profile
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Grow With Us?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join a team that values balance, growth, and building things that matter.
          </p>
        </div>
      </section>
    </div>
  );
}