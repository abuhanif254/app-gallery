import { Link } from 'react-router-dom';
import { FaStar, FaDownload } from 'react-icons/fa';
import appsData from '../../data/appsData.json';
import weatherPro from '../../assets/weather pro.png';
import epicQuest from '../../assets/epiq.jpg';
import noteTaker from '../../assets/note.png';
import musicFlow from '../../assets/music.jpg';
import fitTracker from '../../assets/fit.jpg';
import budgetWise from '../../assets/budget.png';
import photoEditor from '../../assets/photo e.jpg';
import languageLearn from '../../assets/learn.png';

const TrendingApps = () => {
  const trendingApps = appsData.slice(0, 8);

  const appImages = {
    1: weatherPro,
    2: epicQuest,
    3: noteTaker,
    4: musicFlow,
    5: fitTracker,
    6: budgetWise,
    7: photoEditor,
    8: languageLearn
  };

  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(0)}M`;
    }
    return `${downloads}`;
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Trending Apps
          </h1>
          <p className="text-xl text-gray-600">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16 justify-items-center">
          {trendingApps.map((app) => (
            <Link
              key={app.id}
              to={`/app/${app.id}`}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-200 hover:transform hover:-translate-y-2 flex flex-col w-full max-w-xs overflow-hidden"
            >
            
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={appImages[app.id]} 
                  alt={app.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                <div className="flex w-full h-full bg-linear-to-br from-blue-500 to-purple-600 items-center justify-center">
                  <span className="text-white text-2xl font-bold">App</span>
                </div>
              </div>
              
              
              <div className="p-6 w-full flex flex-col grow">
                <h3 className="font-bold text-gray-900 text-lg leading-tight text-center mb-6 line-clamp-2">
                  {app.title}
                </h3>
                
                
                <div className="space-y-3 mt-auto">
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaDownload className="text-sm" />
                      <span className="text-sm">Downloads</span>
                    </div>
                    <span className="font-bold text-gray-900 text-sm">
                      {formatDownloads(app.downloads)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaStar className="text-yellow-500 text-sm" />
                      <span className="text-sm">Rating</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-gray-900 text-sm">
                        {app.ratingAvg}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/apps"
            className="inline-flex items-center px-12 py-4 text-lg font-bold text-white rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;