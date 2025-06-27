
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    safari: '',
    guests: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-safari-green-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 safari-text-gradient">
            Start Your Safari Adventure
          </h2>
          <p className="text-lg text-safari-green-600 max-w-2xl mx-auto leading-relaxed">
            Ready to embark on an unforgettable journey? Get in touch with our expert team to plan 
            your perfect African safari experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-safari-green-800 mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-safari-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-safari-gold-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-safari-green-800 mb-1">Phone</h4>
                  <p className="text-safari-green-600">+254 700 123 456</p>
                  <p className="text-safari-green-600">+254 733 987 654</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-safari-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-safari-gold-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-safari-green-800 mb-1">Email</h4>
                  <p className="text-safari-green-600">info@kimkemsafaris.com</p>
                  <p className="text-safari-green-600">bookings@kimkemsafaris.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-safari-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-safari-gold-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-safari-green-800 mb-1">Office</h4>
                  <p className="text-safari-green-600">Kimathi Street, Nairobi</p>
                  <p className="text-safari-green-600">Kenya, East Africa</p>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-safari-gradient p-6 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-3">Quick Consultation</h4>
              <p className="mb-4 text-white/90">Need immediate assistance? Our safari experts are available 24/7 to help plan your adventure.</p>
              <button className="bg-white text-safari-green-800 font-semibold py-3 px-6 rounded-lg hover:bg-safari-gold-100 transition-colors duration-300">
                Call Now
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="safari-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-safari-green-800 mb-6">Plan Your Safari</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-safari-green-700 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:ring-2 focus:ring-safari-gold-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-safari-green-700 font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:ring-2 focus:ring-safari-gold-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-safari-green-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:ring-2 focus:ring-safari-gold-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-safari-green-700 font-medium mb-2">Safari Package</label>
                  <select
                    name="safari"
                    value={formData.safari}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:ring-2 focus:ring-safari-gold-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a Safari</option>
                    <option value="maasai-mara">Maasai Mara Great Migration</option>
                    <option value="amboseli">Amboseli Elephant Paradise</option>
                    <option value="samburu">Samburu Wild Frontier</option>
                    <option value="custom">Custom Safari</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-safari-green-700 font-medium mb-2">Number of Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:ring-2 focus:ring-safari-gold-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3-4">3-4 Guests</option>
                    <option value="5-8">5-8 Guests</option>
                    <option value="8+">8+ Guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-safari-green-700 font-medium mb-2">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:ring-2 focus:ring-safari-gold-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-safari-green-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-safari-green-200 rounded-lg focus:ring-2 focus:ring-safari-gold-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your dream safari experience..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full safari-btn-primary flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
