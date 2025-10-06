import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import { blogArticles } from '@/lib/blogArticles';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find(a => a.slug === slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const baseUrl = 'https://www.deltanoid.in';
  const articleUrl = `${baseUrl}/insights/${article.slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: articleUrl,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: '/assets/og-image.jpg',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
    alternates: {
      canonical: articleUrl,
    },
  };
}

export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = blogArticles.find(a => a.slug === slug);
  const articleIndex = blogArticles.findIndex(a => a.slug === slug);
  const prevArticle = articleIndex > 0 ? blogArticles[articleIndex - 1] : null;
  const nextArticle = articleIndex < blogArticles.length - 1 ? blogArticles[articleIndex + 1] : null;

  if (!article) {
    notFound();
  }

  const baseUrl = 'https://www.deltanoid.in';
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Deltanoid',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/assets/og-image.jpg`,
      },
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/insights/${article.slug}`,
    },
    image: {
      '@type': 'ImageObject',
      url: `${baseUrl}/assets/og-image.jpg`,
      width: 1200,
      height: 630,
    },
  };

  return (
    <div className="min-h-screen pt-20">
      <Script
        id="article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(articleSchema)}
      </Script>
      <section className="py-4 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" data-testid="button-back" asChild>
            <Link href="/insights">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4">
            {article.category}
          </Badge>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(article.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {article.readTime}
            </div>
            <div>By {article.author}</div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground mb-8">
              {article.content.intro}
            </p>

            {article.content.sections.map((section, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {section.heading}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="mt-12 p-6 md:p-8 bg-primary/5 border-l-4 border-primary rounded-r-lg">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                The Bottom Line
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                {article.content.conclusion}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="py-12 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Let's turn these insights into real results for your company.
          </p>
          <Button size="lg" asChild>
            <Link href="/lets-talk">
              Let's Talk About Your Growth
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-8 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevArticle && (
              <Link href={`/insights/${prevArticle.slug}`}>
                <Card className="hover-elevate transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <ArrowLeft className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground mb-2">Previous Article</p>
                        <h3 className="font-semibold text-foreground leading-tight">
                          {prevArticle.title}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )}

            {nextArticle && (
              <Link href={`/insights/${nextArticle.slug}`}>
                <Card className="hover-elevate transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground mb-2">Next Article</p>
                        <h3 className="font-semibold text-foreground leading-tight">
                          {nextArticle.title}
                        </h3>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
