import Link from 'next/link'
import Script from 'next/script'
import { ChevronRight } from 'lucide-react'

type BreadcrumbItem = {
  label: string
  href: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
  pageId?: string
}

export function Breadcrumbs({ items, pageId }: BreadcrumbsProps) {
  const baseUrl = 'https://www.deltanoid.in'
  
  // Always include home as first item
  const allItems = [{ label: 'Home', href: '/' }, ...items]
  
  // Generate unique script ID based on page context
  const scriptId = pageId ? `breadcrumb-schema-${pageId}` : 'breadcrumb-schema'
  
  // Generate JSON-LD schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${baseUrl}${item.href}`,
    })),
  }

  return (
    <>
      <Script
        id={scriptId}
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          {allItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-2" aria-hidden="true" />
              )}
              {index === allItems.length - 1 ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
