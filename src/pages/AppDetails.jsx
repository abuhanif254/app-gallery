import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaDownload, FaArrowLeft, FaCheck, FaRegSadCry } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import appsData from '../data/appsData.json';
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

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showToast, setShowToast] = useState(false);

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
    const foundApp = appsData.find(a => a.id === parseInt(id));
    setApp(foundApp);

    const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    setIsInstalled(installedApps.includes(parseInt(id)));
  }, [id]);

  const handleInstall = () => {
    if (!app) return;

    const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    
    if (!installedApps.includes(app.id)) {
      installedApps.push(app.id);
      localStorage.setItem('installedApps', JSON.stringify(installedApps));
      setIsInstalled(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(1)}M`;
    }
    if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(1)}K`;
    }
    return downloads;
  };

  const chartData = app ? app.ratings.map(rating => ({
    name: rating.name.replace(' star', ''),
    count: rating.count,
    fill: '#8884d8'
  })) : [];

  if (!app) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4"><FaRegSadCry /></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">App Not Found</h2>
          <p className="text-gray-600 mb-4">The app you're looking for doesn't exist.</p>
          <Link to="/apps" className="text-blue-500 hover:text-blue-600">
            Back to Apps
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
     
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          <div className="flex items-center gap-2">
            <FaCheck className="text-white" />
            <span>{app.title} installed successfully!</span>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <Link 
          to="/apps" 
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 mb-8 text-lg"
        >
          <FaArrowLeft />
          Back to Apps
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
           
            <div className="flex flex-col lg:flex-row gap-8 mb-12">
             
              <div className="lg:w-2/5">
                <div className="w-full h-80 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src={appImages[app.id]} 
                    alt={app.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              
              <div className="lg:w-3/5">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{app.title}</h1>
                <p className="text-xl text-gray-600 mb-8">Developed by {app.companyName}</p>
                
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center gap-2 text-gray-900 mb-2">
                      <FaDownload className="text-xl" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {formatDownloads(app.downloads)}
                    </div>
                    <p className="text-gray-600">Downloads</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center gap-2 text-yellow-500 mb-2">
                      <FaStar className="text-xl" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {app.ratingAvg}
                    </div>
                    <p className="text-gray-600">Average Ratings</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {formatDownloads(app.reviews)}
                    </div>
                    <p className="text-gray-600">Total Reviews</p>
                  </div>
                </div>

               
                <button
                  onClick={handleInstall}
                  disabled={isInstalled}
                  className={`w-full py-4 rounded-xl font-bold text-lg text-white transition-all ${
                    isInstalled
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
                  }`}
                >
                  {isInstalled ? 'Installed' : `Install Now (${app.size} MB)`}
                </button>
              </div>
            </div>

            
            <div className="border-t border-gray-200 my-8"></div>

            
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ratings</h2>
              
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                
                <div className="lg:w-1/4 space-y-4">
                  {chartData.slice().reverse().map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-700">
                        {item.name} star
                      </span>
                    </div>
                  ))}
                </div>

                
                <div className="lg:w-3/4 h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chartData.slice().reverse()}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                      <XAxis type="number" />
                      <YAxis 
                        type="category" 
                        dataKey="name" 
                        tick={{ fontSize: 0 }}
                        width={0}
                      />
                      <Tooltip />
                      <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill="#8884d8" />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              
              <div className="flex justify-between mt-2 px-4">
                {chartData.slice().reverse().map((item) => (
                  <span key={item.name} className="text-sm text-gray-600 font-medium">
                    {item.count}
                  </span>
                ))}
              </div>
            </div>

            
            <div className="border-t border-gray-200 my-8"></div>

           
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Description</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-justify">
                  {app.description}
                </p>
                
                <p className="text-gray-700 leading-relaxed text-justify mt-4">
                  A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific session, making your schedule more structured. The built-in analytics show not only how much time you've worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify mt-4">
                  For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you're studying for exams, coding, writing, or handling office work, the app adapts to your routine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;