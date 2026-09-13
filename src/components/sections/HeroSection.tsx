"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-updated.png"
          alt="Aqua Mountain Bottle in Nature"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
          quality={100}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black/20 z-10"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col justify-center h-full">
        <div className="max-w-2xl mt-16 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-gold tracking-widest text-sm font-semibold uppercase mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gold"></span>
              Aqua Mountain
            </h2>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6"
          >
            PURE AS <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold">NATURE</span>
            <br />
            SAFE FOR LIFE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-light"
          >
            Experience the crisp, refreshing taste of natural mineral water, crafted for your well-being.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="#products"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-black font-semibold rounded-sm tracking-wide h-14 px-8 transition-colors"
            >
              EXPLORE OUR WATER
            </Link>
            <Link 
              href="#contact"
              className="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 rounded-sm font-semibold tracking-wide backdrop-blur-sm h-14 px-8 transition-colors"
            >
              BUY NOW
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
            <motion.div 
                className="w-full h-1/2 bg-gold absolute top-0"
                animate={{ top: ["-50%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
      </motion.div>
    </section>
  );
}
