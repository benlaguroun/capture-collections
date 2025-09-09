import { Header } from "@/components/navigation/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { X } from "lucide-react";
import portfolioWedding from "@/assets/portfolio-wedding.jpg";
import portfolioPortrait from "@/assets/portfolio-portrait.jpg";
import { Footer } from "@/components/layout/Footer";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = ["All", "Weddings", "Portraits", "Commercial", "Events"];

  const portfolioItems = [
    {
      id: 1,
      category: "Weddings",
      image: portfolioWedding,
      title: "Sunset Wedding",
    },
    {
      id: 2,
      category: "Portraits",
      image: portfolioPortrait,
      title: "Golden Hour Portrait",
    },
    {
      id: 3,
      category: "Weddings",
      image: "/api/placeholder/400/500",
      title: "Garden Ceremony",
    },
    {
      id: 4,
      category: "Commercial",
      image: "/api/placeholder/400/500",
      title: "Product Shoot",
    },
    {
      id: 5,
      category: "Portraits",
      image: "/api/placeholder/400/500",
      title: "Family Session",
    },
    {
      id: 6,
      category: "Events",
      image: "/api/placeholder/400/500",
      title: "Corporate Event",
    },
    {
      id: 7,
      category: "Weddings",
      image: "/api/placeholder/400/500",
      title: "Beach Wedding",
    },
    {
      id: 8,
      category: "Portraits",
      image: "/api/placeholder/400/500",
      title: "Maternity Shoot",
    },
    {
      id: 9,
      category: "Commercial",
      image: "/api/placeholder/400/500",
      title: "Brand Photography",
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-light mb-6 animate-fade-in-up">
            Portfolio
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            A collection of moments captured with passion and artistry. Each
            photograph tells a unique story.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, i) => (
              <Button
                key={category}
                variant={
                  selectedCategory === category ? "default" : "ghost-elegant"
                }
                onClick={() => setSelectedCategory(category)}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, i) => (
              <Card
                key={item.id}
                className="group overflow-hidden hover-scale cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => setLightboxImage(item.image)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="font-display text-xl font-light mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm opacity-90">{item.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={lightboxImage}
              alt="Portfolio item"
              className="max-w-full max-h-full object-contain animate-scale-in"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's capture your special moments together.
          </p>
          <Button variant="hero" size="lg">
            Book Your Session
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
