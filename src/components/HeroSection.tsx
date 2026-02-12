import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL =
  "https://wa.me/905330242629?text=" +
  encodeURIComponent("Merhaba, sigorta teklifi almak istiyorum.");

const HeroSection = () => (
  <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 bg-primary overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/10" />
    <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent/5" />

    <div className="container mx-auto px-4 relative z-10 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight text-balance mb-6">
        Geleceğinizi Güvence Altına Alın
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
        Çağdaş Lider Sigorta ile en uygun teklifleri karşılaştırın.
      </p>

      <Button
        asChild
        size="lg"
        className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="mr-2 h-5 w-5" />
          WhatsApp ile Teklif Al
        </a>
      </Button>
    </div>
  </section>
);

export default HeroSection;
