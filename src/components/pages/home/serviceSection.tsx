import Image from "next/image"

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "UI/UX Design",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/our-service%20image-1VQ2ML3OIsWLbnXkTBNohAB0Ux80R3.png",
      tags: ["UI/UX", "Webflow", "Envato"],
    },
    {
      id: "02",
      title: "Web Development",
      tags: ["UI/UX", "Webflow", "Envato"],
    },
    {
      id: "03",
      title: "App Development",
      tags: ["UI/UX", "Webflow", "Envato"],
    },
    {
      id: "04",
      title: "Branding & Identity",
      tags: ["UI/UX", "Webflow", "Envato"],
    },
  ]

  return (
    <section className="bg-[#1A1F19] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/3 space-y-6">
            <span className="inline-block px-4 py-1 text-sm border border-white/20 rounded-full">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
              Innovative Solutions for Modern <span className="font-normal">Challenges.</span>
            </h2>
          </div>

          <div className="lg:w-2/3 space-y-8">
            {services.map((service, index) => (
              <div key={service.id} className="border-t border-white/10 pt-8 group">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                  <div className="flex items-start gap-6 md:gap-12 md:w-1/2">
                    <span className="text-white/60 font-light">{service.id}</span>
                    <h3 className="text-xl md:text-2xl font-light group-hover:text-white/80 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="md:w-1/2">
                    {index === 0 && (
                      <div className="relative w-full aspect-[3/1] rounded-xl overflow-hidden mb-6">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt="UI/UX Design Preview"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex flex-wrap gap-4">
                      {service.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

