"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

export function ContactSection() {
  const [selectedProduct, setSelectedProduct] = useState("800 ML");
  const container = useRef<HTMLElement>(null);
  
  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(`Hi Aqua Mountain, I'd like to order the ${selectedProduct} bottle.`);
    window.open(`https://wa.me/918979776596?text=${message}`, "_blank");
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".cs-title",
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cs-title",
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(".cs-info-item",
      { autoAlpha: 0, x: -20 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cs-info-container",
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(".cs-form",
      { autoAlpha: 0, x: 20 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cs-form",
          start: "top 85%",
        }
      }
    );

  }, { scope: container });

  return (
    <section ref={container} id="contact" className="py-32 md:py-48 bg-pure-black text-ivory">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div
              className="cs-title invisible"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light leading-[1.1] mb-16 tracking-tight">
                Let&#39;s start a <br />
                <span className="text-gold">pure conversation.</span>
              </h2>
            </div>
            
            <div 
              className="cs-info-container flex flex-col gap-12"
            >
              <div className="cs-info-item invisible flex flex-col border-l border-ivory/20 pl-6 hover:border-gold transition-colors duration-500">
                <h4 className="text-micro text-ivory/50 mb-3">PHONE</h4>
                <div className="flex flex-col gap-1">
                  <Link href="tel:+918979776596" className="text-lg font-light hover:text-gold transition-colors">+91 89797 76596</Link>
                  <Link href="tel:+919719131246" className="text-lg font-light hover:text-gold transition-colors">+91 97191 31246</Link>
                </div>
              </div>
              
              <div className="cs-info-item invisible flex flex-col border-l border-ivory/20 pl-6 hover:border-gold transition-colors duration-500">
                <h4 className="text-micro text-ivory/50 mb-3">EMAIL</h4>
                <Link href="mailto:aquamountain412@gmail.com" className="text-lg font-light hover:text-gold transition-colors">
                  aquamountain412@gmail.com
                </Link>
              </div>
              
              <div className="cs-info-item invisible flex flex-col border-l border-ivory/20 pl-6 hover:border-gold transition-colors duration-500">
                <h4 className="text-micro text-ivory/50 mb-3">ADDRESS</h4>
                <p className="text-lg font-light leading-relaxed text-ivory/80">
                  Plot Sai Shyam Colony,<br />
                  Gram Mauja Runkata, Agra<br />
                  Uttar Pradesh, India
                </p>
              </div>
            </div>
          </div>
          
          {/* Purchase Enquiry Flow */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div 
              className="cs-form invisible bg-charcoal p-10 md:p-16 w-full max-w-xl mx-auto lg:ml-auto relative"
            >
              <h3 className="text-xl font-heading font-light tracking-wide mb-2 text-ivory">Direct Order</h3>
              <p className="text-ivory/50 font-light mb-12 text-sm">Select a product size and request an order via WhatsApp.</p>
              
              <div className="flex flex-col gap-10">
                <div>
                  <label className="block text-micro text-ivory/40 mb-6">SELECT BOTTLE SIZE</label>
                  <div className="flex gap-4 border-b border-ivory/10 pb-2">
                    {["275 ML", "800 ML", "1200 ML"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedProduct(size)}
                        className={`text-sm tracking-[0.1em] transition-all duration-300 relative pb-2 ${
                          selectedProduct === size 
                            ? "text-ivory" 
                            : "text-ivory/40 hover:text-ivory/70"
                        }`}
                      >
                        {size}
                        <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gold transition-all duration-300 ${selectedProduct === size ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={handleWhatsAppOrder}
                  className="group flex items-center justify-between w-full border border-ivory/20 px-8 py-5 hover:bg-ivory hover:text-pure-black hover:border-ivory transition-all duration-500"
                >
                  <span className="text-xs uppercase tracking-[0.2em] font-medium">ORDER VIA WHATSAPP</span>
                  <ArrowRight className="w-4 h-4 text-ivory/50 group-hover:text-pure-black transition-colors" />
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
