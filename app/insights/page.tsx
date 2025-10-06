'use client'

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { useState } from 'react';
import { ArrowRight, Calendar, Clock, Sparkles, Lightbulb, BarChart3, Heart } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/lib/use-toast';
import { blogArticles } from '@/lib/blogArticles';

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [contentTopic, setContentTopic] = useState('');
  const [contentCategory, setContentCategory] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdea, setGeneratedIdea] = useState<{
    title: string;
    excerpt: string;
    outline: string[];
    category: string;
  } | null>(null);
  const { toast } = useToast();

  const categories = ['All', 'SaaS Growth', 'Wellness & Lifestyle Marketing', 'Reputation & Brand Building'];

  const filteredArticles = selectedCategory === 'All' 
    ? blogArticles 
    : blogArticles.filter(article => article.category === selectedCategory);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for subscribing! You\'ll receive our latest insights soon.');
    setEmail('');
  };

  const handleGenerateIdea = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contentTopic.trim() || !contentCategory) return;

    setIsGenerating(true);
    setGeneratedIdea(null);

    try {
      const response = await fetch('/api/generate-blog-idea', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: contentTopic,
          category: contentCategory
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to generate idea');
      }

      if (data.blogIdea) {
        setGeneratedIdea(data.blogIdea);
        toast({
          title: "Blog idea generated!",
          description: "Check out your AI-powered content suggestion below.",
        });
      } else {
        throw new Error('No blog idea returned');
      }
    } catch (error) {
      console.error('Error generating blog idea:', error);
      toast({
        title: "AI Feature Temporarily Unavailable",
        description: "Our AI content generator is taking a break. Please try again later or contact us for content strategy help!",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fresh Ideas. Clear Insights.
          </h1>
          <p className="text-xl text-muted-foreground">
            We share what works — from SaaS scaling tips to wellness marketing strategies — 
            so you can grow smarter, stress-free.
          </p>
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
                size="sm"
                data-testid={`button-filter-${category.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {article.category}
                  </Badge>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="group p-0 h-auto text-primary hover:text-primary"
                    data-testid={`button-read-${article.title.toLowerCase().replace(/\s+/g, '-').substring(0, 20)}`}
                    asChild
                  >
                    <Link href={`/insights/${article.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Resource Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Guides & Playbooks.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <BarChart3 className="h-12 w-12 text-primary" aria-label="Analytics and growth chart" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  SaaS Growth Checklist
                </h3>
                <p className="text-muted-foreground mb-4">
                  Free PDF guide with essential growth tactics
                </p>
                <Button 
                  onClick={() => {
                    toast({
                      title: "Guide Available Upon Request",
                      description: "Contact us to receive the SaaS Growth Checklist and personalized recommendations.",
                    });
                  }}
                  data-testid="button-download-saas-checklist"
                >
                  Download Now
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Heart className="h-12 w-12 text-primary" aria-label="Wellness and spa services" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Spa Marketing 101
                </h3>
                <p className="text-muted-foreground mb-4">
                  Complete guide to growing your wellness business
                </p>
                <Button 
                  onClick={() => {
                    toast({
                      title: "Guide Available Upon Request",
                      description: "Contact us to receive the Spa Marketing 101 guide and personalized wellness marketing strategies.",
                    });
                  }}
                  data-testid="button-download-spa-guide"
                >
                  Download Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Content Generator */}

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Want More Than Insights?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's turn these ideas into results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 w-full">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="input-newsletter-email"
                className="flex-1"
              />
              <Button type="submit" data-testid="button-subscribe">
                Subscribe
              </Button>
            </form>
          </div>
          <Button size="lg" className="group" data-testid="button-lets-talk-insights" asChild>
            <Link href="/lets-talk">
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}