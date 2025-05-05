"use client";
import { useState, useEffect } from "react";

const HeroSection = ({HomeRef}) => {  
  const backgroundImages = ["/bgg1.png", "/bgg2.png","/bgg1.png",  "/bgg2.png"]; 
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center transition-all duration-1000 flex flex-col items-center justi"
      style={{ backgroundImage: `url('${backgroundImages[bgIndex]}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-evenly md:justify-center text-center px-4 md:mt-[5%] gap-[6vw]">
        <div>
          <h1 className="text-4xl sm:text-4xl md:text-6xl text-white font-bold hover:scale-125 duration-2000 cursor-pointer">
            <span className="text-[#d69e54]">Welcome</span> to <br />
            <span className="text-white">Dreamation Resorts!</span>
          </h1>
        </div>
        <div className="pt-10">
          <button className="h-[12vw] sm:h-[8vw] md:h-[5vw] w-[60vw] sm:w-[40vw] md:w-[18vw] border border-white text-lg sm:text-xl md:text-2xl text-white rounded-full hover:bg-white hover:text-black transition flex items-center justify-center cursor-pointer duration-1000"
          onClick={() => {
            HomeRef.current.scrollIntoView({ behavior: "smooth" });
          }}>
            Explore More!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
