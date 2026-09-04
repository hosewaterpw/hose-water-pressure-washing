# Hose Water Pressure Washing

Marketing site for Hose Water Pressure Washing LLC (North Berwick, ME).

Next.js 16 App Router, fully statically prerendered, with a git-based CMS at
`/admin` so the owner can update content without touching code.

**Live site:** https://hosewaterpw.com
**Owner's guide to the CMS:** [CMS-GUIDE.md](CMS-GUIDE.md)

---

## Stack

| | |
|---|---|
| Framework | Next.js 16.1.6 (App Router, Turbopack) |
| UI | React 19, TypeScript, Tailwind CSS 3.4, shadcn/ui + Radix, lucide-react |
| CMS | Decap CMS 3.x via Netlify Identity + Git Gateway |
| Hosting | Netlify (`@netlify/plugin-nextjs`) |
| Forms | Netlify Forms |
| Domain | Squarespace (DNS only) |
| Package manager | **pnpm** |

> Use pnpm, not npm. `pnpm-lock.yaml` is the authoritative lockfile — a
> `package-lock.json` appearing in the repo means something installed with npm
> and should be reverted.

---

## Running locally

```bash
corepack enable
pnpm install
pnpm dev
```

http://localhost:3000

For a realistic performance picture, always measure a production build — dev
mode numbers are meaningless:

```bash
pnpm build && pnpm start
```

### Running the CMS locally

`config.yml` sets `local_backend: true`, so the CMS can edit your real local
files with no Netlify account involved. In a **second terminal**:

```bash
npx decap-server
```

Then open http://localhost:3000/admin. Edits write straight to `content/` and
`public/` on disk. Nothing is committed for you — `git status` afterwards and
commit as normal.

> **Known dev-only quirk:** Next's dev server doesn't watch `content/`, so a CMS
> edit won't hot-reload. Restart `pnpm dev` to see it. Production is unaffected
> because every change triggers a full rebuild.

---

## How content works

All editable content lives in `content/` as JSON, one file per item:

```
content/
  services/          6 services
  gallery/          16 before/after photos
  faq/              18 questions
  settings/
    business.json    phone, email, address, hours
    social.json      profile links
```

`lib/content.ts` is the only thing that reads it. Its accessors
(`getServices`, `getGallery`, `getFeaturedGallery`, `getFaqs`,
`getFaqsByCategory`, `getBusiness`, `getSocial`, `getSocialUrls`) run **at build
time in Server Components**, so pages stay static HTML. There is no database and
no client-side fetching.

Adding a field means: add it to `config.yml`, add it to the type in
`lib/content.ts`, then use it in the component.

### The CMS

- `public/admin/index.html` — loads Decap and the Identity widget. `noindex`.
- `public/admin/config.yml` — collections and fields.

Uploads go to `public/` (`media_folder: public`, `public_folder: /`) and are
served through the Next image optimizer, so a large phone photo gets resized and
converted to WebP rather than shipped as-is.

`next.config.mjs` rewrites `/admin` → `/admin/index.html`. Without it, `/admin`
404s and the config path resolves wrongly.

---

## Deployment

Push to `main` → Netlify builds and deploys. Pull requests get deploy previews.

**One-time Netlify setup** (site owner, ~10 minutes):

1. **Site configuration → Identity → Enable Identity**
2. **Identity → Registration → Invite only** *(important — otherwise anyone can
   sign up for admin access)*
3. **Identity → Services → Git Gateway → Enable**
4. **Identity → Invite users** → the owner's email, and any developer who needs
   CMS access

Until step 1 is done, `/admin` will load but nobody can log in.

---

## SEO notes

The site's ranking rests on every route being statically prerendered — check
`pnpm build` output still shows `○ Static` for all of them after any change.

Two traps that have already bitten this project:

- **`useSearchParams()` in a client component** forces its whole Suspense
  subtree to render on the client, which strips that content out of the HTML
  Google sees. `app/gallery/gallery-client.tsx` reads the filter from
  `window.location.search` in an effect instead, deliberately. Don't
  "fix" it back.
- **Canonical tags.** Each of the 8 indexable pages sets `alternates.canonical`
  in its own `metadata`. These once all pointed at `/`, which told Google to
  ignore every page on the site. If you add a page, set its canonical. (The two
  form-success pages are `noindex` instead.)

Also live: `app/sitemap.ts`, `app/robots.ts`, and `HomeAndConstructionBusiness`
JSON-LD in `app/layout.tsx` built from `content/settings/business.json`.

Lighthouse (production build, incognito): **Performance 91, Accessibility 100,
Best Practices 100, SEO 100**.

The reviews section (`components/google-reviews.tsx`) is a third-party Elfsight
widget loaded on scroll, with a 5-second fallback timer so it can't silently
fail to appear. It contains the site's only remaining colour-contrast failure,
which isn't fixable from here.

---

## Not done yet

Honest list, roughly in order of value:

- **Individual service pages** (`/services/[slug]`) — none exist. All six
  services share one page, so none of them can rank for its own search term.
  Biggest remaining SEO gain.
- **Location pages** for the towns served — targeted in copy, no pages for them.
- Four meta descriptions run past the ~160-character display limit.
- No custom 404 page.
- Heading order skips h1→h3 on `/gallery`, `/contact`, `/estimate`.
- `next.config.mjs` has an invalid `eslint` key (warns on every build) and
  `typescript.ignoreBuildErrors: true`.
- `netlify.toml` still has a dead catch-all `/* → /index.html` redirect.
- ~35 MB of unused images in `public/` (`work-1`, `work-2`, `fence-cleaning`)
  pending the owner's decision on whether to use them.
- `styles/globals.css` is unused (the live one is `app/globals.css`).
- Six stray `*-guide.txt` photo-naming notes in the repo root.
- `package.json` is still named `my-v0-project`; `netlify.toml` calls
  `npm run build` while the project uses pnpm.
