import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
  {
    id: "275ml",
    size: "275 ML",
    price: "₹6",
    image: "/images/product-bottle.jpg",
    featured: false,
    scale: "scale-90",
  },
  {
    id: "800ml",
    size: "800 ML",
    price: "₹10",
    image: "/images/product-bottle.jpg",
    featured: true,
    scale: "scale-110",
  },
  {
    id: "1200ml",
    size: "1200 ML",
    price: "₹20",
    image: "/images/product-bottle.jpg",
    featured: false,
    scale: "scale-100",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-24 md:py-32 bg-gray-50 text-black">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-gold tracking-widest text-sm font-semibold uppercase mb-4">
          Our Water
        </h2>
        <h3 className="text-4xl md:text-5xl font-heading font-bold mb-16">
          Choose the bottle that <span className="italic font-accent font-normal text-gray-500">fits your day.</span>
        </h3>

        <div className="flex flex-col lg:flex-row items-end justify-center gap-12 lg:gap-8 xl:gap-16 max-w-5xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`relative flex flex-col items-center group w-full lg:w-1/3 transition-all duration-500 ${product.featured ? 'lg:-translate-y-8 z-10' : 'opacity-80 hover:opacity-100 z-0'}`}
            >
              {/* Product Background Shelf Effect */}
              <div className="w-full aspect-[3/4] relative mb-8 flex items-end justify-center overflow-hidden bg-white shadow-sm border border-gray-100 rounded-sm p-4 transition-transform duration-500 group-hover:shadow-xl">
                <div className={`relative w-full h-full transform transition-transform duration-700 group-hover:scale-105 ${product.scale}`}>
                   <Image 
                    src={product.image} 
                    alt={`Aqua Mountain ${product.size}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain object-bottom drop-shadow-2xl mix-blend-multiply"
                  />
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-2xl font-heading font-bold mb-2">{product.size}</h4>
                <p className="text-gold-dark font-semibold text-lg mb-6">{product.price}</p>
                
                <Link 
                  href={`https://wa.me/918979776596?text=Hi Aqua Mountain, I'd like to order the ${product.size} bottle.`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-full h-10 rounded-sm font-semibold tracking-wide transition-all border ${
                    product.featured 
                      ? 'bg-black hover:bg-gold text-white hover:text-black border-black' 
                      : 'border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  BUY NOW
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
