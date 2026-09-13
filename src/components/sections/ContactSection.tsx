"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  const [selectedProduct, setSelectedProduct] = useState("800 ML");
  
  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(`Hi Aqua Mountain, I'd like to order the ${selectedProduct} bottle.`);
    window.open(`https://wa.me/918979776596?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-gold"></span>
              <span className="uppercase tracking-widest text-sm font-semibold text-gold-dark">Reach Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-12">
              Let&#39;s start a <br />
              <span className="italic font-accent font-normal text-gray-500">pure conversation.</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-1">Phone</h4>
                  <p className="text-gray-600 mb-2">Mon-Sat, 9AM to 6PM</p>
                  <div className="flex flex-col gap-1">
                    <Link href="tel:+918979776596" className="text-lg font-medium hover:text-gold transition-colors">+91 89797 76596</Link>
                    <Link href="tel:+919719131246" className="text-lg font-medium hover:text-gold transition-colors">+91 97191 31246</Link>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-1">Email</h4>
                  <p className="text-gray-600 mb-2">For wholesale and general inquiries</p>
                  <Link href="mailto:aquamountain412@gmail.com" className="text-lg font-medium hover:text-gold transition-colors">
                    aquamountain412@gmail.com
                  </Link>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-1">Address</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Plot Sai Shyam Colony,<br />
                    Gram Mauja Runkata,<br />
                    Agra – 282007,<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Purchase Enquiry Flow */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="bg-gray-50 p-8 md:p-12 rounded-sm border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-heading font-bold mb-2">Order via WhatsApp</h3>
              <p className="text-gray-600 mb-8">Select a product size and send us a message to place your order directly.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold tracking-wide uppercase mb-4 text-gray-800">Select Bottle Size</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["275 ML", "800 ML", "1200 ML"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedProduct(size)}
                        className={`py-3 px-2 border rounded-sm font-medium transition-all ${
                          selectedProduct === size 
                            ? "bg-black text-white border-black" 
                            : "bg-white text-gray-700 border-gray-200 hover:border-gold hover:text-gold-dark"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    onClick={handleWhatsAppOrder}
                    className="w-full h-14 text-lg bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-sm font-semibold tracking-wide flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    ORDER {selectedProduct} NOW
                  </Button>
                </div>
                
                <p className="text-xs text-center text-gray-500 mt-4">
                  You will be redirected to WhatsApp to complete your purchase inquiry.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
