/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
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
}

export default nextConfig
