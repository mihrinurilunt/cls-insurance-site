import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    id: "kasko-trafik",
    question: "Kasko ve Zorunlu Trafik Sigortası arasındaki fark nedir?",
    answer:
      "Trafik sigortası, kaza anında karşı tarafa verdiğiniz zararları karşılarken; Kasko, kendi aracınızdaki hasarları güvence altına alır.",
  },
  {
    id: "hasar-ani",
    question: "Hasar anında ilk ne yapmalıyım?",
    answer:
      "Öncelikle emniyetinizi sağlayın ve hasar tespit tutanağı tutun. Ardından 7/24 hizmet veren hasar hattımızdan bize ulaşarak dosya sürecini başlatın.",
  },
  {
    id: "kasko-kapsam",
    question: "Kasko poliçesi neleri kapsar?",
    answer:
      "Çarpışma, yanma, hırsızlık gibi ana teminatların yanı sıra; çekici hizmeti, ikame araç ve cam kırılması gibi ek teminatları kapsar.",
  },
  {
    id: "prim-hesap",
    question: "Sigorta primleri neye göre belirlenir?",
    answer:
      "Kişinin hasarsızlık kademesi, yaş ikameti, aracın marka/modeli ve seçilen ek teminatlara göre kişiye özel hesaplanır.",
  },
  {
    id: "polis-iptal",
    question: "Poliçemi iptal edebilir miyim?",
    answer:
      "Aracın satılması veya poliçenin yenilenmesi gibi durumlarda, gün esasına göre iade alarak poliçenizi iptal edebilirsiniz.",
  },
  {
    id: "hasarsizlik",
    question: "Hasarsızlık indirimi nedir?",
    answer:
      "Poliçe dönemi boyunca kaza yapmamanız durumunda, bir sonraki yenilemede size sunulan özel indirim hakkıdır.",
  },
  {
    id: "dask",
    question: "DASK (Zorunlu Deprem Sigortası) yaptırmak zorunlu mu?",
    answer:
      "Evet, binalar için yasal bir zorunluluktur ve abonelik işlemleri (elektrik, su vb.) için gereklidir.",
  },
  {
    id: "bes",
    question: "Bireysel Emeklilik Sistemi (BES) avantajları nelerdir?",
    answer:
      "Yatırımlarınızın üzerine eklenen %30 devlet katkısı ve uzun vadeli güvenli birikim imkanı sunar.",
  },
  {
    id: "saglik-turleri",
    question: "Sağlık sigortası türleri nelerdir?",
    answer:
      "Özel Sağlık Sigortası ve Tamamlayıcı Sağlık Sigortası (TSS) olarak ikiye ayrılır. TSS, SGK anlaşmalı hastanelerde fark ödemeden hizmet almanızı sağlar.",
  },
  {
    id: "teklif-bilgiler",
    question: "Teklif almak için hangi bilgiler gereklidir?",
    answer:
      "TC Kimlik numaranız ve araç ruhsat bilgileriniz (veya plaka) en uygun teklifi hazırlamamız için yeterlidir.",
  },
];

const FAQSection = () => (
  <section id="sss" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
        Sıkça Sorulan Sorular
      </h2>

      <AccordionPrimitive.Root
        type="single"
        collapsible
        className="mx-auto max-w-4xl"
      >
        {faqItems.map((item) => (
          <AccordionPrimitive.Item
            key={item.id}
            value={item.id}
            className="border-b border-border last:border-b-0"
          >
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger
                className={cn(
                  "group flex flex-1 items-center justify-between gap-4 py-4 text-left font-bold",
                  "transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                )}
              >
                <span className="pr-2">{item.question}</span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center text-muted-foreground group-hover:text-primary">
                  <Plus className="h-5 w-5 shrink-0 transition-transform duration-200 group-data-[state=open]:hidden" aria-hidden />
                  <Minus className="hidden h-5 w-5 shrink-0 transition-transform duration-200 group-data-[state=open]:block" aria-hidden />
                </span>
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content
              className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            >
              <div className="pb-4 pt-0 text-muted-foreground leading-relaxed">
                {item.answer}
              </div>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        ))}
      </AccordionPrimitive.Root>
    </div>
  </section>
);

export default FAQSection;
