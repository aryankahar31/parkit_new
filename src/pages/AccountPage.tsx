import React, { useState } from 'react';
import { User, CreditCard, Clock, Star } from 'lucide-react';

const AccountPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Account</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-gray-600" />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-center mb-4">John Doe</h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full text-left py-2 px-4 rounded ${
                      activeTab === 'profile' ? 'bg-red-600 text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    Profile
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('payments')}
                    className={`w-full text-left py-2 px-4 rounded ${
                      activeTab === 'payments' ? 'bg-red-600 text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    Payment Methods
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('reservations')}
                    className={`w-full text-left py-2 px-4 rounded ${
                      activeTab === 'reservations' ? 'bg-red-600 text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    Reservations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('favorites')}
                    className={`w-full text-left py-2 px-4 rounded ${
                      activeTab === 'favorites' ? 'bg-red-600 text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    Favorite Spots
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <div className="bg-white shadow-md rounded-lg p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                        defaultValue="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                        defaultValue="Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                        defaultValue="john.doe@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                        defaultValue="(123) 456-7890"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}
            {activeTab === 'payments' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Payment Methods</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                    <div className="flex items-center">
                      <CreditCard className="w-8 h-8 mr-4 text-gray-600" />
                      <div>
                        <p className="font-semibold">Visa ending in 1234</p>
                        <p className="text-sm text-gray-600">Expires 12/2025</p>
                      </div>
                    </div>
                    <button className="text-red-600 hover:text-red-800">Remove</button>
                  </div>
                </div>
                <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Add New Payment Method
                </button>
              </div>
            )}
            {activeTab === 'reservations' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">My Reservations</h2>
                <div className="space-y-4">
                  {[1, 2].map((reservation) => (
                    <div key={reservation} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold">Parking Spot {reservation}</h3>
                        <span className="text-sm text-gray-600">Reservation #{reservation}001</span>
                      </div>
                      <p className="text-gray-600 mb-2">123 Main St, New York, NY 10001</p>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Clock className="w-4 h-4 mr-1" /> March 15, 2024 | 2:00 PM - 5:00 PM
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">$15.00</span>
                        <button className="text-red-600 hover:text-red-800">Cancel Reservation</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'favorites' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Favorite Parking Spots</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((spot) => (
                    <div key={spot} className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold">Parking Spot {spot}</h3>
                        <p className="text-gray-600">123 Main St, New York, NY 10001</p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <Star className="w-4 h-4 mr-1 text-yellow-400" />
                          4.5 (120 reviews)
                        </div>
                      </div>
                      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Reserve
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;