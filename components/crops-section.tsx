import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const crops = [
  {
    name: "Maize",
    image: "/images/maize-corn-field.png",
    description: "Specialized formulations for optimal maize production",
  },
  {
    name: "Tobacco",
    image: "/images/tobacco-plants-field.jpg",
    description: "Premium blends for high-quality tobacco cultivation",
  },
  {
    name: "Tomato",
    image: "/images/tomato-plants-growing.jpg",
    description: "Nutrient solutions for vigorous tomato growth",
  },
  {
    name: "Irish Potato",
    image: "/images/potato-plants-field.jpg",
    description: "Custom formulas for maximum tuber development",
  },
  {
    name: "Soya Beans",
    image: "/images/soybean-plants-field.jpg",
    description: "Balanced nutrition for legume crops",
  },
  {
    name: "Vegetables",
    image: "/images/vegetable-garden-cabbage-onions.jpg",
    description: "Versatile solutions for onions, cabbage, and more",
  },
]

export function CropsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Suitable for Different Crops</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Precision formulations tailored to the unique nutritional requirements of various crops
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {crops.map((crop, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={crop.image || "/placeholder.svg"}
                  alt={crop.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{crop.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{crop.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
