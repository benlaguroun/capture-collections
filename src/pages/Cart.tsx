import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useCheckout } from "@/hooks/useCheckout";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, loading } =
    useCart();
  const { user } = useAuth();
  const { processing, createOrder } = useCheckout();

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-elegant">
        <Header />
        <main className="container mx-auto px-6 pt-24 pb-12">
          <div className="text-center py-12">
            <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h1 className="text-3xl font-display font-bold mb-4">
              Please Login
            </h1>
            <p className="text-muted-foreground mb-6">
              You need to login to view your cart
            </p>
            <Link to="/auth">
              <Button variant="hero" size="lg">
                Login
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-elegant">
      <Header />
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold text-center mb-12">
            Shopping Cart
          </h1>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading cart...</p>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
              <h2 className="text-2xl font-semibold mb-4">
                Your cart is empty
              </h2>
              <p className="text-muted-foreground mb-6">
                Add some beautiful photography items to get started!
              </p>
              <Link to="/shop">
                <Button variant="hero" size="lg">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="glass-effect border-border/20">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.product.image_url}
                          alt={item.product.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.product.name}</h3>
                          <p className="text-primary font-medium">
                            ${(item.product.price / 100).toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.product_id, item.quantity - 1)
                            }
                            className="h-8 w-8"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.product_id, item.quantity + 1)
                            }
                            className="h-8 w-8"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            $
                            {(
                              (item.product.price * item.quantity) /
                              100
                            ).toFixed(2)}
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.product_id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div>
                <Card className="glass-effect border-border/20 sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Order Summary
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${(cartTotal / 100).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>${((cartTotal * 0.1) / 100).toFixed(2)}</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-semibold text-lg">
                          <span>Total</span>
                          <span>${((cartTotal * 1.1) / 100).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="w-full"
                      variant="hero"
                      size="lg"
                      onClick={createOrder}
                      disabled={processing}
                    >
                      {processing ? "Processing..." : "Proceed to Checkout"}
                    </Button>
                    <Link to="/shop" className="block mt-4">
                      <Button variant="outline" className="w-full">
                        Continue Shopping
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
