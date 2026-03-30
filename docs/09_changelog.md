# Changelog

## 2026-03-30 (i18n & Mega Menu)

### Navigation
- **[UI]**: Mega menu dropdowns for all 5 nav items (Devices, Mobile Plans, Internet & TV, Why du, Help)
- **[UI]**: Full-width dropdown with sections, offer links, promo area, badges (NEW, NEW PRICE, 50% Off)
- **[UI]**: Navbar color inversion (gradient bg, white text) when dropdown active
- **[UI]**: TopBar bg changes to foreground color when menu active
- **[UI]**: Click outside closes dropdown
- **[UI]**: All menu item links populated from ref/links.md

### Banner
- **[UI]**: Banner button links to external du.ae pages
- **[UI]**: Banner heading uses typo-display-md class
- **[UI]**: Mobile padding added to banner content

### Links
- **[UI]**: Product cards link to shop.du.ae product pages
- **[UI]**: "See all devices", Samsung, Flexi buttons linked
- **[UI]**: Esaad/Fazaa offer banners linked
- **[UI]**: Footer links: app stores, social media, shop pages, account services

### Offers Section
- **[UI]**: Offer cards converted to overlaid text + gradient buttons on images
- **[UI]**: Esaad/Fazaa cards restructured as 2-column layout (image + text)

### i18n (Arabic/English)
- **[CONFIG]**: next-intl installed and configured with en/ar locales
- **[CONFIG]**: i18n/routing.ts, i18n/request.ts, middleware.ts created
- **[CONFIG]**: next.config.mjs updated with next-intl plugin
- **[CONFIG]**: App restructured with [locale] route segment
- **[CONFIG]**: Locale-aware layout with RTL dir="rtl" for Arabic
- **[UI]**: Language switcher in TopBar and mobile menu (عربي / English)
- **[UI]**: All page text translated: banner, shop section, offers, home internet, Samsung, packages, flexi, app section, EID, cyber safety, help tabs, footer
- **[UI]**: Mega menu: all section titles, menu items, offer links, promo text translated
- **[UI]**: Product card price format localized (AED/درهم)
- **[UI]**: Review cards translated to Arabic
- **[UI]**: Locale-aware images: banner (4 slides), app advert, EID, cyber safety
- **[UI]**: CardSlider fixed for RTL scrolling
- **[UI]**: CSS logical properties (text-start) for proper RTL alignment
- **[ASSET]**: Arabic banner images added (Mobile-ar.png, du-Consumer-50-ar.jpg, du-Fazaa-ar.jpg, HWE-duae-ar.jpg)
- **[ASSET]**: Arabic images for EID-ar.png, du-Corporate-Cyber-ar.png, du-App-Advert-ar.jpg

### Theme
- **[THEME]**: Forced light theme only (no dark mode)

### Bug Fixes
- **[CONFIG]**: Fixed Cards component TypeScript interface (missing wid/classes props)

## 2026-03-09 (Project Init)

### Setup
- **[SETUP]**: Next.js 16.1.6 project scaffolded with React 19, TypeScript, Tailwind CSS 4
- **[SETUP]**: shadcn/ui initialized with button component and theme-provider
- **[SETUP]**: Dev dependencies: ESLint, Prettier with Tailwind plugin, PostCSS
- **[DOCS]**: Docs rewritten from LOOI mobile app to du.ae website replica project
- **[DOCS]**: CLAUDE.md, state.json, 10_request.md, 09_changelog.md updated
