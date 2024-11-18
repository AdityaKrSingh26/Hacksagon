import React from 'react';

export function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated hexagons */}
      <div className="absolute w-full h-full">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.1
            }}
          >
            <div className="w-32 h-32 border-2 border-purple-500 rotate-45 animate-rotate" />
          </div>
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute w-full h-full">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-24 h-24 rounded-full bg-purple-500/20 animate-pulse-glow blur-xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" 
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, purple 1px, transparent 0)`,
             backgroundSize: '40px 40px'
           }}
      />
    </div>
  );
}