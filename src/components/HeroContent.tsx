import { useState, useEffect } from 'react';
import { Stats } from './Stats';
import { useNavigate } from 'react-router-dom';
import { CircuitBoard, Cpu, Zap } from 'lucide-react';


export function HeroContent() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 flex flex-col lg:flex-row items-center relative">
      {/* Floating Circuit Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <CircuitBoard
          className="absolute top-10 sm:top-20 left-10 sm:left-20 w-8 h-8 sm:w-12 sm:h-12 text-purple-500/20 animate-float"
          style={{ animationDelay: '0.5s' }}
        />
        <Cpu
          className="absolute bottom-20 sm:bottom-40 right-10 sm:right-40 w-10 h-10 sm:w-16 sm:h-16 text-purple-500/20 animate-float"
          style={{ animationDelay: '1s' }}
        />
        <Zap
          className="absolute top-20 sm:top-40 right-10 sm:right-20 w-6 h-6 sm:w-10 sm:h-10 text-purple-500/20 animate-float"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div
        className={`max-w-5xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
      >
        

        <div className="w-full md:w-11/12 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Hardware
              </span>{' '}
              Meets{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">
                Software
              </span>
              <br />
              <span className="typewriter inline-block">Innovation</span>
            </h1>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://i.postimg.cc/cCT9dGfv/Hacksagon-white.png"
              alt="Innovation"
              className="w-40 sm:w-75 md:w-80 xl:w-180 object-contain md:translate-x-0 xl:translate-x-80 2xl:translate-x-28"
            />
          </div>      
        </div>

        <div className="flex items-center my-4 text-gray-300 flex-col md:flex-row text-lg">
          powered by
          <div className="flex flex-col sm:flex-row gap-2">
            <img className="w-72" src="https://i.postimg.cc/d3CDWpY9/ieee-mp-section-cover-removebg-preview.png" alt="IEEE MP section logo" />
            <img className="w-72" src="https://i.postimg.cc/9fkMCJ8q/ieee-white.png" alt="IEEE student branch of ABV-IIITM logo" />
          </div>
        </div>

        <p className="text-base max-w-3xl sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300 leading-relaxed">
          Join 300+ hackers for 36 hours of creation, innovation, and
          breakthrough solutions. Build the future at the intersection of
          hardware and software.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-12">
          <button
            onClick={() => {
              navigate('/about');
            }}
            className="relative px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold text-sm sm:text-lg border-2 border-purple-500 hover:bg-purple-500/10 transition-colors"
          >
            Learn More
          </button>
        

        </div>

        <Stats />
      </div>
    </div>
  );
}
