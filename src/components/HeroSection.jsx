import React, { useState, useEffect } from "react";
import image1 from "../assets/img/image1.jpg";
import image2 from "../assets/img/image2.jpg";
import image3 from "../assets/img/image3.jpg";
import image4 from "../assets/img/image4.jpg";
import Logo from "../assets/img/circles.png";

const BrandAndSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image array (Replace with your actual image paths)
  const images = [image1, image2, image3, image4];

  useEffect(() => {
    const changeImg = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    // Change image every 2 seconds
    const interval = setInterval(changeImg, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Centralized Brand Name Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-left text-white px-6 max-w-screen-lg mx-auto">
        <div className="circles">
          {/* Logo resizing on different screen sizes */}
          <img
            src={Logo}
            alt="Circles logo"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif">
          2107 <br />
          <span className="text-xl sm:text-2xl md:text-4xl font-sans">
            Atelier Designs
          </span>
        </h1>
      </div>
    </div>
  );
};

export default BrandAndSlider;
