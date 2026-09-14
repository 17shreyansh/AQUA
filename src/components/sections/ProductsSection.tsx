"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "275ml",
    size: "275 ML",
    price: "₹6",
  },
  {
    id: "800ml",
    size: "800 ML",
    price: "₹10",
  },
  {
    id: "1200ml",
    size: "1200 ML",
    price: "₹20",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-32 md:py-48 bg-ivory text-pure-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-24 md:mb-32"
        >
          <h3 className="text-micro text-pure-black/50 mb-8 uppercase tracking-widest">Our Water</h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light tracking-tight">
            Choose the bottle that <br />
            <span className="text-pure-black">fits your day.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative">
          {/* Left: Single Large Bottle Image */}
          <motion.div 
            initial={{ opacity: 0, filter: "blur(10px)", x: -30 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[70%] lg:w-[80%] aspect-[1/2] max-h-[80vh]">
              <Image
                src="/images/product-bottle.jpg"
                alt="Aqua Mountain Signature Bottle"
                fill
                sizes="(max-width: 1024px) 70vw, 40vw"
                className="object-contain object-center drop-shadow-2xl mix-blend-multiply transition-transform duration-1000 hover:scale-105"
                priority
              />
            </div>
          </motion.div>

          {/* Right: Products & Prices List */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="flex flex-col gap-10 w-full max-w-md mx-auto lg:mx-0">
              {products.map((product, index) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                  className="group relative"
                >
                  <Link 
                    href={`https://wa.me/918979776596?text=Hi Aqua Mountain, I'd like to order the ${product.size} bottle.`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="flex justify-between items-end border-b border-pure-black/20 pb-6 relative z-10">
                      <div className="flex flex-col">
                        <span className="text-xs text-pure-black/40 mb-2 font-sans tracking-widest uppercase">Premium Water</span>
                        <h4 className="text-3xl md:text-5xl font-heading font-light tracking-wide group-hover:translate-x-3 transition-transform duration-500 ease-out">{product.size}</h4>
                      </div>
                      <p className="text-2xl md:text-4xl font-light text-pure-black/80">{product.price}</p>
                    </div>
                    
                    {/* Hover state line */}
                    <div className="absolute bottom-0 left-0 h-[1px] bg-pure-black w-0 group-hover:w-full transition-all duration-700 ease-out z-20"></div>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-8 pt-8 flex flex-col"
              >
                <p className="text-sm text-pure-black/50 leading-relaxed">
                  Click on any size to place an order via WhatsApp. 
                  <br className="hidden md:block" />
                  Free delivery on all orders above ₹100.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
