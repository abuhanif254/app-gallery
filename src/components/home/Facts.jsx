const Facts = () => {
  return (
    <div 
      className="py-16"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Trusted By Millions, Built For You
          </h2>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <div className="text-center">
            <div className="mb-4">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                29.6M
              </h3>
              <p className="text-lg text-white font-medium">
                Total Downloads
              </p>
            </div>
            <p className="text-green-300 font-semibold">
              2% More Than Last Month
            </p>
          </div>

          
          <div className="text-center">
            <div className="mb-4">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                906K
              </h3>
              <p className="text-lg text-white font-medium">
                Total Reviews
              </p>
            </div>
            <p className="text-green-300 font-semibold">
              46% More Than Last Month
            </p>
          </div>

         
          <div className="text-center">
            <div className="mb-4">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                132+
              </h3>
              <p className="text-lg text-white font-medium">
                Active Apps
              </p>
            </div>
            <p className="text-green-300 font-semibold">
              31 More Will Launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;