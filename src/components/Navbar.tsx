import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

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
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-1">
            <img className="w-6" src="https://i.postimg.cc/cCT9dGfv/Hacksagon-white.png" alt="" />
            <span className="text-2xl font-bold">Hacksagon</span>
          </Link>
        </div>

        {/* For large screens */}
        <div className="hidden sm:flex navbar-links">
          <Link to="/about" className="hover:text-purple-300 transition-colors">About</Link>
          <Link to="/schedule" className="hover:text-purple-300 transition-colors">Schedule</Link>
          <Link to="/themes" className="hover:text-purple-300 transition-colors">Themes</Link>
          <Link to="/sponsors" className="hover:text-purple-300 transition-colors">Sponsors</Link>
          <Link to="/contact" className="hover:text-purple-300 transition-colors">Contact us</Link>
          <Link to="/brochure" className="hover:text-purple-300 transition-colors">Brochure</Link>
        </div>
        {/* Register Now Button (Hidden on smaller screens) */}
        <div className="hidden sm:block">
          <Link
            to="https://unstop.com/"
            target="_blank"
            className=" register-btn bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-full font-semibold transition-colors text-center"
          >
            Register Now
          </Link>
        </div>

        {/* Hamburger Menu (Mobile View) */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <X
                className={`w-8 h-8 text-white transition-all ${isOpen ? 'rotate-45 scale-110' : 'rotate-0 scale-100'} animate-icon-switch`}
              />
            ) : (
              <Menu
                className={`w-8 h-8 text-white transition-all ${isOpen ? 'rotate-0 scale-100' : 'rotate-0 scale-100'} animate-icon-switch`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Register Now Button */}
      <div className="mt-4 sm:hidden w-full">
        <Link
          to="https://unstop.com/"
          target="_blank"
          className="block bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-full font-semibold transition-colors text-center w-full"
        >
          Register Now
        </Link>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="sm:hidden flex flex-col items-start space-y-4 mt-4 transition-all duration-500 ease-in-out bg-black bg-opacity-80 p-6 rounded-lg opacity-100 scale-100"
        >
          <Link to="/about" className="hover:text-purple-300 transition-colors">About</Link>
          <Link to="/schedule" className="hover:text-purple-300 transition-colors">Schedule</Link>
          <Link to="/themes" className="hover:text-purple-300 transition-colors">Themes</Link>
          <Link to="/sponsors" className="hover:text-purple-300 transition-colors">Sponsors</Link>
          <Link to="/contact" className="hover:text-purple-300 transition-colors">Contact us</Link>
          <Link to="/brochure" className='hover:text-purple-300 transition-colors'>Brochure</Link>
        </div>
      )}
    </nav>
  );
}
