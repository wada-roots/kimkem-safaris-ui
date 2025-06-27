
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Our safari with Kimkem was absolutely incredible! The guides were knowledgeable, the accommodations were perfect, and we saw all the Big Five. The Great Migration was a once-in-a-lifetime experience.",
      safari: "Maasai Mara Great Migration",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Sydney, Australia",
      rating: 5,
      text: "The attention to detail and personalized service was outstanding. Every day brought new adventures and amazing wildlife encounters. The cultural experiences with local communities were particularly meaningful.",
      safari: "Samburu Wild Frontier",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      text: "The elephants in Amboseli were magnificent, and the views of Kilimanjaro were breathtaking. Our guide made sure we experienced the best of Kenya's wildlife while learning about conservation efforts.",
      safari: "Amboseli Elephant Paradise",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-safari-green-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 safari-text-gradient">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-safari-green-600 max-w-2xl mx-auto leading-relaxed">
            Hear from adventurers who have experienced the magic of African safaris with us. 
            Their stories inspire us to continue delivering exceptional experiences.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`safari-card p-8 rounded-xl animate-scale-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
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
              <p className="text-safari-green-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Safari Package */}
              <div className="mb-6">
                <span className="bg-safari-gold-100 text-safari-gold-700 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.safari}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center">
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
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 safari-text-gradient">Ready to Create Your Own Safari Story?</h3>
          <p className="text-safari-green-600 mb-6">Join thousands of satisfied travelers who have experienced the adventure of a lifetime.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="safari-btn-primary">
              Plan Your Safari
            </button>
            <button className="safari-btn-secondary">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
