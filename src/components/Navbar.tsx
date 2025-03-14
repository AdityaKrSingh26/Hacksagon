import { Menu, X } from 'lucide-react';
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
    <nav className="mx-auto w-full px-4 smd:px-2 py-4 bg-transparent text-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2 ml-4">
            <img className="w-6" src="https://i.postimg.cc/cCT9dGfv/Hacksagon-white.png" alt="Logo" />
            <span className="text-xl smd:text-lg md:text-2xl font-bold">Hacksagon</span>
          </Link>
        </div>

        {/* Navbar Links for Medium and Larger Screens */}
        <div className="hidden lg:flex space-x-8">
          <Link to="/about" className="hover:text-purple-300 transition-colors">About</Link>
          <Link to="/themes" className="hover:text-purple-300 transition-colors">Themes</Link>
          <Link to="/sponsors" className="hover:text-purple-300 transition-colors">Sponsors</Link>
          <Link to="/schedule" className="hover:text-purple-300 transition-colors">Schedule</Link>
          <Link to="/technical_partner" className="hover:text-purple-300 transition-colors">Partners</Link>
          <Link to="/commitee" className="hover:text-purple-300 transition-colors">Commitee</Link>

          <div className="relative group">
            <button className="hover:text-purple-300 transition-colors">More</button>
            <div className="absolute hidden group-hover:flex flex-col z-50 hover:block bg-white bg-opacity-5 shadow-md rounded-md">
              <Link to="/awards" className="block px-4 py-2 hover:text-purple-300">Awards</Link>
              <Link to="/brochure" className="block px-4 py-2 hover:text-purple-300">Brochure</Link>
              <Link to="/contact" className="block px-4 py-2 hover:text-purple-300">Contact us</Link>
            </div>
          </div>
        </div>

        {/* Register Button for Medium and Larger Screens */}
        <div className="hidden lg:block">
          <Link
            to="https://unstop.com/o/gTXzetj?utm_medium=Share&utm_source=shortUrl"
            target="_blank"
            className="block bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-full font-semibold transition-colors text-center w-full"
          >
            Register Now
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden block">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <X className="w-8 h-8 text-white" />
            ) : (
              <Menu className="w-8 h-8 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Register Button for Mobile */}
      <div className="mt-4 lg:hidden flex justify-center">
        <Link
          to="https://unstop.com/o/gTXzetj?utm_medium=Share&utm_source=shortUrl"
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
          className="mt-4 flex flex-col space-y-4 bg-black bg-opacity-80 p-6 rounded-lg"
        >
          <Link to="/about" className="hover:text-purple-300 transition-colors">About</Link>
          <Link to="/schedule" className="hover:text-purple-300 transition-colors">Schedule</Link>
          <Link to="/themes" className="hover:text-purple-300 transition-colors">Themes</Link>
          <Link to="/sponsors" className="hover:text-purple-300 transition-colors">Sponsors</Link>
          <Link to="/contact" className="hover:text-purple-300 transition-colors">Contact us</Link>
          <Link to="/brochure" className="hover:text-purple-300 transition-colors">Brochure</Link>
          <Link to="/awards" className="hover:text-purple-300 transition-colors">Awards</Link>
          <Link to="/technical_partner" className="hover:text-purple-300 transition-colors">Partners</Link>
          <Link to="/commitee" className="hover:text-purple-300 transition-colors">Commitee</Link>
        </div>
      )}
    </nav>
  );
}
