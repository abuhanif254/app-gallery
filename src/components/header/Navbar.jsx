import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
           
            <img 
              src="/src/assets/logo.png" 
              alt="App Gallery Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-gray-800">App Gallery</span>
          </Link>

         
          <div className="flex space-x-8">
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

         
          <a 
            href="https://github.com/abuhanif254"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Contribution
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;