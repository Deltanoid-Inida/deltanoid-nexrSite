import React from "react";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle, Instagram, MapPin, Scale, FileText, Shield, Users, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for Deltanoid - Review our terms and conditions for using our services and website.',
  openGraph: {
    title: 'Terms of Use | Deltanoid',
    description: 'Review Deltanoid\'s terms and conditions for using our services and website.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.deltanoid.in/terms',
  },
};

export default function TermsOfUse() {
  const termsHighlights = [
    {
      icon: Scale,
      title: "Fair Terms",
      description: "Clear, balanced terms that protect both parties in our business relationship."
    },
    {
      icon: FileText,
      title: "Service Agreement",
      description: "Detailed scope of services and responsibilities for successful project delivery."
    },
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Comprehensive terms covering intellectual property and confidentiality."
    },
    {
      icon: Users,
      title: "Client Rights",
      description: "Clear definition of your rights and obligations when working with us."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms of Use
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Clear terms and conditions that govern our services and your use of our website.
          </p>
        </div>
      </section>

      {/* Terms Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Commitment to Fair Terms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {termsHighlights.map((highlight, index) => (
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

      {/* Introduction */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover-elevate transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Deltanoid. These Terms of Use ("Terms") govern your access to and use of our website, products, and services provided by Deltanoid ("Deltanoid," "we," "us," or "our"). By accessing or using{' '}
                <a href="https://www.deltanoid.in" className="text-primary hover:underline">www.deltanoid.in</a>{' '}
                (the "Site"), and by purchasing or engaging with our software, applications, and consultancy services (collectively, the "Services"), you, the user ("Client" or "you"), agree to be bound by these Terms, as well as our Privacy Policy.
              </p>
              <div className="mt-6 p-4 bg-accent/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Important:</strong> If you do not agree with these Terms, please refrain from using the Site and our Services.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      {/* <section className="py-16">
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

      {/* Definitions */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover-elevate transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">2. Definitions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-accent/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Client</h4>
                  <p className="text-sm text-muted-foreground">Any individual, organization, or business entity engaging Deltanoid's services.</p>
                </div>
                <div className="p-4 bg-accent/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Services</h4>
                  <p className="text-sm text-muted-foreground">All consulting, development, advisory, and digital solutions offered by Deltanoid.</p>
                </div>
                <div className="p-4 bg-accent/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Content</h4>
                  <p className="text-sm text-muted-foreground">All data, text, software, images, graphics, reports, deliverables, methodologies, or materials.</p>
                </div>
                <div className="p-4 bg-accent/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Deliverables</h4>
                  <p className="text-sm text-muted-foreground">Any output generated by Deltanoid as part of the Services.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Eligibility and Compliance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover-elevate transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">3. Eligibility and Compliance</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">3.1 Eligibility Requirements</h3>
                  <p className="text-muted-foreground">
                    You affirm that you are at least 18 years old, or the legal age in your jurisdiction, and have the legal authority to engage in binding contracts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">3.2 Compliance with Laws</h3>
                  <p className="text-muted-foreground">
                    You agree to use our Site and Services in compliance with all applicable laws and regulations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Scope */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover-elevate transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">4. Scope of Services</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">4.1 Service Scope</h3>
                  <p className="text-muted-foreground">
                    Deltanoid provides Services based on individual agreements, Statements of Work (SOWs), or written contracts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">4.2 Modifications to Scope</h3>
                  <p className="text-muted-foreground">
                    Deltanoid reserves the right to modify the scope of Services if necessary. Additional fees may apply.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Client Obligations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover-elevate transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">5. Client Obligations and Responsibilities</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">5.1 Provision of Information</h3>
                  <p className="text-muted-foreground">
                    The Client agrees to provide Deltanoid with accurate, up-to-date, and complete information necessary for the performance of Services. Deltanoid is not responsible for delays or issues arising from the Client's failure to provide such information.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">5.2 Timely Cooperation</h3>
                  <p className="text-muted-foreground">
                    The Client agrees to respond promptly to all communications and requests from Deltanoid, as timely cooperation is essential for project efficiency. Delays caused by Client inaction may impact project timelines and result in additional charges.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">5.3 Provision of Resources</h3>
                  <p className="text-muted-foreground">
                    The Client shall ensure that all necessary resources, system access, or support are provided to Deltanoid as required to complete the project.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover-elevate transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">6. Confidentiality and Non-Disclosure</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">6.1 Confidential Information</h3>
                  <p className="text-muted-foreground">
                    Both parties agree to treat as confidential all non-public information exchanged during the course of this Agreement. Each party shall take reasonable precautions to protect the confidentiality of such information.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">6.2 Non-Disclosure</h3>
                  <p className="text-muted-foreground">
                    Confidential information shall not be disclosed to any third party without written consent from the disclosing party, except when disclosure is required by law or regulatory authority, with prior notice to the disclosing party.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">6.3 Duration of Confidentiality</h3>
                  <p className="text-muted-foreground">
                    These confidentiality obligations shall continue for a period of five (5) years following the termination or completion of Services or indefinitely as required by applicable law.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover-elevate transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">7. Intellectual Property Rights and Licensing</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">7.1 Ownership of Work Product</h3>
                  <p className="text-muted-foreground">
                    All intellectual property, including methodologies, tools, software, and systems developed by Deltanoid in performing Services, remains the exclusive property of Deltanoid, regardless of whether deliverables are provided in tangible or digital form.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">7.2 Limited License</h3>
                  <p className="text-muted-foreground">
                    Deltanoid grants the Client a non-exclusive, non-transferable, revocable license to use deliverables solely for internal business purposes. The Client is strictly prohibited from modifying, distributing, reselling, or commercializing any deliverables without Deltanoid's prior written approval.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">7.3 Client Materials</h3>
                  <p className="text-muted-foreground">
                    Any materials or intellectual property provided by the Client remain the Client's property, provided they are lawfully owned. The Client warrants that it has the legal rights to share any materials needed for Services and indemnifies Deltanoid against third-party claims related to these materials.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Terms Grid */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Important Terms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">8. Payment Terms</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Fees as specified in SOW or agreement</li>
                  <li>• Payment typically in advance</li>
                  <li>• Late payment penalties may apply</li>
                  <li>• Additional charges require pre-approval</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">9. Acceptable Use</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use for legitimate purposes only</li>
                  <li>• No unauthorized access attempts</li>
                  <li>• No malicious software transmission</li>
                  <li>• Respect intellectual property laws</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">10. Data Security</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Commercially reasonable security measures</li>
                  <li>• Cannot guarantee absolute security</li>
                  <li>• Governed by our Privacy Policy</li>
                  <li>• Client consent to data practices</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">11. Warranties</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Professional service performance</li>
                  <li>• Industry standard compliance</li>
                  <li>• Limited warranty disclaimers</li>
                  <li>• No liability for external factors</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">12. Liability Limits</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Liability capped at fees paid</li>
                  <li>• No indirect damages</li>
                  <li>• Exclusion of consequential losses</li>
                  <li>• Protection of business interests</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">13. Termination</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 30-day notice for client termination</li>
                  <li>• Immediate termination for breach</li>
                  <li>• Payment for completed work required</li>
                  <li>• Return of proprietary information</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal and Dispute Resolution */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">15. Dispute Resolution</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Governing Law</h4>
                    <p className="text-sm text-muted-foreground">These Terms shall be governed by the laws of the State of Karnataka, India.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Binding Arbitration</h4>
                    <p className="text-sm text-muted-foreground">Disputes resolved by binding arbitration in Bangalore, Karnataka, India, according to the Arbitration and Conciliation Act, 1996.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Legal Fees</h4>
                    <p className="text-sm text-muted-foreground">The prevailing party in any dispute is entitled to recover attorney's fees and costs.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Additional Provisions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">16. Force Majeure</h4>
                    <p className="text-sm text-muted-foreground">No liability for delays due to circumstances beyond reasonable control.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">17. Modifications</h4>
                    <p className="text-sm text-muted-foreground">We reserve the right to modify these Terms. Continued use signifies acceptance of updates.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">13. Indemnification</h4>
                    <p className="text-sm text-muted-foreground">Client indemnifies Deltanoid from claims arising from Client's use or breach of Terms.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Contact Information */}
      {/* <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover-elevate transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">18. Contact Information</h2>
              <p className="text-muted-foreground mb-6">
                For any questions or concerns regarding these Terms of Use, please contact us at:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground mb-2">
                    <strong>Address:</strong> Unit 101, Oxford Towers, Kodihalli, HAL Old Airport Road, Bangalore, Karnataka, India, 560008
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <strong>Phone:</strong> <a href="tel:+918088951942" className="text-primary hover:underline">+91 80889 51942</a>
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> <a href="mailto:connect@deltanoid.in" className="text-primary hover:underline">connect@deltanoid.in</a>
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">
                    <strong>WhatsApp:</strong> <a href="https://wa.me/918088951942" className="text-primary hover:underline">Contact on WhatsApp</a>
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Instagram:</strong> <a href="https://instagram.com/deltanoid.india" className="text-primary hover:underline">deltanoid.india</a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Now that you understand our terms, let's discuss how we can help grow your business.
          </p>
          <Link href="/lets-talk">
            <Button size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}