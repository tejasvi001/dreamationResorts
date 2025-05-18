"use client";
import { useState, useEffect, useMemo } from "react";

const HeroSection = ({ backgroundImages = [], heading = "Activities" }) => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    if (backgroundImages.length === 0) return;

    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages]);

  const backgroundStyle = useMemo(() => ({
    backgroundImage: backgroundImages.length ? `url('${backgroundImages[bgIndex]}')` : undefined,
  }), [bgIndex, backgroundImages]);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center transition-all duration-1000 flex flex-col items-center justify-center"
      style={backgroundStyle}
    >
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:mt-[5%] gap-[6vw]">
        <h1
          className="text-4xl sm:text-4xl md:text-6xl text-white font-bold hover:scale-125 duration-1000 cursor-pointer"
          style={{ fontFamily: "memv1" }}
        >
          {heading}
        </h1>
        <div className="pt-10" />
      </div>
    </div>
  );
};

export default HeroSection;
