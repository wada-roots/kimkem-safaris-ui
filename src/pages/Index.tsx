
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SafariPackages from '@/components/SafariPackages';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-b from-white to-safari-green-50">
        <Hero />
        <SafariPackages />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
