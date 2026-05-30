# Pierre Zéro Cameroun — Technical Specification

## Dependencies

### Production

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3 | UI framework |
| react-dom | ^18.3 | React DOM renderer |
| react-router-dom | ^6.28 | Client-side routing (5 pages) |
| three | ^0.170 | WebGL hero effect |
| @react-three/fiber | ^8.17 | React renderer for Three.js |
| @react-three/drei | ^9.114 | Three.js helpers (useTexture, etc.) |
| gsap | ^3.12 | Animation engine (timelines, tweens) |
| lenis | ^1.1 | Smooth scroll |
| framer-motion | ^11.15 | Component-level animations (page transitions, reveals) |
| lucide-react | ^0.460 | Icon set |
| tailwindcss | ^3.4 | Utility CSS |
| @tailwindcss/typography | ^0.5 | Prose typography plugin |

### Development

| Package | Version | Purpose |
|---------|---------|---------|
| vite | ^5.4 | Build tool |
| @vitejs/plugin-react | ^4.3 | React support for Vite |
| typescript | ^5.6 | Type safety |
| @types/react | ^18.3 | React type definitions |
| @types/react-dom | ^18.3 | ReactDOM type definitions |
| @types/three | ^0.170 | Three.js type definitions |
| autoprefixer | ^10.4 | CSS vendor prefixes |
| postcss | ^8.4 | CSS processing |

## Component Inventory

### Layout (shared across pages)

| Component | Source | Reuse |
|-----------|--------|-------|
| Navbar | Custom | All pages — fixed header with scroll-aware background |
| Footer | Custom | All pages |
| WhatsAppWidget | Custom | All pages — floating button + chat widget |
| PageTransition | framer-motion | Wraps route outlet, crossfade 300ms |
| ScrollReveal | Custom + framer-motion | All content sections, viewport-triggered fade-up |
| MobileNav | Custom | Sheet-style slide-in menu |

### Sections — Home

