import { CircuitBoard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
      <div className="flex items-center justify-between">
        <div className="md:hidden flex items-center space-x-2">
          <button onClick={toggleDropdown} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

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

        <Link to="https://unstop.com/" target="_blank" className="bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-full font-semibold transition-colors">
          Register Now
        </Link>
      </div>

      <div ref={dropdownRef} className={`md:hidden flex flex-col items-start space-y-4 mt-4 transition-all duration-500 fixed -top-4 left-0 w-1/2 max-h-screen h-full bg-black bg-opacity-80 p-6 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
        <Link to="/about" className="hover:text-purple-300 transition-colors">About</Link>
        <Link to="/schedule" className="hover:text-purple-300 transition-colors">Schedule</Link>
        <Link to="/prizes" className="hover:text-purple-300 transition-colors">Prizes</Link>
        <Link to="/sponsors" className="hover:text-purple-300 transition-colors">Sponsors</Link>
        <Link to="/contact" className="hover:text-purple-300 transition-colors">Contact us</Link>
      </div>
    </nav>
  );
}
