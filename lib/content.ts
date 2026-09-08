import fs from "node:fs"
import path from "node:path"

/**
 * The bridge between the admin area and the website.
 * When Jon saves a photo, service or FAQ at /admin, it's stored as a file in
 * the "content" folder - this reads those files and hands them to the pages.
 * It runs once when the site is rebuilt, not every time someone visits, which
 * is why the pages load fast and why a change takes a minute or two to appear.
 * There is no database involved anywhere.
 */

const CONTENT_DIR = path.join(process.cwd(), "content")

function readJsonDir<T>(dir: string): T[] {
  const full = path.join(CONTENT_DIR, dir)
  if (!fs.existsSync(full)) return []
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(full, f), "utf8")) as T)
}

function readJsonFile<T>(file: string, fallback: T): T {
  const full = path.join(CONTENT_DIR, file)
  if (!fs.existsSync(full)) return fallback
  return JSON.parse(fs.readFileSync(full, "utf8")) as T
}

const byOrder = <T extends { order?: number }>(a: T, b: T) => (a.order ?? 999) - (b.order ?? 999)

// ---------- types ----------

export type Service = {
  id: string
  title: string
  order?: number
  image: string
  description: string
  cardTitle?: string
  cardDescription?: string
  features: string[]
  galleryFilter: string
  seoTitle?: string
  metaDescription?: string
}

export type GalleryPhoto = {
  title: string
  image: string
  alt: string
  description?: string
  category: string
  featuredOnHomepage?: boolean
  order?: number
}

export type FaqItem = {
  question: string
  answer: string
  category: string
  order?: number
}

export type Business = {
  name: string
  phoneDisplay: string
  phoneDial: string
  email: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  addressCountry: string
  serviceArea: string
  hoursDisplay: string
  hoursOpens: string
  hoursCloses: string
  hoursDays: string[]
  foundingYear: string
  ownerName: string
}

export type Social = {
  google?: string
  facebook?: string
  instagram?: string
  other?: { label: string; url: string }[]
}

// ---------- accessors ----------

export function getServices(): Service[] {
  return readJsonDir<Service>("services").sort(byOrder)
}

export function getService(id: string): Service | undefined {
  return getServices().find((s) => s.id === id)
}

export function getGallery(): GalleryPhoto[] {
  return readJsonDir<GalleryPhoto>("gallery").sort(byOrder)
}

/** The handful of photos shown in the homepage preview strip. */
export function getFeaturedGallery(): GalleryPhoto[] {
  return getGallery().filter((p) => p.featuredOnHomepage)
}

export function getFaqs(): FaqItem[] {
  return readJsonDir<FaqItem>("faq").sort(byOrder)
}

/** FAQs grouped by category, preserving the order the categories first appear. */
export function getFaqsByCategory(): { category: string; questions: FaqItem[] }[] {
  const groups: { category: string; questions: FaqItem[] }[] = []
  for (const item of getFaqs()) {
    let group = groups.find((g) => g.category === item.category)
    if (!group) {
      group = { category: item.category, questions: [] }
      groups.push(group)
    }
    group.questions.push(item)
  }
  return groups
}

export function getBusiness(): Business {
  return readJsonFile<Business>("settings/business.json", {
    name: "Hose Water Pressure Washing",
    phoneDisplay: "(207) 370-8667",
    phoneDial: "+12073708667",
    email: "hosewaterpw@gmail.com",
    addressLocality: "North Berwick",
    addressRegion: "ME",
    postalCode: "03906",
    addressCountry: "US",
    serviceArea: "Southern Maine and New Hampshire",
    hoursDisplay: "Monday - Saturday: 8:00 AM - 5:00 PM\nSunday: Closed",
    hoursOpens: "08:00",
    hoursCloses: "17:00",
    hoursDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    foundingYear: "2022",
    ownerName: "Jonathan P. Bilodeau",
  })
}

export function getSocial(): Social {
  return readJsonFile<Social>("settings/social.json", {})
}

/** Social profile URLs as a flat list, for schema.org sameAs. */
export function getSocialUrls(): string[] {
  const s = getSocial()
  return [s.google, s.facebook, s.instagram, ...(s.other || []).map((o) => o.url)].filter(
    (u): u is string => Boolean(u),
  )
}
