import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/integrations/supabase/client";
import { useCheckout } from "@/hooks/useCheckout";

interface OrderRow {
  id: string;
  total_amount: number;
  currency: string | null;
  status: string | null;
  created_at: string;
}

interface OrderItemRow {
  quantity: number;
  price: number; // stored in cents
  product: {
    name: string;
    price: number;
    image_url: string | null;
  } | null;
}

const Checkout = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { processStripePayment } = useCheckout();
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState<OrderRow | null>(null);
  const [items, setItems] = useState<OrderItemRow[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Checkout | Review & Payment";
  }, []);

  useEffect(() => {
    const load = async () => {
      if (!orderId) {
        setError("Missing order id.");
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      // Fetch order
      const { data: orderData, error: orderErr } = await supabase
        .from("orders")
        .select("id,total_amount,currency,status,created_at")
        .eq("id", orderId)
        .maybeSingle();

      if (orderErr) {
        setError("Failed to load order.");
        setLoading(false);
        return;
      }
      setOrder(orderData);

      // Fetch order items with product info
      const { data: itemsData, error: itemsErr } = await supabase
        .from("order_items")
        .select("quantity,price,product:products(name,price,image_url)")
        .eq("order_id", orderId);

      if (itemsErr) {
        setError("Failed to load order items.");
        setLoading(false);
        return;
      }

      setItems(itemsData || []);
      setLoading(false);
    };

    load();
  }, [orderId]);

  const subtotal = useMemo(
    () =>
      items.reduce((sum, it) => sum + (it.price || 0) * (it.quantity || 0), 0),
    [items]
  );
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gradient-elegant">
      <Header />
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-display font-bold text-center mb-8">
            Checkout
          </h1>
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">
                Loading your order...
              </p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-destructive font-medium mb-4">{error}</p>
              <Link to="/cart">
                <Button variant="outline">Back to Cart</Button>
              </Link>
            </div>
          ) : !order ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Order not found.</p>
              <Link to="/shop">
                <Button variant="hero">Go to Shop</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <section className="lg:col-span-2 space-y-4">
                {items.map((it, idx) => (
                  <Card key={idx} className="glass-effect border-border/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        {it.product?.image_url ? (
                          <img
                            src={it.product.image_url}
                            alt={`${it.product?.name || "Product"} image`}
                            className="w-20 h-20 object-cover rounded-md"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-20 h-20 rounded-md bg-muted" />
                        )}
                        <div className="flex-1">
                          <h3 className="font-semibold">
                            {it.product?.name ?? "Item"}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Qty: {it.quantity}
                          </p>
                        </div>
                        <div className="font-semibold">
                          ${((it.price * it.quantity) / 100).toFixed(2)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </section>

              <aside>
                <Card className="glass-effect border-border/20 sticky top-24">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Order Summary
                    </h2>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Order</span>
                        <span>#{order.id.slice(0, 8)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${(subtotal / 100).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>${(tax / 100).toFixed(2)}</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>${(total / 100).toFixed(2)}</span>
                      </div>
                    </div>
                    <Button
                      className="w-full mt-6"
                      variant="hero"
                      size="lg"
                      onClick={() => processStripePayment(order.id)}
                      disabled
                      aria-disabled
                      title="Connect Stripe to enable payment"
                    >
                      Pay Now (Stripe coming soon)
                    </Button>
                    <Link to="/shop" className="block mt-4">
                      <Button variant="outline" className="w-full">
                        Continue Shopping
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </aside>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
