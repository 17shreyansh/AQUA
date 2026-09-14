"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const values = [
  {
    title: "100% PURE",
    description: "Rigorously filtered for uncompromising clarity and a pristine drinking experience.",
    number: "01",
  },
  {
    title: "NATURAL MINERALS",
    description: "Enriched with essential minerals for a crisp, perfectly balanced taste.",
    number: "02",
  },
  {
    title: "SAFE & TRUSTED",
    description: "Quality assured through strict hygiene standards and rigorous testing.",
    number: "03",
  },
  {
    title: "ECO FRIENDLY",
    description: "Committed to sustainable environmental practices and recyclable packaging.",
    number: "04",
  },
];

export function BrandValuesSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".bv-header-title",
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".bv-header-title",
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(".bv-header-desc",
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".bv-header-desc",
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(".bv-list-item",
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".bv-list-container",
          start: "top 85%",
        }
      }
    );

  }, { scope: container });

  return (
    <section ref={container} className="bg-pure-black text-ivory py-32 md:py-48">
      <div className="container mx-auto">
        
        {/* Header Section */}
        <div className="px-6 md:px-12 mb-20 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div 
              className="bv-header-title invisible md:col-span-8"
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-light tracking-tight leading-[1.1]">
                PURE BY NATURE.<br />
                <span className="italic text-ivory/50">PRECISE BY PROCESS.</span>
              </h2>
            </div>
            
            <div 
              className="bv-header-desc invisible md:col-span-4 flex md:items-end"
            >
              <p className="text-ivory/50 font-light text-lg md:text-base max-w-sm">
                Every drop is a testament to our dedication to quality, health, and the environment.
              </p>
            </div>
          </div>
        </div>

        {/* List Section */}
        <div className="bv-list-container flex flex-col w-full border-t border-ivory/10">
          {values.map((value, index) => (
            <div
              key={index}
              className="bv-list-item invisible group border-b border-ivory/10 hover:bg-ivory/[0.02] transition-colors duration-500 cursor-default"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start md:items-center py-10 md:py-16 px-6 md:px-12">
                
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="text-xs font-sans tracking-[0.2em] text-ivory/30 group-hover:text-gold transition-colors duration-500">
                    {value.number}
                  </span>
                </div>
                
                {/* Title */}
                <div className="md:col-span-6">
                  <h3 className="text-3xl md:text-5xl font-heading font-light tracking-tight text-ivory/70 group-hover:text-ivory transition-colors duration-500">
                    {value.title}
                  </h3>
                </div>
                
                {/* Description */}
                <div className="md:col-span-4 md:flex md:justify-end">
                  <p className="text-ivory/40 font-light text-sm leading-relaxed max-w-xs md:text-right group-hover:text-ivory/70 transition-colors duration-500">
                    {value.description}
                  </p>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
