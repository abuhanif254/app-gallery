import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import HeroImg from "./HeroImg";




const Banner = () => {
  return (
    <div 
      className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        
      }}
    >
      
      <div className="absolute inset-0 bg-white bg-opacity-40"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-black">
       
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          We Build <br /> <span className="  text-blue-500 text-linear-to-tr from-[#632EE3] to-[#9F62F2]" >Productive</span> Apps
        </h1>
        
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          At App Gallery, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
        
       
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center border-b-amber-100">
         
          <a
            href="https://apps.apple.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 hover:bg-gray-400 text-black px-8 py-4 rounded-lg flex items-center justify-center gap-3 transition-colors min-w-[200px]"
          >
          
            <span><FaAppStore /></span>
            <span className="font-semibold">App Store</span>
          </a>
          
          
          <a
            href="https://play.google.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 hover:bg-green-700 text-black px-8 py-4 rounded-lg flex items-center justify-center gap-3 transition-colors min-w-[200px]"
          >
           
            <span><FaGooglePlay /></span>
            <span className="font-semibold">Play Store</span>
          </a>
        </div>
      </div>
     
    </div>
    
  );
};

export default Banner;