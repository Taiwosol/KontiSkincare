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
                Payment
              </h2>
              <form className="space-y-6">
                <div className="flex items-center justify-between px-4 py-3 border border-gray-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Image src="/ellipse.png" alt="" width={20} height={20} />
                    <span className="text-sm text-gray-800">Credit Card</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/logos_visa.png"
                      alt="Visa"
                      width={40}
                      height={24}
                    />
                    <Image
                      src="/logos_mastercard.png"
                      alt="Mastercard"
                      width={40}
                      height={24}
                    />
                    <Image
                      src="/logos_amex.png"
                      alt="Amex"
                      width={40}
                      height={24}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <label className="block text-sm text-gray-600 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Card Number"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                    <div className="absolute right-4 top-11 -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Expiration date (MM/YY)
                      </label>
                      <input
                        type="text"
                        placeholder="Expiration date (MM/YY)"
                        value={expiry}
                        onChange={handleExpiryChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Security Code
                      </label>
                      <input
                        type="text"
                        placeholder="Security Code"
                        value={cvv}
                        onChange={handleCvvChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Name On Card
                    </label>
                    <input
                      type="text"
                      placeholder="Name On Card"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="billing-same"
                      className="rounded"
                    />
                    <label
                      htmlFor="billing-same"
                      className="text-sm text-gray-500"
                    >
                      Use shipping address as billing address
                    </label>
                  </div>
                </div>

                <button className="w-full bg-gray-900 text-white px-8 py-4 text-sm tracking-wider hover:bg-gray-800 transition-colors cursor-pointer">
                  PAY NOW
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
                            className="text-gray-800 text-sm cursor-pointer"
                          >
                            −
                          </button>
                          <span className="text-sm">{item.quantity}</span>
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
