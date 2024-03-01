import React, { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 0;
  });

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return windowWidth;
};

export default useWindowWidth;
