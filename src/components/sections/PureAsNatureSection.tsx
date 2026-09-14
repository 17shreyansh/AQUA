"use client";

import { useRef } from "react";
import { Sparkles, ShieldCheck, Droplets, Scale, Leaf } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const specs = [
  { label: "ADVANCED PURIFICATION", icon: Sparkles },
  { label: "QUALITY ASSURED", icon: ShieldCheck },
  { label: "HYGIENIC PACKAGING", icon: Droplets },
  { label: "MINERAL BALANCE", icon: Scale },
  { label: "RESPONSIBLE PACKAGING", icon: Leaf },
];

export function PureAsNatureSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".pan-title",
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pan-title",
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(".pan-desc",
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".pan-desc",
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(".pan-spec-item",
      { autoAlpha: 0, x: -20 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pan-specs-container",
          start: "top 85%",
        }
      }
    );

  }, { scope: container });

  return (
    <section ref={container} className="py-32 md:py-48 bg-ivory text-pure-black border-y border-pure-black/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Statement & Copy */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <div
              className="pan-title invisible"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light leading-[1.1] mb-4 tracking-tight">
                A Pure Choice <br />
                <span className="text-pure-black">for a Healthy Life.</span>
              </h2>
            </div>
            
            <p 
              className="pan-desc invisible text-pure-black/60 text-base leading-relaxed mt-8 max-w-md font-light"
            >
              Our process is designed with clinical precision to protect the natural vitality of our source. Every step is rigorously monitored to ensure uncompromising hygiene and perfect mineral equilibrium.
            </p>
          </div>
          
          {/* Right: Technical Specification System */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <div
              className="pan-specs-container flex flex-col w-full"
            >
              <div className="divider-thin bg-pure-black/20"></div>
              {specs.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <div 
                    key={index}
                    className="pan-spec-item invisible group"
                  >
                    <div className="flex items-center justify-between py-6 md:py-8 px-2 transition-colors duration-500 hover:bg-pure-black/5">
                      <div className="flex items-center gap-6 md:gap-12">
                        <span className="text-[10px] font-medium text-pure-black/40 w-4">
                          0{index + 1}
                        </span>
                        <h4 className="text-xs md:text-sm uppercase tracking-[0.2em] font-sans text-pure-black/80 group-hover:text-pure-black transition-colors">
                          {spec.label}
                        </h4>
                      </div>
                      <Icon className="w-4 h-4 text-pure-black/30 group-hover:text-gold transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <div className="divider-thin bg-pure-black/20"></div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
