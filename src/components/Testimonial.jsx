import React, { useState, useEffect } from "react";

const Testimonial = () => {
  // State to handle the displayed testimonial text and active radio button
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Array of testimonial texts
  const testimonials = [
    "They should be called the <strong>Transformers</strong>. They turned a very regular space to a very beautiful & functional space. Their professionalism & attention to detail is second to none.",
    "I like how they refine locally sourced materials to create designs that are international standard.",
    "I had a wonderful experience working with this company, the designer really took time to understand my vision and brought it to life. The end result exceeded my expectation & I could not be happier with the outcome. Highly recommend!",
  ];

  // Automatically change testimonial text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Handlers to manually change testimonial text
  const handleRadioChange = (index) => {
    setCurrentTestimonialIndex(index);
  };

  return (
    <div className="testimonial bg-black text-white text-center lg:p-24 p-12">
      {/* Title and Horizontal Rule */}
      <div className="h2 text-2xl font-bold">
        Testimonial
        <div className="hr w-10 h-0.5 bg-white mt-4 mx-auto flex items-center justify-center"></div>
      </div>

      {/* Testimonial Text */}
      <div
        className="testi-text text-lg my-6 px-6"
        dangerouslySetInnerHTML={{
          __html: testimonials[currentTestimonialIndex],
        }}
      ></div>

      {/* Radio Button Controls */}
      <div className="controls space-x-4">
        <input
          type="radio"
          name="radio-btn"
          id="radio1"
          checked={currentTestimonialIndex === 0}
          onChange={() => handleRadioChange(0)}
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio2"
          checked={currentTestimonialIndex === 1}
          onChange={() => handleRadioChange(1)}
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio3"
          checked={currentTestimonialIndex === 2}
          onChange={() => handleRadioChange(2)}
        />
      </div>
    </div>
  );
};

export default Testimonial;
