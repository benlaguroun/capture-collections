import { Header } from "@/components/navigation/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />

      {/* Modern Animated Hero Section */}
      <main className="relative">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-primary opacity-20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-gold opacity-30 rounded-full blur-lg animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <HeroSection />

        {/* Enhanced sections with modern spacing */}
        <div className="space-y-32">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
            <PortfolioSection />
          </div>

          <div className="relative bg-muted/20 backdrop-blur-sm">
            <ServicesSection />
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-elegant opacity-30"></div>
            <ContactSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
