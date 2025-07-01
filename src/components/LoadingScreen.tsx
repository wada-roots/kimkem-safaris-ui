
import { Loader2 } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-safari-green-600 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-safari-green-800 mb-2">Loading...</h2>
        <p className="text-safari-green-600">Preparing your safari experience</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
