import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmergencyBanner = () => (
  <section className="bg-emergency py-4">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-emergency-foreground">
          Hasar anında 7/24 yanınızdayız!
        </h3>
      </div>
      <Button
        asChild
        size="lg"
        className="bg-emergency-foreground text-emergency hover:bg-emergency-foreground/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg"
      >
        <a href="tel:+905330242629">
          <Phone className="mr-2 h-5 w-5" />
          Hemen Ara
        </a>
      </Button>
    </div>
  </section>
);

export default EmergencyBanner;
