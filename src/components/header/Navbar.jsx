import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <img 
              src="/src/assets/logo.png" 
              alt="App Gallery Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-gray-800">App Gallery</span>
          </Link>

         
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/apps"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/apps') 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Apps
            </Link>
            <Link 
              to="/installation"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/installation') 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Installation
            </Link>
          </div>

         
          <div className="hidden md:block">
            <a 
              href="https://github.com/abuhanif254"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Contribution
            </a>
          </div>

          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

       
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100 py-4' : 'max-h-0 opacity-0 py-0 overflow-hidden'
        } border-t border-gray-200 bg-white`}>
          <div className="flex flex-col space-y-4 px-2">
            <Link 
              to="/"
              onClick={closeMenu}
              className={`px-3 py-3 text-base font-medium rounded-lg transition-colors ${
                isActive('/') 
                  ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/apps"
              onClick={closeMenu}
              className={`px-3 py-3 text-base font-medium rounded-lg transition-colors ${
                isActive('/apps') 
                  ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Apps
            </Link>
            <Link 
              to="/installation"
              onClick={closeMenu}
              className={`px-3 py-3 text-base font-medium rounded-lg transition-colors ${
                isActive('/installation') 
                  ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Installation
            </Link>
            
            <a 
              href="https://github.com/abuhanif254"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="px-3 py-3 bg-gray-800 text-white rounded-lg text-base font-medium hover:bg-gray-700 transition-colors text-center"
            >
              Contribution
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;