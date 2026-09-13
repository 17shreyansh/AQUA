import Image from "next/image";

export function StayHydratedSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mountain-lake.jpg"
          alt="Aqua Mountain Lake Landscape"
          fill
          sizes="100vw"
          quality={100}
          className="object-cover object-center"
        />
        {/* Subtle overlay for text contrast */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <div className="inline-block">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-accent italic text-white drop-shadow-xl leading-tight">
            Stay Hydrated,
            <br />
            Stay Healthy
          </h2>
          {/* Gold underline inspired by poster */}
          <div className="h-1 w-3/4 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mt-8"></div>
        </div>
      </div>
    </section>
  );
}
