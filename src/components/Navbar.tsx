import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import yourImage from '../assets/AK.jpeg'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    window.location.hash = '#target-section';
  };


  return (
    <nav className="fixed w-full bg-white shadow-lg z-50" id='target-section'>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
        <img
        src={yourImage}
        alt="Description"
        className="cursor-pointer"
        onClick={handleClick}
        style={{ width: '50px', height: '50px' }} // Adjust size as needed
      />
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-500">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-500">About</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-500">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-500">Experience</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-500">Skills</a>
            <a href="#certificates" className="text-gray-600 hover:text-blue-500">Certificates</a>
            <a href="#resume" className="text-gray-600 hover:text-blue-500">Resume</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-blue-500">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-500">About</a>
              <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-blue-500">Projects</a>
              <a href="#experience" className="block px-3 py-2 text-gray-600 hover:text-blue-500">Experience</a>
              <a href="#skills" className="block px-3 py-2 text-gray-600 hover:text-blue-500">Skills</a>
              <a href="#certificates" className="block px-3 py-2 text-gray-600 hover:text-blue-500">Certificates</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-500">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}