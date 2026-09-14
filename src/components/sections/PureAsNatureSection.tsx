"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Droplets, Scale, Leaf } from "lucide-react";

const specs = [
  { label: "ADVANCED PURIFICATION", icon: Sparkles },
  { label: "QUALITY ASSURED", icon: ShieldCheck },
  { label: "HYGIENIC PACKAGING", icon: Droplets },
  { label: "MINERAL BALANCE", icon: Scale },
  { label: "RESPONSIBLE PACKAGING", icon: Leaf },
];

export function PureAsNatureSection() {
  return (
    <section className="py-32 md:py-48 bg-ivory text-pure-black border-y border-pure-black/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Statement & Copy */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light leading-[1.1] mb-4 tracking-tight">
                A Pure Choice <br />
                <span className="text-pure-black">for a Healthy Life.</span>
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-pure-black/60 text-base leading-relaxed mt-8 max-w-md font-light"
            >
              Our process is designed with clinical precision to protect the natural vitality of our source. Every step is rigorously monitored to ensure uncompromising hygiene and perfect mineral equilibrium.
            </motion.p>
          </div>
          
          {/* Right: Technical Specification System */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="flex flex-col w-full"
            >
              <div className="divider-thin bg-pure-black/20"></div>
              {specs.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <motion.div 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="group"
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
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
