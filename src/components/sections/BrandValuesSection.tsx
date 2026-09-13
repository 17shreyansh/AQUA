import { Droplets, Mountain, ShieldCheck, Leaf } from "lucide-react";

const values = [
  {
    icon: Droplets,
    title: "100% PURE",
    description: "Every drop is rigorously filtered to ensure uncompromising purity and clarity.",
    number: "01",
  },
  {
    icon: Mountain,
    title: "NATURAL MINERALS",
    description: "Enriched with essential minerals that provide a crisp, refreshing taste.",
    number: "02",
  },
  {
    icon: ShieldCheck,
    title: "SAFE & TRUSTED",
    description: "Quality assured through advanced purification and strict hygiene standards.",
    number: "03",
  },
  {
    icon: Leaf,
    title: "ECO FRIENDLY",
    description: "Committed to responsible packaging and sustainable environmental practices.",
    number: "04",
  },
];

export function BrandValuesSection() {
  return (
    <section className="bg-black text-white border-y border-white/10">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="flex flex-col group relative">
                {/* Decorative Number */}
                <div className="absolute -top-6 -left-4 text-[100px] font-heading font-bold text-white/5 z-0 select-none transition-transform duration-500 group-hover:-translate-y-2">
                  {value.number}
                </div>
                
                <div className="relative z-10 flex flex-col h-full border-l border-gold/30 pl-6 py-2 transition-colors duration-300 group-hover:border-gold">
                  <Icon className="w-8 h-8 text-gold mb-6 stroke-[1.5]" />
                  <h3 className="text-xl font-heading font-bold tracking-wide mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
