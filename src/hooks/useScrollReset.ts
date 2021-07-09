import { useEffect } from 'react';
import { useLocation } from 'wouter';

// reset the scroll to top whenever the window location changes
const useScrollReset = () => {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};

export default useScrollReset;
