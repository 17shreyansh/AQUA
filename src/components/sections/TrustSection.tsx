import { Droplet, Shield, Package, Check, Sparkles } from "lucide-react";

const trustPoints = [
  { icon: Sparkles, title: "Advanced Purification" },
  { icon: Shield, title: "Quality Assured" },
  { icon: Package, title: "Hygienic Packaging" },
  { icon: Droplet, title: "Mineral Balanced" },
  { icon: Check, title: "Every Drop 100% Pure" },
];

export function TrustSection() {
  return (
    <section className="py-24 bg-white text-black border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight mb-4">
              A Pure Choice <br/>
              <span className="text-gold-dark font-accent italic font-normal">for a Healthy Life</span>
            </h2>
            <p className="text-gray-500 text-sm">
              Certified by FSSAI and ISO standards. We adhere to the highest global benchmarks for food safety and quality management.
            </p>
          </div>

          <div className="w-full md:w-2/3">
            <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 md:gap-4 border-l-2 md:border-l-0 md:border-t-2 border-gold/30 pl-6 md:pl-0 pt-0 md:pt-12 relative">
              
              {trustPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={index} className="flex md:flex-col items-center md:items-start gap-4 md:gap-6 w-full sm:w-[45%] md:w-auto relative group">
                    {/* Decorative dot on the border (desktop) */}
                    <div className="hidden md:block absolute -top-[50px] left-0 w-2 h-2 bg-gold rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-gold transition-colors">
                      <Icon className="w-5 h-5 text-black group-hover:text-gold transition-colors" />
                    </div>
                    
                    <span className="font-heading font-semibold text-sm md:text-xs lg:text-sm tracking-wide uppercase">
                      {point.title}
                    </span>
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
