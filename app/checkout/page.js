"use client";

import Navbar from "@/app/__components/Navbar";
import Footer from "@/app/__components/Footer";
import Image from "next/image";
import { useCart } from "@/app/lib/cart";
import { useState } from "react";

export default function Checkout() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 16) value = value.slice(0, 16);
    value = value.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(value);
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    setExpiry(value);
  };

  const handleCvvChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 3) value = value.slice(0, 3);
    setCvv(value);
  };

  return (
    <div>
      <Navbar dark />
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-serif text-gray-800 mb-8">Checkout</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-6">
                Shipping Information
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Apartment, Suite, etc. (optional)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
              </form>

              <h2 className="text-2xl font-serif text-gray-800 mt-12 mb-6">
                Payment Information
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={handleExpiryChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      value={cvv}
                      onChange={handleCvvChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                </div>
                <button className="w-full bg-gray-900 text-white px-8 py-4 text-sm tracking-wider hover:bg-gray-800 transition-colors">
                  Place Order
                </button>
              </form>
            </div>

            <div className="lg:pl-8">
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
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm">${item.price}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="text-gray-800 text-sm"
                          >
                            −
                          </button>
                          <span className="text-sm">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="text-gray-800 text-sm"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 text-xs underline ml-3"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-800 font-semibold text-sm">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-6 border-t">
                    <div className="flex justify-between text-lg text-gray-800 mb-2">
                      <span>Subtotal</span>
                      <span>${getCartTotal()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600 mb-2">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between text-xl font-semibold text-gray-800 pt-4 border-t">
                      <span>Total</span>
                      <span>${getCartTotal()}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
