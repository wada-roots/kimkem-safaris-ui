
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, Globe, Heart, Target, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "2,500+", label: "Happy Travelers" },
    { icon: Globe, number: "15+", label: "Destinations" },
    { icon: Award, number: "10+", label: "Years Experience" },
    { icon: Heart, number: "98%", label: "Satisfaction Rate" }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide authentic, sustainable safari experiences that create lasting memories while contributing to wildlife conservation and local communities."
    },
    {
      icon: Shield,
      title: "Our Commitment",
      description: "We are committed to responsible tourism practices, ensuring our safaris benefit both wildlife conservation and local Kenyan communities."
    },
    {
      icon: Heart,
      title: "Our Passion",
      description: "Our love for Kenya's wildlife and landscapes drives us to share these incredible experiences with travelers from around the world."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 safari-hero-bg">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About
              <span className="block text-safari-gold-400">Kimkem Safaris</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Your trusted partner for authentic African safari experiences. 
              Discover the wild beauty of Kenya with passionate local experts.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Content */}
            <div>
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
            </div>

            {/* Image */}
            <div className="relative">
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
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-safari-green-50 rounded-lg">
                <stat.icon className="w-12 h-12 text-safari-gold-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-safari-green-800 mb-2">{stat.number}</div>
                <div className="text-safari-green-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg">
                <value.icon className="w-16 h-16 text-safari-gold-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-safari-green-800 mb-4">{value.title}</h3>
                <p className="text-safari-green-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
