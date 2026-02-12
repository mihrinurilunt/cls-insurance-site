import { useState } from "react";
import { MapPin, Phone, Mail, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    subject: "", 
    message: "", 
    updates: false 
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
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
    
    toast({ title: "Başarılı!", description: "Mesajınız alındı, en kısa sürede dönüş yapacağız." });
    setForm({ name: "", email: "", phone: "", subject: "", message: "", updates: false });
    setErrors({});
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
              <Checkbox
                id="updates"
                checked={form.updates}
                onCheckedChange={(checked) => setForm({ ...form, updates: checked === true })}
                className="mt-1"
              />
              <div className="space-y-1">
                <Label htmlFor="updates" className="cursor-pointer font-normal">
                  Güncellemelerimizi almak isterim
                </Label>
                <p className="text-xs text-muted-foreground">
                  Yeni kampanyalar ve duyurular için e-posta alabilirsiniz.
                </p>
              </div>
            </div>
            
            <Button type="submit" className="w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white">
              Mesaj Gönder
            </Button>
          </form>

          {/* Info & Map */}
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden h-48">
              <iframe
                title="Söğütlüçeşme Caddesi No:190, Kadıköy Haritası"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.1234567890123!2d29.02101655!3d40.99000595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzI0LjAiTiAyOcKwMDEnMTUuNiJF!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span>HASANPAŞA MAH. SÖĞÜTLÜÇEŞME CAD. ÇAĞDAŞ AP. NO:190 KAT:2 D:4, 34722 Kadıköy/İstanbul</span>
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
