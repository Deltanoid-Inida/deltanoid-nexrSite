'use client'

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MessageCircle, Sparkles, CheckCircle, Globe, Heart, Users, Target, Award, Rocket, Star, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/lib/use-toast';

export default function LetsTalk() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    helpWith: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiResponse, setAiResponse] = useState<{
    suggestedResponse: string;
    category: string;
    priority: string;
  } | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAiResponse(null);
    
    try {
      const response = await fetch('/api/qualify-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }
      
      // Submission was saved successfully
      if (data.success && data.saved) {
        if (data.qualification) {
          // AI worked - show enhanced response
          setAiResponse({
            suggestedResponse: data.qualification.suggestedResponse,
            category: data.qualification.category,
            priority: data.qualification.priority
          });

          toast({
            title: "Message Received!",
            description: "We've analyzed your inquiry and will respond shortly.",
          });
        } else if (data.aiUnavailable) {
          // AI unavailable but submission saved
          toast({
            title: "Message Received!",
            description: "Thanks for reaching out! We'll respond within 24 hours.",
          });
        } else {
          // Generic success
          toast({
            title: "Message Received!",
            description: "Thanks for reaching out! We'll be in touch soon.",
          });
        }

        // Reset form after successful submission
        setTimeout(() => {
          setFormData({ name: '', email: '', company: '', helpWith: '', message: '' });
        }, 500);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Failed",
        description: "We couldn't save your inquiry. Please try again or email us directly at admin@deltanoid.in",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const regions = [
    { icon: "IN", location: "India", details: "HQ – Bangalore, Gurgaon" },
    { icon: "AE", location: "UAE", details: "Dubai clients" },
    { icon: "SG", location: "Singapore", details: "" },
    { icon: "US", location: "Remote", details: "USA & Europe" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-card/30 to-background relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 animate-float delay-0">
            <Heart className="h-8 w-8 text-primary/20" />
          </div>
          <div className="absolute top-32 right-16 animate-float delay-300">
            <Sparkles className="h-6 w-6 text-primary/20" />
          </div>
          <div className="absolute bottom-20 left-20 animate-float delay-700">
            <Users className="h-10 w-10 text-primary/20" />
          </div>
          <div className="absolute bottom-32 right-12 animate-float delay-500">
            <Target className="h-7 w-7 text-primary/20" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-gradient">
              Let's Make Growth Easy.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up delay-300">
            Whether you want more bookings, more installs, or more visibility — 
            we'll help you get there, stress-free.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 relative">
        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-16 right-20 animate-pulse">
            <Star className="h-4 w-4 text-primary/10" />
          </div>
          <div className="absolute bottom-20 left-16 animate-pulse delay-500">
            <Award className="h-6 w-6 text-primary/10" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up delay-150">
              <Card className="hover:shadow-2xl transition-all duration-500 border-primary/10 hover:border-primary/30 relative overflow-hidden">
                {/* Card gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8 relative z-10">
                  <h2 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                    <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                      Start Your Growth Journey.
                    </span>
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2 animate-fade-in-up delay-200">
                      <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="hover:border-primary/50 focus:border-primary transition-all duration-300 bg-background/50 hover:bg-background/80"
                        data-testid="input-name"
                      />
                    </div>

                    <div className="space-y-2 animate-fade-in-up delay-250">
                      <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="hover:border-primary/50 focus:border-primary transition-all duration-300 bg-background/50 hover:bg-background/80"
                        data-testid="input-email"
                      />
                    </div>

                    <div className="space-y-2 animate-fade-in-up delay-300">
                      <Label htmlFor="company" className="text-foreground font-medium">Company / Brand</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="hover:border-primary/50 focus:border-primary transition-all duration-300 bg-background/50 hover:bg-background/80"
                        data-testid="input-company"
                      />
                    </div>

                    <div className="space-y-2 animate-fade-in-up delay-350">
                      <Label htmlFor="helpWith" className="text-foreground font-medium">What You Need Help With</Label>
                      <Select 
                        value={formData.helpWith} 
                        onValueChange={(value) => setFormData({...formData, helpWith: value})}
                      >
                        <SelectTrigger className="hover:border-primary/50 focus:border-primary transition-all duration-300 bg-background/50 hover:bg-background/80" data-testid="select-help-with">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="app-development">App Development</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                          <SelectItem value="reputation">Reputation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 animate-fade-in-up delay-400">
                      <Label htmlFor="message" className="text-foreground font-medium">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                        className="hover:border-primary/50 focus:border-primary transition-all duration-300 bg-background/50 hover:bg-background/80 resize-none"
                        data-testid="textarea-message"
                      />
                    </div>

                    <div className="animate-fade-in-up delay-450">
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                        disabled={isSubmitting}
                        data-testid="button-schedule-call"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Schedule a Call
                            <Rocket className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>

                  {/* AI Response Display */}
                  {aiResponse && (
                    <Card className="mt-6 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 animate-fade-in-up delay-500 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <Sparkles className="h-5 w-5 text-primary mt-0.5 animate-pulse" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-foreground">AI-Powered Response</h4>
                              <Badge variant="secondary" className="text-xs hover:bg-primary/20 transition-colors duration-300">
                                {aiResponse.category}
                              </Badge>
                              <Badge 
                                variant={aiResponse.priority === 'high' ? 'default' : 'secondary'}
                                className="text-xs hover:scale-105 transition-transform duration-300"
                              >
                                {aiResponse.priority} priority
                              </Badge>
                            </div>
                            <p className="text-muted-foreground leading-relaxed hover:text-foreground/80 transition-colors duration-300">
                              {aiResponse.suggestedResponse}
                            </p>
                          </div>
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 animate-bounce" />
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up delay-300">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                    Prefer a Faster Chat?
                  </span>
                </h3>
                <div className="space-y-4">
                  <a href="tel:+919983742739" className="animate-fade-in-up delay-350">
                    <Card className="hover-elevate transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105 border-primary/10 hover:border-primary/30 group">
                      <CardContent className="p-6 flex items-center relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                        <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 relative z-10">
                          <Phone className="h-6 w-6 group-hover:animate-bounce" />
                        </div>
                        <div className="relative z-10">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Call Us</h4>
                          <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">+91 99837 42739</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>

                  <a href="https://wa.me/+919983742739" target="_blank" rel="noopener noreferrer" className="animate-fade-in-up delay-400">
                    <Card className="hover-elevate transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105 border-primary/10 hover:border-primary/30 group">
                      <CardContent className="p-6 flex items-center relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                        <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 relative z-10">
                          <MessageCircle className="h-6 w-6 group-hover:animate-bounce" />
                        </div>
                        <div className="relative z-10">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">WhatsApp</h4>
                          <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Start Chat</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>

                  <a href="mailto:admin@deltanoid.in" className="animate-fade-in-up delay-450">
                    <Card className="hover-elevate transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105 border-primary/10 hover:border-primary/30 group">
                      <CardContent className="p-6 flex items-center relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                        <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 relative z-10">
                          <Mail className="h-6 w-6 group-hover:animate-bounce" />
                        </div>
                        <div className="relative z-10">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Email</h4>
                          <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">admin@deltanoid.in</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </div>
              </div>

              {/* Global Presence */}
              <div className="animate-fade-in-up delay-500">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                    Where You'll Find Us.
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {regions.map((region, index) => (
                    <Card key={index} className={`hover-elevate transition-all duration-300 animate-fade-in-up delay-${550 + index * 50} group hover:shadow-xl hover:scale-105 border-primary/10 hover:border-primary/30`}>
                      <CardContent className="p-4 text-center relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                        <div className="p-3 rounded-full bg-primary/10 text-primary w-12 h-12 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 relative z-10">
                          <MapPin className="h-6 w-6 group-hover:animate-bounce" aria-label={region.location} />
                        </div>
                        <h4 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors duration-300 relative z-10">
                          {region.location}
                        </h4>
                        {region.details && (
                          <p className="text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300 relative z-10">
                            {region.details}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 bg-gradient-to-br from-card/40 via-primary/5 to-card/50 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-12 animate-float delay-0">
            <Award className="h-8 w-8 text-primary/20" />
          </div>
          <div className="absolute top-20 right-16 animate-float delay-300">
            <Sparkles className="h-6 w-6 text-primary/20" />
          </div>
          <div className="absolute bottom-16 left-20 animate-float delay-700">
            <Rocket className="h-7 w-7 text-primary/20" />
          </div>
          <div className="absolute bottom-20 right-12 animate-float delay-500">
            <Heart className="h-9 w-9 text-primary/20" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Your Growth, Handled.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up delay-300">
            Focus on what you do best. We'll take care of the rest.
          </p>
        </div>
      </section>
    </div>
  );
}