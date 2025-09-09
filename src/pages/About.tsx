import { Header } from "@/components/navigation/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Camera, Heart, Star } from "lucide-react";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="font-display text-4xl md:text-6xl font-light text-foreground">
                About Elena
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 8 years of experience capturing life's most precious
                moments, I specialize in creating timeless memories through the
                art of photography. My passion lies in telling stories through
                images that will be treasured for generations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Based in San Francisco, I travel worldwide to document weddings,
                portraits, and commercial projects with a distinctive style that
                blends elegance with authenticity.
              </p>
              <Button variant="elegant" size="lg" className="mt-6">
                View My Work
              </Button>
            </div>

            <div
              className="relative animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="aspect-[4/5] bg-gradient-elegant rounded-lg overflow-hidden shadow-elegant">
                <img
                  src="/api/placeholder/500/600"
                  alt="Elena Rodriguez Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-gold">
                <div className="text-2xl font-display font-bold">500+</div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Camera, number: "8+", label: "Years Experience" },
              { icon: Heart, number: "500+", label: "Weddings Shot" },
              { icon: Award, number: "15+", label: "Awards Won" },
              { icon: Star, number: "5.0", label: "Average Rating" },
            ].map((stat, i) => (
              <Card
                key={i}
                className="text-center p-6 hover-scale animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <div className="font-display text-3xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-light text-center mb-12 animate-fade-in-up">
            What Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & Michael",
                text: "Elena captured our wedding day perfectly. Every emotion, every detail - it was all there in her beautiful photographs.",
                rating: 5,
              },
              {
                name: "Jennifer Adams",
                text: "Professional, creative, and so easy to work with. Our family portraits are absolutely stunning.",
                rating: 5,
              },
              {
                name: "David Chen",
                text: "Outstanding commercial photography work. Elena's attention to detail and artistic vision exceeded our expectations.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <Card
                key={i}
                className="p-6 hover-scale animate-fade-in-up"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="font-medium text-foreground">
                    {testimonial.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
