"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "WATER", href: "#water" },
  { name: "PRODUCTS", href: "#products" },
  { name: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled
          ? "bg-pure-black/90 backdrop-blur-lg border-b border-white/5 py-4"
          : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group relative z-10">
          <Logo width={120} className="group-hover:opacity-70 transition-opacity duration-500" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.2em] font-medium text-ivory/70 hover:text-ivory transition-colors duration-500 relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-ivory/50 transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          
          <Link 
            href="#contact"
            className="text-[10px] uppercase tracking-[0.2em] font-medium text-pure-black bg-ivory hover:bg-ivory/90 px-8 py-3 transition-colors duration-500"
          >
            BUY NOW
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-ivory relative z-10 mix-blend-difference"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-pure-black z-0 transition-opacity duration-700 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm uppercase tracking-[0.3em] font-light text-ivory/80 hover:text-ivory transition-all duration-500 translate-y-4 ${
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className={`mt-8 text-xs uppercase tracking-[0.2em] font-medium text-pure-black bg-ivory px-10 py-4 transition-all duration-700 delay-500 ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            BUY NOW
          </Link>
        </div>
      </div>
    </nav>
  );
}
