# 🎓 Pinnacle Nepal - Educational Consultancy Platform

A modern, high-performance educational consultancy website built with Next.js 16, featuring stunning animations, responsive design, and optimal SEO.

![Pinnacle Nepal](public/logo.jpg)

## ✨ Features

### 🎨 **Design & UI**
- **Logo-Themed Design** - Professional color scheme matching brand identity
  - Primary Red: `#DC143C`
  - Primary Blue: `#003893`
- **Framer Motion Animations** - Smooth, professional animations throughout
- **Responsive Design** - Perfect display on all devices (mobile, tablet, desktop)
- **Hero Carousel** - 13 high-quality images with smooth slide transitions
- **Glass Morphism Effects** - Modern UI design patterns

### 🚀 **Performance**
- **Next.js 16** with App Router
- **Turbopack** for ultra-fast builds
- **Image Optimization** - Automatic WebP conversion and responsive sizing
- **Edge Caching** - Cloudflare Workers integration ready
- **SEO Optimized** - Comprehensive meta tags and Open Graph support

### 📱 **Pages & Sections**
- **Home** - Dynamic hero section, services, testimonials, contact form
- **Destinations** - Study abroad opportunities (USA, UK, Canada, Australia, etc.)
- **Services** - Complete consultancy services
- **Programs** - Available study programs
- **Gallery** - Photo showcase
- **Reviews** - Student success stories and testimonials
- **Contact** - Interactive contact form with validation

### 🛠️ **Tech Stack**
- **Framework:** Next.js 16.1.0
- **UI:** React 19.2.3, Tailwind CSS 4
- **Animations:** Framer Motion 12.23
- **Icons:** React Icons, Heroicons, Lucide React
- **Forms:** React Hook Form + Zod validation
- **Database:** Supabase (PostgreSQL)
- **ORM:** Drizzle ORM
- **Deployment:** Vercel / Cloudflare

## 🎯 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/pinnacle-nepal.git
cd pinnacle-nepal
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Cloudflare (optional)
CLOUDFLARE_ACCOUNT_ID=your_account_id
CLOUDFLARE_DATABASE_ID=your_database_id
CLOUDFLARE_API_TOKEN=your_api_token
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
consultancy-platform/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation bar
│   ├── HeroSection.tsx    # Hero carousel
│   ├── Footer.tsx         # Footer
│   ├── ContactForm.tsx    # Contact form
│   └── marketing/         # Marketing components
├── lib/                   # Utilities and helpers
│   ├── animations.ts      # Framer Motion variants
│   └── utils.ts           # Utility functions
├── public/                # Static assets
│   ├── logo.jpg           # Company logo
│   └── images/            # Image assets
│       └── hero/          # Hero section images (hero-1.jpg to hero-13.jpg)
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── package.json           # Dependencies
```

## 🎨 Color Palette

The design uses official Pinnacle Nepal brand colors:

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Primary Red** | `#DC143C` | Active states, CTAs, highlights |
| **Primary Blue** | `#003893` | Text, inactive states, headers |
| White | `#FFFFFF` | Backgrounds, text on dark |
| Dark | `#1A1A1A` | Text, overlays |

## 🖼️ Hero Section

The hero section features a dynamic carousel with:
- **13 high-quality images** (1920x1080)
- **2-second intervals** between slides
- **Right-to-left slide animation**
- **Dynamic text** that changes per image
- **Navigation dots** for manual control

### Adding Hero Images

Place images in `public/images/hero/` with names:
- `hero-1.jpg`
- `hero-2.jpg`
- ... up to `hero-13.jpg`

## 🔧 Configuration

### Environment Variables

Required variables for `.env.local`:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Cloudflare (Optional - for edge deployment)
CLOUDFLARE_ACCOUNT_ID=your-account-id
CLOUDFLARE_DATABASE_ID=your-database-id
CLOUDFLARE_API_TOKEN=your-api-token
```

### Next.js Configuration

Key features enabled in `next.config.ts`:
- Turbopack for faster builds
- Image optimization with quality settings
- Security headers
- Cache control for static assets

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Deploy to Cloudflare Pages

```bash
npm run build
npx wrangler pages deploy out
```

## 🤝 Contributing

This is a private project for Pinnacle Nepal Educational Consultancy.

## 📄 License

© 2024 Pinnacle Nepal. All rights reserved.

## 📞 Contact

- **Website:** [Your Website URL]
- **Email:** [Your Email]
- **Phone:** [Your Phone]
- **Address:** [Your Address]

---

**Built with ❤️ by Pinnacle Nepal Team**
