"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function BrandStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-ivory text-pure-black relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="w-full lg:w-5/12 z-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-[1px] bg-gold"></span>
                <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-pure-black/60">AQUA MOUNTAIN</h3>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light leading-[1.15] tracking-tight mb-8">
                A masterpiece of <br />
                <span className="italic font-normal">nature</span>, bottled <br />
                at the source.
              </h2>
              
              <p className="text-pure-black/60 font-light leading-relaxed text-lg max-w-md mb-12">
                From the highest, untouched peaks, our water journeys through ancient, natural rock filters. It acquires a perfect balance of essential minerals before reaching you, exactly as nature intended—pure, pristine, and perfectly refreshing.
              </p>
              
              <div className="flex items-center gap-12">
                <div>
                  <p className="text-3xl font-heading mb-1 text-pure-black">100<span className="text-gold text-lg">%</span></p>
                  <p className="text-[10px] uppercase tracking-widest text-pure-black/50">Natural Origin</p>
                </div>
                <div className="w-[1px] h-12 bg-pure-black/10"></div>
                <div>
                  <p className="text-3xl font-heading mb-1 text-pure-black">7.4</p>
                  <p className="text-[10px] uppercase tracking-widest text-pure-black/50">Perfect pH Level</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-7/12 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-square overflow-hidden"
            >
              <motion.div style={{ y }} className="absolute -inset-[20%] w-[140%] h-[140%]">
                <Image
                  src="/images/pure-water-source.jpg"
                  alt="Crystal clear water source"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </motion.div>
              
              {/* Overlay styling for depth */}
              <div className="absolute inset-0 border border-pure-black/5 z-10"></div>
              
              {/* Annotation */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/90 backdrop-blur-md p-5 max-w-[200px] shadow-2xl z-20"
              >
                <div className="w-2 h-2 rounded-full bg-gold mb-3"></div>
                <p className="text-xs font-medium text-pure-black uppercase tracking-wider mb-1">The Source</p>
                <p className="text-[10px] text-pure-black/60 leading-tight">Protected mountain springs, untouched by time.</p>
              </motion.div>
            </motion.div>
            
            {/* Decorative background element */}
            <div className="absolute -top-12 -right-12 w-2/3 h-2/3 bg-charcoal/5 -z-10 hidden lg:block"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
