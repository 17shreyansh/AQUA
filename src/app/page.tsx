import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PureAsNatureSection } from "@/components/sections/PureAsNatureSection";
import { BrandValuesSection } from "@/components/sections/BrandValuesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { StayHydratedSection } from "@/components/sections/StayHydratedSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PureAsNatureSection />
      <BrandValuesSection />
      <StayHydratedSection />
      <ProductsSection />
      <TrustSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
