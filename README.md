# Dalia Shabana — Backend Developer Portfolio

A clean, professional portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Before you publish — fill in your real info

All editable content lives in **one file**: `lib/data.ts`.

1. **Links** — replace the placeholders in `profile.links`:
   - `github` → your GitHub profile URL
   - `linkedin` → your LinkedIn profile URL
   - `email` → your real email (`mailto:you@example.com`)

2. **Project GitHub links** — each project in the `projects` array has a
   `github` field pointing to a placeholder repo URL (`github.com/your-username/...`).
   Replace with your real repository links.

3. **Live demo links** — projects have no `demo` field by default (no fake
   URLs were added). If a project has a real, live URL, add:
   ```ts
   demo: "https://your-real-demo-url.com",
   ```
   and a "Live Demo" button will appear automatically on that project's card.

4. **CV / Resume** — the Hero section has a "Download CV" button that links
   to `/cv.pdf`. Drop your real CV file into the `public` folder and name it
   exactly `cv.pdf` (so the path becomes `public/cv.pdf`). Until you add that
   file, the button will lead to a 404.

5. **Physical Therapy degree** — there's an optional, secondary entry in the
   `education` array for your Bachelor's degree. It currently has a
   `[Your University]` placeholder. Fill in the real university name and
   years, or delete the whole object if you'd rather leave it out.

## Project structure

```
app/
  layout.tsx      → fonts, metadata, SEO
  page.tsx         → composes all sections
  globals.css      → design tokens & base styles
components/
  Nav.tsx          → sticky nav with mobile menu
  Hero.tsx
  About.tsx
  Skills.tsx
  Projects.tsx
  ProjectCard.tsx  → large + small card variants
  Education.tsx
  Contact.tsx
  Footer.tsx
lib/
  data.ts          → all portfolio content (single source of truth)
```

## Notes

- No fabricated experience, metrics, testimonials, or client logos are included —
  content is limited to what was provided.
- Icons are from `lucide-react`.
- Respects `prefers-reduced-motion`.
