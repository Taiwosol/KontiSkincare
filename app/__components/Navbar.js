"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/lib/cart";

export default function Navbar({ dark = false, sticky = true }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();

  return (
    <nav
      className={`${sticky ? "sticky top-0" : "absolute top-0"} left-0 w-full z-50 px-6 py-4 lg:px-12 transition-colors duration-300 ${isMobileMenuOpen ? "bg-white min-h-screen" : dark ? "bg-white" : ""}`}
    >
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className={`font-bold text-lg ${isMobileMenuOpen || dark ? "text-gray-800" : "text-white"}`}
        >
          KONTISKINCARE
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/collection"
            className={`text-xs tracking-wider ${dark ? "text-gray-800" : "text-white"}`}
          >
            COLLECTIONS
          </Link>
          <Link
            href="/about-us"
            className={`text-xs tracking-wider ${dark ? "text-gray-800" : "text-white"}`}
          >
            ABOUT US
          </Link>
          <Link
            href="/products"
            className={`text-xs tracking-wider ${dark ? "text-gray-800" : "text-white"}`}
          >
            PRODUCT
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/checkout"
            className={`${isMobileMenuOpen || dark ? "text-gray-800" : "text-white"} relative`}
          >
            <Image
              src="/Vector.png"
              alt="Cart"
              width={20}
              height={20}
              className="w-5 h-5"
              style={{
                filter: isMobileMenuOpen || dark ? "invert(1)" : "none",
              }}
            />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {getCartCount()}
              </span>
            )}
          </Link>
          <button
            className={`md:hidden ${isMobileMenuOpen || dark ? "text-gray-800" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-16 flex flex-col gap-8">
          <Link
            href="/collection"
            className="text-gray-800 text-sm tracking-wider"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            COLLECTIONS
          </Link>
          <Link
            href="/about-us"
            className="text-gray-800 text-sm tracking-wider"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ABOUT US
          </Link>
          <Link
            href="/products"
            className="text-gray-800 text-sm tracking-wider"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            PRODUCT
          </Link>
        </div>
      )}
    </nav>
  );
}
