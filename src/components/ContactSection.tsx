import { useState } from "react";
import { MapPin, Phone, Mail, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const FORMSPREE_URL = "https://formspree.io/f/mojndeka";

const COMPANY_ADDRESS =
  "HASANPAŞA MAH. SÖĞÜTLÜÇEŞME CAD. ÇAĞDAŞ AP. NO:190 KAT:2 D:4, 34722 Kadıköy";
const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(COMPANY_ADDRESS)}`;
const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(COMPANY_ADDRESS)}&hl=tr&z=17&output=embed`;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    subject: "", 
    message: "", 
    updates: false 
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    
    if (!form.name.trim()) {
      newErrors.name = "Ad Soyad gereklidir";
    }
    if (!form.email.trim()) {
      newErrors.email = "E-posta adresi gereklidir";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Geçerli bir e-posta adresi girin";
    }
    if (!form.message.trim()) {
      newErrors.message = "Mesaj gereklidir";
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("subject", form.subject);
      formData.append("message", form.message);
      formData.append("updates", form.updates ? "Evet" : "Hayır");

      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast({ title: "Başarılı!", description: "Mesajınız alındı, en kısa sürede dönüş yapacağız." });
        setForm({ name: "", email: "", phone: "", subject: "", message: "", updates: false });
        setErrors({});
      } else {
        toast({
          variant: "destructive",
          title: "Hata",
          description: "Bir hata oluştu, lütfen tekrar deneyin.",
        });
      }
    } catch {
      toast({
        variant: "destructive",
        title: "Hata",
        description: "Bir hata oluştu, lütfen tekrar deneyin.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="iletisim" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">İletişim</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-5">
            <div>
              <Label htmlFor="name" className="flex items-center gap-2">
                Adınız Soyadınız
                {errors.name && <AlertCircle className="h-4 w-4 text-yellow-500" />}
              </Label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: "" });
                }}
                placeholder="Örnek: Ahmet Yılmaz"
                maxLength={100}
                className={errors.name ? "border-destructive" : ""}
              />
              <p className="text-xs text-muted-foreground mt-1">Lütfen tam adınızı giriniz.</p>
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <Label htmlFor="email">E-posta Adresi</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                placeholder="ornek@domain.com"
                maxLength={255}
                className={errors.email ? "border-destructive" : ""}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Bizimle iletişime geçebilmek için geçerli bir e-posta adresi girin.
              </p>
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <Label htmlFor="phone">Telefon Numarası</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+90 555 123 45 67"
                maxLength={20}
              />
              <p className="text-xs text-muted-foreground mt-1">
                İsteğe bağlı. Acil durumlarda size ulaşabilmemiz için.
              </p>
            </div>
            
            <div>
              <Label htmlFor="subject">Konu</Label>
              <Input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Kısa bir konu başlığı"
                maxLength={200}
              />
            </div>
            
            <div>
              <Label htmlFor="message">Mesajınız</Label>
              <Textarea
                id="message"
                name="message"
                value={form.message}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: "" });
                }}
                placeholder="Bize ulaşmak istediğiniz konuyu detaylı olarak yazın..."
                maxLength={500}
                rows={5}
                className={errors.message ? "border-destructive" : ""}
              />
              <p className="text-xs text-muted-foreground mt-1">En fazla 500 karakter.</p>
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            
            <div className="flex items-start gap-3">
              <input type="hidden" name="updates" value={form.updates ? "Evet" : "Hayır"} />
              <Checkbox
                id="updates"
                checked={form.updates}
                onCheckedChange={(checked) => setForm({ ...form, updates: checked === true })}
                className="mt-1"
              />
              <div className="space-y-1">
                <Label htmlFor="updates" className="cursor-pointer font-normal">
                  Güncellemelerinizi almak isterim
                </Label>
                <p className="text-xs text-muted-foreground">
                  Yeni kampanyalar ve duyurular için e-posta alabilirsiniz.
                </p>
              </div>
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-70"
            >
              {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
            </Button>
          </form>

          {/* Info & Map */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="relative rounded-lg overflow-hidden h-48 shadow-sm ring-1 ring-border/60">
                <iframe
                  title="Söğütlüçeşme Caddesi No:190, Kadıköy Haritası"
                  src={GOOGLE_MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  className="pointer-events-none h-full w-full border-0"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 flex items-end justify-center bg-gradient-to-t from-black/35 via-transparent to-transparent pb-3 text-center text-xs font-medium text-white drop-shadow-md transition-opacity hover:from-black/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
                  aria-label="Google Maps'te ofis konumunu aç ve yol tarifi al"
                >
                  <span className="rounded-full bg-black/50 px-3 py-1 backdrop-blur-sm">
                    Google Maps'te aç — yol tarifi
                  </span>
                </a>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Haritaya tıklayın; Google Maps kendi konumunuzdan ofise mesafe ve yol tarifini gösterir.
              </p>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <a
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors underline-offset-2 hover:underline"
                >
                  {COMPANY_ADDRESS}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+905330242629" className="hover:text-accent transition-colors">
                  0533 024 26 29
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:cagdaslidersigorta34@gmail.com" className="hover:text-accent transition-colors">
                  cagdaslidersigorta34@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
