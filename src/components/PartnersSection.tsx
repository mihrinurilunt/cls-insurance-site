const partners = [
  { name: "Allianz", domain: "allianz.com.tr" },
  { name: "AXA Sigorta", domain: "axasigorta.com.tr" },
  { name: "Neova Sigorta", domain: "neovasigorta.com.tr" },
  { name: "Quick Sigorta", domain: "quicksigorta.com" },
  { name: "Sompo Sigorta", domain: "somposigorta.com.tr" },
  { name: "HDI Sigorta", domain: "hdisigorta.com.tr" },
  { name: "Ak Sigorta", domain: "aksigorta.com.tr" },
  { name: "Ray Sigorta", domain: "raysigorta.com.tr" },
  { name: "Hepiyi Sigorta", domain: "hepiyi.com.tr" },
  { name: "AXA Hayat Emeklilik", domain: "axahayatemeklilik.com.tr" },
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

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center justify-center h-24 rounded-xl bg-card border shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200 px-4"
          >
            <img
              src={`https://logo.clearbit.com/${partner.domain}`}
              alt={partner.name}
              className="h-12 w-auto object-contain mx-auto bg-white"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
