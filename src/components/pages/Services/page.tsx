import { ServiceCard } from "@/components/pages/Services/service-card"

const services = [
  {
    title: "UX/UI Design",
    description: "Our UI/UX design services ensure your digital products offer seamless user.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-24%20023027-QjS9vhtu2M6rfnUGiIDHCCaJGqhZmI.png",
    slug: "ux-ui-design",
  },
  {
    title: "Web Development",
    description: "Get high-quality custom solutions for your online presence.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-24%20022913-mDSwYT3dZRCSo3oQJkUAeWGI5MRNis.png",
    slug: "web-development",
  },
  {
    title: "Branding & Identity",
    description: "Create a strong brand identity that sets you apart.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "branding",
  },
  {
    title: "App Development",
    description: "Build powerful mobile applications for your business.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "app-development",
  },
  {
    title: "Digital Marketing",
    description: "Reach your target audience effectively.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "digital-marketing",
  },
  {
    title: "Motion Graphics",
    description: "Bring your ideas to life with stunning animations.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "motion-graphics",
  },
]

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} {...service} />
        ))}
      </div>
    </div>
  )
}

