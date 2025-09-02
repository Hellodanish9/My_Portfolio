import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-40 transition-all duration-300 hover:bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-white text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Danish Khan
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-white hover:text-blue-400 transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-400 transition-colors duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-md rounded-lg mt-2 border border-white/10">
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="block px-3 py-2 text-white hover:text-blue-400 hover:bg-white/10 rounded-md transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;



