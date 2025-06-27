
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Car, Users, Shield, Star } from 'lucide-react';

const Vehicles = () => {
  const vehicles = [
    {
      id: 1,
      name: "4X4 Toyota Land Cruisers",
      description: "Our flagship safari vehicles, built for the toughest terrain. These robust 4x4 Toyota Land Cruisers offer excellent ground clearance, reliability, and comfort for your wildlife adventures.",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "7 Passengers",
      features: ["4WD Capability", "Pop-up Roof", "Comfortable Seating", "Safari Windows"],
      ideal: "Perfect for game drives and rough terrain"
    },
    {
      id: 2,
      name: "Safari Minibuses",
      description: "Spacious and comfortable minibuses designed specifically for safari tours. These vehicles provide excellent visibility and comfort for longer journeys to multiple destinations.",
      image: "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "14 Passengers",
      features: ["Large Windows", "Air Conditioning", "Comfortable Seats", "Storage Space"],
      ideal: "Great for group safaris and long-distance travel"
    },
    {
      id: 3,
      name: "Open Roof Safari Vans",
      description: "Experience wildlife like never before with our open roof safari vans. These specially modified vehicles offer unobstructed 360-degree views and photography opportunities.",
      image: "https://images.unsplash.com/photo-1469833120660-1a218b53d28a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "9 Passengers",
      features: ["Open Roof Design", "Standing Room", "Professional Photography Setup", "Safety Rails"],
      ideal: "Ideal for photography safaris and wildlife viewing"
    },
    {
      id: 4,
      name: "Toyota Prado",
      description: "Luxury meets adventure with our Toyota Prado vehicles. These premium SUVs offer superior comfort and performance while maintaining excellent off-road capabilities.",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "5 Passengers",
      features: ["Luxury Interior", "Advanced Safety", "All-Terrain Tires", "Climate Control"],
      ideal: "Perfect for small groups seeking luxury and comfort"
    },
    {
      id: 5,
      name: "Coaster Buses",
      description: "For large groups and extended safari tours, our Coaster buses provide spacious, comfortable transportation with all the amenities needed for memorable group adventures.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "25-30 Passengers",
      features: ["Spacious Interior", "Entertainment System", "Reclining Seats", "Luggage Storage"],
      ideal: "Best for large groups and corporate safaris"
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
              Our Safari
              <span className="block text-safari-gold-400">Vehicle Fleet</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Experience comfort and adventure with our carefully maintained fleet of safari vehicles, 
              each designed to enhance your African wildlife experience.
            </p>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="py-20 bg-gradient-to-b from-white to-safari-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 safari-text-gradient">
              Choose Your Safari Vehicle
            </h2>
            <p className="text-lg text-safari-green-600 max-w-2xl mx-auto">
              Each vehicle in our fleet is specifically chosen and maintained to ensure your safety, 
              comfort, and optimal wildlife viewing experience.
            </p>
          </div>

          <div className="space-y-16">
            {vehicles.map((vehicle, index) => (
              <div 
                key={vehicle.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-safari-gold-500 text-safari-green-900 px-4 py-2 rounded-full font-semibold">
                      <Users size={16} className="inline mr-2" />
                      {vehicle.capacity}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="text-3xl font-bold text-safari-green-800 mb-4">
                    {vehicle.name}
                  </h3>
                  <p className="text-lg text-safari-green-600 mb-6 leading-relaxed">
                    {vehicle.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-safari-green-800 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {vehicle.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <Star size={16} className="text-safari-gold-600 mr-2" />
                          <span className="text-safari-green-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="bg-safari-green-100 p-4 rounded-lg mb-6">
                    <div className="flex items-center mb-2">
                      <Shield size={20} className="text-safari-gold-600 mr-2" />
                      <span className="font-semibold text-safari-green-800">Ideal For:</span>
                    </div>
                    <p className="text-safari-green-700">{vehicle.ideal}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button className="safari-btn-primary">
                      Book This Vehicle
                    </button>
                    <button className="safari-btn-secondary">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 p-12 bg-white rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold mb-4 safari-text-gradient">Ready to Start Your Adventure?</h3>
            <p className="text-safari-green-600 mb-8 text-lg">
              Contact us to discuss which vehicle best suits your safari needs and group size.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="safari-btn-primary text-lg px-10 py-4">
                Contact Us Today
              </button>
              <button className="safari-btn-secondary text-lg px-10 py-4">
                View Safari Packages
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vehicles;
