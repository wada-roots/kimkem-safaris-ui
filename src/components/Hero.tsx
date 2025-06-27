
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen safari-hero-bg flex items-center justify-center relative overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-4 text-center text-white z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the
            <span className="block text-safari-gold-400">Wild Beauty</span>
            <span className="block">of Africa</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Embark on extraordinary safari adventures through Kenya's most spectacular landscapes. 
            Experience wildlife encounters that will leave you breathless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="safari-btn-secondary text-lg px-10 py-4">
              Explore Safaris
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-safari-green-800 font-semibold py-4 px-10 rounded-lg transition-all duration-300 text-lg">
              Watch Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-safari-gold-400/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-8 h-8 bg-safari-gold-400/30 rounded-full animate-ping"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/80" />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
    </section>
  );
};

export default Hero;