| Component | Notes |
|-----------|-------|
| HeroSection | Full-viewport Three.js canvas (wave grid reveal) + overlay text |
| TrustBar | 4-column icon grid, static |
| ProductShowcase | Split 50/50 layout, product image + format selector |
| B2BSection | Dark background (#19325A), 4-column advantages grid |
| WhyChooseSection | 4-column card grid with icons |
| TestimonialsSection | 3-card carousel with arrows |
| ProcessStepsSection | 4-step horizontal flow with connectors |

### Sections — Product Page

| Component | Notes |
|-----------|-------|
| ProductGallery | Main image + thumbnail strip |
| ProductInfo | Name, badges, description |
| FormatSelector | Toggle: 1 bottle / carton of 6, dynamic pricing |
| BenefitsGrid | 4 icons: Santé, Convivialité, Élégance, Inclusivité |
| NutritionTable | Tableau nutritionnel |
| FAQSection | Accordion with 4 items |
| MobileCTA | Fixed bottom bar on mobile only |

### Sections — Cart Page

| Component | Notes |
|-----------|-------|
| CartItems | Editable quantity list |
| DeliveryEstimator | City dropdown, dynamic shipping cost |
| CartSummary | Subtotal + shipping + total |
| WhatsAppCheckout | Generates pre-filled WhatsApp URL |

### Sections — B2B Page

| Component | Notes |
|-----------|-------|
| B2BHero | Dark hero with CTA |
| PricingTable | 3-tier degressive pricing (1 / 5 / 10+ cartons) |
| ClientTypes | 5 cards: Restaurants, Hotels, Lounges, Traiteurs, Entreprises |
| B2BFAQ | Accordion with B2B-specific questions |

### Sections — About Page

| Component | Notes |
|-----------|-------|
| AboutHero | Brand story hero |
| BrandStory | Text + image sections |
| ContactSection | WhatsApp CTA + coordinates |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| Badge | Custom | Product cards, product info — pill-shaped certification badges |
| ProductCard | Custom | Home product section — image, price, CTA |
| SectionTitle | Custom | All sections — Cormorant Garamond title + optional subtitle |
| Accordion | Custom | FAQ on Product and B2B pages |

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| Hero wave grid reveal (distorted bars → image grid) | Three.js + @react-three/fiber + GSAP | Two-scene compositing: top layer = instanced bent bars with custom vertex/fragment shaders, bottom layer = image grid planes. Click triggers GSAP tween of uProgress 0→1 over 4s. CRT post-processing via shader pass. | 🔒 High |
| Noise-driven text distortion on section titles | Custom rAF + noise function | Per-character spans displaced by 2D Perlin noise over time. Character splitting at render. | Medium |
| Scroll reveal (all content sections) | framer-motion | `whileInView` with `viewport={{ once: true, amount: 0.3 }}`, variants for fade-up with stagger on children | Low |
| Hero text overlay entrance | framer-motion | Delayed fade-in + translateY after uProgress > 0.8 | Low |
| Page transitions | framer-motion | AnimatePresence wrapping Routes, crossfade 300ms | Low |
| Cart badge pulse | framer-motion | `animate` with keyframes, scale bounce on add | Low |
| WhatsApp button pulse | CSS @keyframes | scale 1→1.05→1, 2s ease-in-out, infinite | Low |
| Card hover lift | Tailwind | `hover:-translate-y-1 hover:shadow-lg transition-all duration-200` | Low |
| FAQ accordion open/close | framer-motion | AnimatePresence for content height, chevron rotate | Low |
| Testimonial carousel | framer-motion | AnimatePresence with slide direction, prev/next buttons | Low |
| Mobile nav slide-in | framer-motion | Sheet-style from right, backdrop blur | Low |
| Navbar background on scroll | Custom hook | `useScrollPosition` to toggle transparent→solid | Low |
| Product gallery thumbnail switch | framer-motion | `AnimatePresence` crossfade on main image | Low |
| Format selector toggle | framer-motion | `layout` prop for pill indicator slide | Low |

## State & Logic

### Cart State (React Context)

No external state library needed. CartContext with useReducer:
- `items: CartItem[]` — product, format, quantity, price
- Actions: ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, CLEAR_CART
- Persisted to localStorage via useEffect
- Total calculation derived from items + shipping
- Format can be "single" (15,000 FCFA) or "carton6" (75,000 FCFA, save 15,000)

### WhatsApp Integration

Helper function `generateWhatsAppUrl(order: CartState): string`:
- Base URL: `https://wa.me/237XXXXXXXXX` (Cameroon number)
- Pre-filled message with order details in French
- Called from: Product page CTA, Cart checkout button, B2B quote button, floating widget
- Message templates differ per context (B2C vs B2B)

### Three.js ↔ React Bridge

The hero effect uses R3F for the Three.js scenes. Key coordination:
- Lenis scroll instance created at App level, exposed via ref
- R3F render loop subscribes to Lenis scroll events
- GSAP timelines are created in a `useEffect` inside the R3F canvas, triggered by click
- `uProgress` uniform is tweened via GSAP (not useFrame) for precise easing control
- Touch/click detection via raycaster on invisible hit plane

### Shipping Logic

Simple city-based calculator:
- Douala/Yaoundé + ≥2 cartons = free
- Douala/Yaoundé + 1 carton = 2,000 FCFA
- Douala/Yaoundé + bottles only = 1,000 FCFA
- Other cities = "sur devis"

## Other Key Decisions

### Routing
React Router v6 with 5 routes: `/`, `/produit`, `/panier`, `/professionnels`, `/a-propos`. Product page is a dedicated route rather than modal, matching PRD spec.

### Fonts
Google Fonts loaded via `<link>` in index.html: Cormorant Garamond (400, 500, 600, 700) + Inter (400, 500, 600, 700). No npm font packages to avoid extra bundle weight.

### Images
Product and lifestyle images generated via AI and placed in `/public/images/`. 12 hero grid images + product gallery images + testimonial avatars. All images optimized as WebP with JPEG fallback.

### Mobile Strategy
As specified in PRD: mobile-first with touch targets ≥48px, stacked layouts, hamburger nav, fixed mobile CTA on product page. Three.js hero falls back to simplified instanced mesh count (240 instead of 480) on mobile via user agent / screen width detection.

### No Backend
Per PRD §8.2: no backend needed. WhatsApp serves as order pipeline. Cart is client-side only. No payment gateway integration. Static hosting (Netlify/Vercel compatible).
