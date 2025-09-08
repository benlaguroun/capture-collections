import { useState } from "react";
import { Button } from "@/components/ui/button";
import portfolioWedding from "@/assets/portfolio-wedding.jpg";
import portfolioPortrait from "@/assets/portfolio-portrait.jpg";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

// Sample portfolio data - in real app this would come from Supabase
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Golden Hour Wedding",
    category: "Weddings",
    image: portfolioWedding,
    description: "A romantic wedding ceremony captured during golden hour",
  },
  {
    id: 2,
    title: "Executive Portrait",
    category: "Portraits",
    image: portfolioPortrait,
    description: "Professional business portrait with elegant studio lighting",
  },
  {
    id: 3,
    title: "Corporate Headshots",
    category: "Corporate",
    image: portfolioPortrait,
    description: "Clean and professional corporate headshot session",
  },
  {
    id: 4,
    title: "Intimate Wedding",
    category: "Weddings",
    image: portfolioWedding,
    description: "Beautiful intimate wedding celebration",
  },
  {
    id: 5,
    title: "Fashion Portrait",
    category: "Portraits",
    image: portfolioPortrait,
    description: "Creative fashion portrait with dramatic lighting",
  },
  {
    id: 6,
    title: "Product Photography",
    category: "Products",
    image: portfolioPortrait,
    description: "High-end product photography for luxury brands",
  },
];

const categories = ["All", "Weddings", "Portraits", "Corporate", "Products"];

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(
    null
  );

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Portfolio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my finest work showcasing different styles and
            moments
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "hero" : "ghost-elegant"}
              size="lg"
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer animate-scale-on-hover"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-elegant">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display text-xl font-medium mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="elegant" size="xl">
            View Full Gallery
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors duration-300 text-2xl"
            >
              ×
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="font-display text-2xl font-medium mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-lg opacity-90">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
