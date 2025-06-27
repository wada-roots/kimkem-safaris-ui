
import { MapPin, Clock, Users, Star } from 'lucide-react';

const SafariPackages = () => {
  const safaris = [
    {
      id: 1,
      title: "Maasai Mara Great Migration",
      description: "Witness the world's greatest wildlife spectacle as millions of wildebeest and zebras cross the Mara River.",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "5 Days",
      groupSize: "2-8 People",
      location: "Maasai Mara",
      rating: 4.9,
      price: "From $2,450",
      highlights: ["Great Migration", "Big Five", "Hot Air Balloon", "Cultural Visit"]
    },
    {
      id: 2,
      title: "Amboseli Elephant Paradise",
      description: "Experience the majestic elephants of Amboseli with the stunning backdrop of Mount Kilimanjaro.",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "4 Days",
      groupSize: "2-6 People",
      location: "Amboseli",
      rating: 4.8,
      price: "From $1,890",
      highlights: ["Elephant Herds", "Mt. Kilimanjaro Views", "Bird Watching", "Maasai Culture"]
    },
    {
      id: 3,
      title: "Samburu Wild Frontier",
      description: "Discover the unique wildlife of Northern Kenya including Grevy's zebras, reticulated giraffes, and Somali ostriches.",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "6 Days",
      groupSize: "2-8 People",
      location: "Samburu",
      rating: 4.7,
      price: "From $2,180",
      highlights: ["Rare Species", "Cultural Immersion", "River Safari", "Night Game Drives"]
    }
  ];

  return (
    <section id="safaris" className="py-20 bg-gradient-to-b from-white to-safari-green-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 safari-text-gradient">
            Unforgettable Safari Experiences
          </h2>
          <p className="text-lg text-safari-green-600 max-w-2xl mx-auto leading-relaxed">
            Choose from our carefully curated safari packages, each designed to provide you with 
            authentic African wilderness experiences and unforgettable wildlife encounters.
          </p>
        </div>

        {/* Safari Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safaris.map((safari, index) => (
            <div 
              key={safari.id} 
              className={`safari-card rounded-xl overflow-hidden animate-scale-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={safari.image} 
                  alt={safari.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-safari-gold-500 text-safari-green-900 px-3 py-1 rounded-full font-semibold text-sm">
                  {safari.price}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/60 text-white px-3 py-1 rounded-full">
                  <Star size={16} className="fill-safari-gold-400 text-safari-gold-400" />
                  <span className="text-sm font-medium">{safari.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-safari-green-800 mb-3">{safari.title}</h3>
                <p className="text-safari-green-600 mb-4 line-clamp-3">{safari.description}</p>

                {/* Details */}
                <div className="flex items-center gap-4 mb-4 text-sm text-safari-green-600">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{safari.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{safari.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{safari.groupSize}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {safari.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="bg-safari-green-100 text-safari-green-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 safari-btn-primary text-sm py-2">
                    View Details
                  </button>
                  <button className="flex-1 safari-btn-secondary text-sm py-2">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="/safaris" className="safari-btn-primary text-lg px-12 py-4 inline-block">
            View All Safari Destinations
          </a>
        </div>
      </div>
    </section>
  );
};

export default SafariPackages;
