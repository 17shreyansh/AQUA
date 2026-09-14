"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "275ml",
    size: "275 ML",
    price: "₹6",
    image: "/images/product-bottle.jpg",
    bgImage: "/images/pure-macro.jpg",
    aspect: "aspect-[3/4]",
    scale: "scale-90",
    mt: "mt-12",
  },
  {
    id: "800ml",
    size: "800 ML",
    price: "₹10",
    image: "/images/product-bottle.jpg",
    bgImage: "/images/mountain-lake.jpg",
    aspect: "aspect-[2/3]",
    scale: "scale-105",
    mt: "mt-0",
  },
  {
    id: "1200ml",
    size: "1200 ML",
    price: "₹20",
    image: "/images/product-bottle.jpg",
    bgImage: "/images/hero-bottle.jpg",
    aspect: "aspect-[3/5]",
    scale: "scale-100",
    mt: "mt-24",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-32 md:py-48 bg-ivory text-pure-black">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-24 md:mb-40"
        >
          <h3 className="text-micro text-pure-black/50 mb-8">OUR WATER</h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light tracking-tight">
            Choose the bottle that <br />
            <span className="text-pure-black">fits your day.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-12 w-full max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col w-full lg:w-1/3 group ${product.mt}`}
            >
              <div className={`relative w-full ${product.aspect} overflow-hidden mb-8`}>
                {/* Environmental Background */}
                <Image
                  src={product.bgImage}
                  alt="Environment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105 opacity-80 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-ivory/40 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-pure-black/30 to-transparent"></div>
                
                {/* Product Image */}
                <div className={`absolute inset-0 flex items-end justify-center pb-8 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-4`}>
                  <div className={`relative w-1/2 h-4/5 ${product.scale}`}>
                    <Image
                      src={product.image}
                      alt={`Aqua Mountain ${product.size}`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 16vw"
                      className="object-contain object-bottom drop-shadow-2xl mix-blend-multiply"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between items-baseline border-b border-pure-black/10 pb-4 mb-4">
                  <h4 className="text-lg font-sans tracking-wide">{product.size}</h4>
                  <p className="text-sm text-pure-black/50">{product.price}</p>
                </div>
                
                <Link 
                  href={`https://wa.me/918979776596?text=Hi Aqua Mountain, I'd like to order the ${product.size} bottle.`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-micro text-pure-black/50 hover:text-pure-black transition-colors self-start"
                >
                  ADD TO CART
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
