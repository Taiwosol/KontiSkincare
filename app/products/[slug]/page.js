"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { getProductBySlug, products } from "@/app/lib/products";
import Navbar from "@/app/__components/Navbar";
import Footer from "@/app/__components/Footer";
import { useState } from "react";
import { useCart } from "@/app/lib/cart";

export default function ProductDetailPage() {
  const params = useParams();
  const product = getProductBySlug(params.slug);
  const [quantity, setQuantity] = useState(1);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { addToCart } = useCart();

  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div>
      <Navbar dark />
      <section className="py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src={product.bigImage}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-serif text-gray-800 mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600 text-sm mb-6">
                150 ml/5.07 fl.oz - ${product.price}
              </p>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <ul className="text-gray-600 text-sm mb-8 space-y-1">
                {product.ingredients.slice(0, 3).map((ingredient, i) => (
                  <li key={i}>• {ingredient}</li>
                ))}
              </ul>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Quantity</span>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-gray-800 cursor-pointer"
                    >
                      −
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-gray-800 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => addToCart(product, quantity)}
                className="w-full bg-gray-900 text-white py-3 text-sm tracking-wider hover:bg-gray-800 transition-colors mb-4 cursor-pointer"
              >
                ADD TO CART - ${product.price * quantity}
              </button>
              {/* <button className="w-full text-center text-sm underline text-gray-800 mb-6">
                FIND THE NEAREST CLINIC
              </button> */}
              <div className="border-t border-gray-200 pt-4">
                <button
                  onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                  className="w-full flex items-center justify-between text-left "
                >
                  <span className="text-gray-600">Product Details</span>
                  <span className="text-gray-800 cursor-pointer">
                    {isDetailsOpen ? "−" : "+"}
                  </span>
                </button>
                {isDetailsOpen && (
                  <div className="mt-4 text-gray-600 text-sm space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        How to Use
                      </h4>
                      <p>{product.howToUse}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Full Ingredient List
                      </h4>
                      <ul className="space-y-1">
                        {product.ingredients.map((ingredient, i) => (
                          <li key={i} className="font-serif text-xl italic">
                            {i + 1}. {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full ingredient list section */}
      <section className="relative h-[600px]">
        <Image
          src="/lip-img.jpg"
          alt="Ingredients background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center px-6 lg:px-12">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-white text-sm mb-4 tracking-widest">
                FULL INGREDIENT LIST
              </p>
              <ul className="space-y-3">
                {product.ingredients.map((ingredient, i) => (
                  <li key={i} className="font-serif text-2xl italic text-white">
                    {i + 1}. {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-end">
              <p className="text-white text-sm">
                The next chapter in skincare is not just about trends; it is
                firmly grounded in proven results and driven by the principles
                of longevity. Our innovative approach combines cutting-edge
                research with time-tested ingredients to ensure that your skin
                not only looks great today but remains healthy and vibrant for
                years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-gray-800 mb-8">How to use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {relatedProducts.slice(0, 4).map((p) => (
              <div key={p.id} className="flex flex-col">
                <div className="aspect-square mb-3">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <span className="text-sm text-gray-800">{p.name}</span>
                <span className="text-sm text-gray-600">${p.price}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif text-gray-800 mb-4">
                Complete Your Routine
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Pair this product with complementary favourites to enhance your
                results and build a routine tailored to your skin&apos;s needs.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {relatedProducts.slice(0, 4).map((p) => (
                <div key={p.id} className="flex flex-col">
                  <div className="aspect-square mb-3">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <span className="text-sm text-gray-800">{p.name}</span>
                  <span className="text-sm text-gray-600">${p.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
