import React from 'react';
import { Link } from 'react-router-dom';
import { Car, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-red-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Car className="mr-2" />
          Parkit
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/search" className="hover:text-gray-200">Find Parking</Link></li>
            <li><Link to="/account" className="hover:text-gray-200 flex items-center"><User className="mr-1" /> Account</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;