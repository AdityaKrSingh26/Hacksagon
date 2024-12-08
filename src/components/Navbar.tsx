import { CircuitBoard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <nav className="container mx-auto px-6 py-6 z-10 text-white">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center space-x-2">
          <CircuitBoard className="w-8 h-8" />
          <span className="text-2xl font-bold">Hacksagon</span>
        </Link>
        <div className="hidden sm:flex space-x-8">
          <Link to="/about" className="hover:text-purple-300 transition-colors">About</Link>
          <Link to="/schedule" className="hover:text-purple-300 transition-colors">Schedule</Link>
          <Link to="/prizes" className="hover:text-purple-300 transition-colors">Prizes</Link>
          <Link to="/sponsors" className="hover:text-purple-300 transition-colors">Sponsors</Link>
          <Link to="/contact" className="hover:text-purple-300 transition-colors">Contact us</Link>
        </div>
        <Link
          to="https://unstop.com/"
          target="_blank"
          className="bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-full font-semibold transition-colors w-full sm:w-auto text-center"
        >
          Register Now
        </Link>
      </div>
      <div
        ref={dropdownRef}
        className={`sm:hidden flex flex-col items-start space-y-4 mt-4 transition-all duration-500 fixed -top-4 left-0 w-1/2 max-h-screen h-full bg-black bg-opacity-80 p-6 ${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        <Link to="/about" className="hover:text-purple-300 transition-colors">About</Link>
        <Link to="/schedule" className="hover:text-purple-300 transition-colors">Schedule</Link>
        <Link to="/prizes" className="hover:text-purple-300 transition-colors">Prizes</Link>
        <Link to="/sponsors" className="hover:text-purple-300 transition-colors">Sponsors</Link>
        <Link to="/contact" className="hover:text-purple-300 transition-colors">Contact us</Link>
      </div>
    </nav>
  );
}
