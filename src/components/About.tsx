
import { Award, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "2,500+", label: "Happy Travelers" },
    { icon: Globe, number: "15+", label: "Destinations" },
    { icon: Award, number: "10+", label: "Years Experience" },
    { icon: Heart, number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 safari-text-gradient">
              Your Gateway to
              <span className="block">African Adventure</span>
            </h2>
            <p className="text-lg text-safari-green-600 mb-6 leading-relaxed">
              At Kimkem Safaris, we are passionate about creating extraordinary African safari experiences. 
              Our team of expert guides and wildlife enthusiasts brings you closer to nature's most 
              magnificent creatures while ensuring your comfort and safety throughout your journey.
            </p>
            <p className="text-lg text-safari-green-600 mb-8 leading-relaxed">
              With over a decade of experience in East African tourism, we pride ourselves on offering 
              authentic, sustainable, and unforgettable safari adventures that respect local communities 
              and preserve the natural environment for future generations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-safari-green-50 rounded-lg">
                  <stat.icon className="w-8 h-8 text-safari-gold-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-safari-green-800">{stat.number}</div>
                  <div className="text-sm text-safari-green-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="safari-btn-primary">
              Learn More About Us
            </button>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Safari guides with travelers"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-safari-green-900/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">Expert Local Guides</h3>
                <p className="text-white/90">Our experienced guides share their deep knowledge of wildlife and local culture</p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-safari-gold-400/20 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-safari-green-400/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
