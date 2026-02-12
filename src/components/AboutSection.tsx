import { Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: "15+", label: "Yıllık Deneyim" },
  { icon: Users, value: "10.000+", label: "Mutlu Müşteri" },
  { icon: Award, value: "8+", label: "Anlaşmalı Firma" },
];

const AboutSection = () => (
  <section id="hakkimizda" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">Hakkımızda</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
        Çağdaş Lider Sigorta olarak, yılların tecrübesiyle müşterilerimize en uygun ve güvenilir sigorta
        çözümlerini sunuyoruz. Müşteri memnuniyetini her şeyin önünde tutarak, sizin için en doğru
        poliçeyi bulmayı amaçlıyoruz.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
              <s.icon className="h-6 w-6" />
            </div>
            <p className="text-3xl font-bold text-primary">{s.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
