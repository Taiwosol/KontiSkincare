import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-4xl lg:text-5xl font-serif text-gray-800 mb-8">
              Nourish Your Skin,
              <br />
              <em>Embrace Your True Beauty.</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-800 mb-4">TYPE</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>CLEANSER</li>
                <li>SERUM</li>
                <li>SUN SCREEN</li>
                <li>EYE CARE</li>
                <li>SPECIAL</li>
                <li>EXPLOITATION</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-4">CONCERNS</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>ACNE</li>
                <li>AGED SKIN</li>
                <li>ATOPIC SKIN</li>
                <li>OILY SKIN</li>
                <li>ROSASEA</li>
                <li>DERMATITIS</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-4">FOLLOW US</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  X(TWITTER)
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  LINKEDIN
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  FACEBOOK
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex justify-center items-center">
          <h1 className="text-5xl lg:text-[8rem] font-serif text-gray-500 leading-none tracking-wide w-fit">
            KONTI SKINCARE
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-8">
          <div className="flex items-center gap-8 text-sm text-gray-800 mb-4 md:mb-0">
            <span>TERMS</span>
            <span>PRIVACY POLICY</span>
          </div>
          <div className="text-sm text-gray-800">MADE IN NIGERIA</div>
        </div>
      </div>
    </footer>
  );
}
