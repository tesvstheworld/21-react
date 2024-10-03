import React from "react";
import logo from "../assets/img/circles.png";

const Footer = () => {
  return (
    <div className="footer flex justify-between mx-36 p-10 text-gray-500 text-left">
      {/* Column 1 */}
      <div className="col1 flex-1 mx-4">
        <div className="logo-1 flex items-center mb-4">
          <img src={logo} alt="Logo" className="w-12" />
          <div className="name">
            <h3 className="text-lg text-black">2107</h3>
            <h3 className="text-lg text-black">Atelier Design</h3>
          </div>
        </div>
        <p className="mt-2 leading-relaxed">
          We are passionate about improving lives through exceptional design and
          excellent execution. Our pillars are Creative Design, Experiential
          Spaces, Excellent Delivery.
        </p>
      </div>

      {/* Column 2 */}
      <div className="col2 flex-1 mx-4">
        <strong className="block text-lg mb-3 text-black">QUICK LINKS</strong>
        <div className="Q-links flex justify-start">
          <div className="link1">
            <ul>
              <li className="py-2">
                <a href="#home" className="text-gray-500 hover:text-gray-300">
                  Home
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#services"
                  className="text-gray-500 hover:text-gray-300"
                >
                  Our Services
                </a>
              </li>
              <li className="py-2">
                <a href="#about" className="text-gray-500 hover:text-gray-300">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="link2">
            <ul className="ml-3">
              <li className="py-2">
                <a
                  href="projects.html"
                  className="text-gray-500 hover:text-gray-300"
                >
                  Projects
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#contact"
                  className="text-gray-500 hover:text-gray-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-300">
                  {" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Column 3 */}
      <div className="col3 flex-1 mx-4">
        <strong className="block text-lg mb-3 text-black">Contact Us</strong>
        <p>
          Murjanatu house, Maitama, <br />
          Abuja
        </p>
        <br />
        <a
          href="mailto:2107atelier@gmail.com"
          className="text-gray-500 hover:underline"
        >
          2107atelier@gmail.com
        </a>
        <br />
        <p>
          <a
            href="tel:+2348145622502"
            className="text-gray-500 hover:underline"
          >
            +234 (0) 814 5622 502
          </a>
        </p>
        <br />
        <div className="sm-links flex space-x-4 mt-4">
          <a
            href="https://twitter.com/twenty1zero7?s=11&t=qg6vFvnhd1ObfGuxS05bxQ"
            target="_blank"
            className="text-gray-500 hover:text-gray-300"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com/2107_atelier"
            target="_blank"
            className="text-gray-500 hover:text-gray-300"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/2107-atelier-designs/"
            target="_blank"
            className="text-gray-500 hover:text-gray-300"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/2107Atelier?mibextid=LQQJ4d"
            target="_blank"
            className="text-gray-500 hover:text-gray-300"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
