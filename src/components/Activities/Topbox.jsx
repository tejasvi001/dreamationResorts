"use client";
import { useState, useEffect } from "react";

const HeroSection = ({ backgroundImages = [], heading = "Activities" }) => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    if (backgroundImages.length === 0) return;

    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center transition-all duration-1000 flex flex-col items-center justify-center"
      style={{
        backgroundImage: backgroundImages.length
          ? `url('${backgroundImages[bgIndex]}')`
          : "none",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-evenly md:justify-center text-center px-4 md:mt-[5%] gap-[6vw]">
        <div>
          <h1
            className="text-4xl sm:text-4xl md:text-6xl text-white font-bold hover:scale-125 duration-2000 cursor-pointer"
            style={{ fontFamily: "memv1" }}
          >
            <span className="text-white">{heading}</span>
          </h1>
        </div>
        <div className="pt-10"></div>
      </div>
    </div>
  );
};

export default HeroSection;
