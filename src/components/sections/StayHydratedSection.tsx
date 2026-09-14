"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

export function StayHydratedSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax Background
    gsap.fromTo(".sh-bg-image",
      { y: "-15%" },
      {
        y: "15%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    // Text Fade Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    tl.fromTo(".sh-text", 
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.3, ease: "none" }
    )
    .to(".sh-text", 
      { autoAlpha: 0, duration: 0.3, ease: "none" }, 
      0.7 // Start fade out at 70% of scroll progress
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-pure-black">
      {/* Background Image with Parallax */}
      <div className="sh-bg-image absolute inset-0 z-0 scale-110">
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
      </div>

      <div 
        className="sh-text invisible container mx-auto px-6 relative z-20 text-center flex flex-col items-center"
      >
        <h2 className="text-5xl md:text-7xl lg:text-8xl text-ivory/90 leading-[1.1] tracking-tight">
          Stay Hydrated,<br />
          Stay Healthy.
        </h2>
        {/* Tiny gold line */}
        <div className="h-[1px] w-12 bg-gold mt-12 opacity-80"></div>
      </div>
    </section>
  );
}
