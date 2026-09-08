/**
 * The details used when a visitor saves the site to their phone's home screen:
 * the name shown under the icon, which icon to use, and the background colour.
 * It has no effect on the website itself - it only matters to someone who
 * chooses "Add to Home Screen" on their phone.
 */
import type { MetadataRoute } from "next"
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hose Water Pressure Washing",
    short_name: "Hose Water",
    description:
      "Professional pressure washing for homes and businesses across Southern Maine and New Hampshire.",
    start_url: "/",
    display: "browser",
    background_color: "#393e46",
    theme_color: "#393e46",
    icons: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  }
}
