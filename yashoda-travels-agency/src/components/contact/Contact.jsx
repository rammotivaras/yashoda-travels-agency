/* eslint-disable react/no-unescaped-entities */
import { FaPhone, FaInstagram, FaTwitter, FaFacebook, FaWhatsapp, FaLocationArrow } from 'react-icons/fa';

const ContactPage = () => {
  const handleLocationClick = () => {
    // Replace the latitude and longitude with your actual location coordinates
    const latitude = "latitude_here";
    const longitude = "longitude_here";
    
    // Open Google Maps URL with the provided location coordinates
    window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, "_blank");
  };

  return (
    
    <div  id="contact"  className="mx-auto py-12 bg-gray-100 dark:bg-white">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Contact Us</h1>
      
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Contact details */}
        <div className="flex flex-col items-center" onClick={handleLocationClick}>
          <FaLocationArrow className="text-3xl mb-2 cursor-pointer hover:text-primary" />
          <p className="text-center">Gujarat, Dev Bhumi Dwarka</p>
        </div>
        <div className="flex flex-col items-center">
          <a href="tel:+919898313650" className="hover:text-primary">
            <FaPhone className="text-3xl mb-2" />
          </a>
          <p className="text-center">9898313650</p>
        </div>
        <div className="flex flex-col items-center">
          <a href="https://instagram.com/yashodatexiagency" className="hover:text-primary">
            <FaInstagram className="text-3xl mb-2" />
          </a>
          <p className="text-center">@yashodatexiagency</p>
        </div>
        <div className="flex flex-col items-center">
          <a href="https://twitter.com/yashodatexiagency" className="hover:text-primary">
            <FaTwitter className="text-3xl mb-2" />
          </a>
          <p className="text-center">@yashodatexiagency</p>
        </div>
        <div className="flex flex-col items-center">
          <a href="https://facebook.com/yashodatexiagency" className="hover:text-primary">
            <FaFacebook className="text-3xl mb-2" />
          </a>
          <p className="text-center">Yashoda Texi Agency</p>
        </div>
        <div className="flex flex-col items-center">
          <a href="https://wa.me/919898313650" className="hover:text-primary">
            <FaWhatsapp className="text-3xl mb-2" />
          </a>
          <p className="text-center">9898313650</p>
        </div>
      </div>

      {/* Yashoda Texi Agency description */}
      <div className="mt-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">About Yashoda Texi Agency</h2>
        <p className="text-gray-700">
          We at Yashoda Texi Agency provide reliable and comfortable taxi services. 
          Whether you need a ride to the airport or want to explore the city, we've got you covered.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
