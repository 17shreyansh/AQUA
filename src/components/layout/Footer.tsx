"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-pure-black text-ivory pt-32 pb-12 border-t border-ivory/10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col items-center text-center mb-32">
          <Link href="/" className="inline-block mb-16 opacity-80 hover:opacity-100 transition-opacity duration-500">
            <Logo width={160} />
          </Link>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-light tracking-widest text-ivory/90">
            PURE AS NATURE
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-32 max-w-6xl mx-auto border-t border-ivory/10 pt-16">
          
          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-micro text-ivory/50 mb-8">NAVIGATION</h4>
            <ul className="flex flex-col gap-4">
              {["HOME", "ABOUT", "WATER", "PRODUCTS", "CONTACT"].map((link) => (
                <li key={link}>
                  <Link 
                    href={`#${link.toLowerCase()}`} 
                    className="text-xs tracking-[0.2em] text-ivory/70 hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-micro text-ivory/50 mb-8">CONTACT</h4>
            <ul className="flex flex-col gap-4 text-xs tracking-[0.1em] text-ivory/70">
              <li>
                <Link href="tel:+918979776596" className="hover:text-gold transition-colors">+91 89797 76596</Link>
              </li>
              <li>
                <Link href="mailto:aquamountain412@gmail.com" className="hover:text-gold transition-colors">aquamountain412@gmail.com</Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-micro text-ivory/50 mb-8">SOCIAL</h4>
            <ul className="flex flex-col gap-4 text-xs tracking-[0.2em] text-ivory/70">
              <li>
                <Link href="#" className="hover:text-gold transition-colors">INSTAGRAM</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">FACEBOOK</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">LINKEDIN</Link>
              </li>
            </ul>
          </div>
          
          {/* Action */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-micro text-ivory/50 mb-8">ORDER</h4>
            <Link 
              href="#contact"
              className="text-xs tracking-[0.2em] text-pure-black bg-ivory hover:bg-ivory/90 px-8 py-3 transition-colors duration-500"
            >
              BUY NOW
            </Link>
          </div>
          
        </div>
        
        {/* Bottom Line */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-[0.2em] text-ivory/30 pt-8 border-t border-ivory/10">
          <p>&copy; {new Date().getFullYear()} AQUA MOUNTAIN. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-8 mt-4 md:mt-0">
            <Link href="#" className="hover:text-ivory/60 transition-colors">PRIVACY</Link>
            <Link href="#" className="hover:text-ivory/60 transition-colors">TERMS</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
