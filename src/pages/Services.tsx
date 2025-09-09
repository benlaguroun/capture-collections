import { Header } from "@/components/navigation/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Camera, Heart, Briefcase, Sparkles } from "lucide-react";
import { Footer } from "@/components/layout/Footer";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "Complete wedding day coverage with artistic storytelling",
      price: "$2,500",
      features: [
        "8-10 hours of coverage",
        "500+ edited photos",
        "Online gallery",
        "Engagement session included",
        "Second photographer available",
      ],
      popular: true,
    },
    {
      icon: Camera,
      title: "Portrait Sessions",
      description: "Individual, couple, family, and maternity portraits",
      price: "$450",
      features: [
        "1-2 hour session",
        "50+ edited photos",
        "Multiple outfit changes",
        "Location scouting",
        "Print release included",
      ],
    },
    {
      icon: Briefcase,
      title: "Commercial Photography",
      description: "Professional headshots and brand photography",
      price: "$750",
      features: [
        "Half-day session",
        "100+ edited photos",
        "Multiple looks/setups",
        "Commercial usage rights",
        "Rush delivery available",
      ],
    },
    {
      icon: Sparkles,
      title: "Event Photography",
      description: "Corporate events, parties, and special occasions",
      price: "$1,200",
      features: [
        "4-6 hours of coverage",
        "300+ edited photos",
        "Same-day highlights",
        "Group and candid shots",
        "Digital delivery within 48hrs",
      ],
    },
  ];

  const addOns = [
    { name: "Additional Hour", price: "$200" },
    { name: "Second Photographer", price: "$500" },
    { name: "Same Day Edit", price: "$300" },
    { name: "Engagement Session", price: "$400" },
    { name: "Print Package", price: "$150" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-light mb-6 animate-fade-in-up">
            Services & Packages
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Professional photography services tailored to capture your most
            important moments
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <Card
                key={i}
                className={`relative p-6 hover-scale animate-fade-in-up ${
                  service.popular ? "ring-2 ring-primary shadow-gold" : ""
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-display text-2xl font-light">
                        {service.title}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="font-display text-3xl font-bold text-primary">
                    {service.price}
                  </div>
                </CardHeader>

                <CardContent className="p-0">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={service.popular ? "default" : "elegant"}
                    className="w-full"
                    size="lg"
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-light text-center mb-12 animate-fade-in-up">
            Additional Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addon, i) => (
              <Card
                key={i}
                className="p-4 text-center hover-scale animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <h3 className="font-medium mb-2">{addon.name}</h3>
                  <div className="font-display text-xl font-bold text-primary">
                    {addon.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-light text-center mb-12 animate-fade-in-up">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We discuss your vision, preferences, and requirements",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Location scouting, timeline creation, and preparation",
              },
              {
                step: "03",
                title: "Delivery",
                description:
                  "Professional editing and gallery delivery within 2-3 weeks",
              },
            ].map((process, i) => (
              <div
                key={i}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="font-display text-4xl font-light text-primary mb-4">
                  {process.step}
                </div>
                <h3 className="font-display text-xl font-medium mb-3">
                  {process.title}
                </h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss your photography needs and create something beautiful
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Book Consultation
            </Button>
            <Button
              variant="elegant"
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-foreground"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
