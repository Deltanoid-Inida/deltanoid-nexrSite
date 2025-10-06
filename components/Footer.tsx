'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Linkedin, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">Deltanoid</div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We Build. We Scale. You Relax. Your trusted growth partner for SaaS, marketing, and reputation management.
            </p>
            <div className="flex space-x-2">
              <Button 
                variant="ghost" 
                size="icon"
                aria-label="Visit our LinkedIn profile"
                data-testid="button-social-linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                aria-label="Visit our Twitter profile"
                data-testid="button-social-twitter"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                aria-label="Visit our GitHub profile"
                data-testid="button-social-github"
              >
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Who We Are', path: '/who-we-are' },
                { label: 'What We Do', path: '/what-we-do' },
                { label: 'Our Work', path: '/our-work' },
                { label: 'Insights', path: '/insights' },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground text-sm">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:admin@deltanoid.in" className="hover:text-foreground transition-colors">
                  admin@deltanoid.in
                </a>
              </li>
              <li className="flex items-center text-muted-foreground text-sm">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+919983742739" className="hover:text-foreground transition-colors">
                  +91 99837 42739
                </a>
              </li>
              <li className="flex items-start text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span>139, Oxford Towers, Unit 101<br />HAL Old Airport Road, Kodihalli<br />Bangalore, Karnataka 560008, India</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Stay Updated</h4>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="your@email.com"
                required
                data-testid="input-newsletter"
              />
              <Button type="submit" className="w-full" data-testid="button-subscribe">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Deltanoid. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy">
              <span className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms">
              <span className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Terms of Service
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
