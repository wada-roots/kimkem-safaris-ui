
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin } from "lucide-react";

const StaticSafariDestinations = () => {
  const safaris = [
    {
      id: 1,
      name: "Maasai Mara National Reserve",
      shortDesc:
        "Witness the Great Migration and Africa's Big Five in Kenya's most famous reserve.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3-5 Days",
      price: "From $380/day",
    },
    {
      id: 2,
      name: "Amboseli National Park",
      shortDesc:
        "Marvel at the majestic elephants against the backdrop of Mount Kilimanjaro.",
      image: "/images/destinations/amboseli.jpeg",
      duration: "2-4 Days",
      price: "From $320/day",
    },
    {
      id: 3,
      name: "Lake Nakuru National Park",
      shortDesc:
        "Witness the pink flamingo spectacle and diverse birdlife at this alkaline lake.",
      image: "/images/destinations/lake-nakuru.jpeg",
      duration: "1-3 Days",
      price: "From $280/day",
    },
    {
      id: 4,
      name: "Tsavo National Park",
      shortDesc:
        "Explore Kenya's largest national park, divided into Tsavo East and West, offering diverse landscapes and wildlife.",
      image: "/images/destinations/tsavo.jpeg",
      duration: "3-6 Days",
      price: "From $350/day",
    },
    {
      id: 5,
      name: "Samburu National Reserve",
      shortDesc:
        "Encounter unique wildlife species found only north of the equator in this rugged and remote reserve.",
      image: "/images/destinations/samburu.jpeg",
      duration: "3-5 Days",
      price: "From $400/day",
    },
    {
      id: 6,
      name: "Aberdare National Park",
      shortDesc:
        "Explore the misty highlands and unique wildlife of this mountainous park.",
      image: "/images/destinations/aberdare.jpeg",
      duration: "2-4 Days",
      price: "From $340/day",
    },
    {
      id: 7,
      name: "Nairobi National Park",
      shortDesc: "Experience wildlife viewing just minutes from Kenya's capital city.",
      image: "https://images.unsplash.com/photo-1605538883669-825200433431?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "Half Day - 2 Days",
      price: "From $180/day",
    },
    {
      id: 8,
      name: "Diani Beach",
      shortDesc:
        "Relax on pristine white sand beaches with crystal clear waters and swaying palm trees.",
      image: "/images/destinations/diani-beach.jpeg",
      duration: "2-7 Days",
      price: "From $220/day",
    },
    {
      id: 9,
      name: "Watamu Marine Park",
      shortDesc:
        "Explore vibrant coral reefs and enjoy water sports in this UNESCO World Heritage marine park.",
      image: "/images/destinations/watamu.jpeg",
      duration: "2-5 Days",
      price: "From $280/day",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

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
                    <Link
                      to="/safaris"
                      className="safari-btn-secondary flex-1 text-center"
                    >
                      Learn More
                    </Link>
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

      <Footer />
    </div>
  );
};

export default StaticSafariDestinations;
