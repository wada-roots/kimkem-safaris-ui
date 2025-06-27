
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+254 700 123 456", "+254 720 987 654"],
      description: "Call us anytime for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@kimkemsafaris.com", "bookings@kimkemsafaris.com"],
      description: "Send us your inquiries and we'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Nairobi, Kenya", "East Africa"],
      description: "Visit our office or meet us at safari starting points"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat - Sun: 9:00 AM - 4:00 PM"],
      description: "We're available during these hours for consultations"
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
              Contact
              <span className="block text-safari-gold-400">Kimkem Safaris</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Ready to start your African adventure? Get in touch with our safari experts 
              to plan your perfect wildlife experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-safari-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 safari-text-gradient">Start Your Safari Adventure</h2>
              <p className="text-safari-green-600 mb-8">
                Fill out the form below and our safari experts will contact you within 24 hours 
                to discuss your perfect African adventure.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-safari-green-700 font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-safari-green-700 font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-safari-green-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-safari-green-700 font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-safari-green-700 font-medium mb-2">Safari Interest</label>
                  <select className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold-500">
                    <option>Select your preferred safari</option>
                    <option>Maasai Mara Great Migration</option>
                    <option>Amboseli Elephant Paradise</option>
                    <option>Samburu Wild Frontier</option>
                    <option>Tsavo National Park</option>
                    <option>Lake Nakuru National Park</option>
                    <option>Custom Safari Package</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-safari-green-700 font-medium mb-2">Travel Dates</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold-500"
                    placeholder="When would you like to travel?"
                  />
                </div>
                
                <div>
                  <label className="block text-safari-green-700 font-medium mb-2">Group Size</label>
                  <select className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold-500">
                    <option>Select group size</option>
                    <option>1-2 People</option>
                    <option>3-4 People</option>
                    <option>5-6 People</option>
                    <option>7-8 People</option>
                    <option>9+ People</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-safari-green-700 font-medium mb-2">Additional Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold-500"
                    placeholder="Tell us more about your dream safari experience..."
                  ></textarea>
                </div>
                
                <button className="w-full safari-btn-primary py-4 text-lg flex items-center justify-center">
                  <Send size={20} className="mr-2" />
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 safari-text-gradient">Get In Touch</h2>
                <p className="text-safari-green-600 text-lg">
                  Multiple ways to reach our safari experts
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start">
                    <div className="bg-safari-gold-100 p-3 rounded-lg mr-4">
                      <info.icon className="w-6 h-6 text-safari-gold-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-safari-green-800 mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-safari-green-700 font-medium mb-1">{detail}</p>
                      ))}
                      <p className="text-safari-green-600 text-sm mt-2">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Call to Action */}
              <div className="bg-safari-green-700 text-white rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
                <p className="mb-6">Speak directly with our safari specialists for personalized recommendations.</p>
                <button className="safari-btn-secondary">
                  Call Now: +254 700 123 456
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
