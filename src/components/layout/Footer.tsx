import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <Logo width={160} />
            </Link>
            <div>
              <p className="text-lg font-heading font-bold tracking-wide">PURE AS NATURE</p>
              <p className="text-sm tracking-wide text-gray-400 mt-1">SAFE FOR LIFE</p>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Premium packaged drinking water enriched with natural minerals.
            </p>
          </div>
          
          {/* Navigation Column */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-6 text-gold">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Products", "Contact"].map((link) => (
                <li key={link}>
                  <Link 
                    href={`#${link.toLowerCase().replace(" us", "")}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-6 text-gold">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="tel:+918979776596" className="hover:text-white transition-colors">+91 89797 76596</Link>
              </li>
              <li>
                <Link href="mailto:aquamountain412@gmail.com" className="hover:text-white transition-colors">aquamountain412@gmail.com</Link>
              </li>
              <li className="leading-relaxed pt-2">
                Plot Sai Shyam Colony,<br />
                Gram Mauja Runkata,<br />
                Agra – 282007, U.P.
              </li>
            </ul>
          </div>
          
          {/* CTA Column */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-6 text-gold">Ready to Order?</h4>
            <p className="text-gray-400 text-sm mb-6">
              Experience the purity of Aqua Mountain water today.
            </p>
            <Link 
              href="#contact"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-black font-semibold rounded-sm tracking-wide w-full h-10 transition-colors"
            >
              BUY NOW
            </Link>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Aqua Mountain. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
