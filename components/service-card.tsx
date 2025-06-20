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

export default function ServiceCard({ title, description, icon, imageSrc, serviceId }: ServiceCardProps) {
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

  return (
    <Card className="overflow-hidden h-full">
      {imageSrc && (
        <div className="relative h-40 sm:h-48 w-full">
          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
      )}
      <CardContent className="p-4 sm:p-6 flex flex-col h-full">
        <div className="mb-3 sm:mb-4">{getIcon()}</div>
        <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed flex-grow">{description}</p>
        {serviceId && (
          <div className="mt-4 flex flex-col sm:flex-row gap-2">
            <Link href={`/services#${serviceId}`} className="flex-1">
              <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm">
                Learn More
              </Button>
            </Link>
            <Link href={`/gallery?filter=${serviceId}`} className="flex-1">
              <Button variant="ghost" size="sm" className="w-full text-xs sm:text-sm">
                View Gallery
              </Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
