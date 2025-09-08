import { Header } from "@/components/navigation/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="font-display text-2xl font-bold mb-4">
            Elena Rodriguez Photography
          </div>
          <p className="text-background/70 mb-4">
            Professional photographer specializing in weddings, portraits, and
            commercial photography
          </p>
          <p className="text-background/60 text-sm">
            © 2024 Elena Rodriguez Photography. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
