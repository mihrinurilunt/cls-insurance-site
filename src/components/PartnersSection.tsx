const partners = [
  "Allianz", "AXA", "Anadolu Sigorta", "Quick Sigorta",
  "Sompo Sigorta", "HDI Sigorta", "Ak Sigorta", "Ray Sigorta", "Hepİyi Sigorta",
];

const PartnersSection = () => (
  <section id="partnerler" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">Anlaşmalı Firmalar</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Türkiye'nin önde gelen sigorta şirketleriyle çalışıyoruz.
      </p>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-4 gap-8">
        {partners.map((name) => (
          <div
            key={name}
            className="flex items-center justify-center h-24 rounded-lg border bg-card hover:shadow-md transition-shadow duration-300 px-4"
          >
            <span className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors">
              {name}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden overflow-hidden">
        <div className="flex animate-scroll-left w-max gap-6">
          {[...partners, ...partners].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center h-20 w-44 rounded-lg border bg-card px-4"
            >
              <span className="text-base font-semibold text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PartnersSection;
