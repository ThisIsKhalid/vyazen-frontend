
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import uxuidesign from '@/assets/images/ux ui design.png';

interface ServiceCardProps {
  title: string
  description: string
  image: string
  slug: string
  className?: string
}

export function ServiceCard({ title, description, image, slug, className = "" }: ServiceCardProps) {
  return (
    <div className={`bg-white rounded-lg p-6 flex flex-col gap-4 ${className}`}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {image && (
          <div className="relative w-32 h-24 rounded-lg overflow-hidden">
            <Image src={uxuidesign } alt={title} fill className="object-cover" />
          </div>
        )}
      </div>
      <Link
        href={`/our-services/${slug}`}
        className="inline-flex items-center text-sm font-medium hover:underline w-fit group"
      >
        View Details
        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}


