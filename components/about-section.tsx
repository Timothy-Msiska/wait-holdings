export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Who We Are</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                WAIT Holdings Limited is a pioneering agricultural solutions provider based in Malawi, specializing in
                fertilizer manufacturing, blending services, and comprehensive laboratory testing.
              </p>
              <p>
                Our mission is to transform agricultural productivity through science-backed solutions that address the
                unique soil and crop requirements of Malawi's diverse farming landscape.
              </p>
              <p>
                With state-of-the-art facilities and a team of agricultural scientists, we deliver precision
                formulations that optimize crop yields while promoting sustainable farming practices.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img src="/images/modern-agricultural-laboratory-with-scientists.jpg" alt="Laboratory facility" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
