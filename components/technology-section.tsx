import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

const strengths = [
  {
    title: "Advanced Blending Technology",
    description: "State-of-the-art equipment ensures precise mixing and consistent quality across all batches",
    items: [
      "Automated batching systems",
      "Quality control at every stage",
      "Uniform nutrient distribution",
      "Scalable production capacity",
    ],
  },
  {
    title: "Quality Assurance & Laboratory Support",
    description: "ISO-certified testing facilities with modern analytical instruments",
    items: [
      "Accredited laboratory facilities",
      "Expert analytical team",
      "Rapid turnaround times",
      "Comprehensive reporting",
    ],
  },
  {
    title: "Supply Chain & Infrastructure",
    description: "Efficient logistics and distribution network across Malawi",
    items: [
      "Strategic warehouse locations",
      "Reliable delivery systems",
      "Inventory management",
      "Technical field support",
    ],
  },
]

export function TechnologySection() {
  return (
    <section id="technology" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">Key Strengths</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Built on Scientific Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our manufacturing system combines cutting-edge technology with decades of agricultural expertise
          </p>
        </div>

        <div className="space-y-12">
          {strengths.map((strength, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">{strength.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {strength.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
