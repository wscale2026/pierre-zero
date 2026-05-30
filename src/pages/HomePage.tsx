import HeroSection from '@/sections/HeroSection';
import TrustBar from '@/sections/TrustBar';
import ProductShowcase from '@/sections/ProductShowcase';
import B2BSection from '@/sections/B2BSection';
import WhyChooseSection from '@/sections/WhyChooseSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import ProcessStepsSection from '@/sections/ProcessStepsSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <ProductShowcase />
      <B2BSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ProcessStepsSection />
    </main>
  );
}
