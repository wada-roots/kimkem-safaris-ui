
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Safaris', href: '/safaris' },
    { name: 'Our Fleet', href: '/vehicles' },
    { name: 'About', href: '/about' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const isExternalLink = (href: string) => href.startsWith('#');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - moved to left */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/660d9356-65c3-4d7a-92a7-ecc485dfb8a6.png" 
              alt="Kimken Safaris" 
              className="h-12 sm:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                isExternalLink(item.href) ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-safari-green-700 hover:text-safari-green-600 font-medium transition-colors duration-300 relative group text-sm xl:text-base"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-safari-green-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium transition-colors duration-300 relative group text-sm xl:text-base ${
                      location.pathname === item.href 
                        ? 'text-safari-green-600' 
                        : 'text-safari-green-700 hover:text-safari-green-600'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-safari-green-600 transition-all duration-300 ${
                      location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Book Now Button - Desktop only */}
          <Link to="/book" className="hidden xl:block safari-btn-primary text-sm xl:text-base px-4 xl:px-8 py-2 xl:py-3">
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-safari-green-700 rounded-lg hover:bg-safari-green-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-safari-green-200 bg-white/95 backdrop-blur-md rounded-b-lg">
            <div className="flex flex-col space-y-4 mt-4 px-2">
              {navItems.map((item) => (
                isExternalLink(item.href) ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-safari-green-700 hover:text-safari-green-600 font-medium transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-safari-green-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-safari-green-50 ${
                      location.pathname === item.href 
                        ? 'text-safari-green-600 bg-safari-green-50' 
                        : 'text-safari-green-700 hover:text-safari-green-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link 
                to="/book" 
                className="safari-btn-primary mt-4 w-full text-center py-3" 
                onClick={() => setIsMenuOpen(false)}
              >
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
