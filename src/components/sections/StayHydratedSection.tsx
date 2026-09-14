"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function StayHydratedSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-pure-black">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-110">
        <Image
          src="/images/mountain-lake.jpg"
          alt="Aqua Mountain Lake Landscape"
          fill
          sizes="100vw"
          quality={100}
          className="object-cover object-center"
        />
        {/* Subtle overlay, DO NOT over-darken */}
        <div className="absolute inset-0 bg-pure-black/20 z-10 mix-blend-multiply"></div>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center"
      >
        <h2 className="text-5xl md:text-7xl lg:text-8xl text-ivory/90 leading-[1.1] tracking-tight">
          Stay Hydrated,<br />
          Stay Healthy.
        </h2>
        {/* Tiny gold line */}
        <div className="h-[1px] w-12 bg-gold mt-12 opacity-80"></div>
      </motion.div>
    </section>
  );
}
