import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white absolute w-full z-50">
      <div className="flex lg:justify-evenly justify-between items-center p-3">
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://twitter.com/twenty1zero7?s=11&t=qg6vFvnhd1ObfGuxS05bxQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter text-gray-400 hover:text-yellow-500 p-3"></i>
          </a>
          <a
            href="https://instagram.com/2107_atelier"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-gray-400 hover:text-yellow-500 p-3"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/2107-atelier-designs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-gray-400 hover:text-yellow-500 p-3"></i>
          </a>
          <a
            href="https://www.facebook.com/2107Atelier?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook text-gray-400 hover:text-yellow-500 p-3"></i>
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="flex md:hidden">
          <i
            className="fas fa-bars text-white cursor-pointer items-center"
            onClick={toggleMenu}
          ></i>
        </div>

        {/* Navbar Links */}
        <ul
          className={`flex-col md:flex-row md:flex absolute md:static top-full left-0 w-full md:w-auto transition-all duration-300 bg-black md:bg-transparent ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <li className={`text-right md:py-0 ${isOpen ? "p-3" : ""}`}>
            <a href="/" className="text-white hover:bg-yellow-500 p-5 ">
              Home
            </a>
          </li>
          <li className={`text-right md:py-0 ${isOpen ? "p-3" : ""}`}>
            <a href="/about" className="text-white hover:bg-yellow-500 p-5 ">
              About
            </a>
          </li>
          <li className={`text-right md:py-0 ${isOpen ? "p-3" : ""}`}>
            <a href="/services" className="text-white hover:bg-yellow-500 p-5 ">
              Services
            </a>
          </li>
          <li className={`text-right md:py-0 ${isOpen ? "p-3" : ""}`}>
            <a href="/projects" className="text-white hover:bg-yellow-500 p-5 ">
              Projects
            </a>
          </li>
          <li className={`text-right md:py-0 ${isOpen ? "p-3" : ""}`}>
            <a href="/contact" className="text-white hover:bg-yellow-500 p-5 ">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
