import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Camera, Heart, Building, Package } from "lucide-react";

interface ServicePackage {
  id: number;
  name: string;
  description: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

// Sample services data - in real app this would come from Supabase
const services: ServicePackage[] = [
  {
    id: 1,
    name: "Wedding Photography",
    description: "Complete wedding day coverage with artistic storytelling",
    price: "$2,500",
    features: [
      "8 hours of coverage",
      "Pre-wedding consultation",
      "500+ edited photos",
      "Online gallery",
      "Print release",
      "USB drive with all images",
    ],
    icon: <Heart className="w-8 h-8" />,
    popular: true,
  },
  {
    id: 2,
    name: "Portrait Session",
    description: "Professional portraits for individuals and families",
    price: "$450",
    features: [
      "2-hour session",
      "Multiple outfit changes",
      "50+ edited photos",
      "Online gallery",
      "Print release",
      "Location of your choice",
    ],
    icon: <Camera className="w-8 h-8" />,
  },
  {
    id: 3,
    name: "Corporate Photography",
    description: "Professional headshots and corporate event coverage",
    price: "$350",
    features: [
      "Professional headshots",
      "Corporate event coverage",
      "Quick turnaround",
      "High-resolution images",
      "Commercial usage rights",
      "Multiple retouching options",
    ],
    icon: <Building className="w-8 h-8" />,
  },
  {
    id: 4,
    name: "Product Photography",
    description: "High-quality product images for e-commerce and marketing",
    price: "$200",
    features: [
      "Studio lighting setup",
      "Multiple angles",
      "White background option",
      "Lifestyle shots available",
      "Fast delivery",
      "Commercial license",
    ],
    icon: <Package className="w-8 h-8" />,
  },
];

export const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Services & Packages
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional photography services tailored to your needs and vision
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`relative transition-all duration-300 hover:shadow-float hover:-translate-y-2 ${
                service.popular
                  ? "ring-2 ring-primary shadow-gold"
                  : "hover:shadow-elegant"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-gold text-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 text-primary">
                  {service.icon}
                </div>
                <CardTitle className="font-display text-2xl font-medium mb-2">
                  {service.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
                <div className="text-3xl font-bold text-foreground mt-4">
                  {service.price}
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={service.popular ? "hero" : "elegant"}
                  className="w-full"
                  onClick={scrollToContact}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-elegant">
            <h3 className="font-display text-3xl font-medium text-foreground mb-4">
              Need Something Custom?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Every project is unique. Let's discuss your vision and create a
              package that perfectly fits your needs and budget.
            </p>
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Get Custom Quote
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
