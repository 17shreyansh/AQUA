import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BrandValuesSection } from "@/components/sections/BrandValuesSection";
import { StayHydratedSection } from "@/components/sections/StayHydratedSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { PureAsNatureSection } from "@/components/sections/PureAsNatureSection";
import { BrandStorySection } from "@/components/sections/BrandStorySection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BrandValuesSection />
      <StayHydratedSection />
      <ProductsSection />
      <PureAsNatureSection />
      <BrandStorySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
