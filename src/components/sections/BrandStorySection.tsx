"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BrandStorySection() {
  return (
    <section className="py-32 md:py-48 bg-ivory text-pure-black relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-24 md:mb-32"
        >
          <h3 className="text-micro text-pure-black/50 mb-8">AQUA MOUNTAIN</h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light tracking-tight">
            Nature, captured at its <span className="text-pure-black">purest.</span>
          </h2>
        </motion.div>

        <div className="relative w-full aspect-square md:aspect-[21/9] bg-pure-black/5 overflow-hidden">
          <motion.div 
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/mountain-lake.jpg"
              alt="Aqua Mountain Source"
              fill
              className="object-cover object-center opacity-80 mix-blend-multiply"
              sizes="100vw"
            />
          </motion.div>

          {/* Annotations */}
          <div className="absolute inset-0 flex flex-col md:flex-row justify-between p-8 md:p-16">
            <div className="self-start md:self-end">
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-ivory/90 bg-pure-black/40 backdrop-blur-md px-4 py-2">
                01 — THE SOURCE
              </span>
            </div>
            
            <div className="self-end md:self-start text-right">
              <p className="text-ivory/90 text-sm max-w-xs font-light leading-relaxed bg-pure-black/40 backdrop-blur-md p-6">
                From the highest peaks, water travels through natural rock filters, acquiring essential minerals before reaching our pristine bottling facility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
