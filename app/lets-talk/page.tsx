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
import { Mail, Phone, MessageCircle, Sparkles, CheckCircle, Globe } from 'lucide-react';
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
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Make Growth Easy.
          </h1>
          <p className="text-xl text-muted-foreground">
            Whether you want more bookings, more installs, or more visibility — 
            we'll help you get there, stress-free.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Start Your Growth Journey.
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        data-testid="input-name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        data-testid="input-email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company / Brand</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        data-testid="input-company"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="helpWith">What You Need Help With</Label>
                      <Select 
                        value={formData.helpWith} 
                        onValueChange={(value) => setFormData({...formData, helpWith: value})}
                      >
                        <SelectTrigger data-testid="select-help-with">
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

                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                        data-testid="textarea-message"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isSubmitting}
                      data-testid="button-schedule-call"
                    >
                      {isSubmitting ? 'Sending...' : 'Schedule a Call'}
                    </Button>
                  </form>

                  {/* AI Response Display */}
                  {aiResponse && (
                    <Card className="mt-6 border-primary/20 bg-primary/5">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <Sparkles className="h-5 w-5 text-primary mt-0.5" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-foreground">AI-Powered Response</h4>
                              <Badge variant="secondary" className="text-xs">
                                {aiResponse.category}
                              </Badge>
                              <Badge 
                                variant={aiResponse.priority === 'high' ? 'default' : 'secondary'}
                                className="text-xs"
                              >
                                {aiResponse.priority} priority
                              </Badge>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {aiResponse.suggestedResponse}
                            </p>
                          </div>
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Prefer a Faster Chat?
                </h3>
                <div className="space-y-4">
                  <a href="tel:+919983742739">
                    <Card className="hover-elevate transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6 flex items-center">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                          <Phone className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Call Us</h4>
                          <p className="text-muted-foreground">+91 99837 42739</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>

                  <a href="https://wa.me/+919983742739" target="_blank" rel="noopener noreferrer">
                    <Card className="hover-elevate transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6 flex items-center">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                          <MessageCircle className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">WhatsApp</h4>
                          <p className="text-muted-foreground">Start Chat</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>

                  <a href="mailto:admin@deltanoid.in">
                    <Card className="hover-elevate transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6 flex items-center">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                          <Mail className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Email</h4>
                          <p className="text-muted-foreground">admin@deltanoid.in</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </div>
              </div>

              {/* Global Presence */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Where You'll Find Us.
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {regions.map((region, index) => (
                    <Card key={index} className="hover-elevate transition-all duration-300">
                      <CardContent className="p-4 text-center">
                        <div className="p-3 rounded-full bg-primary/10 text-primary w-12 h-12 flex items-center justify-center mx-auto mb-2">
                          <Globe className="h-6 w-6" aria-label={region.location} />
                        </div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">
                          {region.location}
                        </h4>
                        {region.details && (
                          <p className="text-xs text-muted-foreground">
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
      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Growth, Handled.
          </h2>
          <p className="text-xl text-muted-foreground">
            Focus on what you do best. We'll take care of the rest.
          </p>
        </div>
      </section>
    </div>
  );
}