# Deltanoid - Growth, Simplified

## Overview

Deltanoid is a real growth consultancy and technology company that helps businesses grow through SaaS development, performance marketing, and reputation management. The website showcases the company's "We Build. We Scale. You Relax." positioning with actual case studies from 25+ clients across wellness, hospitality, and tech/SaaS sectors.

The platform now features AI-powered enhancements using OpenAI's gpt-5 model to improve user experience and lead qualification.

**Real Business Details:**
- **Tagline:** Growth, Simplified
- **Core Message:** We Build. We Scale. You Relax.
- **Industries:** Wellness & Lifestyle, Hospitality & Resorts, Tech & SaaS
- **Geography:** India (Bangalore, Gurgaon HQ), GCC (Dubai), Singapore, USA & Europe
- **Clients:** Adhira Spa, Nava, Nirantara Resort, DevTown, Modern Zen Spa, Sundown Pub, and more
- **Stats:** 25+ clients, 100+ projects delivered, 10+ countries served, 30%+ average ROI uplift

The platform serves as both a marketing presence and lead generation tool, featuring 8 comprehensive pages with actual client testimonials, real case study results, and authentic business positioning. The tone is "professional + chill + psychologically comfortable" to reduce friction and build trust.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend & Backend Framework

**Next.js 15 (App Router):**
- **React 18** with TypeScript for type-safe component development
- **Next.js App Router** for file-based routing and server components
- **Tailwind CSS** for utility-first styling with custom design system
- **next-themes** for dark/light theme management

**Deployment:**
- Runs on port 5000 (configured in workflow)
- Development: `npm run dev` (Next.js dev server)
- Production: `npm run build` && `npm start`

### UI Framework

**Technology Stack:**
- **shadcn/ui** component library (New York style variant) providing comprehensive set of accessible, customizable components built on Radix UI primitives
- Custom design system with HSL-based color variables supporting light/dark themes
- Responsive-first approach with mobile breakpoint at 768px
- Framer Motion for animations

**Design System:**
- Color palette based on refined blues (primary), dark slate (secondary), and emerald accents
- Inter font family from Google Fonts CDN
- Consistent spacing using Tailwind's 4-unit rhythm (4, 8, 12, 16)
- Custom CSS variables for theming with automatic dark mode support
- Hover and elevation states for interactive elements

### Page Structure

**Next.js App Router Pages:**
- **/** (Home) - "We Build. We Scale. You Relax." with real client logos, services, case studies
- **/who-we-are** - "Born in India. Built for the World." with mission, vision, global reach
- **/what-we-do** - Three core services - SaaS & App Development, Performance Marketing, Reputation & Content
- **/our-work** - Detailed case studies with real metrics from Nirantara Resort (416K+ profile views), Natural Body Spa (133K+ views), Ayara Thai Spa (55K+ profile views), and more
- **/lets-talk** - Contact form with global presence information
- **/insights** - Blog grid with categories, AI content generator, and downloadable guides
- **/insights/[slug]** - Individual article pages with full content, navigation, and CTA
- **/testimonials** - Real client quotes from spa owners, resort managers, founders
- **/careers** - "Work. Grow. Relax." with culture and open roles

**Reusable Components:**
- UI components built with shadcn/ui (Card, Button, Badge, Input, etc.) in `components/ui/`
- Shared components (Navigation, Footer, etc.) in `components/`
- Atomic design principles with consistent spacing and hover states
- All Button/Link combinations use `asChild` prop for proper accessibility

### API Routes (Next.js)

**AI-Powered Endpoints:**
- **POST /api/qualify-lead** - Contact form submission with AI lead qualification
- **POST /api/chat** - AI chatbot for visitor interactions
- **POST /api/generate-blog-idea** - AI-powered blog content idea generator

**Implementation Location:**
- API route handlers in `app/api/` directory using Next.js Route Handlers
- OpenAI utility functions in `server/openai.ts`
- Storage abstraction layer in `server/storage.ts`

### Data Storage Solutions

**Current Implementation:**
- In-memory storage using Map-based data structures for user management and contact submissions
- Storage interface (`IStorage`) designed for CRUD operations (get, create, update patterns)

**Database Integration Ready:**
- Drizzle ORM configured with PostgreSQL dialect
- Database schema defined in `shared/schema.ts` using Drizzle's type-safe schema builder
- Neon Database serverless driver integration ready (`@neondatabase/serverless`)
- Migration system configured to output to `./migrations` directory
- Environment variable-based database URL configuration

**Schema Design:**
- Users table with UUID primary keys, username/password fields
- Contact Submissions table storing all contact form submissions with AI qualification data
- Zod schema validation integrated via `drizzle-zod` for type-safe inserts
- Shared schema types for full-stack type safety

### Content Management

