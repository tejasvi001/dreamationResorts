"use client";

import { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const Section7 = ({ images }) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [angle, setAngle] = useState(0);

  const totalImages = Math.min(images.length, 6);
  const radius = screenWidth / 2.7;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize(); // Set the initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Auto spin images
  const gallerySpin = (direction) => {
    const spinAmount = 360 / totalImages;
    setAngle(
      (prevAngle) => prevAngle + (direction === "-" ? -spinAmount : spinAmount)
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      gallerySpin("");
    }, 5000);
    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <div
      className="w-full h-[100vw] md:h-[30vw] flex items-center justify-center relative overflow-hidden"
      id="carousel"
      style={{
        perspective: "130vw",
      }}
    >
      <figure
        className="flex items-center justify-center w-full h-full absolute"
        id="spinner"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${angle}deg)`,
          transition: "transform 0.8s ease-in-out",
        }}
      >
        {images.slice(0, totalImages).map((img, index) => (
          <img
            className={`w-[40vw] h-[40vw] md:w-[24vw] md:h-[16vw] absolute top-[50%] left-[50%] transition-transform duration-500 rounded-[2vw]`}
            key={index}
            src={img.src}
            alt={img.alt || `Image ${index + 1}`}
            style={{
              transformOrigin: "50% 50%",
              transform: `
                              translate(-50%, -50%) 
                              rotateY(${index * 60}deg) 
                              translateZ(${radius}px) 
                            `,
              transition: "transform 0.3s ease",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          />
        ))}
      </figure>

      <button
        onClick={() => gallerySpin("-")}
        className="text-blue-300 bottom-0 flex items-center hover:scale-150 hover:duration-700  rounded-full justify-center cursor-pointer absolute m-5 md:top-1/2 md:-translate-y-1/2 transition-colors duration-300 

                w-[8vw] h-[8vw]  
                md:w-[4vw] md:h-[4vw]  
                p-[2]vw  left-[35%]  text-[8vw] md:text-[4vw] md:left-[2%] "
      >
        <FaChevronLeft className="text-[4vw] md:text-[3vw] text-[#D69D52]" />
      </button>

      <button
        onClick={() => gallerySpin("")}
        className="
                text-blue-300 bottom-0 flex items-center hover:scale-150 hover:duration-700  rounded-full justify-center cursor-pointer absolute m-5 md:top-1/2 md:-translate-y-1/2 transition-colors duration-300 
                 w-[8vw] h-[8vw]  
                md:w-[4vw] md:h-[4vw]  
                p-[2]vw
                right-[35%] text-[8vw] md:text-[4vw] md:right-[2%]"
      >
        <FaChevronRight className="text-[4vw] md:text-[3vw] text-[#D69D52]" />
      </button>
    </div>
  );
};

export default Section7;
