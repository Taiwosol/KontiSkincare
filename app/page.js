import Image from "next/image";
import Navbar from "@/app/__components/Navbar";
import Footer from "@/app/__components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar sticky={false} />

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/Konti-Hero.png"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center px-6 lg:px-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-serif text-white mb-4">
              Kontiskincare, marking a new era in skincare.
            </h1>
            <p className="text-white/80 mb-6">
              The next chapter in skincare—grounded in results, driven by
              longevity.
            </p>
            <Link href="/products" className="text-white text-sm underline">
              DISCOVER PRODUCT
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-8">
                About Us
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <Image
                  src="/image-green-small.png"
                  alt="About 1"
                  width={200}
                  height={200}
                  className="object-cover"
                />
                <Image
                  src="/image-orange-small.png"
                  alt="About 2"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Explore a skincare brand that meets the needs of all skin types,
                featuring an exquisite range of products for both men and women.
                From luxurious moisturizers to effective cleansers, our
                collection blends quality ingredients with modern formulations,
                guaranteeing the ideal solution for every skincare routine.
              </p>
              <Link
                href="/about-us"
                className="text-gray-800 text-sm underline"
              >
                SEE MORE
              </Link>
            </div>
            <div>
              <Image
                src="/image-green-big.png"
                alt="About Big"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 px-6 lg:px-12 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-6">
                Discover best Sellers
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                The next chapter in skincare is not just about trends, it&apos;s
                firmly grounded in proven results and driven by a commitment to
                lasting, healthy skin. We&apos;ve carefully crafted our products
                with time-tested ingredients to ensure that your skin not only
                looks great today, but remains healthy and vibrant for years to
                come. We believe in creating products that empower you to
                embrace your natural beauty while addressing your unique
                skincare needs.
              </p>
              <Link
                href="/products"
                className="text-gray-800 text-sm underline"
              >
                DISCOVER PRODUCT
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: "Fiori Wash", price: "₦30000", image: "/fora-wash.png" },
                {
                  name: "Barus Cream",
                  price: "₦20000",
                  image: "/barus-cream.png",
                },
                { name: "Gege Tone", price: "₦18000", image: "/gege-tone.png" },
                {
                  name: "Merlin Sunscreen",
                  price: "₦12000",
                  image: "/merlin-sunscreen.png",
                },
                { name: "Nexar", price: "₦10000", image: "/nexar.png" },
                { name: "Jectar", price: "₦8000", image: "/jectar.png" },
              ].map((product, index) => (
                <div key={index} className="flex flex-col">
                  <div className="aspect-square mb-3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <span className="text-sm text-gray-800">{product.name}</span>
                  <span className="text-sm text-gray-600">{product.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs text-gray-500 mb-2">ABOUT US</p>
              <h2 className="text-2xl font-serif text-gray-800 mb-6">
                Konti: Your Ultimate Skincare Solution for Radiant and Healthy
                Skin
              </h2>
              <Image
                src="/woman-smiling.png"
                alt="Benefits"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-right mb-8">
                <h3 className="text-4xl font-bold text-gray-800">
                  345+ Resellers
                </h3>
                <p className="text-gray-600">across Madrid</p>
              </div>
              <div className="mb-6">
                <Image
                  src="/madrid-cream.png"
                  alt="Madrid Cream"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm mb-6">
                Explore a skincare brand that meets the needs of all skin types,
                featuring an exquisite range of products for both men and women.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section className="relative h-[600px]">
        <Image
          src="/journal-image.png"
          alt="Journal"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-white text-sm mb-4 tracking-widest">JOURNAL</p>
            <h2 className="text-3xl lg:text-5xl font-serif text-white mb-8">
              Explore stories to enhance your skin knowledge.
            </h2>
            {/* <Link href="#" className="text-white text-sm tracking-widest">
              READ MORE
            </Link> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
