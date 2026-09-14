"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "100% PURE",
    description: "Rigorously filtered for uncompromising clarity.",
    number: "01",
  },
  {
    title: "NATURAL MINERALS",
    description: "Enriched with essential minerals for a crisp taste.",
    number: "02",
  },
  {
    title: "SAFE & TRUSTED",
    description: "Quality assured through strict hygiene standards.",
    number: "03",
  },
  {
    title: "ECO FRIENDLY",
    description: "Committed to sustainable environmental practices.",
    number: "04",
  },
];

export function BrandValuesSection() {
  return (
    <section className="bg-pure-black text-ivory py-32 md:py-48">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 md:mb-32"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-light tracking-tight">
            PURE BY NATURE.<br />
            PRECISE BY PROCESS.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col relative pr-8 lg:pr-12 group"
            >
              {/* Vertical divider (except last on desktop) */}
              <div className={`hidden lg:block absolute top-0 right-0 w-[1px] h-full bg-ivory/10 ${index === values.length - 1 ? '!hidden' : ''}`}></div>
              
              <div className="flex items-end gap-3 mb-8">
                <span className="text-micro text-ivory/40">
                  {value.number}
                </span>
                <span className="w-1.5 h-1.5 bg-gold rounded-full mb-1"></span>
              </div>
              
              <h3 className="text-sm font-sans uppercase tracking-[0.15em] mb-4 text-ivory/90 group-hover:text-ivory transition-colors">
                {value.title}
              </h3>
              
              <p className="text-ivory/50 text-sm leading-relaxed max-w-[240px] font-light group-hover:text-ivory/70 transition-colors">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
