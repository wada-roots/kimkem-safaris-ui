import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Fuel, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Vehicles = () => {
  const vehicles = [
    {
      id: 1,
      name: "4X4 Toyota Land Cruiser",
      description: "The ultimate safari vehicle, built for rugged terrain and wildlife viewing. Features pop-up roof for optimal game viewing and photography.",
      image: "https://images.unsplash.com/photo-1612838320302-4b3b3f67e3ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "6-8 Passengers",
      features: [
        "Pop-up roof for game viewing",
        "4WD capability for all terrain",
        "Air conditioning",
        "Power outlets for charging",
        "Cooler for refreshments",
        "Professional driver-guide"
      ],
      priceRange: "From $120/day",
      rating: 4.9,
      fuelType: "Diesel",
      transmission: "Manual/Automatic"
    },
    {
      id: 2,
      name: "Safari Minibuses",
      description: "Comfortable and spacious minibuses perfect for group safaris. Equipped with large windows and elevated seating for better wildlife viewing.",
      image: "https://images.unsplash.com/photo-1609501676727-3a4f986bc9b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "10-14 Passengers",
      features: [
        "Large panoramic windows",
        "Elevated seating position",
        "Air conditioning system",
        "Ample luggage space",
        "PA system for guide commentary",
        "Emergency first aid kit"
      ],
      priceRange: "From $150/day",
      rating: 4.7,
      fuelType: "Diesel",
      transmission: "Manual"
    },
    {
      id: 3,
      name: "Open Roof Safari Van",
      description: "Experience the wild with an open roof safari van, offering 360-degree views and unobstructed photography opportunities.",
      image: "https://images.unsplash.com/photo-1612297055701-5765aa6b4e50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "8-10 Passengers",
      features: [
        "360-degree open roof viewing",
        "Standing room for photography",
        "Comfortable bench seating",
        "Sun protection canopy",
        "Dust protection screens",
        "Professional wildlife guide"
      ],
      priceRange: "From $140/day",
      rating: 4.8,
      fuelType: "Diesel",
      transmission: "Manual"
    },
    {
      id: 4,
      name: "Toyota Prado",
      description: "Luxury safari vehicle offering comfort and reliability. Perfect for smaller groups seeking a premium safari experience.",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "4-6 Passengers",
      features: [
        "Luxury interior finish",
        "Pop-up roof system",
        "Climate control",
        "Premium sound system",
        "Leather seating",
        "VIP safari experience"
      ],
      priceRange: "From $180/day",
      rating: 4.9,
      fuelType: "Petrol",
      transmission: "Automatic"
    },
    {
      id: 5,
      name: "Coaster Buses",
      description: "Large capacity buses ideal for group tours and multi-day safari expeditions. Comfortable seating and ample storage space.",
      image: "https://images.unsplash.com/photo-1586796750683-58f6a4dacc4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "25-30 Passengers",
      features: [
        "Spacious interior",
        "Reclining seats",
        "Large windows",
        "Overhead storage",
        "Onboard restroom",
        "Entertainment system"
      ],
      priceRange: "From $250/day",
      rating: 4.6,
      fuelType: "Diesel",
      transmission: "Manual"
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
              Our
              <span className="block text-safari-gold-400">Fleet</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Choose from our fleet of specially equipped safari vehicles, designed for comfort and optimal wildlife viewing.
            </p>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-safari-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vehicles.map((vehicle, index) => (
              <div 
                key={vehicle.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-safari-gold-500 text-safari-green-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {vehicle.priceRange}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                    <Star size={16} className="text-safari-gold-600 mr-1" />
                    <span className="text-safari-green-800 font-bold">{vehicle.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-safari-green-800 mb-3">{vehicle.name}</h3>
                  <p className="text-safari-green-600 mb-4 leading-relaxed">{vehicle.description}</p>
                  
                  {/* Vehicle Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-safari-green-700">
                      <Users className="w-4 h-4 mr-2 text-safari-gold-600" />
                      <span>{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center text-sm text-safari-green-700">
                      <Fuel className="w-4 h-4 mr-2 text-safari-gold-600" />
                      <span>{vehicle.fuelType}</span>
                    </div>
                    <div className="flex items-center text-sm text-safari-green-700">
                      <Shield className="w-4 h-4 mr-2 text-safari-gold-600" />
                      <span>{vehicle.transmission}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-safari-green-800 mb-3">Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {vehicle.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-safari-gold-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-safari-green-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="safari-btn-secondary flex-1">
                      View Details
                    </button>
                    <Link to="/book" className="safari-btn-primary flex-1 text-center">
                      Book This Vehicle
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vehicles;
