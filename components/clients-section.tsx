import { Building2, Users, Landmark } from "lucide-react"

const clientTypes = [
  {
    icon: Users,
    title: "Individual Farmers",
    description: "Small to large-scale farmers seeking customized fertilizer solutions and expert agronomic advice",
  },
  {
    icon: Building2,
    title: "Agro-Dealers",
    description: "Agricultural input suppliers and distributors looking for reliable, quality-assured products",
  },
  {
    icon: Landmark,
    title: "Government & NGOs",
    description:
      "Agricultural development programs and initiatives requiring laboratory services and technical support",
  },
]

export function ClientsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Our Targeted Clients</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Serving a diverse range of stakeholders in Malawi's agricultural value chain
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {clientTypes.map((client, index) => {
            const Icon = client.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{client.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{client.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
