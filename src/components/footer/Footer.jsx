
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaGooglePlay, FaAppStore, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-gray-900 to-gray-800 text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
         
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">AG</span>
              </div>
              <span className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                App Gallery
              </span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover amazing apps that transform your digital experience. We curate the best applications to make your life simpler, smarter, and more productive.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/abuhanif254" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/apps" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  All Apps
                </Link>
              </li>
              <li>
                <Link to="/installation" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  My Installation
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  About Us
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                   Games & Entertainment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                   Productivity
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                   Music & Audio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                   Education
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                   Health & Fitness
                </a>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Get Our App</h3>
            <div className="space-y-4">
              <a 
                href="#" 
                className="flex items-center justify-center space-x-3 bg-black hover:bg-gray-900 text-white py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg border border-gray-700"
              >
                <FaAppStore className="text-2xl" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <FaGooglePlay className="text-xl" />
                <div className="text-left">
                  <div className="text-xs text-green-200">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

       
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get notified about new apps and features</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 grow"
              />
              <button className="bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 App Gallery. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              Made <FaHeart className="text-red-500 mx-1" /> by Abu Hanif
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;