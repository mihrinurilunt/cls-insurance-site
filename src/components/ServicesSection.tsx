import { Car, ShieldAlert, Home, Building2, HeartPulse, Stethoscope, Wallet, Plane } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Car, title: "Kasko", desc: "Aracınızı her türlü kazaya karşı kapsamlı şekilde koruma altına alın.", bg: "bg-blue-50", color: "text-blue-500" },
  { icon: ShieldAlert, title: "Trafik Sigortası", desc: "Zorunlu trafik sigortası ile yasal güvencenizi sağlayın.", bg: "bg-emerald-50", color: "text-emerald-500" },
  { icon: Building2, title: "DASK", desc: "Deprem riskine karşı konutunuzu zorunlu deprem sigortası ile koruyun.", bg: "bg-amber-50", color: "text-amber-500" },
  { icon: Home, title: "Konut Sigortası", desc: "Evinizi yangın, hırsızlık ve doğal afetlere karşı güvenceye alın.", bg: "bg-violet-50", color: "text-violet-500" },
  { icon: HeartPulse, title: "Sağlık Sigortası", desc: "Siz ve aileniz için kapsamlı özel sağlık sigortası planları.", bg: "bg-rose-50", color: "text-rose-500" },
  { icon: Stethoscope, title: "Tamamlayıcı Sağlık", desc: "SGK'yı tamamlayan ek sağlık güvencesi ile fark ödemelerinizi azaltın.", bg: "bg-cyan-50", color: "text-cyan-500" },
  { icon: Wallet, title: "Bireysel Emeklilik Sigortası (BES)", desc: "Geleceğiniz için bugünden birikim yapmaya başlayın.", bg: "bg-sky-50", color: "text-sky-500" },
  { icon: Plane, title: "Seyahat Sigortası", desc: "Yurt içi ve yurt dışı seyahatlerinizde tam güvence sağlayın.", bg: "bg-lime-50", color: "text-lime-500" },
];

const ServicesSection = () => (
  <section id="hizmetler" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">Hizmetlerimiz</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        İhtiyacınıza uygun sigorta çözümlerini keşfedin.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card
            key={s.title}
            className="group hover:-translate-y-1 hover:shadow-md shadow-sm transition-all duration-300 border-none hover:scale-[1.02]"
          >
            <CardContent className="p-8 text-center">
              <div className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${s.bg} ${s.color} transition-transform duration-300 group-hover:scale-110`}>
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
