import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Code,
  TrendingUp,
  CheckCircle,
  Globe,
  Zap,
  Target,
  Sparkles,
  Rocket,
  BarChart3,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

/* ---------------- META ---------------- */

export const metadata: Metadata = {
  title: 'Deltanoid — We Build. We Scale. You Relax.',
  description:
    'Deltanoid builds conversion-first growth systems for high-intent businesses. Websites, funnels, performance marketing, CRM, automation, and analytics — all connected into one measurable loop.',
  alternates: { canonical: 'https://www.deltanoid.in' },
};

/* ---------------- ANIMATIONS ---------------- */

const fadeInUp =
  'animate-in fade-in-0 slide-in-from-bottom-4 duration-1000';
const stagger = (i: number) =>
  `animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-${i * 150}`;

/* ---------------- PAGE ---------------- */

export default function Home() {
  /* ---------------- DATA ---------------- */

  const clients = [
    'SaaS',
    'Startups',
    'MSMEs',
    'Healthcare',
    'Hospitality',
    'Consumer & Service Brands',
  ];

  const services = [
    {
      icon: Code,
      title: 'Conversion-First Websites & Funnels',
      description:
        'Websites and funnel journeys designed around intent, clarity, and action — not vanity design.',
    },
    {
      icon: TrendingUp,
      title: 'Performance Marketing (Google & Meta)',
      description:
        'High-intent acquisition structured to feed funnels, not just generate traffic.',
    },
    {
      icon: Zap,
      title: 'CRM, Automation & Operations',
      description:
        'Lead routing, follow-ups, automation, booking, and reporting — directly tied to revenue.',
    },
    {
      icon: BarChart3,
      title: 'SEO, Analytics & Measurement',
      description:
        'SEO built into conversion paths, with full-funnel tracking and decision-ready dashboards.',
    },
  ];

  const caseStudies = [
    {
      icon: Zap,
      result: '50,000+ users in 6 months',
      description:
        'Scaled a SaaS platform from early launch to global usage.',
    },
    {
      icon: TrendingUp,
      result: '100,000+ installs · 4.8★ rating',
      description:
        'Consumer application launched and scaled across India.',
    },
    {
      icon: Target,
      result: '35%+ increase in qualified leads',
      description:
        'Service and location-based businesses across multiple cities.',
    },
  ];

  const whyDeltanoid = [
    {
      icon: CheckCircle,
      title: 'Simple Execution',
      description: 'Clear plans, clean systems, no jargon.',
    },
    {
      icon: Target,
      title: 'Proven Frameworks',
      description:
        '25+ businesses running on structured, repeatable growth systems.',
    },
    {
      icon: Globe,
      title: 'Global Thinking, Local Speed',
      description:
        'Indian execution speed with global quality standards.',
    },
    {
      icon: Zap,
      title: 'Tech + Marketing Together',
      description: 'One team, one roadmap, one outcome.',
    },
  ];

  const testimonials = [
    {
      quote:
        'They brought structure where we had chaos. Growth finally felt manageable.',
      author: 'Founder',
      role: 'SaaS Platform',
    },
    {
      quote: 'Reliable, disciplined, and easy to work with.',
      author: 'Operations Lead',
      role: 'Services Business',
    },
    {
      quote:
        'They understand conversion, systems, and execution — not just marketing.',
      author: 'Co-Founder',
      role: 'Tech Company',
    },
  ];

  /* ---------------- JSX ---------------- */

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="pt-32 pb-24 text-center bg-gradient-to-br from-primary/5 to-background">
        <div className={`max-w-5xl mx-auto ${fadeInUp}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We Build. We Scale. You Relax.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
            Deltanoid builds conversion-first growth systems for high-intent
            businesses.
            <br /><br />
            We design end-to-end systems that connect traffic, funnels,
            conversion, and operations into one measurable loop — so growth
            becomes predictable, trackable, and calm.
          </p>

          <p className="text-muted-foreground mb-10">
            No disconnected tools. No tactical noise. No chaos.
            <br />
            We work directly with end businesses — owning execution from
            strategy to outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/lets-talk">
              <Button size="lg">
                <Rocket className="mr-2 h-4 w-4" />
                Start Your Growth Journey
              </Button>
            </Link>
            <Link href="/our-work">
              <Button size="lg" variant="outline">
                See Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-12 border-y">
        <div className="text-center">
          <p className="font-semibold mb-4">
            Trusted by 25+ Growing Businesses
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Across India, GCC, Southeast Asia, USA & Europe
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((c, i) => (
              <span key={i} className="text-sm text-muted-foreground">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Growth Toolkit — Built as a System
          </h2>
          <p className="text-muted-foreground">
            We don’t sell services in isolation.
            <br />
            We engineer growth systems that work together.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
          {services.map((s, i) => (
            <Card key={i} className={stagger(i)}>
              <CardContent className="p-6 text-center">
                <s.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {s.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/what-we-do">
            <Button size="lg">
              Explore What We Do
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-24 bg-muted/40">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Results That Matter
          </h2>
          <p className="text-muted-foreground">
            Real businesses. Measurable outcomes. Sustainable growth.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {caseStudies.map((c, i) => (
            <Card key={i}>
              <CardContent className="p-8 text-center">
                <c.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">{c.result}</h3>
                <p className="text-sm text-muted-foreground">
                  {c.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/our-work">
            <Button variant="outline" size="lg">
              View More Case Studies
            </Button>
          </Link>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Growth Without the Stress
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
          {whyDeltanoid.map((w, i) => (
            <div key={i} className="text-center">
              <w.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground">
                {w.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-muted/40">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground">
            Real feedback from teams who value clarity and outcomes.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {testimonials.map((t, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <p className="italic mb-4">“{t.quote}”</p>
                <p className="font-semibold">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Credibility, Without the Noise
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div>25+ verified client engagements</div>
          <div>India, GCC & SEA active regions</div>
          <div>★★★★★ average partner rating</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center bg-gradient-to-br from-primary/5 to-background">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Your Growth, Handled.
        </h2>
        <p className="text-muted-foreground mb-8">
          You focus on your business.
          <br />
          We handle the systems that scale it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/lets-talk">
            <Button size="lg">
              <Sparkles className="mr-2 h-4 w-4" />
              Book a Free Consultation
            </Button>
          </Link>
          <Link href="/lets-talk">
            <Button size="lg" variant="outline">
              Let’s Talk
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
