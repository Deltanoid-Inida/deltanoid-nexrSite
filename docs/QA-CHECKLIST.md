# Deltanoid Website - QA Checklist

## Pre-Deployment Checklist

### SEO & Metadata
- [ ] All pages have unique `<title>` tags following pattern: "Page Title | Deltanoid"
- [ ] Meta descriptions are under 160 characters and compelling
- [ ] OpenGraph tags are present on all pages
- [ ] Twitter card tags are configured correctly
- [ ] Canonical URLs are set properly
- [ ] JSON-LD structured data validates in [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Business information (phone, address) is updated with real data
- [ ] OG image exists at `/public/assets/og-image.jpg` (1200x630px)
- [ ] Sitemap.xml is generated and accessible
- [ ] robots.txt is configured correctly

### Accessibility (WCAG 2.1 AA Target)
- [ ] All images have appropriate alt text
- [ ] Decorative images have empty alt (`alt=""`) or `aria-hidden="true"`
- [ ] All form inputs have associated labels
- [ ] Color contrast ratios meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- [ ] Keyboard navigation works on all interactive elements
- [ ] Focus indicators are visible and clear
- [ ] No keyboard traps exist
- [ ] Skip to main content link is present (optional but recommended)
- [ ] Heading hierarchy is logical (H1 → H2 → H3, no skipping)
- [ ] ARIA labels are used appropriately
- [ ] Screen reader testing completed (NVDA/JAWS/VoiceOver)
- [ ] Forms provide clear error messages
- [ ] Required fields are properly marked
- [ ] Page language is declared (`<html lang="en">`)

### Performance
- [ ] Lighthouse Performance score ≥ 95 (Desktop)
- [ ] Lighthouse Performance score ≥ 85 (Mobile)
- [ ] First Contentful Paint (FCP) < 1.8s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Time to Interactive (TTI) < 3.8s
- [ ] Images are optimized and properly sized
- [ ] Fonts are preloaded
- [ ] Critical CSS is inlined (if applicable)
- [ ] JavaScript bundles are code-split
- [ ] Static assets are cached appropriately

### Security
- [ ] Security headers are configured (verify with `curl -I https://your-domain`)
  - [ ] X-Frame-Options: SAMEORIGIN
  - [ ] X-Content-Type-Options: nosniff
  - [ ] X-XSS-Protection: 1; mode=block
  - [ ] Strict-Transport-Security (HSTS)
  - [ ] Content-Security-Policy
  - [ ] Referrer-Policy
- [ ] HTTPS is enforced (HTTP redirects to HTTPS)
- [ ] No sensitive data in client-side code
- [ ] API routes validate all inputs
- [ ] Environment variables are properly secured
- [ ] No API keys exposed in client-side code

### Functionality
#### Contact Form
- [ ] All required fields are validated
- [ ] Email format is validated
- [ ] Phone number accepts international formats
- [ ] Form shows loading state during submission
- [ ] Success message displays after submission
- [ ] Error messages are clear and helpful
- [ ] Form cannot be submitted multiple times rapidly
- [ ] Email integration is working (SendGrid/Resend)
- [ ] reCAPTCHA is functional (if implemented)
- [ ] Form is accessible via keyboard
- [ ] Form works on mobile devices

#### Navigation
- [ ] All navigation links work correctly
- [ ] Active page is highlighted in navigation
- [ ] Mobile menu opens and closes properly
- [ ] Theme toggle works (light/dark mode)
- [ ] Logo links to homepage
- [ ] "Let's Talk" button navigates to contact page
- [ ] Navigation is sticky and remains accessible while scrolling

#### Pages
- [ ] Home page loads without errors
- [ ] Who We Are page displays correctly
- [ ] What We Do page shows all services
- [ ] Our Work page lists case studies
- [ ] Insights page loads blog articles
- [ ] Testimonials page displays reviews
- [ ] Careers page is accessible
- [ ] Contact page form works correctly
- [ ] 404 page exists and is styled

### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### Responsive Design
- [ ] Mobile (320px - 767px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (1024px - 1439px)
- [ ] Large Desktop (1440px+)
- [ ] Touch targets are at least 44x44px on mobile
- [ ] Text is readable without zooming
- [ ] No horizontal scrolling
- [ ] Images scale appropriately

### Content
- [ ] All placeholder text is replaced with real content
- [ ] Phone numbers are real and clickable
- [ ] Email addresses are real and clickable
- [ ] Company information is accurate
- [ ] No Lorem Ipsum text remains
- [ ] All links open in correct target (same window vs new tab)
- [ ] Social media links are correct
- [ ] Copyright year is current

### Development Utilities
- [ ] Dev accessibility scanner runs in development
- [ ] Console shows no errors in production
- [ ] No mock/test data in production
- [ ] Source maps are disabled in production (optional)
- [ ] Analytics are configured (if applicable)
- [ ] Error tracking is set up (Sentry, etc.)

### Post-Deployment Verification
- [ ] Run full Lighthouse audit on production URL
- [ ] Verify security headers with [securityheaders.com](https://securityheaders.com)
- [ ] Test contact form on production
- [ ] Check Google Search Console for indexing issues
- [ ] Validate structured data with Google Rich Results Test
- [ ] Monitor Core Web Vitals in Google Search Console
- [ ] Test social media sharing (Facebook, Twitter, LinkedIn)
- [ ] Verify domain DNS and SSL certificate

## Testing Tools

### Recommended Tools
- **Lighthouse**: Built into Chrome DevTools (or run via CLI)
- **WAVE**: [Browser extension](https://wave.webaim.org/extension/) for accessibility
- **axe DevTools**: [Browser extension](https://www.deque.com/axe/devtools/) for accessibility
- **Screen Readers**: NVDA (Windows), JAWS (Windows), VoiceOver (Mac/iOS)
- **Mobile Testing**: Chrome DevTools device emulation, real devices
- **Security Headers**: [securityheaders.com](https://securityheaders.com)
- **SSL Test**: [SSL Labs](https://www.ssllabs.com/ssltest/)
- **Page Speed**: [PageSpeed Insights](https://pagespeed.web.dev/)
- **Rich Results**: [Google Rich Results Test](https://search.google.com/test/rich-results)
- **HTML Validator**: [W3C Validator](https://validator.w3.org/)

## Notes

- Run the dev accessibility scanner during development by opening browser console on localhost
- Some features (like security headers) require server/hosting configuration for static exports
- Replace all placeholder content before production deployment
- Set up email integration before deploying contact form
- Consider implementing analytics and error monitoring
- Schedule regular accessibility audits (quarterly recommended)

---

**Last Updated**: January 2025  
**Maintained By**: Deltanoid Development Team
