import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TechnologySection } from "@/components/technology-section"
import { CropsSection } from "@/components/crops-section"
import { ImpactSection } from "@/components/impact-section"
import { ClientsSection } from "@/components/clients-section"
import { CTASection } from "@/components/cta-section"

export default function Page() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <TechnologySection />
        <CropsSection />
        <ImpactSection />
        <ClientsSection />
        <CTASection />
      </main>
    </div>
  )
}
