
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Safaris', href: '/safaris' },
    { name: 'Vehicles', href: '/vehicles' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const isExternalLink = (href: string) => href.startsWith('#');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-safari-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div>
              <h1 className="text-xl font-bold safari-text-gradient">Kimkem Safaris</h1>
              <p className="text-xs text-safari-green-600">Digital LKE</p>
            </div>
          </Link>

          {/* Desktop Navigation - centered/left aligned */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                isExternalLink(item.href) ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-safari-green-700 hover:text-safari-gold-600 font-medium transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-safari-gold-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium transition-colors duration-300 relative group ${
                      location.pathname === item.href 
                        ? 'text-safari-gold-600' 
                        : 'text-safari-green-700 hover:text-safari-gold-600'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-safari-gold-600 transition-all duration-300 ${
                      location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Book Now Button - stays on the right */}
          <Link to="/book" className="hidden md:block safari-btn-primary">
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-safari-green-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-safari-green-200">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                isExternalLink(item.href) ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-safari-green-700 hover:text-safari-gold-600 font-medium transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium transition-colors duration-300 ${
                      location.pathname === item.href 
                        ? 'text-safari-gold-600' 
                        : 'text-safari-green-700 hover:text-safari-gold-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link to="/book" className="safari-btn-primary mt-4 w-full text-center" onClick={() => setIsMenuOpen(false)}>
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
