import { useState } from 'react';

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, phone, departureDate, returnDate });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Book Your Trip</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-5/12 mb-6">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="w-full md:w-5/12 mb-6">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="w-full md:w-5/12 mb-6">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            className="input"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="w-full md:w-5/12 mb-6">
          <label htmlFor="departureDate" className="block text-gray-700 font-bold mb-2">Departure Date</label>
          <input
            type="date"
            id="departureDate"
            className="input"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
          />
        </div>
        <div className="w-full md:w-5/12 mb-6">
          <label htmlFor="returnDate" className="block text-gray-700 font-bold mb-2">Return Date</label>
          <input
            type="date"
            id="returnDate"
            className="input"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <div className="text-center">
            <button type="submit" className="btn bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-80">Book Now
            
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Booking;
