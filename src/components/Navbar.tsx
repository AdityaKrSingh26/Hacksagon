import React from 'react';
import { CircuitBoard } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <CircuitBoard className="w-8 h-8" />
          <span className="text-2xl font-bold">Hacksagon</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-purple-300 transition-colors">About</a>
          <a href="#schedule" className="hover:text-purple-300 transition-colors">Schedule</a>
          <a href="#prizes" className="hover:text-purple-300 transition-colors">Prizes</a>
          <a href="#sponsors" className="hover:text-purple-300 transition-colors">Sponsors</a>
        </div>
        <button className="bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-full font-semibold transition-colors">
          Register Now
        </button>
      </div>
    </nav>
  );
}