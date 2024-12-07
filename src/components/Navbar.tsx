import { CircuitBoard } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-6 z-10 text-white">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <CircuitBoard className="w-8 h-8" />
          <span className="text-2xl font-bold">Hacksagon</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/about" className="hover:text-purple-300 transition-colors">About</Link>
          <Link to="/schedule" className="hover:text-purple-300 transition-colors">Schedule</Link>
          <Link to="/prizes" className="hover:text-purple-300 transition-colors">Prizes</Link>
          <Link to="/sponsors" className="hover:text-purple-300 transition-colors">Sponsors</Link>
          <Link to="/contact" className="hover:text-purple-300 transition-colors">Contact us</Link>
        </div>
        <Link to="https://unstop.com/" target='_blank' className="bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-full font-semibold transition-colors">
          Register Now
        </Link>
      </div>
    </nav>
  );
}