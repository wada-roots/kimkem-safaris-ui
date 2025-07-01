
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '@/contexts/LoadingContext';

const LoadingRouter = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading();
    
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      stopLoading();
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname, startLoading, stopLoading]);

  return <>{children}</>;
};

export default LoadingRouter;
