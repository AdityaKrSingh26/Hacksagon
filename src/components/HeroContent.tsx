import React, { useState, useEffect } from 'react';
import { Stats } from './Stats';
import { CircuitBoard, Cpu, Zap } from 'lucide-react';

export function HeroContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex-1 container mx-auto px-6 flex items-center relative">
      {/* Floating Circuit Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <CircuitBoard className="absolute top-20 left-20 w-12 h-12 text-purple-500/20 animate-float"
          style={{ animationDelay: '0.5s' }} />
        <Cpu className="absolute bottom-40 right-40 w-16 h-16 text-purple-500/20 animate-float"
          style={{ animationDelay: '1s' }} />
        <Zap className="absolute top-40 right-20 w-10 h-10 text-purple-500/20 animate-float"
          style={{ animationDelay: '1.5s' }} />
      </div>

      <div className={`max-w-3xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
        <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
          <span className="animate-pulse mr-2 w-2 h-2 rounded-full bg-purple-500"></span>
          <span className="text-purple-400">Registration Now Open</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
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

        <p className="text-xl mb-8 text-gray-300 leading-relaxed">
          Join 300+ hackers for 48 hours of creation, innovation, and breakthrough solutions.
          Build the future at the intersection of hardware and software.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="group relative px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500">
            <span className="relative z-10">Apply Now</span>
            <div className="absolute inset-0 rounded-full bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          <button className="relative px-8 py-3 rounded-full font-semibold text-lg border-2 border-purple-500 hover:bg-purple-500/10 transition-colors">
            Learn More
          </button>
        </div>

        <Stats />
      </div>
    </div>
  );
}