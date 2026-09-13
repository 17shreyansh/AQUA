import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function PureAsNatureSection() {
  return (
    <section id="pure" className="py-24 md:py-32 bg-white text-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-gold"></span>
              <span className="uppercase tracking-widest text-sm font-semibold text-gold-dark">Our Philosophy</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] mb-8">
              Every drop begins with a <br className="hidden lg:block"/>
              <span className="italic font-accent font-normal text-gold-dark">commitment to purity.</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Aqua Mountain is born from nature&#39;s finest sources. We believe that water should be consumed exactly as nature intended—pure, refreshing, and enriched with essential minerals. Our state-of-the-art purification process ensures that every bottle delivers uncompromising quality and safety.
            </p>
            
            <div className="space-y-4">
              {[
                "100% Pure & Natural",
                "Enriched with Essential Minerals",
                "Advanced Purification Process",
                "Eco-Friendly Packaging Initiatives"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle2 className="text-gold w-6 h-6 shrink-0" strokeWidth={1.5} />
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Image Composition */}
          <div className="w-full lg:w-7/12 relative h-[500px] lg:h-[700px]">
            <div className="absolute inset-0 bg-gray-100 rounded-sm overflow-hidden">
              <Image 
                src="/images/pure-macro.jpg" 
                alt="Water Droplet Texture" 
                fill
                sizes="50vw"
                className="object-cover object-center mix-blend-overlay opacity-80"
              />
            </div>
            {/* Minimal Info Marker */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-sm shadow-xl max-w-xs border-l-4 border-gold">
              <p className="font-heading font-bold text-xl mb-1">Naturally Sourced</p>
              <p className="text-sm text-gray-600">Preserving the delicate balance of nature in every drop.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
