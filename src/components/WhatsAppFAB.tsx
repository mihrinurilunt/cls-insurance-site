import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/905330242629?text=" +
  encodeURIComponent("Merhaba, sigorta teklifi almak istiyorum.");

const WhatsAppFAB = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp ile iletişime geç"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

export default WhatsAppFAB;
