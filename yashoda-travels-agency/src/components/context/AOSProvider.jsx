import  { createContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AOSContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return <AOSContext.Provider value={AOS}>{children}</AOSContext.Provider>;
};
