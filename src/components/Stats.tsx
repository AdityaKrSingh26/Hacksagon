import React from 'react';
import { Calendar, Users, Trophy, Cpu } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    title: 'March 15-17',
    subtitle: '48 Hours'
  },
  {
    icon: Users,
    title: '300+ Hackers',
    subtitle: 'From 50+ Schools'
  },
  {
    icon: Trophy,
    title: '$20,000',
    subtitle: 'In Prizes'
  },
  {
    icon: Cpu,
    title: 'Hardware Lab',
    subtitle: 'Full Access'
  }
];

export function Stats() {
  return (
    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="group relative flex flex-col items-center text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
          <div className="relative">
            <stat.icon className="w-8 h-8 text-purple-400 mb-2 transform transition-transform group-hover:scale-110" />
            <div className="font-semibold text-lg">{stat.title}</div>
            <div className="text-sm text-gray-400">{stat.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
}