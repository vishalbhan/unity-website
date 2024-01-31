import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<null | number>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Check if window is defined (runs only in the browser)
    if (typeof window !== 'undefined') {
      // Add event listener to window resize event
      window.addEventListener('resize', handleResize);

      // Initial window width
      setWindowWidth(window.innerWidth);

      // Clean up the event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return windowWidth;
};

export default useWindowWidth;