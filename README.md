# Dammy Oseyemi — purposeful digital solutions

Next.js App Router, TypeScript, Tailwind CSS 4, Lucide, and Motion. Requires Node.js 20.9+ (validated with Node 24) and npm. Self-hosted Inter, Poppins ExtraBold, and Montserrat fonts avoid runtime font services. Font licenses are in `public/fonts`.

## Develop and validate

```sh
npm ci --cache /tmp/portfolio-npm-cache
npm run dev
npm run lint
npm run typecheck
npm run build
npm start
```

Development and production servers default to port 3000. Use `npm run dev -- --port 3001` if needed. A clean checkout needs `npm run build` before `npm start`.

## Editable content

- `content/site.ts`: name, email, LinkedIn, navigation, services, process, offers.
- `components/navbar.tsx`: the compact display name; update it when changing the brand.
- `components/hero.tsx` and `app/page.tsx`: hero and editorial section copy.
- `content/projects.ts`: all real projects, with the exported `Project` type documenting fields. Contains 11 screenshot-backed projects: 5 websites and 6 automation demos. Project types follow owner confirmation; descriptions are limited to supplied screenshots.
- `content/insights.ts`: editorial previews and supplied published articles.

### Add a project

Add a record to `projects` with a unique URL-safe slug, verified title, category (`Websites` or `AI Automation`), project type, description, problem, approach, built items, and technologies. Add `caseStudy` sections for a longer narrative. Include `outcome` only if verified. Live and GitHub URLs are optional; omit missing links. Every actual project card links to `/work/<slug>`.

Put optimized screenshots in `public/projects/`. Supply thumbnail and screenshot objects with `src` (e.g. `/projects/site.webp`), meaningful `alt`, and actual pixel width/height. Images retain aspect ratio. `screenshots` supports desktop, mobile, and workflow images. Automation projects can add `workflow: { trigger, actions: [], output }`.

Project screenshots are copied unchanged into `public/projects/`, with dimensions and original filenames documented in `content/project-assets.json`. The lower-resolution duplicate inbox image is retained as an asset but not shown as a separate project. Full-size image links are available on project pages. No measured business outcomes or website implementation stacks are claimed. Add a verified problem, approach, outcome, and live links when supplied; optional sections remain hidden until then. Filters work on all populated data.

### Add an article

Add a unique slug, category, and title to `insights`. Without both `body` and a genuine ISO `publishedAt` date, it remains an unpublished topic preview. Supply genuine text in `body` with blank lines between paragraphs to enable `/insights/<slug>`. HTML is rendered as text, not executed.

## Contact form

The form validates required fields and email, preselects a service from offer links, and prepares a mailto draft addressed to pingrowthdigital@gmail.com. Use “Open email draft” to launch your email app. Users must send the draft in their email application. The UI states that no website submission occurred. It also provides copy and selectable text alternatives when an email client is unavailable. No form data is stored or transmitted by this site.

To connect a real form provider: add a server-only route handler such as `app/api/contact/route.ts`; validate and rate-limit requests, keep provider credentials in server environment variables, and send through the provider's official SDK or HTTPS API. Replace the mailto branch in `components/contact-form.tsx` with a POST to that route, and show success only after the provider confirms acceptance. Do not put secrets in `NEXT_PUBLIC_` variables. Configure privacy copy for the chosen provider before collecting data.

## Deploy

Deploy to a Next.js-compatible host (for example Vercel), using `npm ci` and `npm run build`. For a Node host run `npm start` behind HTTPS. Set `NEXT_PUBLIC_SITE_URL` to the real canonical HTTPS origin **before building**, then rebuild. This enables absolute Open Graph metadata and populated sitemap entries. Without a verified deployment URL, sitemap remains empty instead of inventing a domain. `/robots.txt` and a generated Open Graph image are provided. No public deployment has been performed.

Before launch verify contact links, set the canonical origin, and check your deployed email-client behavior. Add verified project outcomes, website technologies, and live links when available. There is no form backend to configure unless you choose to replace the documented email fallback.

### Netlify

Import this GitHub repository into Netlify and choose the `main` branch. Leave the base directory at the repository root. The committed `netlify.toml` sets Node 24, build command `npm run build`, and publish directory `.next`. Netlify automatically detects Next.js and supplies its runtime; do not configure this as a static HTML export.

After Netlify assigns your site URL (or you connect a custom domain), set `NEXT_PUBLIC_SITE_URL` to that HTTPS origin in Netlify environment variables and redeploy to populate canonical social URLs and the sitemap. No email-service credentials are required for the current mailto fallback.
