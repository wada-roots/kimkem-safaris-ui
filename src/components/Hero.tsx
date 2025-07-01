
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Full-screen background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center text-white z-10 relative flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-safari-green-400">Lifetime</span>
            <span className="block">Safari Adventures</span>
            <span className="block text-white/90">Await You</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Experience the magic of Africa's wilderness in luxury tented camps. 
            Create memories that will last a lifetime in Kenya's most spectacular landscapes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link to="/safaris" className="safari-btn-secondary text-lg px-10 py-4">
              Explore Safaris
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-safari-green-800 font-semibold py-4 px-10 rounded-lg transition-all duration-300 text-lg">
              Watch Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-safari-green-400/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-8 h-8 bg-safari-green-400/30 rounded-full animate-ping"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/80" />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
    </section>
  );
};

export default Hero;
