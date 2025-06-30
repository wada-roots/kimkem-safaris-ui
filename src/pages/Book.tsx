
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Users, MapPin, Star, Phone, Mail } from 'lucide-react';

const Book = () => {
  const [searchParams] = useSearchParams();
  const [selectedDestination, setSelectedDestination] = useState('');

  useEffect(() => {
    const destination = searchParams.get('destination');
    if (destination) {
      setSelectedDestination(destination);
    }
  }, [searchParams]);

  const popularSafaris = [
    {
      name: "Maasai Mara Great Migration",
      duration: "5 Days",
      price: "From $2,450",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Amboseli Elephant Paradise",
      duration: "4 Days", 
      price: "From $1,890",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Samburu Wild Frontier",
      duration: "6 Days",
      price: "From $2,180", 
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
              Book Your
              <span className="block text-safari-gold-400">Safari Adventure</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Take the first step towards your dream African safari. 
              Our experts will help you create the perfect itinerary.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-gradient-to-b from-white to-safari-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 safari-text-gradient">Safari Booking Form</h2>
                <p className="text-safari-green-600 mb-8">
                  Complete the form below to start planning your perfect safari experience. 
                  Our team will contact you within 24 hours with a personalized itinerary.
                </p>
                
                <form className="space-y-6">
                  {/* Personal Information */}
                  <div className="bg-safari-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-safari-green-800 mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-safari-green-700 font-medium mb-2">First Name *</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold-500"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-safari-green-700 font-medium mb-2">Last Name *</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold-500"
                          placeholder="Your last name"
                        />
                      </div>
                      <div>
                        <label className="block text-safari-green-700 font-medium mb-2">Email Address *</label>
                        <input 
                          type="email" 
                          required
                          className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-safari-green-700 font-medium mb-2">Phone Number *</label>
                        <input 
                          type="tel" 
                          required
                          className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold-500"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Safari Details */}
                  <div className="bg-safari-gold-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-safari-green-800 mb-4">Safari Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-safari-green-700 font-medium mb-2">Preferred Safari *</label>
                        <select 
                          required 
                          value={selectedDestination}
                          onChange={(e) => setSelectedDestination(e.target.value)}
                          className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold-500"
                        >
                          <option value="">Select your preferred safari</option>
                          <option value="Maasai Mara National Reserve">Maasai Mara National Reserve</option>
                          <option value="Amboseli National Park">Amboseli National Park</option>
                          <option value="Lake Nakuru National Park">Lake Nakuru National Park</option>
                          <option value="Tsavo National Park">Tsavo National Park</option>
                          <option value="Samburu National Reserve">Samburu National Reserve</option>
                          <option value="Aberdare National Park">Aberdare National Park</option>
                          <option value="Nairobi National Park">Nairobi National Park</option>
                          <option value="Diani Beach">Diani Beach</option>
                          <option value="Watamu Marine Park">Watamu Marine Park</option>
                          <option value="Custom Safari Package">Custom Safari Package</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-safari-green-700 font-medium mb-2">Group Size *</label>
                        <select required className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold-500">
                          <option value="">Select group size</option>
                          <option>1 Person</option>
                          <option>2 People</option>
                          <option>3-4 People</option>
                          <option>5-6 People</option>
                          <option>7-8 People</option>
                          <option>9-12 People</option>
                          <option>13+ People</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-safari-green-700 font-medium mb-2">Preferred Start Date *</label>
                        <input 
                          type="date" 
                          required
                          className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold-500"
                        />
                      </div>
                      <div>
                        <label className="block text-safari-green-700 font-medium mb-2">Duration Preference</label>
                        <select className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold-500">
                          <option>Flexible</option>
                          <option>1-2 Days</option>
                          <option>3-4 Days</option>
                          <option>5-6 Days</option>
                          <option>1 Week</option>
                          <option>2+ Weeks</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <label className="block text-safari-green-700 font-medium mb-2">Budget Range (Optional)</label>
                    <select className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold-500">
                      <option>Select budget range</option>
                      <option>Under $1,000</option>
                      <option>$1,000 - $2,000</option>
                      <option>$2,000 - $3,000</option>
                      <option>$3,000 - $5,000</option>
                      <option>$5,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-safari-green-700 font-medium mb-2">Special Requirements or Requests</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold-500"
                      placeholder="Any dietary restrictions, accessibility needs, special occasions, or specific wildlife you'd like to see..."
                    ></textarea>
                  </div>
                  
                  <button className="w-full safari-btn-primary py-4 text-lg">
                    Submit Booking Request
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-safari-green-800 mb-4">Need Help?</h3>
                <p className="text-safari-green-600 mb-4">
                  Our safari experts are here to help you plan the perfect adventure.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-safari-gold-600 mr-3" />
                    <span className="text-safari-green-700">+254 700 123 456</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-safari-gold-600 mr-3" />
                    <span className="text-safari-green-700">bookings@kimkemsafaris.com</span>
                  </div>
                </div>
              </div>

              {/* Popular Safaris */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-safari-green-800 mb-4">Popular Safaris</h3>
                <div className="space-y-4">
                  {popularSafaris.map((safari, index) => (
                    <div key={index} className="border border-safari-green-200 rounded-lg p-4">
                      <img 
                        src={safari.image} 
                        alt={safari.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-semibold text-safari-green-800 mb-2">{safari.name}</h4>
                      <div className="flex justify-between text-sm text-safari-green-600">
                        <span>{safari.duration}</span>
                        <span className="font-semibold text-safari-gold-600">{safari.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Book;
