
import { MapPin, Clock, Users, Star, Camera, Mountain, TreePine } from 'lucide-react';

const SafariDestinations = () => {
  const destinations = [
    {
      id: 1,
      title: "Hiking Mount Longonot",
      description: "Experience breathtaking views from the rim of this dormant volcano. A challenging hike rewarded with panoramic vistas of the Great Rift Valley.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "1 Day",
      difficulty: "Challenging",
      groupSize: "2-12 People",
      location: "Nakuru County",
      rating: 4.8,
      price: "From $150",
      highlights: ["Crater Rim Hike", "Rift Valley Views", "Wildlife Spotting", "Photography"],
      category: "Adventure"
    },
    {
      id: 2,
      title: "Ngong Hills",
      description: "Rolling green hills made famous by 'Out of Africa'. Perfect for hiking and enjoying spectacular views of Nairobi and the surrounding countryside.",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "Half Day",
      difficulty: "Moderate",
      groupSize: "2-15 People",
      location: "Kajiado County",
      rating: 4.6,
      price: "From $80",
      highlights: ["Scenic Hiking", "Nairobi Views", "Cultural Heritage", "Wind Farms"],
      category: "Nature"
    },
    {
      id: 3,
      title: "Tsavo National Park",
      description: "Kenya's largest national park, home to the famous red elephants and diverse wildlife. Experience the raw beauty of untamed Africa.",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3-5 Days",
      difficulty: "Easy",
      groupSize: "2-8 People",
      location: "Coast & Eastern Kenya",
      rating: 4.9,
      price: "From $1,200",
      highlights: ["Red Elephants", "Big Five", "Mzima Springs", "Lugard Falls"],
      category: "Wildlife"
    },
    {
      id: 4,
      title: "Lake Naivasha",
      description: "A freshwater lake surrounded by acacia forests and volcanic landscapes. Famous for its hippos, diverse birdlife, and boat safaris.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2-3 Days",
      difficulty: "Easy",
      groupSize: "2-10 People",
      location: "Nakuru County",
      rating: 4.7,
      price: "From $450",
      highlights: ["Boat Safari", "Hippo Watching", "Bird Photography", "Crescent Island"],
      category: "Water Safari"
    },
    {
      id: 5,
      title: "Nairobi National Park",
      description: "The world's only wildlife capital. See lions, rhinos, and giraffes against the backdrop of Nairobi's skyline - a truly unique experience.",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "Half Day",
      difficulty: "Easy",
      groupSize: "2-6 People",
      location: "Nairobi",
      rating: 4.5,
      price: "From $120",
      highlights: ["Urban Wildlife", "Rhino Sanctuary", "Lion Pride", "City Skyline Views"],
      category: "Urban Safari"
    },
    {
      id: 6,
      title: "Amboseli National Park",
      description: "Home to large elephant herds with the majestic Mount Kilimanjaro as backdrop. Experience close encounters with giants of Africa.",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3-4 Days",
      difficulty: "Easy",
      groupSize: "2-8 People",
      location: "Kajiado County",
      rating: 4.8,
      price: "From $980",
      highlights: ["Elephant Herds", "Mt. Kilimanjaro Views", "Maasai Culture", "Swamp Ecosystems"],
      category: "Wildlife"
    },
    {
      id: 7,
      title: "Lake Nakuru National Park",
      description: "Famous for millions of pink flamingos and rare white rhinos. A photographer's paradise with diverse ecosystems and abundant wildlife.",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2-3 Days",
      difficulty: "Easy",
      groupSize: "2-8 People",
      location: "Nakuru County",
      rating: 4.7,
      price: "From $650",
      highlights: ["Pink Flamingos", "White Rhinos", "Baboon Cliff", "Makalia Falls"],
      category: "Wildlife"
    },
    {
      id: 8,
      title: "Masai Mara",
      description: "Kenya's most famous game reserve. Witness the Great Migration and encounter the Big Five in their natural habitat.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "4-7 Days",
      difficulty: "Easy",
      groupSize: "2-8 People",
      location: "Narok County",
      rating: 4.9,
      price: "From $1,800",
      highlights: ["Great Migration", "Big Five", "Hot Air Balloon", "Maasai Villages"],
      category: "Premium Safari"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Adventure':
        return <Mountain className="w-5 h-5" />;
      case 'Nature':
        return <TreePine className="w-5 h-5" />;
      case 'Wildlife':
        return <Camera className="w-5 h-5" />;
      default:
        return <MapPin className="w-5 h-5" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Challenging':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-safari-green-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] safari-hero-bg flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Safari <span className="text-safari-gold-400">Destinations</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover Kenya's most spectacular wildlife reserves, national parks, and adventure destinations. 
            From the iconic Masai Mara to the challenging peaks of Mount Longonot.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 safari-text-gradient">
              Choose Your Adventure
            </h2>
            <p className="text-lg text-safari-green-600 max-w-2xl mx-auto">
              From wildlife safaris to mountain adventures, each destination offers unique experiences 
              that will create memories to last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <div 
                key={destination.id}
                className="safari-card rounded-xl overflow-hidden animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-safari-gold-500 text-safari-green-900 px-3 py-1 rounded-full font-semibold text-sm">
                    {destination.price}
                  </div>
                  <div className="absolute top-4 left-4 flex items-center space-x-1 bg-black/60 text-white px-3 py-1 rounded-full">
                    {getCategoryIcon(destination.category)}
                    <span className="text-sm font-medium">{destination.category}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/60 text-white px-3 py-1 rounded-full">
                    <Star size={16} className="fill-safari-gold-400 text-safari-gold-400" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-safari-green-800 mb-3 group-hover:text-safari-gold-600 transition-colors">
                    {destination.title}
                  </h3>
                  <p className="text-safari-green-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {destination.description}
                  </p>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-safari-green-600">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{destination.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>{destination.groupSize}</span>
                    </div>
                    <div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(destination.difficulty)}`}>
                        {destination.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="bg-safari-green-100 text-safari-green-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 3 && (
                        <span className="bg-safari-gold-100 text-safari-gold-700 px-2 py-1 rounded-full text-xs font-medium">
                          +{destination.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 safari-btn-primary text-sm py-2 px-4">
                      Learn More
                    </button>
                    <button className="flex-1 safari-btn-secondary text-sm py-2 px-4">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-safari-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Adventure?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let our expert guides create a customized safari experience tailored to your interests and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="safari-btn-secondary text-lg px-10 py-4">
              Plan My Safari
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-safari-green-800 font-semibold py-4 px-10 rounded-lg transition-all duration-300 text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SafariDestinations;
