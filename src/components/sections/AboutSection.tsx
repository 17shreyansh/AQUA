export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-gray-50 text-black">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
        <h2 className="text-gold tracking-widest text-sm font-semibold uppercase mb-6 flex items-center justify-center gap-4">
          <span className="w-8 h-[1px] bg-gold"></span>
          About Aqua Mountain
          <span className="w-8 h-[1px] bg-gold"></span>
        </h2>
        
        <p className="text-2xl md:text-4xl font-heading font-medium leading-relaxed text-gray-900 mb-12">
          Aqua Mountain is committed to delivering safe, refreshing packaged drinking water with a focus on <span className="text-gold-dark italic font-accent">quality, purity,</span> and responsible packaging.
        </p>
        
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          We understand that water is the essence of life. That is why our facility uses advanced purification techniques to ensure that every bottle you open meets rigorous hygiene and mineral balance standards. We do not compromise on the source, the process, or the packaging.
        </p>
      </div>
    </section>
  );
}
