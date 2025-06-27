import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SafariModal from '@/components/SafariModal';
import { MapPin, Clock, Star, Camera } from 'lucide-react';

const SafariDestinations = () => {
  const [selectedSafari, setSelectedSafari] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const safaris = [
    {
      id: 1,
      name: "Maasai Mara National Reserve",
      shortDesc: "Witness the Great Migration and Africa's Big Five in Kenya's most famous reserve.",
      description: "Experience the pinnacle of African safari adventures in the world-renowned Maasai Mara. This iconic reserve offers unparalleled wildlife viewing opportunities, from the dramatic Great Migration to year-round Big Five encounters. The vast savannas stretch endlessly, dotted with acacia trees and teeming with life.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3-5 Days",
      price: "From $380/day",
      difficulty: "Easy to Moderate",
      bestTime: "July to October (Migration season)",
      highlights: [
        "Witness the Great Wildebeest Migration",
        "Big Five game viewing opportunities",
        "Cultural visits to Maasai villages",
        "Hot air balloon safaris available",
        "Abundant predator sightings"
      ],
      included: [
        "Professional safari guide",
        "Game drives in 4WD vehicle",
        "Park entry fees",
        "Accommodation options available",
        "Meals during safari"
      ]
    },
    {
      id: 2,
      name: "Amboseli National Park",
      shortDesc: "Marvel at the majestic elephants against the backdrop of Mount Kilimanjaro.",
      description: "Discover the land of giants in Amboseli National Park, where you can witness large herds of elephants roaming freely against the stunning backdrop of Mount Kilimanjaro. This park is a photographer's paradise, offering incredible opportunities to capture iconic African landscapes and wildlife moments.",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2-4 Days",
      price: "From $320/day",
      difficulty: "Easy",
      bestTime: "June to October (Dry season)",
      highlights: [
        "Large elephant herds",
        "Spectacular views of Mount Kilimanjaro",
        "Diverse birdlife",
        "Observation Hill viewpoint",
        "Visit to a Maasai cultural village"
      ],
      included: [
        "Experienced local guide",
        "Transport in safari vehicle",
        "Park entrance fees",
        "Accommodation in lodges or camps",
        "All meals included"
      ]
    },
    {
      id: 3,
      name: "Lake Nakuru National Park",
      shortDesc: "Witness the pink flamingo spectacle and diverse birdlife at this alkaline lake.",
      description: "Experience the vibrant colors of Lake Nakuru, famous for its large flocks of pink flamingos. This alkaline lake is a haven for birdwatchers, with over 400 species of birds. The park also hosts rhinos, lions, and other wildlife, making it a diverse and rewarding safari destination.",
      image: "https://images.unsplash.com/photo-1603377245293-a39595b13c3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "1-3 Days",
      price: "From $280/day",
      difficulty: "Easy",
      bestTime: "Year-round",
      highlights: [
        "Millions of pink flamingos",
        "Rhino sanctuary",
        "Diverse bird species",
        "Baboon Cliff viewpoint",
        "Picturesque landscapes"
      ],
      included: [
        "Professional birding guide",
        "Safari vehicle with pop-up roof",
        "Park fees",
        "Accommodation options",
        "Meals as specified"
      ]
    },
    {
      id: 4,
      name: "Tsavo National Park",
      shortDesc: "Explore Kenya's largest national park, divided into Tsavo East and West, offering diverse landscapes and wildlife.",
      description: "Discover the vast wilderness of Tsavo, Kenya's largest national park, divided into Tsavo East and Tsavo West. Tsavo East is known for its open plains and large elephant herds, while Tsavo West features rugged landscapes, volcanic hills, and the Mzima Springs, a natural oasis.",
      image: "https://images.unsplash.com/photo-1622541694409-a9a7a98338a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3-6 Days",
      price: "From $350/day",
      difficulty: "Moderate",
      bestTime: "June to October (Dry season)",
      highlights: [
        "Large elephant populations",
        "Yatta Plateau (one of the world's longest lava flows)",
        "Mzima Springs",
        "Lugard Falls",
        "Diverse landscapes"
      ],
      included: [
        "Knowledgeable safari guide",
        "4x4 safari vehicle",
        "Park entrance fees",
        "Accommodation in lodges or campsites",
        "Full board meals"
      ]
    },
    {
      id: 5,
      name: "Samburu National Reserve",
      shortDesc: "Encounter unique wildlife species found only north of the equator in this rugged and remote reserve.",
      description: "Venture into the rugged and remote Samburu National Reserve, located north of the equator. This unique reserve is home to wildlife species not found elsewhere in Kenya, such as the Grevy's zebra, Somali ostrich, gerenuk, and reticulated giraffe. The Ewaso Ng'iro River flows through the reserve, attracting a variety of animals.",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3-5 Days",
      price: "From $400/day",
      difficulty: "Moderate",
      bestTime: "June to October (Dry season)",
      highlights: [
        "Unique wildlife species (Grevy's zebra, gerenuk, etc.)",
        "Samburu cultural experiences",
        "Ewaso Ng'iro River",
        "Scenic landscapes",
        "Birdwatching opportunities"
      ],
      included: [
        "Professional safari guide from the local community",
        "Customized safari vehicle",
        "Park entry fees",
        "Accommodation in eco-lodges or camps",
        "All-inclusive meal plan"
      ]
    }
  ];

  const handleLearnMore = (safari: any) => {
    setSelectedSafari(safari);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSafari(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 safari-hero-bg">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Safari
              <span className="block text-safari-gold-400">Destinations</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Discover Kenya's most spectacular wildlife destinations and create memories that will last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Safari Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-safari-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safaris.map((safari) => (
              <div key={safari.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={safari.image} 
                    alt={safari.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-safari-gold-500 text-safari-green-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {safari.duration}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-safari-green-800 font-bold">{safari.price}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-safari-green-800 mb-3">{safari.name}</h3>
                  <p className="text-safari-green-600 mb-4 leading-relaxed">{safari.shortDesc}</p>
                  
                  <div className="flex items-center mb-4 text-sm text-safari-green-700">
                    <MapPin className="w-4 h-4 mr-2 text-safari-gold-600" />
                    <span>Kenya Wildlife Reserve</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleLearnMore(safari)}
                      className="safari-btn-secondary flex-1"
                    >
                      Learn More
                    </button>
                    <button className="safari-btn-primary flex-1">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedSafari && (
        <SafariModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          safari={selectedSafari}
        />
      )}

      <Footer />
    </div>
  );
};

export default SafariDestinations;
