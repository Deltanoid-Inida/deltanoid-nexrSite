'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Linkedin, Twitter, Github, Mail, Phone, MapPin, Sparkles, Heart, Globe2, Rocket } from 'lucide-react';

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-gradient-to-br from-card/80 via-card to-card/90 border-t border-primary/20 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-12 animate-float delay-0">
          <Sparkles className="h-6 w-6 text-primary/10" />
        </div>
        <div className="absolute top-16 right-16 animate-float delay-300">
          <Globe2 className="h-8 w-8 text-primary/10" />
        </div>
        <div className="absolute bottom-20 left-20 animate-float delay-700">
          <Heart className="h-5 w-5 text-primary/10" />
        </div>
        <div className="absolute bottom-16 right-12 animate-float delay-500">
          <Rocket className="h-7 w-7 text-primary/10" />
        </div>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 animate-fade-in-up delay-150">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-gradient">
              Deltanoid
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed hover:text-foreground/80 transition-colors duration-300">
              We Build. We Scale. You Relax. Your trusted growth partner for SaaS, marketing, and reputation management.
            </p>
            <div className="flex space-x-2">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all duration-300 group"
                aria-label="Visit our LinkedIn profile"
                data-testid="button-social-linkedin"
              >
                <Linkedin className="h-4 w-4 group-hover:animate-pulse" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all duration-300 group"
                aria-label="Visit our Twitter profile"
                data-testid="button-social-twitter"
              >
                <Twitter className="h-4 w-4 group-hover:animate-pulse" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all duration-300 group"
                aria-label="Visit our GitHub profile"
                data-testid="button-social-github"
              >
                <Github className="h-4 w-4 group-hover:animate-pulse" />
              </Button>
            </div>
          </div>

          <div className="space-y-4 animate-fade-in-up delay-300">
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Who We Are', path: '/who-we-are' },
                { label: 'What We Do', path: '/what-we-do' },
                { label: 'Our Work', path: '/our-work' },
                { label: 'Insights', path: '/insights' },
              ].map((link, index) => (
                <li key={link.path} className={`animate-fade-in-up delay-${350 + index * 50}`}>
                  <Link href={link.path}>
                    <span className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm block py-1 group">
                      <span className="group-hover:animate-pulse">→</span> {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 animate-fade-in-up delay-450">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground text-sm group hover:text-primary transition-colors duration-300">
                <Mail className="h-4 w-4 mr-3 group-hover:animate-bounce group-hover:text-primary" />
                <a href="mailto:admin@deltanoid.in" className="hover:text-primary transition-colors duration-300">
                  admin@deltanoid.in
                </a>
              </li>
              <li className="flex items-center text-muted-foreground text-sm group hover:text-primary transition-colors duration-300">
                <Phone className="h-4 w-4 mr-3 group-hover:animate-bounce group-hover:text-primary" />
                <a href="tel:+919983742739" className="hover:text-primary transition-colors duration-300">
                  +91 99837 42739
                </a>
              </li>
              <li className="flex items-start text-muted-foreground text-sm group hover:text-primary transition-colors duration-300">
                <MapPin className="h-4 w-4 mr-3 mt-0.5 group-hover:animate-bounce group-hover:text-primary" />
                <span className="hover:text-primary/80 transition-colors duration-300">
                  139, Oxford Towers, Unit 101<br />HAL Old Airport Road, Kodihalli<br />Bangalore, Karnataka 560008, India
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 animate-fade-in-up delay-600">
            <h4 className="font-semibold text-foreground">Stay Updated</h4>
            <p className="text-muted-foreground text-sm hover:text-foreground/80 transition-colors duration-300">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="your@email.com"
                required
                className="hover:border-primary/50 focus:border-primary transition-colors duration-300 bg-background/50 hover:bg-background/80"
                data-testid="input-newsletter"
              />
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" 
                data-testid="button-subscribe"
              >
                Subscribe
                <Sparkles className="ml-2 h-4 w-4 animate-pulse" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in-up delay-750 bg-gradient-to-r from-transparent via-primary/5 to-transparent">
          <p className="text-muted-foreground text-sm hover:text-foreground/80 transition-colors duration-300">
            © 2025 Deltanoid. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy">
              <span className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms-and-condition">
              <span className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm">
                Terms of Service
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
