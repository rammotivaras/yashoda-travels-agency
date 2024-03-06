/* eslint-disable no-unused-vars */
import carPng from "../../assets/carPng.jpg";
import  { useContext } from 'react';
import { AOSContext } from '../context/AOSProvider';
const Hero = () => {
    const aos = useContext(AOSContext);
  

  return (
    <div id="#" className="dark:bg-black dark:text-white duration-300 relative -z-20">
      <div className="container min-h-[620px] flex">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="order-1 sm:order-2"
          >
            <img
              src={carPng}
              alt=""
              className="relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] rounded-lg "
            />
          </div>
          <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
            <p
              data-aos="fade-up"
              className="text-fuchsia-600 text-2xl font-serif mt-8"
            >
              Trustable
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Yashoda Travels Agency
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000" className="text-xl lg:text-2xl font-serif">
              Unlock the magic of Dwarka with Yashoda Travel. Your gateway to
              spiritual bliss awaits!
             </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
