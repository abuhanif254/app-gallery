import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaDownload, FaStar, FaSort } from 'react-icons/fa';
import appsData from '../data/appsData.json';
import Loading from '../components/Loading';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    const installedAppIds = JSON.parse(localStorage.getItem('installedApps') || '[]');
    const apps = appsData.filter(app => installedAppIds.includes(app.id));
    
   
    let sortedApps = [...apps];
    if (sortBy === 'size') {
      sortedApps.sort((a, b) => b.size - a.size);
    }
    
    setInstalledApps(sortedApps);
    
   
    setTimeout(() => setIsLoading(false), 500);
  }, [sortBy]);

  const handleUninstall = (appId) => {
    const installedAppIds = JSON.parse(localStorage.getItem('installedApps') || '[]');
    const updatedAppIds = installedAppIds.filter(id => id !== appId);
    
    localStorage.setItem('installedApps', JSON.stringify(updatedAppIds));
    setInstalledApps(installedApps.filter(app => app.id !== appId));
    
    setToastMessage('App uninstalled successfully!');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(1)}M`;
    }
    return downloads;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
     
      {showToast && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {toastMessage}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Installed Apps
          </h1>
          <p className="text-xl text-gray-600">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

       
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
          
          <div className="text-lg font-semibold text-gray-700">
            {installedApps.length} App{installedApps.length !== 1 ? 's' : ''} Found
          </div>

         
          <div className="flex items-center gap-2">
            <FaSort className="text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="">Sort by Size</option>
              <option value="size">Large to Small</option>
            </select>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : installedApps.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📱</div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No Apps Installed</h3>
            <p className="text-gray-500 mb-4">Install some apps to see them here.</p>
            <Link 
              to="/apps" 
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Browse Apps
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {installedApps.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                 
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl text-gray-900 mb-4">
                      {app.title}
                    </h3>
                    
                   
                    <div className="flex flex-wrap gap-6">
                      <div className="flex items-center gap-2">
                        <FaDownload className="text-gray-500" />
                        <span className="font-semibold text-gray-900">
                          {formatDownloads(app.downloads)}
                        </span>
                        <span className="text-gray-500">Downloads</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-500" />
                        <span className="font-semibold text-gray-900">{app.ratingAvg}</span>
                        <span className="text-gray-500">Rating</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">{app.size}MB</span>
                        <span className="text-gray-500">Size</span>
                      </div>
                    </div>
                  </div>

                 
                  <button
                    onClick={() => handleUninstall(app.id)}
                    className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg transition-colors font-semibold min-w-[120px]"
                  >
                    <FaTrash />
                    Uninstall
                  </button>
                </div>

                
                <div className="border-t border-gray-200 mt-6 pt-6">
                  <p className="text-gray-600">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;