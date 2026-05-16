import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/__components/Navbar";
import Footer from "@/app/__components/Footer";

export default function Collection() {
  return (
    <div>
      <Navbar dark sticky={true} />

      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-serif text-gray-800 mb-4 text-center">
            Collections
          </h1>
          <p className="text-gray-600 text-sm text-center mb-12 max-w-4xl mx-auto">
            Kontiskincare is your go-to brand for essential skincare products
            that nourish and rejuvenate your skin. With a focus on natural
            ingredients, each product is designed to enhance your beauty routine
            while promoting healthy skin. From hydrating serums to soothing
            moisturizers, Kontiskincare offers a range of solutions tailored to
            meet your unique skincare needs.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <div className="aspect-[5/4] overflow-hidden rounded-lg relative">
                <Image
                  src="/essential-image1.png"
                  alt="Essential Collection"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-1 flex flex-col justify-start">
              <div className="aspect-square overflow-hidden rounded-lg mb-3">
                <Image
                  src="/nexar.png"
                  alt="Nexar"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-gray-800 block">Soap Liquid</span>
              <span className="text-sm text-gray-600">$13</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div>
              <div className="aspect-square overflow-hidden rounded-lg mb-3">
                <Image
                  src="/liquid-lotion.png"
                  alt="Liquid Lotion"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-gray-800 block">Liquid Lotion</span>
              <span className="text-sm text-gray-600">$28</span>
            </div>
            <div>
              <div className="aspect-square overflow-hidden rounded-lg mb-3">
                <Image
                  src="/sunscreen.png"
                  alt="Sunscreen"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-gray-800 block">Sunscreen</span>
              <span className="text-sm text-gray-600">$28</span>
            </div>
            <div>
              <div className="aspect-square overflow-hidden rounded-lg mb-3">
                <Image
                  src="/blue-solution.png"
                  alt="Blue Solution"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-gray-800 block">Blue Solution</span>
              <span className="text-sm text-gray-600">$28</span>
            </div>
            <div>
              <div className="aspect-square overflow-hidden rounded-lg mb-3">
                <Image
                  src="/face-white.png"
                  alt="Face White"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-gray-800 block">Face White</span>
              <span className="text-sm text-gray-600">$28</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <div className="aspect-square overflow-hidden rounded-lg mb-3">
                <Image
                  src="/cream-face.png"
                  alt="Cream Cleanser"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-gray-800 block">
                Cream Cleanser
              </span>
              <span className="text-sm text-gray-600">$23</span>
            </div>
            <div className="lg:col-span-3">
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/essential-image2.jpg"
                  alt="Big Product"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="aspect-[3/2] overflow-hidden rounded-lg mb-3">
                <Image
                  src="/brown-cream.png"
                  alt="Brown Cream"
                  width={400}
                  height={267}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-gray-800 block">Brown Cream</span>
              <span className="text-sm text-gray-600">$43</span>
            </div>
            <div>
              <div className="aspect-[3/2] overflow-hidden rounded-lg mb-3">
                <Image
                  src="/serum-phoenix.png"
                  alt="Serum Phoenix"
                  width={400}
                  height={267}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-gray-800 block">Serum Phoenix</span>
              <span className="text-sm text-gray-600">$123</span>
            </div>
            <div>
              <div className="aspect-[3/2] overflow-hidden rounded-lg mb-3">
                <Image
                  src="/layers.png"
                  alt="Layers"
                  width={400}
                  height={267}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-gray-800 block">Layers</span>
              <span className="text-sm text-gray-600">$28</span>
            </div>
            <div>
              <div className="aspect-[3/2] overflow-hidden rounded-lg mb-3">
                <Image
                  src="/vase-cream.png"
                  alt="Vase Cream"
                  width={400}
                  height={267}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-gray-800 block">Vase Cream</span>
              <span className="text-sm text-gray-600">$28</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12 bg-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-serif text-gray-800 mb-12">
            345+ Resellers across Madrid
          </h2>
          <div className="mb-12">
            <Image
              src="/high-end.png"
              alt="Resellers"
              width={400}
              height={500}
              className="mx-auto"
            />
          </div>
          <p className="text-gray-600 text-sm mb-8 max-w-md mx-auto">
            Explore a skincare brand that meets the needs of all skin types,
            featuring an exquisite range of products for both men and women.
          </p>
          <Link href="#" className="text-gray-800 text-sm underline">
            FIND THE NEAREST LOCATION
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
