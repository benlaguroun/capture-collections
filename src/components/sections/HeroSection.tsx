import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Photography Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-6 animate-fade-in-up">
          Elena Rodriguez
        </h1>

        <p
          className="text-xl md:text-2xl lg:text-3xl font-light mb-4 opacity-90 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Professional Photographer
        </p>

        <p
          className="text-lg md:text-xl font-light mb-12 opacity-80 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Capturing life's most precious moments with artistry and elegance.
          Specializing in weddings, portraits, and commercial photography.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            variant="hero"
            size="xl"
            onClick={scrollToContact}
            className="min-w-48"
          >
            Book a Session
          </Button>

          <Button
            variant="elegant"
            size="xl"
            onClick={scrollToPortfolio}
            className="min-w-48 bg-white/10 border-white/20 text-white hover:bg-white hover:text-foreground"
          >
            View Portfolio
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <button
          onClick={scrollToPortfolio}
          className="text-white/70 hover:text-white transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};
