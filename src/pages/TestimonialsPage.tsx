
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, Quote, Calendar, MapPin } from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      date: "March 2024",
      text: "Our safari with Kimkem was absolutely incredible! The guides were knowledgeable, the accommodations were perfect, and we saw all the Big Five. The Great Migration was a once-in-a-lifetime experience that exceeded all our expectations.",
      safari: "Maasai Mara Great Migration",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      fullReview: "From the moment we were picked up at the airport, everything was seamlessly organized. Our guide James was incredible - his knowledge of wildlife behavior helped us witness amazing moments like a leopard hunt and a lion pride crossing. The luxury tents were beyond our expectations!"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Sydney, Australia",
      rating: 5,
      date: "February 2024",
      text: "The attention to detail and personalized service was outstanding. Every day brought new adventures and amazing wildlife encounters. The cultural experiences with local communities were particularly meaningful.",
      safari: "Samburu Wild Frontier",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      fullReview: "Samburu was magical! We saw species we'd never heard of before - the reticulated giraffe, Grevy's zebra, and the beautiful gerenuk. The Samburu people were so welcoming, and learning about their culture was as enriching as the wildlife viewing."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      date: "January 2024",
      text: "The elephants in Amboseli were magnificent, and the views of Kilimanjaro were breathtaking. Our guide made sure we experienced the best of Kenya's wildlife while learning about conservation efforts.",
      safari: "Amboseli Elephant Paradise",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      fullReview: "Amboseli's elephant herds were incredible - we watched families with tiny babies playing in the mud. The backdrop of Kilimanjaro made every photo stunning. Learning about the conservation work being done there made the experience even more meaningful."
    },
    {
      id: 4,
      name: "David Thompson",
      location: "London, UK",
      rating: 5,
      date: "December 2023",
      text: "An absolutely phenomenal experience! The variety of wildlife we encountered was beyond our wildest dreams. The team at Kimkem Safaris made sure every detail was perfect.",
      safari: "Tsavo National Park",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      fullReview: "Tsavo's red elephants are something special! The vast landscapes and diverse wildlife made for incredible photography opportunities. Our guide was passionate about conservation and shared fascinating stories about the park's history."
    },
    {
      id: 5,
      name: "Lisa Martinez",
      location: "California, USA",
      rating: 5,
      date: "November 2023",
      text: "From start to finish, this was the trip of a lifetime. The professionalism, knowledge, and genuine care from the entire team made our honeymoon safari absolutely perfect.",
      safari: "Lake Nakuru National Park",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      fullReview: "The flamingo spectacle at Lake Nakuru was breathtaking! Millions of pink birds creating a living carpet on the lake. We also saw both black and white rhinos, which was incredibly special. Perfect honeymoon destination!"
    },
    {
      id: 6,
      name: "Robert Wilson",
      location: "Toronto, Canada",
      rating: 5,
      date: "October 2023",
      text: "Exceptional service and an unforgettable adventure. The guides' expertise and passion for wildlife created memories that will last forever. Highly recommend Kimkem Safaris!",
      safari: "Nairobi National Park",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      fullReview: "Amazing to see wildlife with Nairobi's skyline in the background! Lions, giraffes, and zebras just minutes from the city center. Perfect for our short stopover - professionally organized and incredibly convenient."
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
              Traveler
              <span className="block text-safari-gold-400">Testimonials</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Discover what our guests say about their incredible safari experiences 
              with Kimkem Safaris across Kenya's magnificent landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-safari-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 safari-text-gradient">
              Real Stories from Real Adventures
            </h2>
            <p className="text-lg text-safari-green-600 max-w-2xl mx-auto leading-relaxed">
              Read authentic reviews from travelers who have experienced the magic of African safaris with us. 
              Their stories inspire us to continue delivering exceptional experiences.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="safari-card p-8 rounded-xl"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-safari-gold-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className="text-safari-gold-500 fill-safari-gold-500" 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-safari-green-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Full Review */}
                <p className="text-safari-green-600 mb-6 leading-relaxed italic">
                  {testimonial.fullReview}
                </p>

                {/* Safari Package */}
                <div className="mb-4">
                  <span className="bg-safari-gold-100 text-safari-gold-700 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.safari}
                  </span>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between mb-6 text-sm text-safari-green-600">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {testimonial.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {testimonial.location}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center pt-6 border-t border-safari-green-200">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-safari-green-800">{testimonial.name}</div>
                    <div className="text-sm text-safari-green-600">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center p-12 bg-white rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold mb-4 safari-text-gradient">Ready to Create Your Own Safari Story?</h3>
            <p className="text-safari-green-600 mb-8 text-lg">
              Join thousands of satisfied travelers who have experienced the adventure of a lifetime with Kimkem Safaris.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="safari-btn-primary text-lg px-10 py-4">
                Plan Your Safari
              </button>
              <button className="safari-btn-secondary text-lg px-10 py-4">
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
