"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/lib/products";
import Navbar from "@/app/__components/Navbar";
import Footer from "@/app/__components/Footer";

const featuredProducts = [
  products.find((p) => p.slug === "Natural-Soap"),
  products.find((p) => p.slug === "Green-Liquid"),
  products.find((p) => p.slug === "Peach"),
  products.find((p) => p.slug === "Bornid-Sthoh"),
].filter(Boolean);

const heroProduct = products.find((p) => p.slug === "Daily-Cleanser-gel");

export default function ProductsPage() {
  return (
    <div>
      <Navbar dark />
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-serif text-gray-800 mb-4 text-center">
            All Products
          </h1>
          <p className="text-gray-600 text-sm text-center mb-12">
            Explore our range of skincare products
          </p>

          {/* First featured section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group"
              >
                <div className="aspect-square mb-3 overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm text-gray-800 block">
                  {product.name}
                </span>
                <span className="text-sm text-gray-600">₦{product.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hero product section */}
      {heroProduct && (
        <section className="relative">
          <div className="aspect-[16/9] lg:aspect-[21/9]">
            <Image
              src={heroProduct.bigImage}
              alt={heroProduct.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 flex flex-col lg:flex-row items-end justify-between">
            <div>
              <p className="text-white text-sm mb-1">{heroProduct.name}</p>
              <p className="text-white/80 text-xs mb-2">
                {heroProduct.category}
              </p>
              <p className="text-white text-sm">₦{heroProduct.price}</p>
            </div>
            <Link
              href={`/products/${heroProduct.slug}`}
              className="bg-white text-gray-900 px-8 py-3 text-sm tracking-wider hover:bg-gray-100 transition-colors w-full lg:w-auto text-center mt-4 lg:mt-0"
            >
              ADD
            </Link>
          </div>
        </section>
      )}

      {/* All products grid */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group"
              >
                <div className="aspect-square mb-3 overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm text-gray-800 block">
                  {product.name}
                </span>
                <span className="text-sm text-gray-600">₦{product.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
