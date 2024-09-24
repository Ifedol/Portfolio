import React, { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between py-6 bg-black">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <h1 className="text-white text-[20px] font-bold mx-2">DOLAPO.</h1>
        </a>
      </div>

      {/* Menu Icon */}
      <div className="flex md:hidden">
        <button onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? (
            <FaTimes className="text-white text-2xl" />
          ) : (
            <FaBars className="text-white text-2xl" />
          )}
        </button>
      </div>

      {/* Menu Items for Larger Screens */}
      <div className="hidden md:flex items-center justify-center gap-4 text-[18px]">
        <a
          href="#about"
          className="text-white hover:bg-gray-800 rounded px-4 py-2 transition"
        >
          A
        </a>
        <a
          href="#technologies"
          className="text-white hover:bg-gray-800 rounded px-4 py-2 transition"
        >
          T
        </a>
        <a
          href="#projects"
          className="text-white hover:bg-gray-800 rounded px-4 py-2 transition"
        >
          P
        </a>
        <a
          href="#experience"
          className="text-white hover:bg-gray-800 rounded px-4 py-2 transition"
        >
          E
        </a>
        <a
          href="#contact"
          className="text-white hover:bg-gray-800 rounded px-4 py-2 transition"
        >
          C
        </a>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-2 md:gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/dolapo-awolola-302431224/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white hover:bg-gray-800 rounded p-2 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Ifedol"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="text-white hover:bg-gray-800 rounded p-2 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/the_ifedolapo-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white hover:bg-gray-800 rounded p-2 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/adufe_dufe"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-white hover:bg-gray-800 rounded p-2 transition"
        >
          <FaTwitter />
        </a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black md:hidden">
          <div className="flex flex-col items-center py-4">
            <a href="#about" className="text-white py-2">
              About Me
            </a>
            <a href="#technologies" className="text-white py-2">
              Technologies
            </a>
            <a href="#projects" className="text-white py-2">
              Projects
            </a>
            <a href="#experience" className="text-white py-2">
              Experience
            </a>
            <a href="#contact" className="text-white py-2">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
