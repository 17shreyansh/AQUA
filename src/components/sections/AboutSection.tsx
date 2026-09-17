"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const principles = [
  {
    title: "NATURALLY SOURCED",
    desc: "From clean, protected mountain springs.",
  },
  {
    title: "HEALTHY MINERALS",
    desc: "Filtered by nature for a crisp, fresh taste.",
  },
  {
    title: "PERFECT BALANCE",
    desc: "Healthy pH levels that are great for your body.",
  },
  {
    title: "ECO-FRIENDLY",
    desc: "100% recyclable glass bottles to protect our planet.",
  },
];

export function AboutSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".about-image", 
      { autoAlpha: 0, scale: 0.95 },
      { 
        autoAlpha: 1, 
        scale: 1, 
        duration: 1.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(".about-deco-1",
      { autoAlpha: 0, x: -20, y: 20 },
      { autoAlpha: 1, x: 0, y: 0, duration: 1, delay: 0.4, scrollTrigger: { trigger: ".about-image", start: "top 85%" } }
    );
    gsap.fromTo(".about-deco-2",
      { autoAlpha: 0, x: 20, y: -20 },
      { autoAlpha: 1, x: 0, y: 0, duration: 1, delay: 0.6, scrollTrigger: { trigger: ".about-image", start: "top 85%" } }
    );

    gsap.fromTo(".about-badge",
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.8, delay: 0.8, scrollTrigger: { trigger: ".about-image", start: "top 85%" } }
    );

    gsap.fromTo(".about-text",
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".about-text", start: "top 85%" } }
    );

    gsap.fromTo(".about-principle",
      { autoAlpha: 0, y: 20 },
      { 
        autoAlpha: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.1,
        scrollTrigger: { 
          trigger: ".about-principles-grid", 
          start: "top 85%" 
        } 
      }
    );

  }, { scope: container });

  return (
    <section ref={container} id="about" className="py-24 md:py-32 bg-ivory text-pure-black relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Creative Image Side */}
          <div className="w-full lg:w-1/2 relative pl-4 md:pl-8 lg:pl-0">
            <div
              className="about-image invisible relative z-10 aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none shadow-2xl rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-charcoal/10 z-10 mix-blend-overlay transition-opacity duration-700 hover:opacity-0 pointer-events-none"></div>
              <Image
                src="/images/premium-bottles.jpg"
                alt="Premium Aqua Bottles"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transform transition-transform duration-1000 hover:scale-105"
              />
            </div>

            {/* Decorative elements */}
            <div
              className="about-deco-1 invisible absolute -bottom-8 -left-2 w-2/3 h-2/3 border border-pure-black/10 -z-10 hidden md:block"
            />
            <div
              className="about-deco-2 invisible absolute -top-8 -right-8 w-1/2 h-1/2 bg-charcoal/5 -z-10 hidden md:block"
            />

            {/* Floating badge */}
            <div
              className="about-badge invisible relative mt-8 mx-auto max-w-[260px] z-20 bg-white p-6 shadow-xl border border-pure-black/10 lg:absolute lg:mt-0 lg:mx-0 lg:bottom-12 lg:-right-12 lg:bg-white/90 lg:backdrop-blur-md lg:border-white/20 lg:max-w-[220px]"
            >
              <p className="text-xs uppercase tracking-widest text-pure-black/60 mb-2 font-medium">Est. 2026</p>
              <p className="text-sm font-light leading-snug">Defining a new standard in hydration and purity.</p>
            </div>
          </div>

          {/* Content side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center mt-12 lg:mt-0">
            <div
              className="about-text invisible"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-pure-black/30"></span>
                <h3 className="text-xs font-semibold tracking-[0.2em] text-pure-black/50 uppercase">Our Philosophy</h3>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light leading-[1.1] mb-8 tracking-tight">
                The essence of <br />
                <span className="font-normal italic">uncompromised</span> purity.
              </h2>

              <p className="text-pure-black/60 font-light leading-relaxed max-w-lg mb-12 text-lg">
                We believe water should be simple, pure, and refreshing. Our philosophy is to capture nature's best water and bring it straight to you, just as it was meant to be.
              </p>
            </div>

            <div className="about-principles-grid grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="about-principle invisible group relative pb-4"
                >
                  <div className="text-[10px] font-bold text-charcoal/20 mb-3 tracking-widest transition-colors duration-500 group-hover:text-gold/50">
                    0{index + 1}
                  </div>
                  <h4 className="text-sm uppercase tracking-[0.15em] font-medium text-pure-black mb-2 group-hover:text-gold transition-colors duration-300">
                    {principle.title}
                  </h4>
                  <p className="text-xs text-pure-black/50 leading-relaxed font-light">
                    {principle.desc}
                  </p>

                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-0 w-8 h-[1px] bg-pure-black/10 transition-all duration-500 group-hover:w-full group-hover:bg-gold/50"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