**Blog System:**
- Full blog article system with 6 published articles across 3 categories
- Articles stored in `lib/blogArticles.ts` with complete content structure
- Each article includes: intro, multiple sections with headings, and conclusion
- Dynamic routing: `/insights` (grid view) and `/insights/:slug` (article detail)
- Previous/Next article navigation on detail pages
- Category filtering on main Insights page
- Download guides available upon request (toast notification system)

**Article Categories:**
- SaaS Growth - Strategies for scaling SaaS products
- Wellness & Lifestyle Marketing - Marketing tactics for spas and wellness businesses
- Reputation & Brand Building - Trust-building and content strategies

### AI-Powered Features

**OpenAI Integration (gpt-5):**
- **AI Lead Qualification** - Contact form submissions are analyzed for category, priority, and personalized responses
- **AI Chatbot Widget** - Interactive assistant available on all pages to help visitors with questions
- **AI Content Generator** - Blog post idea generator on Insights page for content inspiration

**Implementation Architecture:**
- OpenAI utility functions in `server/openai.ts` using structured JSON responses
- Next.js API routes in `app/api/` for `/qualify-lead`, `/chat`, `/generate-blog-idea`
- Contact submissions are saved to storage FIRST before attempting AI qualification (ensures no data loss)
- Graceful error handling with fallback messages when AI services are unavailable
- Error differentiation: 503 for rate limits/service unavailable, 500 for system errors

**Key Design Decisions:**
- **Data Persistence Priority:** Contact submissions are saved immediately, AI qualification is an enhancement
- **Graceful Degradation:** All features work with user-friendly fallbacks when AI is unavailable
- **User Experience:** Success toasts and clear messaging regardless of AI availability
- **Error Recovery:** Frontend handles 503 errors differently from 500 errors for better UX

### External Dependencies

**Core Framework:**
- **Next.js 15** - React framework with App Router for SSR and API routes
- **React 18** - UI library
- **TypeScript** - Type safety throughout the stack
- **Tailwind CSS** - Utility-first styling

**Third-Party UI Libraries:**
- **Radix UI** - Comprehensive suite of unstyled, accessible component primitives (accordion, dialog, dropdown, popover, select, toast, tooltip, and 20+ others)
- **Lucide React** - Icon library for consistent iconography
- **cmdk** - Command palette/menu component
- **embla-carousel-react** - Touch-friendly carousel component
- **react-day-picker** - Calendar/date picker component
- **recharts** - Charting library for data visualization
- **Framer Motion** - Animation library

**Form Management:**
- **React Hook Form** - Form state management with validation
- **@hookform/resolvers** - Validation schema resolvers (supports Zod)
- **Zod** - TypeScript-first schema validation

**Database & ORM:**
- **Drizzle ORM** (`drizzle-orm`) - Type-safe SQL query builder
- **Drizzle Kit** (`drizzle-kit`) - Migration and schema management tools
- **Neon Serverless** (`@neondatabase/serverless`) - PostgreSQL database driver

**Utility Libraries:**
- **clsx** & **tailwind-merge** - Conditional className utilities
- **class-variance-authority** - Type-safe component variant management
- **date-fns** - Date manipulation and formatting

**Asset Management:**
- Stock images stored in `attached_assets/` directory
- Next.js Image component for optimized image loading

### SEO & Metadata

**Optimization Features:**
- Comprehensive metadata in `app/layout.tsx` including Open Graph and Twitter cards
- Dynamic sitemap generation in `app/sitemap.ts`
- Robots.txt configuration in `app/robots.ts`
- Structured data (JSON-LD) for local business schema
- Canonical URLs and social sharing optimization

### Recent Changes (October 2025)

**SEO Optimization (October 5, 2025):**
- Enhanced homepage metadata with SEO-optimized title and description for better search visibility
- Created dedicated metadata for `/lets-talk` contact page with local SEO keywords (Bangalore, Gurgaon, Dubai, Singapore)
- Replaced all emoji characters with professional Lucide React SVG icons across homepage, lets-talk, and who-we-are pages for improved accessibility and SEO
- Improved testimonials section with specific company names (Adhira Wellness Spa, Nirantara Resort, DevTown) and professional roles for enhanced credibility
- Added comprehensive FAQ section with 6 questions to homepage for better user engagement
- Implemented FAQ schema markup (JSON-LD) on homepage for rich search results
- Implemented Service schema markup (JSON-LD) on What We Do page for enhanced search visibility
- Added aria-labels to all icons for WCAG accessibility compliance
- All pages now feature proper metadata, Open Graph tags, and structured data

**Migration to Next.js:**
- Migrated from Vite/Express architecture to Next.js 15 with App Router
- Converted Express API routes to Next.js Route Handlers
- Maintained all AI-powered features with improved type safety
- Removed obsolete Vite/Express infrastructure
- All functionality preserved and enhanced with Next.js capabilities

**Old Infrastructure (Archived):**
- Previous Vite/React frontend archived in `.archive/client_vite_old_*`
- Express server routes migrated to Next.js API routes
- Storage and OpenAI utilities maintained in `server/` directory for use by Next.js API routes
