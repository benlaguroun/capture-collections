import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export const useCheckout = () => {
  const [processing, setProcessing] = useState(false);
  const { cartItems, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const createOrder = async () => {
    if (!user) {
      toast.error("Please login to checkout");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setProcessing(true);

    try {
      // Create order
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
          user_id: user.id,
          total_amount: Math.round(cartTotal * 1.1), // Include tax
          status: "pending",
          currency: "usd",
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = cartItems.map((item) => ({
        order_id: order.id,
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.product.price,
      }));

      const { error: itemsError } = await supabase
        .from("order_items")
        .insert(orderItems);

      if (itemsError) throw itemsError;

      // TODO: Integrate with Stripe here
      // For now, we'll simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Clear cart and go to checkout page
      await clearCart();
      toast.success("Order created! Review and complete payment.");
      navigate(`/checkout/${order.id}`);
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Failed to process checkout. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  const processStripePayment = async (orderId: string) => {
    // TODO: This will be implemented when Stripe is enabled
    // 1. Create Stripe payment intent
    // 2. Redirect to Stripe checkout or handle payment
    // 3. Update order status based on payment result
    console.log("Stripe payment for order:", orderId);
  };

  return {
    processing,
    createOrder,
    processStripePayment,
  };
};
