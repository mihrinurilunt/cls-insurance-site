import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PartnersSection from "@/components/PartnersSection";
import EmergencyBanner from "@/components/EmergencyBanner";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const Index = () => (
  <main id="top">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <PartnersSection />
    <EmergencyBanner />
    <AboutSection />
    <ContactSection />
    <FAQSection />
    <Footer />
    <WhatsAppFAB />
  </main>
);

export default Index;
