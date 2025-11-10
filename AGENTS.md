# AGENTS.md

Guide for AI coding agents working on this Next.js link-in-bio website.

## Project Overview

A personal link-in-bio website built with Next.js 14, TypeScript, and Tailwind CSS 4. Includes custom analytics with Firestore, Kinde authentication, and Spotify integration. See [README.md](./README.md) for tech stack details.

## Dev Environment

**Setup:**
```bash
npm install
npm run dev
```

Development server runs at `http://localhost:3000`.

**Key Configuration:**
- TypeScript path alias: `@/*` → `./src/*`
- Next.js image domains: DigitalOcean Spaces configured in `next.config.mjs`
- Tailwind CSS 4.0.0 with PostCSS

## Project Structure

```
src/
├── app/
│   ├── (public)/          # Public routes (main landing page)
│   ├── (protected)/       # Auth-required routes (dashboard)
│   └── api/auth/          # Kinde auth handlers
├── components/            # Theme-based component organization
│   ├── neon-dark-theme/   # Primary theme (default)
│   ├── mono-dark-theme/
│   ├── bulk-theme/
│   └── sans-light-theme/
├── actions/               # Server-side actions (Spotify)
└── utils/
    ├── list.tsx           # Link configuration (iconLinks, listLinks)
    ├── firebase.config.ts # Firestore initialization
    └── fonts.ts           # Custom font loading
```

## Build & Test

**Build:**
```bash
npm run build
npm run start  # Production server
```

**Linting:**
```bash
npm run lint
```

No test suite currently configured. Add tests before significant refactoring.

## Conventions & Patterns

**Component Organization:**
- Components organized by theme in `/components/{theme-name}/`
- Use route groups: `(public)` for public pages, `(protected)` for auth-required
- Server Components by default; use `"use client"` only when needed

**Styling:**
- Tailwind CSS with utility-first approach
- Use `clsx` and `tailwind-merge` for conditional classes
- Custom fonts loaded via `next/font/local` in `utils/fonts.ts`

**Link Management:**
- Add new links to `utils/list.tsx` arrays: `iconLinks` and `listLinks`
- Use React Icons (`react-icons`) or Iconsax (`iconsax-react`)

**Imports:**
- Prefer `@/` path alias for all src imports
- Keep component imports clean and organized

## Security & Environment

**Authentication:**
- Uses Kinde Auth (`@kinde-oss/kinde-auth-nextjs`)
- Protected routes in `app/(protected)/` require authentication
- Auth API routes: `app/api/auth/[kindeAuth]/route.ts`

**Analytics:**
- Custom Firestore analytics tracks detailed pageview data
- No third-party marketing analytics (privacy-focused)
- IP addresses used only for geolocation

**Environment Variables:**
- Firebase credentials required for analytics
- Kinde auth credentials required for protected routes
- Spotify API credentials for music widget (optional)
- Check with maintainer for required environment variables

## Third-Party Integrations

**Spotify:**
- Server action in `src/actions/`
- SDK: `@spotify/web-api-ts-sdk`
- Shows currently playing song (optional feature)

**Firebase:**
- Uses `firebase/firestore/lite` (not full SDK)
- Configuration in `utils/firebase.config.ts`

**IP Geolocation:**
- Uses ip-api.com for visitor location tracking
- Axios for HTTP requests

## Git Workflow

**Branching:**
- Main branch for production
- Feature branches should follow: `claude/{feature-description}-{session-id}`

**Commits:**
- Use conventional commit format preferred
- Keep commits atomic and descriptive

**Before Merging:**
- Run `npm run build` to ensure production build succeeds
- Run `npm run lint` to catch style issues
- Test auth flows if modifying protected routes
- Verify theme switching works across all themes

## Common Tasks

**Adding a new link:**
1. Edit `src/utils/list.tsx`
2. Add to `listLinks` array with icon and URL
3. Optionally add to `iconLinks` for featured placement

**Creating a new theme:**
1. Create directory: `src/components/{theme-name}/`
2. Implement all component types (sections, links, containers)
3. Update theme switching logic in layout

**Modifying analytics:**
1. Edit tracking logic in public layout
2. Firebase config in `src/utils/firebase.config.ts`
3. Test with network tab to verify data structure

## Notes

- Next.js 14 App Router (not Pages Router)
- React Server Components architecture
- Tailwind CSS 4.0.0 (newer version with PostCSS)
- No CMS integration yet (planned enhancement)
