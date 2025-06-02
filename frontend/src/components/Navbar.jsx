import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          SchoolSaaS
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/pricing" className="hover:text-blue-600 transition">Pricing</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About Us</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact Us</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 text-gray-700 font-medium">
          <Link to="/" className="block hover:text-blue-600" onClick={toggleMenu}>Home</Link>
          <Link to="/pricing" className="block hover:text-blue-600" onClick={toggleMenu}>Pricing</Link>
          <Link to="/about" className="block hover:text-blue-600" onClick={toggleMenu}>About Us</Link>
          <Link to="/contact" className="block hover:text-blue-600" onClick={toggleMenu}>Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
