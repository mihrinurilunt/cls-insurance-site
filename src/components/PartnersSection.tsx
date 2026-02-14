const partners = [
  { name: "Allianz", logo: "allianz.png" },
  { name: "AXA Sigorta", logo: "axa.png" },
  { name: "Neova Sigorta", logo: "neova.png" },
  { name: "Quick Sigorta", logo: "quick.png" },
  { name: "Sompo Sigorta", logo: "sompo.png" },
  { name: "HDI Sigorta", logo: "hdi.png" },
  { name: "Ak Sigorta", logo: "ak.png" },
  { name: "Ray Sigorta", logo: "ray.png" },
  { name: "Hepiyi Sigorta", logo: "hepiyi.png" },
  { name: "AXA Hayat Emeklilik", logo: "axahayatemeklilik.png" },
];

const PartnersSection = () => (
  <section id="partnerler" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
        Anlaşmalı Firmalar
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Türkiye'nin önde gelen sigorta şirketleriyle çalışıyoruz.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {partners.map((partner, index) => (
          <div
            key={partner.name}
            className={`flex items-center justify-center min-h-20 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 px-6 ${
              index === 9 ? "md:col-start-2" : ""
            }`}
          >
            <img
              src={`/logos/${partner.logo}`}
              alt={partner.name}
              className="h-20 w-full max-w-[180px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
