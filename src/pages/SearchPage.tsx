import React, { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Filter, DollarSign, Clock, Accessibility } from 'lucide-react';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 40.7128,
  lng: -74.0060
};

const SearchPage: React.FC = () => {
  const [filters, setFilters] = useState({
    price: '',
    distance: '',
    accessibility: false
  });

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Find Parking</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Filter className="mr-2" /> Filters
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <select
                  name="price"
                  value={filters.price}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                >
                  <option value="">Any</option>
                  <option value="low">$0 - $10</option>
                  <option value="medium">$10 - $20</option>
                  <option value="high">$20+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Distance</label>
                <select
                  name="distance"
                  value={filters.distance}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                >
                  <option value="">Any</option>
                  <option value="close">Less than 0.5 miles</option>
                  <option value="medium">0.5 - 1 mile</option>
                  <option value="far">1+ miles</option>
                </select>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="accessibility"
                  name="accessibility"
                  checked={filters.accessibility}
                  onChange={handleFilterChange}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label htmlFor="accessibility" className="ml-2 block text-sm text-gray-900">
                  Accessible Parking
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
            >
              <Marker position={center} />
            </GoogleMap>
          ) : (
            <div className="h-[400px] flex items-center justify-center bg-gray-100">
              <p>Loading map...</p>
            </div>
          )}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Available Parking Spots</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((spot) => (
                <div key={spot} className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">Parking Spot {spot}</h3>
                    <p className="text-gray-600">123 Main St, New York, NY 10001</p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <DollarSign className="w-4 h-4 mr-1" /> $10/hour
                      <Clock className="w-4 h-4 ml-4 mr-1" /> Available Now
                      {spot === 2 && <Accessibility className="w-4 h-4 ml-4 mr-1" />}
                    </div>
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Reserve
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;