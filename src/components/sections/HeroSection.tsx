"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[100dvh] min-h-[750px] flex flex-col items-center justify-center overflow-hidden bg-charcoal">
      {/* Crisp Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-updated.png"
          alt="Aqua Mountain Bottle in Nature"
          fill
          sizes="100vw"
          priority
          className="object-cover object-right md:object-center"
          quality={100}
        />
        {/* Uniform subtle darkening overlay to ensure white text pops everywhere */}
        <div className="absolute inset-0 bg-pure-black/40 z-10"></div>
        {/* Soft bottom gradient to ground the section */}
        <div className="absolute inset-0 bg-gradient-to-t from-pure-black/80 via-transparent to-transparent z-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center justify-center text-center mt-12 md:mt-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <h2 className="text-micro text-ivory/90 uppercase tracking-[0.4em]">
            AQUA MOUNTAIN
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
          className="mb-10 w-full max-w-5xl"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-heading font-light text-ivory leading-[0.9] tracking-tighter">
            PURE AS <span className="text-gold block sm:inline mt-2 sm:mt-0">NATURE</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="text-ivory/80 text-sm md:text-base max-w-lg mx-auto leading-relaxed font-light tracking-wide">
            Experience the crisp, refreshing taste of natural mineral water. Sourced from the highest, untouched alpine peaks.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto"
        >
          <Link 
            href="#products"
            className="text-label text-pure-black bg-ivory hover:bg-gold font-medium px-12 py-4 transition-colors duration-500 w-full sm:w-auto text-center"
          >
            DISCOVER
          </Link>
          <Link 
            href="#contact"
            className="text-label text-ivory border border-ivory/30 hover:border-ivory hover:bg-ivory/10 px-12 py-4 transition-all duration-500 w-full sm:w-auto text-center"
          >
            SHOP NOW
          </Link>
        </motion.div>
        
      </div>
      
      {/* Scroll indicator - Bottom Center */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-ivory/20 overflow-hidden relative">
            <motion.div 
                className="w-full h-1/2 bg-ivory absolute top-0"
                animate={{ top: ["-50%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
        <span className="text-micro text-ivory/40 tracking-[0.3em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
