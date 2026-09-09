/** @type {import('next').NextConfig} */
const nextConfig = {
  // No `eslint` key here: Next 16 dropped it and warns twice on every build if
  // it is present. Linting is a separate step now (`pnpm lint`).
  typescript: {
    ignoreBuildErrors: true,
  },
  // unoptimized was true, which disabled resizing, format conversion and srcset
  // entirely - every visitor downloaded the full-size original.
  // WebP only: AVIF saves a little more but is far slower to encode, which made
  // first page loads hang in dev and would slow cold requests in production.
  images: {
    formats: ["image/webp"],
  },
  // The CMS lives at public/admin/index.html. Next does not serve index.html
  // from a public subfolder automatically, so /admin would 404 without this.
  async rewrites() {
    return [{ source: "/admin", destination: "/admin/index.html" }]
  },
}

export default nextConfig
