
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar = ({ scrolled }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Games', path: '/games' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center cursor-pointer">
            <img 
              src="https://splinkos.com/media/ee2f31ce50a86881013b0.gif"
              alt="SPLINKOS"
              className="h-10"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`font-semibold transition-colors cursor-pointer ${
                isActive('/') 
                  ? 'text-cyan-400' 
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-semibold transition-colors cursor-pointer ${
                isActive('/about') 
                  ? 'text-cyan-400' 
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              About
            </Link>
            <Link 
              to="/games" 
              className={`font-semibold transition-colors cursor-pointer ${
                isActive('/games') 
                  ? 'text-cyan-400' 
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              Games
            </Link>
            <Link 
              to="/blog" 
              className={`font-semibold transition-colors cursor-pointer ${
                isActive('/blog') 
                  ? 'text-cyan-400' 
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`font-semibold transition-colors cursor-pointer ${
                isActive('/contact') 
                  ? 'text-cyan-400' 
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              Contact
            </Link>
            <a 
              href="https://t.ly/splinkosBlog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Play Now
            </a>
          </div>

          {/* Mobile Right Section: Play Now Icon + Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <a 
              href="https://t.ly/splinkosBlog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer"
              title="Play Now"
            >
              <i className="ri-play-circle-fill text-white text-2xl"></i>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center cursor-pointer text-white"
            >
              <i className={`text-2xl ${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="flex flex-col gap-6 py-8 px-4">
            <Link 
              to="/" 
              className={`text-lg font-semibold transition-colors cursor-pointer ${
                isActive('/') 
                  ? 'text-cyan-400' 
                  : 'text-white hover:text-cyan-400'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-lg font-semibold transition-colors cursor-pointer ${
                isActive('/about') 
                  ? 'text-cyan-400' 
                  : 'text-white hover:text-cyan-400'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/games" 
              className={`text-lg font-semibold transition-colors cursor-pointer ${
                isActive('/games') 
                  ? 'text-cyan-400' 
                  : 'text-white hover:text-cyan-400'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Games
            </Link>
            <Link 
              to="/blog" 
              className={`text-lg font-semibold transition-colors cursor-pointer ${
                isActive('/blog') 
                  ? 'text-cyan-400' 
                  : 'text-white hover:text-cyan-400'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`text-lg font-semibold transition-colors cursor-pointer ${
                isActive('/contact') 
                  ? 'text-cyan-400' 
                  : 'text-white hover:text-cyan-400'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
