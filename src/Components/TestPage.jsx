import React, { useState } from "react";


const TestPage = () => {

  const [activeIndex, setActiveIndex] = useState(2); // Active slide index
  const slides = [
    "Banua",
    "Pussio",
    "Tems",
    "Bytch",
    "Bytch",
    "Lol"
  ];

  // Function to slide to the index
  const slideTo = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="space"></div>
      <div className="space"></div>
      <div className="coverflow-container">
        {slides.map((slide, index) => {
          // Determine the tilt direction based on index
          let tiltDirection = index < activeIndex ? "25deg" : "-25deg";
          if (index === activeIndex) tiltDirection = "0deg";

          // Calculate the scale and z-index based on activeIndex
          let scale = index === activeIndex ? 0.8 : 1;
          let zIndex = index === activeIndex ? 1 : 3;

          // Calculate the gap between items
          const gap = 15; // Adjust the gap size here
          const translateXValue = (index - activeIndex) * (200 + gap); // width of each slide + gap

          return (
            <div
              key={slide}
              className={`coverflow-item ${
                index === activeIndex ? "active" : ""
              }`}
              style={{
                transform: `translateX(${translateXValue}px) rotateY(${tiltDirection}) scale(${scale})`,
                zIndex: zIndex
              }}
              onClick={() => slideTo(index)}
            >
              {slide}
            </div>
          );
        })}
      </div>
      <div className="coverflow-controls">
        <button
          onClick={() => slideTo(activeIndex - 1)}
          disabled={activeIndex === 0}
        >
          &lt;prev
        </button>
        <button
          onClick={() => slideTo(activeIndex + 1)}
          disabled={activeIndex === slides.length - 1}
        >
          &gt;next
        </button>
      </div>
    </div>
  );
};

export default TestPage;
