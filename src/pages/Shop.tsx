import { useState, useEffect } from "react";
import { Header } from "@/components/navigation/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Download, Package } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/contexts/CartContext";
import { supabase } from "@/integrations/supabase/client";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  is_digital: boolean;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart();

  const categories = ["All", "Prints", "Albums", "Digital", "Canvas", "Books"];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  const handleAddToCart = async (productId: string) => {
    await addToCart(productId, 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-light mb-6 animate-fade-in-up">
            Photography Shop
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Transform your favorite moments into beautiful prints, albums, and
            digital collections
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category, i) => (
              <Button
                key={category}
                variant={
                  selectedCategory === category ? "default" : "ghost-elegant"
                }
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading products...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, i) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden hover-scale animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={product.image_url || "/api/placeholder/400/400"}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.is_digital && (
                      <div className="absolute top-3 right-3 p-2 bg-black/20 rounded-full">
                        <Download className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="text-sm text-muted-foreground">
                          5.0 (24)
                        </span>
                      </div>
                    </div>

                    <CardTitle className="font-display text-xl font-light leading-tight">
                      {product.name}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {product.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-2xl font-bold text-primary">
                          ${(product.price / 100).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="default"
                        className="flex-1"
                        onClick={() => handleAddToCart(product.id)}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="ghost-elegant" size="icon">
                        <Package className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-light text-center mb-12 animate-fade-in-up">
            Why Choose Our Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "Premium Quality",
                description:
                  "Museum-grade materials and professional printing ensure your memories last a lifetime",
              },
              {
                icon: "🚚",
                title: "Fast Shipping",
                description:
                  "Free shipping on orders over $100. Most orders ship within 2-3 business days",
              },
              {
                icon: "💯",
                title: "Satisfaction Guarantee",
                description:
                  "30-day money-back guarantee. We're committed to your complete satisfaction",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="text-center p-6 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-display text-xl font-medium mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light mb-6">
            Custom Orders Available
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Need something specific? Let's create a custom product just for you.
          </p>
          <Button variant="hero" size="lg">
            Request Custom Order
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
