
import { X, MapPin, Clock, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

interface SafariModalProps {
  isOpen: boolean;
  onClose: () => void;
  safari: {
    name: string;
    description: string;
    image: string;
    duration: string;
    price: string;
    highlights: string[];
    included: string[];
    difficulty: string;
    bestTime: string;
  };
}

const SafariModal = ({ isOpen, onClose, safari }: SafariModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm overflow-y-auto flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl max-h-[90vh] overflow-y-auto my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Image and Title Overlay */}
        <div className="relative">
          <img 
            src={safari.image} 
            alt={safari.name}
            className="w-full h-80 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors z-10"
          >
            <X size={24} className="text-safari-green-800" />
          </button>
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 rounded-t-2xl">
            <h2 className="text-4xl font-bold text-white mb-3">{safari.name}</h2>
            <div className="flex items-center text-white/90 text-lg">
              <Clock size={20} className="mr-2" />
              <span className="mr-6">{safari.duration}</span>
              <span className="text-safari-gold-400 font-bold text-xl">{safari.price}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - About This Safari */}
            <div>
              <h3 className="text-2xl font-bold text-safari-green-800 mb-4">About This Safari</h3>
              <p className="text-safari-green-600 text-base leading-relaxed mb-6">
                {safari.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-safari-green-800 mb-4">Safari Highlights</h4>
                <ul className="space-y-3">
                  {safari.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <Star size={16} className="text-safari-gold-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-safari-green-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Safari Details */}
            <div>
              <div className="bg-safari-green-50 p-6 rounded-xl mb-6">
                <h4 className="text-xl font-semibold text-safari-green-800 mb-4">Safari Details</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock size={18} className="text-safari-green-600 mr-3" />
                    <div>
                      <span className="font-medium text-safari-green-800">Duration: </span>
                      <span className="text-safari-green-700">{safari.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users size={18} className="text-safari-green-600 mr-3" />
                    <div>
                      <span className="font-medium text-safari-green-800">Difficulty: </span>
                      <span className="text-safari-green-700">{safari.difficulty}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={18} className="text-safari-green-600 mr-3" />
                    <div>
                      <span className="font-medium text-safari-green-800">Best Time: </span>
                      <span className="text-safari-green-700">{safari.bestTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-safari-green-800 mb-4">What's Included</h4>
                <ul className="space-y-3">
                  {safari.included.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-safari-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-safari-green-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-safari-green-200 mt-8">
            <Link 
              to="/book" 
              className="safari-btn-primary flex-1 text-center py-4 text-lg font-semibold"
              onClick={onClose}
            >
              Book This Safari Now
            </Link>
            <button 
              onClick={onClose}
              className="safari-btn-secondary flex-1 py-4 text-lg font-semibold"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafariModal;
