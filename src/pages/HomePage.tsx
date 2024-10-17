import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Car } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-500 to-red-600 text-white">
      <h1 className="text-5xl font-bold mb-6">Find Parking Near You</h1>
      <p className="text-xl mb-8">Discover and reserve parking spaces with ease</p>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center border-b border-gray-300 py-2">
          <MapPin className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Enter your location"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
          <Link to="/search" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            <Search />
          </Link>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-64 p-4 bg-white bg-opacity-10 rounded-lg">
            <Search className="mx-auto mb-4 text-4xl" />
            <h3 className="text-xl font-semibold mb-2">Search</h3>
            <p>Find available parking spots near your destination</p>
          </div>
          <div className="w-64 p-4 bg-white bg-opacity-10 rounded-lg">
            <MapPin className="mx-auto mb-4 text-4xl" />
            <h3 className="text-xl font-semibold mb-2">Reserve</h3>
            <p>Book your parking space in advance</p>
          </div>
          <div className="w-64 p-4 bg-white bg-opacity-10 rounded-lg">
            <Car className="mx-auto mb-4 text-4xl" />
            <h3 className="text-xl font-semibold mb-2">Park</h3>
            <p>Enjoy hassle-free parking at your reserved spot</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;