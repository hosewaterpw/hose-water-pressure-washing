import type { MetadataRoute } from "next"

// Lets the site be saved to a phone home screen with a proper name and icon.
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
