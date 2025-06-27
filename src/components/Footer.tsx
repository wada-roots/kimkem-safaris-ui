
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Safari Packages', href: '#safaris' },
    { name: 'About Us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const safariDestinations = [
    'Maasai Mara',
    'Amboseli National Park',
    'Samburu National Reserve',
    'Lake Nakuru',
    'Tsavo National Parks',
    'Aberdare National Park'
  ];

  return (
    <footer className="bg-safari-green-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-safari-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Kimkem Safaris</h3>
                <p className="text-xs text-safari-gold-400">Digital LKE</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Your premier partner for authentic African safari experiences. We create unforgettable adventures 
              that connect you with Kenya's incredible wildlife and rich cultural heritage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-safari-gold-600 rounded-full flex items-center justify-center hover:bg-safari-gold-700 transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-safari-gold-600 rounded-full flex items-center justify-center hover:bg-safari-gold-700 transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-safari-gold-600 rounded-full flex items-center justify-center hover:bg-safari-gold-700 transition-colors duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-safari-gold-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-safari-gold-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Safari Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-safari-gold-400">Safari Destinations</h4>
            <ul className="space-y-3">
              {safariDestinations.map((destination) => (
                <li key={destination}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-safari-gold-400 transition-colors duration-300"
                  >
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-safari-gold-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-safari-gold-400 mt-1 flex-shrink-0" />
                <div className="text-white/80">
                  <p>Kimathi Street</p>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-safari-gold-400 flex-shrink-0" />
                <div className="text-white/80">
                  <p>+254 700 123 456</p>
                  <p>+254 733 987 654</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-safari-gold-400 flex-shrink-0" />
                <div className="text-white/80">
                  <p>info@kimkemsafaris.com</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-medium mb-3 text-safari-gold-400">Newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:border-safari-gold-400 text-white placeholder-white/60"
                />
                <button className="bg-safari-gold-600 hover:bg-safari-gold-700 px-4 py-2 rounded-r-lg transition-colors duration-300">
                  <Mail size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Kimkem Safaris - Digital LKE. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-safari-gold-400 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-safari-gold-400 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-safari-gold-400 text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
