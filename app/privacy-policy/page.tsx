import React from "react";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle, Instagram, MapPin, Shield, Eye, Lock, Users, FileText, Globe, MessageSquare, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Deltanoid - Learn how we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy | Deltanoid',
    description: 'Learn how Deltanoid collects, uses, and protects your personal information.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.deltanoid.in/privacy',
  },
};

export default function PrivacyPolicy() {
  const policyHighlights = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We employ industry-standard security measures to protect your information."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear information about what data we collect and how we use it."
    },
    {
      icon: Lock,
      title: "Your Rights",
      description: "You have control over your personal data and can request changes anytime."
    },
    {
      icon: Globe,
      title: "International Compliance",
      description: "We comply with applicable data protection laws across all regions we serve."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your privacy matters to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Policy Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Privacy at a Glance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {policyHighlights.map((highlight, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-primary/10 text-primary w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <highlight.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      {/* <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Address</h3>
                <p className="text-sm text-muted-foreground">
                  Unit 101, Oxford Towers, Kodihalli, HAL Old Airport Road, Bangalore, Karnataka, India, 560008
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                <a href="tel:+918088951942" className="text-primary hover:underline">
                  +91 80889 51942
                </a>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                <a href="mailto:admin@deltanoid.in" className="text-primary hover:underline">
                  admin@deltanoid.in
                </a>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
                <a href="https://wa.me/918088951942" className="text-primary hover:underline">
                  Contact on WhatsApp
                </a>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Instagram className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Instagram</h3>
                <a href="https://instagram.com/deltanoid.india" className="text-primary hover:underline">
                  deltanoid.india
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Information Collection */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover-elevate transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">1. Information Collection</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Deltanoid collects a variety of information to facilitate the delivery of our Services and ensure a high-quality user experience. The information collected is categorized into personal and non-personal data and is obtained through secure methods.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">1.1 Personal Information</h3>
                  <p className="text-muted-foreground mb-3">Personal information refers to details that can identify or relate to you directly. We collect this information when you:</p>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>Register an account, request a consultation, or contact us.</li>
                    <li>Enter into contractual agreements with us.</li>
                    <li>Participate in surveys, feedback, or promotions.</li>
                    <li>Interact with our customer support, sales, or consulting teams.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">1.2 Non-Personal Information</h3>
                  <p className="text-muted-foreground mb-3">Non-personal information includes data that cannot identify you as an individual and is used to analyze and improve the Site and Services:</p>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>Browser type, device information, IP address, and browsing patterns.</li>
                    <li>Aggregated data on website traffic and user engagement.</li>
                    <li>Technical data related to how you access our Site and Services.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">1.3 Cookies and Tracking Technologies</h3>
                  <p className="text-muted-foreground mb-3">We use cookies and similar tracking technologies to provide essential Site functionality:</p>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li><strong>Essential Cookies:</strong> Necessary for Site operation.</li>
                    <li><strong>Analytics Cookies:</strong> Collect information to measure Site performance.</li>
                    <li><strong>Preference Cookies:</strong> Store choices you make to personalize your experience.</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    You may disable cookies through your browser settings; however, some features of our Site may be limited if cookies are disabled.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover-elevate transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The information collected serves multiple purposes essential for the functionality and quality of our Services. Deltanoid retains the right to use your information for the following purposes:
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">2.1 Service Provision and Enhancement</h3>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>To provide, customize, and maintain our Services.</li>
                    <li>To manage and enhance Client relationships, improve Service delivery, and provide customer support.</li>
                    <li>To develop, test, and improve the Site and Service offerings based on aggregated and individualized insights.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">2.2 Communication and Marketing</h3>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>To send important updates related to Services, technical notices, and notifications about changes to our policies and agreements.</li>
                    <li>To inform you of additional services, product offerings, and promotional opportunities that may align with your business needs.</li>
                  </ul>
                  <div className="mt-4 p-4 bg-accent/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Opt-Out:</strong> You may choose to unsubscribe from marketing communications at any time by following the unsubscribe link in emails or contacting us directly.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">2.3 Compliance, Protection, and Legal Requirements</h3>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>To enforce our Terms of Use, manage legal compliance, and address potential security risks.</li>
                    <li>To detect, prevent, and respond to fraud, security breaches, and violations of policies or applicable laws.</li>
                    <li>To comply with applicable legal obligations, regulatory requirements, and industry standards.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">2.4 Data Analytics and Personalization</h3>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>To use data analytics to gain insights into Client behavior and trends, thereby allowing us to optimize the Site's functionality.</li>
                    <li>To provide a tailored experience by remembering Client preferences and providing customized content.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Information Sharing and Disclosure */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover-elevate transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">3. Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Deltanoid maintains strict control over your information and does not sell your personal information. However, we may disclose information under the following circumstances:
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">3.1 Service Providers</h3>
                  <p className="text-muted-foreground">
                    Deltanoid works with trusted third-party service providers to perform functions on our behalf, such as payment processing, data hosting, analytics, and customer support. These providers are bound by contractual obligations to use your information solely for the purposes provided and in compliance with our privacy standards.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">3.2 Legal Compliance and Protection</h3>
                  <p className="text-muted-foreground mb-3">We reserve the right to disclose information as required by law or in response to valid legal processes, including:</p>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>To comply with applicable laws, regulatory requests, court orders, or legal processes.</li>
                    <li>To protect Deltanoid's rights, property, or safety, as well as the rights, property, or safety of our users or the public.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">3.3 Business Transfers</h3>
                  <p className="text-muted-foreground">
                    In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred to the acquiring entity. In such cases, you will be notified of any material changes to this Privacy Policy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Remaining Policy Sections */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">4. Data Retention</h3>
                <p className="text-muted-foreground mb-4">
                  Deltanoid will retain your personal information for as long as needed to fulfill the purposes outlined in this Privacy Policy or as required by law. Once your personal information is no longer required, it will be securely deleted or anonymized.
                </p>
                <p className="text-muted-foreground">
                  We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, including any legal, accounting, or reporting requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">5. Security</h3>
                <p className="text-muted-foreground mb-4">
                  Deltanoid employs a variety of security measures, including encryption, to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no data transmission over the internet is entirely secure.
                </p>
                <p className="text-muted-foreground">
                  We utilize industry-standard encryption protocols, such as HTTPS and SSL, to secure data transmission. Sensitive data, such as payment information, is encrypted during transmission.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">6. Your Data Protection Rights</h3>
                <p className="text-muted-foreground mb-4">
                  Depending on your jurisdiction, you may have certain rights related to your personal data, such as the right to access, correct, or delete your information. You also have the right to withdraw consent at any time.
                </p>
                <ul className="list-disc ml-4 space-y-2 text-muted-foreground text-sm">
                  <li><strong>Access and Rectification:</strong> You can request access to the personal information we hold about you and ask us to correct any inaccuracies.</li>
                  <li><strong>Deletion of Data:</strong> You may request the deletion of your personal data if it is no longer necessary for the purposes for which it was collected.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">7. Children's Privacy</h3>
                <p className="text-muted-foreground">
                  Our Services are not intended for children under the age of 13. We do not knowingly collect or solicit personal information from children under 13. If we become aware that we have collected information from a child, we will take steps to delete it.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">8. International Data Transfers</h3>
                <p className="text-muted-foreground">
                  Your personal data may be transferred to and stored on servers outside of your country of residence. By using our Services, you consent to this transfer and acknowledge that your information may be subject to different data protection laws in other jurisdictions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">9. Changes to Privacy Policy</h3>
                <p className="text-muted-foreground">
                  We reserve the right to modify or update this Privacy Policy at any time. Any changes will be posted on this page, and the effective date will be updated accordingly. Please review this Privacy Policy periodically for any updates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover-elevate transition-all duration-300">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h3>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions or concerns regarding this Privacy Policy or the handling of your data, please contact us using the contact details listed above.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">11. Consent</h3>
                  <p className="text-muted-foreground mb-4">
                    By using our Services, you agree to the terms of this Privacy Policy. If you do not agree with any part of this policy, please refrain from using our Services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're here to help. Contact us for any clarifications or concerns about your data privacy.
          </p>
          <Link href="/lets-talk">
            <Button size="lg" className="group">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}