"use client";

import Navbar from "@/app/__components/Navbar";
import Footer from "@/app/__components/Footer";
import Image from "next/image";
import { useCart } from "@/app/lib/cart";
import { useState } from "react";

export default function Checkout() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    let processedValue = type === "checkbox" ? checked : value;
    setError("");

    // Restrict letters only fields
    const letterOnlyFields = ["firstName", "lastName", "address", "city"];
    const noLetterFields = ["postalCode", "phone"];

    if (letterOnlyFields.includes(name)) {
      processedValue = value.replace(/[0-9]/g, "");
    }

    if (noLetterFields.includes(name)) {
      processedValue = value.replace(/[a-zA-Z]/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (cart.length === 0) {
      setError(
        "Your cart is empty, please add some products before proceeding to checkout.",
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const orderData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        address: formData.address,
        apartment: formData.apartment,
        city: formData.city,
        postal_code: formData.postalCode,
        phone: formData.phone,
        items: JSON.stringify(cart),
        total: getCartTotal(),
        status: "pending",
      };

      console.log("Submitting order data:", orderData);

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      console.log("API Response status:", response.status);
      const result = await response.json();
      console.log("API Response data:", result);

      if (result.error) {
        throw new Error(result.error);
      }

      // Redirect to Paystack checkout page
      window.location.href = result.paystack.authorization_url;
    } catch (error) {
      console.error("Error processing order:", error);
      alert("Error processing order: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar dark />
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-serif text-gray-800 mb-8">Checkout</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="lg:order-2 lg:pl-8">
              <h2 className="text-2xl font-serif text-gray-800 mb-6">
                Order Summary
              </h2>
              {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 items-center pb-4 border-b"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-600">
                          {item.name}
                        </h3>
                        <p className="text-gray-800 text-sm">₦{item.price}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="text-gray-800 text-sm cursor-pointer"
                          >
                            −
                          </button>
                          <span className="text-sm text-gray-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="text-gray-800 text-sm cursor-pointer"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 text-xs underline ml-3 cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-800 font-semibold text-sm">
                          ₦{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-6 border-t">
                    <div className="flex justify-between text-lg text-gray-800 mb-2">
                      <span>Subtotal</span>
                      <span>₦{getCartTotal()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600 mb-2">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between text-xl font-semibold text-gray-800 pt-4 border-t">
                      <span>Total</span>
                      <span>₦{getCartTotal()}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:order-1">
              <h2 className="text-2xl font-serif text-gray-800 mb-6">
                Shipping Information
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Apartment, Suite, etc. (optional)
                  </label>
                  <input
                    type="text"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 text-white px-8 py-4 text-sm tracking-wider hover:bg-gray-800 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "PROCESSING..." : "PAY NOW"}
                </button>

                <div className="flex flex-wrap gap-8 pt-8">
                  <p className="text-sm text-gray-500 underline">
                    Refund policy
                  </p>
                  <p className="text-sm text-gray-500 underline">
                    Privacy Policy
                  </p>
                  <p className="text-sm text-gray-500 underline">
                    Terms of Condition
                  </p>
                  <p className="text-sm text-gray-500 underline">
                    Contact Information
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
