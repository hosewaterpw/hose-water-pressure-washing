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
        return <Home className="h-10 w-10 text-yellow-500" />
      case "road":
        return <Road className="h-10 w-10 text-yellow-500" />
      case "layout":
        return <Layout className="h-10 w-10 text-yellow-500" />
      case "building":
        return <Building className="h-10 w-10 text-yellow-500" />
      case "square":
        return <Square className="h-10 w-10 text-yellow-500" />
      default:
        return <Home className="h-10 w-10 text-yellow-500" />
    }
  }

  return (
    <Card className="overflow-hidden">
      {imageSrc && (
        <div className="relative h-48 w-full">
          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
      )}
      <CardContent className="p-6">
        <div className="mb-4">{getIcon()}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500 mt-2">{description}</p>
        {serviceId && (
          <div className="mt-4 flex gap-2">
            <Link href={`/services#${serviceId}`}>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </Link>
            <Link href={`/gallery?filter=${serviceId}`}>
              <Button variant="ghost" size="sm">
                View Gallery
              </Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
