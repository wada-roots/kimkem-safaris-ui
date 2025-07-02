import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SafariModal from "@/components/SafariModal";
import { MapPin, Clock, Star, Camera } from "lucide-react";

const SafariDestinations = () => {
  const [selectedSafari, setSelectedSafari] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const safaris = [
    {
      id: 1,
      name: "Maasai Mara National Reserve",
      shortDesc:
        "Witness the Great Migration and Africa's Big Five in Kenya's most famous reserve.",
      description:
        "Experience the pinnacle of African safari adventures in the world-renowned Maasai Mara. This iconic reserve offers unparalleled wildlife viewing opportunities, from the dramatic Great Migration to year-round Big Five encounters. The vast savannas stretch endlessly, dotted with acacia trees and teeming with life.",
      image:
        "https://images.pexels.com/photos/30705849/pexels-photo-30705849.jpeg",
      duration: "3-5 Days",
      price: "From $380/day",
      difficulty: "Easy to Moderate",
      bestTime: "July to October (Migration season)",
      highlights: [
        "Witness the Great Wildebeest Migration",
        "Big Five game viewing opportunities",
        "Cultural visits to Maasai villages",
        "Hot air balloon safaris available",
        "Abundant predator sightings",
      ],
      included: [
        "Professional safari guide",
        "Game drives in 4WD vehicle",
        "Park entry fees",
        "Accommodation options available",
        "Meals during safari",
      ],
    },
    {
      id: 2,
      name: "Amboseli National Park",
      shortDesc:
        "Marvel at the majestic elephants against the backdrop of Mount Kilimanjaro.",
      description:
        "Discover the land of giants in Amboseli National Park, where you can witness large herds of elephants roaming freely against the stunning backdrop of Mount Kilimanjaro. This park is a photographer's paradise, offering incredible opportunities to capture iconic African landscapes and wildlife moments.",
      image:
        "https://images.pexels.com/photos/19320975/pexels-photo-19320975.jpeg",
      duration: "2-4 Days",
      price: "From $320/day",
      difficulty: "Easy",
      bestTime: "June to October (Dry season)",
      highlights: [
        "Large elephant herds",
        "Spectacular views of Mount Kilimanjaro",
        "Diverse birdlife",
        "Observation Hill viewpoint",
        "Visit to a Maasai cultural village",
      ],
      included: [
        "Experienced local guide",
        "Transport in safari vehicle",
        "Park entrance fees",
        "Accommodation in lodges or camps",
        "All meals included",
      ],
    },
    {
      id: 3,
      name: "Lake Nakuru National Park",
      shortDesc:
        "Witness the pink flamingo spectacle and diverse birdlife at this alkaline lake.",
      description:
        "Experience the vibrant colors of Lake Nakuru, famous for its large flocks of pink flamingos. This alkaline lake is a haven for birdwatchers, with over 400 species of birds. The park also hosts rhinos, lions, and other wildlife, making it a diverse and rewarding safari destination.",
      image:
        "https://images.pexels.com/photos/8341096/pexels-photo-8341096.jpeg",
      duration: "1-3 Days",
      price: "From $280/day",
      difficulty: "Easy",
      bestTime: "Year-round",
      highlights: [
        "Millions of pink flamingos",
        "Rhino sanctuary",
        "Diverse bird species",
        "Baboon Cliff viewpoint",
        "Picturesque landscapes",
      ],
      included: [
        "Professional birding guide",
        "Safari vehicle with pop-up roof",
        "Park fees",
        "Accommodation options",
        "Meals as specified",
      ],
    },
    {
      id: 4,
      name: "Tsavo National Park",
      shortDesc:
        "Explore Kenya's largest national park, divided into Tsavo East and West, offering diverse landscapes and wildlife.",
      description:
        "Discover the vast wilderness of Tsavo, Kenya's largest national park, divided into Tsavo East and Tsavo West. Tsavo East is known for its open plains and large elephant herds, while Tsavo West features rugged landscapes, volcanic hills, and the Mzima Springs, a natural oasis.",
      image:
        "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg",
      duration: "3-6 Days",
      price: "From $350/day",
      difficulty: "Moderate",
      bestTime: "June to October (Dry season)",
      highlights: [
        "Large elephant populations",
        "Yatta Plateau (one of the world's longest lava flows)",
        "Mzima Springs",
        "Lugard Falls",
        "Diverse landscapes",
      ],
      included: [
        "Knowledgeable safari guide",
        "4x4 safari vehicle",
        "Park entrance fees",
        "Accommodation in lodges or campsites",
        "Full board meals",
      ],
    },
    {
      id: 5,
      name: "Samburu National Reserve",
      shortDesc:
        "Encounter unique wildlife species found only north of the equator in this rugged and remote reserve.",
      description:
        "Venture into the rugged and remote Samburu National Reserve, located north of the equator. This unique reserve is home to wildlife species not found elsewhere in Kenya, such as the Grevy's zebra, Somali ostrich, gerenuk, and reticulated giraffe. The Ewaso Ng'iro River flows through the reserve, attracting a variety of animals.",
      image:
        "https://images.pexels.com/photos/29435755/pexels-photo-29435755.jpeg",
      duration: "3-5 Days",
      price: "From $400/day",
      difficulty: "Moderate",
      bestTime: "June to October (Dry season)",
      highlights: [
        "Unique wildlife species (Grevy's zebra, gerenuk, etc.)",
        "Samburu cultural experiences",
        "Ewaso Ng'iro River",
        "Scenic landscapes",
        "Birdwatching opportunities",
      ],
      included: [
        "Professional safari guide from the local community",
        "Customized safari vehicle",
        "Park entry fees",
        "Accommodation in eco-lodges or camps",
        "All-inclusive meal plan",
      ],
    },
    {
      id: 6,
      name: "Aberdare National Park",
      shortDesc:
        "Explore the misty highlands and unique wildlife of this mountainous park.",
      description:
        "Discover the enchanting Aberdare National Park, characterized by its misty highlands, bamboo forests, and spectacular waterfalls. This unique park offers a different safari experience with its cool climate and diverse ecosystems. The park is home to elephants, buffalo, rhinos, and the rare bongo antelope.",
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2-4 Days",
      price: "From $340/day",
      difficulty: "Moderate",
      bestTime: "June to September (Dry season)",
      highlights: [
        "Misty highland landscapes",
        "Spectacular waterfalls",
        "Rare bongo antelope",
        "Bamboo forests",
        "Unique mountain ecosystem",
      ],
      included: [
        "Mountain specialist guide",
        "4WD vehicle suitable for mountain terrain",
        "Park entrance fees",
        "Mountain lodge accommodation",
        "All meals and refreshments",
      ],
    },
    {
      id: 7,
      name: "Nairobi National Park",
      shortDesc:
        "Experience wildlife viewing just minutes from Kenya's capital city.",
      description:
        "Discover the unique Nairobi National Park, the only wildlife park in the world located within a capital city. This remarkable park offers incredible wildlife viewing opportunities against the backdrop of Nairobi's skyline. Home to lions, leopards, cheetahs, and over 400 bird species.",
      image:
        "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "Half Day - 2 Days",
      price: "From $180/day",
      difficulty: "Easy",
      bestTime: "Year-round",
      highlights: [
        "Wildlife viewing near the city",
        "Black rhino sanctuary",
        "Over 400 bird species",
        "Nairobi skyline backdrop",
        "David Sheldrick Elephant Orphanage nearby",
      ],
      included: [
        "Professional city-safari guide",
        "Safari vehicle with pop-up roof",
        "Park entry fees",
        "Optional orphanage visit",
        "Refreshments during safari",
      ],
    },
    {
      id: 8,
      name: "Diani Beach",
      shortDesc:
        "Relax on pristine white sand beaches with crystal clear waters and swaying palm trees.",
      description:
        "Experience the tropical paradise of Diani Beach, one of Africa's most beautiful coastal destinations. With its pristine white sand beaches, crystal clear turquoise waters, and swaying coconut palms, Diani offers the perfect beach getaway. Enjoy water sports, coral reef diving, and beachfront relaxation.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2-7 Days",
      price: "From $220/day",
      difficulty: "Easy",
      bestTime: "October to March (Dry season)",
      highlights: [
        "Pristine white sand beaches",
        "Crystal clear turquoise waters",
        "Coral reef snorkeling",
        "Dhow sailing experiences",
        "Beachfront dining",
      ],
      included: [
        "Beach resort accommodation",
        "Water sports equipment",
        "Snorkeling gear",
        "Beach transfers",
        "Tropical meals and drinks",
      ],
    },
    {
      id: 9,
      name: "Watamu Marine Park",
      shortDesc:
        "Explore vibrant coral reefs and enjoy water sports in this UNESCO World Heritage marine park.",
      description:
        "Discover the underwater wonders of Watamu Marine Park, a UNESCO World Heritage site renowned for its pristine coral reefs and diverse marine life. This marine paradise offers world-class diving, snorkeling, and fishing experiences. The park protects some of the most beautiful coral formations on the East African coast.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2-5 Days",
      price: "From $280/day",
      difficulty: "Easy to Moderate",
      bestTime: "October to March (Calm seas)",
      highlights: [
        "UNESCO World Heritage marine park",
        "Pristine coral reefs",
        "Diverse marine life",
        "World-class diving",
        "Sea turtle nesting sites",
      ],
      included: [
        "Marine park specialist guide",
        "Diving and snorkeling equipment",
        "Boat transfers",
        "Marine park fees",
        "Coastal accommodation and meals",
      ],
    },
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
              Discover Kenya's most spectacular wildlife destinations and create
              memories that will last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Safari Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-safari-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safaris.map((safari) => (
              <div
                key={safari.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
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
                    <span className="text-safari-green-800 font-bold">
                      {safari.price}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-safari-green-800 mb-3">
                    {safari.name}
                  </h3>
                  <p className="text-safari-green-600 mb-4 leading-relaxed">
                    {safari.shortDesc}
                  </p>

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
                    <Link
                      to={`/book?destination=${encodeURIComponent(safari.name)}`}
                      className="safari-btn-primary flex-1 text-center"
                    >
                      Book Now
                    </Link>
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
