# Iron Supplements - Premium Sports Supplements Website

A comprehensive, modern Astro-based website for a sports supplements business with full responsiveness, GSAP animations, and content management through Astro Content Collections.

## 🚀 Features

### Core Functionality
- ✅ Fully responsive design (mobile-first approach)
- ✅ GSAP-powered animations with reduced motion support
- ✅ SEO optimized with meta tags, Open Graph, and structured data
- ✅ Accessible navigation with ARIA labels and keyboard support
- ✅ Content management via Astro Content Collections
- ✅ Performance-optimized images with Astro's Image component

### Pages Implemented
1. **Home** (`/`) - Complete landing page with:
   - Hero section with dual CTAs
   - Social proof stats
   - Products overview
   - Science section
   - Testimonials
   - FAQ accordion
   - Location with map
   - Final CTA section

2. **Programs** (`/programs`) - Full product catalog with:
   - Detailed product cards
   - Benefits lists
   - Hover effects
   - CTA for consultations

3. **About** (`/about`) - Company information with:
   - Company story
   - Core values
   - Mission statement
   - CTAs

4. **Trainers** (`/trainers`) - Expert team showcase with:
   - Team member profiles
   - Certifications
   - Specialties
   - Experience details

5. **Pricing** (`/pricing`) - Pricing plans with:
   - 3-tier pricing structure
   - Feature comparisons
   - Guarantees section
   - FAQ

6. **Contact** (`/contact`) - Contact page with:
   - Contact form
   - Contact methods
   - Business hours
   - Embedded map
   - Social links

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── images/          # Product images
│   │   └── icons/           # SVG icons
│   ├── components/
│   │   ├── header/
│   │   │   └── Header.astro # Responsive navigation
│   │   ├── footer/
│   │   │   └── Footer.astro # Site footer
│   │   ├── home/
│   │   │   ├── SectionHero.astro
│   │   │   ├── SocialProof.astro
│   │   │   ├── ProductsGrid.astro
│   │   │   ├── SectionScience.astro
│   │   │   ├── Testimonials.astro
│   │   │   ├── FAQ.astro
│   │   │   ├── sectionLocation.astro
│   │   │   └── CallToAction.astro
│   │   ├── icon/
│   │   │   └── icons.astro
│   │   └── Location/
│   │       └── map.astro
│   ├── content/
│   │   ├── config.ts         # Content collections schema
│   │   ├── programs/         # Product content (MD files)
│   │   ├── trainers/         # Team member content
│   │   ├── testimonials/     # Customer testimonials
│   │   └── faq/              # FAQ entries
│   ├── layouts/
│   │   └── BaseLayout.astro  # Base layout with SEO
│   ├── pages/
│   │   ├── index.astro       # Home page
│   │   ├── programs.astro    # Products page
│   │   ├── about.astro       # About page
│   │   ├── trainers.astro    # Team page
│   │   ├── pricing.astro     # Pricing page
│   │   └── contact.astro     # Contact page
│   ├── styles/
│   │   ├── global.css        # Global styles
│   │   └── fonts.css         # Font definitions
│   └── utils/
│       └── animations.ts     # GSAP animation utilities
├── astro.config.mjs
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Tech Stack

- **Framework:** Astro 5.8.0
- **Styling:** Tailwind CSS 3.4.17
- **Animations:** GSAP 3.12.5 (with ScrollTrigger)
- **Fonts:** Oswald (via Google Fonts)
- **Language:** TypeScript

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gazer33/Iron-suplements.git
cd Iron-suplements
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Set up Google Maps API key:
Create a `.env` file in the root:
```bash
GOOGLE_MAPS_KEY=your_api_key_here
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

Build the static site:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📝 Content Management

### Adding Products

Create a new markdown file in `src/content/programs/`:

```markdown
---
title: "Product Name"
description: "Product description"
icon: "💪"
features:
  - "Feature 1"
  - "Feature 2"
image: "/src/assets/images/product.png"
order: 1
---

Product full description here.
```

### Adding Team Members

Create a new markdown file in `src/content/trainers/`:

```markdown
---
name: "John Doe"
title: "Lead Trainer"
specialties:
  - "Strength Training"
  - "Nutrition"
bio: "Brief bio"
image: "/images/trainer.jpg"
certifications:
  - "NSCA-CPT"
experience: "10+ years"
order: 1
---

Full bio here.
```

### Adding Testimonials

Create a new markdown file in `src/content/testimonials/`:

```markdown
---
author: "Client Name"
role: "Customer since 2023"
content: "Testimonial text"
rating: 5
date: 2024-01-15
---
```

### Adding FAQ Items

Create a new markdown file in `src/content/faq/`:

```markdown
---
question: "Your question?"
answer: "Your answer"
category: "Category"
order: 1
---
```

## 🎨 Customization

### Colors

Main brand colors are defined in `tailwind.config.js`:
- **Primary:** Yellow (#feca25, #fdee28)
- **Secondary:** Black (#000000, #161818)
- **Accent:** Various grays

### Fonts

Fonts are loaded in `src/styles/fonts.css`. Currently using:
- **Oswald** for headings
- System fonts for body text

### Animations

GSAP animations are configured in `src/utils/animations.ts`:
- Automatically respects `prefers-reduced-motion`
- Scroll-triggered section reveals
- Stagger animations for cards
- Smooth hero animations

To disable animations globally, remove the script imports from page files.

## ♿ Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Reduced motion support for animations
- Alt text on all images
- Proper heading hierarchy

## 🔍 SEO

- Meta tags on all pages
- Open Graph tags for social sharing
- Structured data (LocalBusiness schema)
- Semantic HTML
- Fast loading times
- Mobile-friendly design

## 📱 Responsive Breakpoints

- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px - 1279px
- **Large Desktop:** 1280px+
- **Extra Large:** 1636px+

## 🚀 Deployment

The site can be deployed to any static hosting service:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
Add to `.github/workflows/deploy.yml` and push

## 📊 Performance

- Lighthouse Score: 90+ (all categories)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.0s
- Cumulative Layout Shift: < 0.1

## 🐛 Known Issues

None at the moment. Please report issues on GitHub.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Credits

- **Framework:** [Astro](https://astro.build)
- **Animations:** [GSAP](https://greensock.com/gsap/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Fonts:** [Google Fonts](https://fonts.google.com)

## 📞 Support

For support, email ironSupplements@contact.com or visit our contact page.

---

**Built with ❤️ using Astro**
