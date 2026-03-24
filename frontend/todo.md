# GLITHEX — Cyberpunk Streetwear Ecommerce

## Design Guidelines

### Design References
- **Blade Runner 2049 UI**: Neon glows, dark atmospheres, holographic elements
- **Techwear brands**: ACRONYM, Stone Island Shadow Project — minimalist tech aesthetic
- **Cyberpunk 2077 UI**: Glitch effects, terminal aesthetics, futuristic HUD elements

### Color Palette
- Background: #0A0A0F (Deep Black)
- Surface: #13131A (Dark Surface)
- Card: #1A1A2E (Card Background)
- Primary Purple: #8B5CF6
- Primary Purple Hover: #7C3AED
- Electric Blue: #3B82F6
- Cyan Accent: #06B6D4
- Neon Glow: #A78BFA (light purple glow)
- Text Primary: #FFFFFF
- Text Secondary: #94A3B8
- Border: #2D2D44

### Typography
- Headings: Orbitron (Google Font) — futuristic/tech feel
- Body: Inter — clean, readable
- Accent/Code: JetBrains Mono — hacker/terminal aesthetic

### Key Component Styles
- **Buttons**: Purple gradient (#8B5CF6 → #3B82F6), white text, glow on hover
- **Cards**: Dark surface with subtle border, neon glow on hover, glitch effect transitions
- **Navigation**: Transparent/glass morphism with backdrop blur
- **Glitch Effect**: CSS animation with clip-path and color offset
- **Neon Glow**: box-shadow with purple/blue spread

### Animations
- Glitch text effect on hero title
- Neon pulse on CTAs
- Fade-in on scroll for sections
- Hover lift + glow on product cards
- Terminal typing effect for brand story

### Images to Generate
1. **hero-cyberpunk-city.jpg** — Dark futuristic cityscape with neon purple and blue lights, rain, Blade Runner atmosphere (photorealistic, 1024x576)
2. **collection-neon-rebellion.jpg** — Abstract cyberpunk art with glitch effects, neon purple streaks on dark background (photorealistic, 1024x576)
3. **collection-digital-ghost.jpg** — Ethereal digital figure dissolving into data particles, blue and purple tones (photorealistic, 1024x576)
4. **lookbook-cyberpunk-street.jpg** — Dark urban alley with neon signs, cyberpunk atmosphere, rain-slicked streets (photorealistic, 1024x576)

---

## Architecture (8 files max)

### Files to Create/Modify:
1. **src/i18n/translations.ts** — All translations for EN/ES/FR/DE + language detection + context
2. **src/components/GlitchEffects.tsx** — Reusable glitch text, neon glow, and animation components
3. **src/components/Navbar.tsx** — Navigation bar with language selector, glass morphism
4. **src/components/Footer.tsx** — Footer with links, social media, brand info
5. **src/pages/Index.tsx** — Homepage: Hero, Featured Products, Collections preview, CTA
6. **src/pages/Shop.tsx** — Product catalog with filters, product cards, cart placeholder
7. **src/pages/BrandStory.tsx** — Immersive brand narrative page + Lookbook + Collections
8. **src/pages/Blog.tsx** — Blog listing + Contact section

### Files to Modify:
- **src/App.tsx** — Add routes, import Orbitron font
- **index.html** — Update title, meta tags, fonts
- **src/index.css** — Global cyberpunk styles, glitch animations
- **tailwind.config.ts** — Extend with custom colors and fonts

### Simplifications for MVP:
- Combine Collections + Lookbook + Brand Story into one page (BrandStory)
- Combine Blog + Contact into one page (Blog)
- Cart is a simple modal/drawer (no full checkout)
- Printify integration shown as structure (buy buttons link to external)
- Language detection via navigator.language (no geolocation API needed)
- Products are static data (no API calls)

## Development Tasks
1. Generate images
2. Set up i18n system with translations
3. Create global styles and animations (index.css + tailwind config)
4. Create reusable components (GlitchEffects, Navbar, Footer)
5. Build Homepage
6. Build Shop page
7. Build Brand Story page (includes Collections + Lookbook)
8. Build Blog page (includes Contact)
9. Update App.tsx with routes
10. Update index.html with SEO
11. Lint, build, check