import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaDownload, FaStar, FaSort } from 'react-icons/fa';
import appsData from '../data/appsData.json';
import Loading from '../components/Loading';
import weatherPro from '../assets/weather pro.png';
import epicQuest from '../assets/epiq.jpg';
import noteTaker from '../assets/note.png';
import musicFlow from '../assets/music.jpg';
import fitTracker from '../assets/fit.jpg';
import budgetWise from '../assets/budget.png';
import photoEditor from '../assets/photo e.jpg';
import languageLearn from '../assets/learn.png';
import socialConnect from '../assets/demo-app (1).webp';
import meditation from '../assets/demo-app (2).webp';
import recipeBook from '../assets/demo-app (3).webp';
import travelPlanner from '../assets/demo-app (4).webp';

const Apps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [filteredApps, setFilteredApps] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const appImages = {
    1: weatherPro,
    2: epicQuest,
    3: noteTaker,
    4: musicFlow,
    5: fitTracker,
    6: budgetWise,
    7: photoEditor,
    8: languageLearn,
    9: socialConnect,
    10: meditation,
    11: recipeBook,
    12: travelPlanner,
  };

  useEffect(() => {
    if (searchTerm) {
      setSearchLoading(true);
    }
    
    const timer = setTimeout(() => {
      let filtered = appsData.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (sortBy === 'high-low') {
        filtered.sort((a, b) => b.downloads - a.downloads);
      } else if (sortBy === 'low-high') {
        filtered.sort((a, b) => a.downloads - b.downloads);
      }

      setFilteredApps(filtered);
      setIsLoading(false);
      setSearchLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, sortBy]);

  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(1)}M`;
    }
    return downloads;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our All Applications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore All Apps on the Market developed by us. We code for Millions:
          </p>
        </div>

    
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
    
          <div className="text-lg font-semibold text-gray-700">
            ({filteredApps.length}) Apps Found
          </div>

          <div className="flex gap-4">
           
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Sort by</option>
              <option value="high-low">High-Low (Downloads)</option>
              <option value="low-high">Low-High (Downloads)</option>
            </select>

        
            <div className="relative w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search apps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {searchLoading && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                </div>
              )}
            </div>
          </div>
        </div>

       
        {isLoading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : filteredApps.length === 0 ? (
          
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">
              No App Found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search terms or browse all apps.
            </p>
          </div>
        ) : (
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app) => (
              <Link
                key={app.id}
                to={`/app/${app.id}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 overflow-hidden group"
              >
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                    {app.title}
                  </h3>

                  <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src={appImages[app.id]} 
                      alt={app.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = e.target.parentElement.querySelector('.image-fallback');
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="image-fallback flex w-full h-full bg-linear-to-br from-blue-500 to-purple-600 items-center justify-center">
                      <span className="text-white text-xl font-bold">App</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaDownload className="text-sm" />
                      <span className="font-semibold text-gray-900">
                        {formatDownloads(app.downloads)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaStar className="text-yellow-500" />
                      <span className="font-semibold text-gray-900">
                        {app.ratingAvg}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200"></div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;