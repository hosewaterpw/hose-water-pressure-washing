import { Building, Home, Layout, RouteIcon as Road, Square } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  imageSrc?: string
  serviceId?: string
}

export default function ServiceCard({
  title,
  description,
  icon,
  imageSrc,
  serviceId,
}: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "home":
        return <Home className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-500" />
      case "road":
        return <Road className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-500" />
      case "layout":
        return <Layout className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-500" />
      case "building":
        return <Building className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-500" />
      case "square":
        return <Square className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-500" />
      default:
        return <Home className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-500" />
    }
  }

  // One frame for every card regardless of the photo's shape, so the grid rows stay
  // even. object-contain because these are before/after composites - cropping would
  // cut off one of the two panels. The three side-by-side photos fill this frame; the
  // three stacked ones letterbox until they are re-exported in a consistent format.
  return (
    <Card className="overflow-hidden h-full">
      {imageSrc && (
        <div className="relative aspect-[4/3] w-full bg-gray-100">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
      )}
      <CardContent className="p-4 flex flex-col h-full">
        <div className="mb-2">{getIcon()}</div>
        <h3 className="text-base sm:text-lg font-bold mb-1.5">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-grow">{description}</p>
        {serviceId && (
          <div className="mt-3 flex flex-row gap-2">
            {/* aria-label carries the service name: six cards of bare "Learn More"
                tells crawlers and screen readers nothing about the destination. */}
            <Link
              href={`/services#${serviceId === "patio-walkway" ? "patio-walkway" : serviceId}`}
              className="flex-1"
              aria-label={`Learn more about ${title}`}
            >
              <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm">
                Learn More<span className="sr-only"> about {title}</span>
              </Button>
            </Link>
            <Link
              href={`/gallery?filter=${serviceId}`}
              className="flex-1"
              aria-label={`View ${title} photo gallery`}
            >
              <Button variant="ghost" size="sm" className="w-full text-xs sm:text-sm">
                View Gallery<span className="sr-only"> for {title}</span>
              </Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
