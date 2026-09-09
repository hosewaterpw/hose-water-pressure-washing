/**
 * The note that search engines read before they look at the site.
 * It invites them to every public page, tells them to stay out of the admin
 * area, and points them at the sitemap so they can find everything.
 * You can see the result at hosewaterpw.com/robots.txt.
 */
import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://hosewaterpw.com"

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
