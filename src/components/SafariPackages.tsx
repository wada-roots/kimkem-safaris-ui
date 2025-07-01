import { MapPin, Clock, Users, Star, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SafariModal from './SafariModal';

const SafariPackages = () => {
  const [selectedSafari, setSelectedSafari] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const safaris = [
    {
      id: 1,
      name: "Maasai Mara Great Migration",
      title: "Maasai Mara Great Migration",
      description: "Witness the world's greatest wildlife spectacle as millions of wildebeest and zebras cross the Mara River in this iconic Kenyan reserve. Experience the Big Five and immerse yourself in Maasai culture while staying in luxury lodges.",
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "5 Days",
      groupSize: "2-8 People",
      location: "Maasai Mara",
      rating: 4.9,
      price: "From $2,450",
      highlights: ["Great Migration", "Big Five", "Hot Air Balloon", "Cultural Visit"],
      difficulty: "Easy to Moderate",
      bestTime: "July to October (Migration season)",
      included: [
        "Professional safari guide",
        "Game drives in 4WD vehicle",
        "Park entry fees",
        "Luxury lodge accommodation",
        "All meals during safari",
        "Hot air balloon safari (optional)"
      ]
    },
    {
      id: 2,
      name: "Amboseli Elephant Paradise",
      title: "Amboseli Elephant Paradise",
      description: "Experience the majestic elephants of Amboseli with the stunning backdrop of Mount Kilimanjaro. This photographer's paradise offers incredible opportunities to capture iconic African landscapes and wildlife moments.",
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "4 Days",
      groupSize: "2-6 People",
      location: "Amboseli",
      rating: 4.8,
      price: "From $1,890",
      highlights: ["Elephant Herds", "Mt. Kilimanjaro Views", "Bird Watching", "Maasai Culture"],
      difficulty: "Easy",
      bestTime: "June to October (Dry season)",
      included: [
        "Experienced local guide",
        "Transport in safari vehicle",
        "Park entrance fees",
        "Accommodation in lodges or camps",
        "All meals included",
        "Cultural village visit"
      ]
    },
    {
      id: 3,
      name: "Samburu Wild Frontier",
      title: "Samburu Wild Frontier",
      description: "Discover the unique wildlife of Northern Kenya including Grevy's zebras, reticulated giraffes, and Somali ostriches. This remote reserve offers authentic cultural experiences with the Samburu people.",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "6 Days",
      groupSize: "2-8 People",
      location: "Samburu",
      rating: 4.7,
      price: "From $2,180",
      highlights: ["Rare Species", "Cultural Immersion", "River Safari", "Night Game Drives"],
      difficulty: "Moderate",
      bestTime: "June to October (Dry season)",
      included: [
        "Professional safari guide from the local community",
        "Customized safari vehicle",
        "Park entry fees",
        "Accommodation in eco-lodges or camps",
        "All-inclusive meal plan",
        "Cultural experiences"
      ]
    },
    {
      id: 4,
      name: "Nairobi National Park",
      title: "Nairobi National Park",
      description: "Experience wildlife viewing just minutes from Kenya's capital city. This unique park offers incredible wildlife viewing opportunities against the backdrop of Nairobi's skyline, including lions, leopards, and over 400 bird species.",
      image: "https://images.unsplash.com/photo-1618433956447-cfa99ba4d7b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2 Days",
      groupSize: "2-10 People",
      location: "Nairobi",
      rating: 4.6,
      price: "From $890",
      highlights: ["City Wildlife", "Black Rhino Sanctuary", "Bird Watching", "Elephant Orphanage"],
      difficulty: "Easy",
      bestTime: "Year-round",
      included: [
        "Professional city-safari guide",
        "Safari vehicle with pop-up roof",
        "Park entry fees",
        "Optional orphanage visit",
        "Refreshments during safari",
        "City hotel accommodation"
      ]
    }
  ];

  const beaches = [
    {
      id: 1,
      title: "Diani Beach Getaway",
      description: "Relax on pristine white sand beaches with crystal clear waters and swaying palm trees.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3 Days",
      location: "Diani, Mombasa",
      rating: 4.8,
      price: "From $890",
      highlights: ["White Sand Beaches", "Snorkeling", "Beach Resort", "Sunset Cruises"]
    },
    {
      id: 2,
      title: "Watamu Marine Park",
      description: "Explore vibrant coral reefs and enjoy water sports in this UNESCO World Heritage marine park.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "4 Days",
      location: "Watamu",
      rating: 4.7,
      price: "From $1,200",
      highlights: ["Coral Reefs", "Diving", "Marine Life", "Cultural Tours"]
    }
  ];

  const handleViewDetails = (safari: any) => {
    setSelectedSafari(safari);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSafari(null);
  };

  return (
    <section id="safaris" className="py-20">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                <div className="absolute top-4 right-4 bg-safari-green-600 text-white px-3 py-1 rounded-full font-semibold text-sm">
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
                  <button 
                    onClick={() => handleViewDetails(safari)}
                    className="flex-1 safari-btn-primary text-sm py-2"
                  >
                    View Details
                  </button>
                  <Link to="/book" className="flex-1 safari-btn-secondary text-sm py-2 text-center">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sandy Beaches Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 safari-text-gradient flex items-center justify-center">
              <Waves className="mr-3 text-safari-green-600" />
              Sandy Beaches & Coastal Adventures
            </h3>
            <p className="text-lg text-safari-green-600 max-w-2xl mx-auto">
              Extend your safari adventure with relaxing beach experiences along Kenya's stunning coastline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beaches.map((beach, index) => (
              <div 
                key={beach.id} 
                className="safari-card rounded-xl overflow-hidden animate-scale-in"
                style={{ animationDelay: `${(index + 4) * 0.2}s` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={beach.image} 
                    alt={beach.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-safari-green-600 text-white px-3 py-1 rounded-full font-semibold text-sm">
                    {beach.price}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/60 text-white px-3 py-1 rounded-full">
                    <Star size={16} className="fill-safari-gold-400 text-safari-gold-400" />
                    <span className="text-sm font-medium">{beach.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-safari-green-800 mb-3">{beach.title}</h4>
                  <p className="text-safari-green-600 mb-4">{beach.description}</p>

                  {/* Details */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-safari-green-600">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{beach.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{beach.duration}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {beach.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
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
                    <Link to="/book" className="flex-1 safari-btn-secondary text-sm py-2 text-center">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/safaris" className="safari-btn-primary text-lg px-12 py-4 inline-block">
            View All Safari Destinations
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedSafari && (
        <SafariModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          safari={selectedSafari}
        />
      )}
    </section>
  );
};

export default SafariPackages;
