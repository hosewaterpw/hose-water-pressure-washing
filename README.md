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
npx decap-server@3.11.0
```

> The version pin is deliberate. `decap-server@3.11.1` was published with
> unresolved pnpm `catalog:` markers instead of real version numbers, so npm
> fails with `EUNSUPPORTEDPROTOCOL`. 3.11.0 is the newest working release; drop
> the pin once upstream publishes a fix.

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

## Notes for whoever works on this next

- `typescript.ignoreBuildErrors` is on in `next.config.mjs`. Type errors won't
  fail the build, so run `pnpm tsc --noEmit` yourself before trusting a change.
- `netlify.toml` runs `npm run build` while the project uses pnpm. Netlify
  installs with pnpm (it reads `pnpm-lock.yaml`) and `npm run` just executes the
  script, so it works — but don't take it as a sign npm is safe to use here.
- `public/` holds three unused images (`work-1`, `work-2`, `fence-cleaning`,
  ~35 MB) kept pending a decision on whether to use them on the site.
- `hooks/use-mobile.tsx` and `hooks/use-toast.ts` are unused scaffolding and are
  duplicated under `components/ui/`.
