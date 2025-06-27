
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SafariPackages from '@/components/SafariPackages';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SafariPackages />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
