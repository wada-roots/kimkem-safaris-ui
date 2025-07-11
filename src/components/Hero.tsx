
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Full-screen background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/destinations/maasai-mara.jpeg')",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center text-white z-10 relative flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto animate-fade-in">
           <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-safari-gold-400">Lifetime</span>
            <span className="block">Safari Adventures</span>
            <span className="block text-white/90">Await You</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Experience the magic of Africa's wilderness in luxury tented camps.
            Create memories that will last a lifetime in Kenya's most
            spectacular landscapes.
          </p>
        </div>
      </div>

      {/* Floating Elements - hidden on mobile */}
      <div className="hidden md:block absolute top-20 left-10 w-20 h-20 bg-safari-gold-400/20 rounded-full animate-bounce"></div>
      <div className="hidden md:block absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
      <div className="hidden md:block absolute top-1/2 right-20 w-8 h-8 bg-safari-gold-400/30 rounded-full animate-ping"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-safari-gold-400" />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
    </section>
  );
};

export default Hero;
