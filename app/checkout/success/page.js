"use client";

import Navbar from "@/app/__components/Navbar";
import Footer from "@/app/__components/Footer";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/app/lib/cart";

export default function CheckoutSuccess() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");
  const [status, setStatus] = useState("loading");
  const { clearCart } = useCart();

  useEffect(() => {
    const updateOrderStatus = async () => {
      if (!orderId) {
        setStatus("error");
        return;
      }

      try {
        const response = await fetch("/api/orders", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ order_id: orderId }),
        });

        if (response.ok) {
          setStatus("success");
          clearCart();
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("Error updating order status:", error);
        setStatus("error");
      }
    };

    updateOrderStatus();
  }, [orderId, clearCart]);

  return (
    <div>
      <Navbar dark />
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          {status === "loading" && (
            <div>
              <h1 className="text-3xl font-serif text-gray-800 mb-4">
                Processing your order...
              </h1>
              <p className="text-gray-600">
                Please wait while we confirm your payment.
              </p>
            </div>
          )}

          {status === "success" && (
            <div>
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-serif text-gray-800 mb-4">
                Order Successful!
              </h1>
              <p className="text-gray-600 mb-8">
                Thank you for your purchase. We'll send you an email
                confirmation shortly.
              </p>
              <Link
                href="/"
                className="inline-block bg-gray-900 text-white px-8 py-4 text-sm tracking-wider hover:bg-gray-800 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          )}

          {status === "error" && (
            <div>
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg
                  className="w-12 h-12 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-serif text-gray-800 mb-4">
                Oops! Something went wrong.
              </h1>
              <p className="text-gray-600 mb-8">
                We're having trouble processing your order. Please contact
                support.
              </p>
              <Link
                href="/checkout"
                className="inline-block bg-gray-900 text-white px-8 py-4 text-sm tracking-wider hover:bg-gray-800 transition-colors"
              >
                Try Again
              </Link>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
