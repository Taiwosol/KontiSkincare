import Image from "next/image";
import Navbar from "@/app/__components/Navbar";
import Footer from "@/app/__components/Footer";

export default function AboutUs() {
  return (
    <div>
      <Navbar dark sticky={true} />

      {/* Hero Section */}
      <section className="pt-12 pb-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-serif text-gray-800 mb-16">
            About Us
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
              Welcome to Kontiskincare
            </p>
            <div className="aspect-square overflow-hidden rounded-lg relative">
              <Image
                src="/essential-image2.jpg"
                alt="About Us Hero"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
            About Us
          </p>
          <h2 className="text-2xl font-serif text-gray-800 mb-16 max-w-2xl">
            Born from nearly 20 years of brazilian skincare success,
            Kontiskincare is the next chapter for the team behind Elixir
            Cosmeceuticals.
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 pt-24">
            <p className="text-sm text-gray-600">
              At Kontiskincare, we believe that beauty begins with healthy skin.
              Our mission is to empower individuals to embrace their natural
              beauty through high-quality, innovative skincare products. Each
              formulation is crafted with care, utilizing the finest ingredients
              sourced from nature to nourish and rejuvenate your skin. Join us
              on a journey to discover radiant skin and unlock your true
              potential with Kontiskincare.
            </p>
            <p className="text-sm text-gray-600">
              We invite you to explore our diverse range of products tailored
              for every skin type. Whether you&apos;re looking for hydration,
              anti-aging solutions, or a gentle cleanser, our expert team is
              dedicated to helping you find the perfect match. Experience the
              transformative power of nature and let your skin shine with
              confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Image Features Section */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="aspect-[4/5] overflow-hidden rounded-lg relative">
              <Image
                src="/lady-smiling.png"
                alt="Lady Smiling"
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-lg relative">
              <Image
                src="/lady-perfume.jpg"
                alt="Lady Perfume"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <svg
                className="w-6 h-6 mx-auto mb-4 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xs uppercase tracking-wider text-gray-600">
                Cruelty-Free
              </p>
            </div>
            <div className="text-center">
              <svg
                className="w-6 h-6 mx-auto mb-4 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xs uppercase tracking-wider text-gray-600">
                Clinically Tested
              </p>
            </div>
            <div className="text-center">
              <svg
                className="w-6 h-6 mx-auto mb-4 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xs uppercase tracking-wider text-gray-600">
                All Types of Skin
              </p>
            </div>
            <div className="text-center">
              <svg
                className="w-6 h-6 mx-auto mb-4 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xs uppercase tracking-wider text-gray-600">
                Highly Effective
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1">
              <p className="text-sm text-gray-600 mb-6">
                At the helm of Kontiskincare is the visionary CEO, Elena
                Marquez, whose passion for skincare and wellness has transformed
                the brand into a household name. With over a decade of
                experience in the beauty industry, Elena combines her expertise
                in dermatology with a deep understanding of consumer needs. Her
                commitment to using natural ingredients and sustainable
                practices has not only set Kontiskincare apart but has also
                inspired a new wave of eco-conscious beauty products. Under her
                leadership, the company has launched several award-winning lines
                that cater to diverse skin types, making effective skincare
                accessible to everyone.
              </p>
              <p className="text-sm text-gray-600">
                Elena&apos;s journey began with her own struggles with skin
                issues, which fueled her desire to create solutions that truly
                work. She believes in the power of education and regularly hosts
                workshops to empower consumers with knowledge about skincare.
                Her approachable demeanor and genuine passion resonate with both
                her team and customers, fostering a culture of innovation and
                care at Kontiskincare. As the brand continues to grow, Elena
                remains dedicated to her mission of promoting healthy skin and
                self-confidence, proving that beauty is not just skin deep.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[3/4] overflow-hidden rounded-lg relative">
                <Image
                  src="/woman-smiling.png"
                  alt="Woman Smiling"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="">
        <div className="relative">
          <div className="aspect-[16/9] overflow-hidden relative">
            <Image
              src="/high-end.png"
              alt="High-End Facial Serum"
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-between px-6 lg:px-12">
            <div className="text-white">
              <p className="text-xs uppercase tracking-wider mb-4">
                Full Ingredient List
              </p>
              <ul className="space-y-3">
                <li className="text-2xl lg:text-3xl font-serif italic">
                  1. Niacinamide
                </li>
                <li className="text-2xl lg:text-3xl font-serif italic">
                  2. Sodium Hyaluronate
                </li>
              </ul>
            </div>
            <div className="max-w-lg text-white text-xs">
              <p>
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

      {/* Journal Section */}
      <section className="py-16 px-6 lg:px-12 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-gray-800 mb-12">
            From Our Journal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-lg relative mb-4">
                <Image
                  src="/journal-image.png"
                  alt="Journal 1"
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                23.04.2025
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                Press Release
              </p>
              <h3 className="text-xl font-serif text-gray-800 group-hover:underline">
                Elixir Cosmeceuticals Becomes Face Formula
              </h3>
            </div>
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-lg relative mb-4">
                <Image
                  src="/journal-image1.png"
                  alt="Journal 2"
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                23.04.2025
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                Expert Advice
              </p>
              <h3 className="text-xl font-serif text-gray-800 group-hover:underline">
                Signature Treatment
              </h3>
            </div>
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-lg relative mb-4">
                <Image
                  src="/journal-image2.png"
                  alt="Journal 3"
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                23.04.2025
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                Press Release
              </p>
              <h3 className="text-xl font-serif text-gray-800 group-hover:underline">
                Blue Serum: A New Chapter is Longevity Skincare
              </h3>
            </div>
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-lg relative mb-4">
                <Image
                  src="/journal-image3.png"
                  alt="Journal 4"
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                23.04.2025
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                Press Release
              </p>
              <h3 className="text-xl font-serif text-gray-800 group-hover:underline">
                Radiant Essence: Unlocking the Secrets of Timeless Beauty
              </h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
