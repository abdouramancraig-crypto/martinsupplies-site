import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import CredibilityIcons from './components/CredibilityIcons';
import OriginStory from './components/OriginStory';
import Testimonials from './components/Testimonials';
import DistributionMap from './components/DistributionMap';
import CTASection from './components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <CredibilityIcons />
      <OriginStory />
      <Testimonials />
      <DistributionMap />
      <CTASection />
    </>
  );
}
