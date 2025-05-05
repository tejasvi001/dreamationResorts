"use client";
import React, { useState } from "react";

const Page = ({ sectionRef, Pagedata }) => {
  const [images, setImages] = useState([
    Pagedata.backgroundImage,
    Pagedata.cards[0].image,
    Pagedata.cards[1].image,
  ]);

  const handleCardClick = (index) => {
    if (index === 0) {
      setImages([images[1], images[2], images[0]]);
    } else if (index === 1) {
      setImages([images[2], images[0], images[1]]);
    }
  };

  return (
    <section className="relative h-[90vh] md:h-screen w-full bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={images[0]}
          alt="Background"
          className="object-cover w-full h-full opacity-60 transition-all duration-500"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full px-6 md:px-20 py-10">
        {/* Left Text Content */}
        <div className="max-w-xl space-y-6 text-sm md:text-xl">
          <p className="text-orange-500 font-semibold">
            {Pagedata.introText.subtitle}
          </p>
          <h1 className="text-2xl md:text-5xl font-bold leading-tight">
            {Pagedata.introText.title}
          </h1>
          <button
            onClick={() => {
              sectionRef.current.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-3 md:mt-6 px-6 py-3 border border-orange-500 text-white hover:bg-orange-500 transition rounded-xl cursor-pointer"
          >
            {Pagedata.introText.buttonText} <span className="ml-1">▼</span>
          </button>
        </div>

        {/* Right Bottom Cards */}
        <div className="flex gap-4 mt-0">
          {[0, 1].map((cardIndex) => (
            <div
              key={cardIndex}
              onClick={() => handleCardClick(cardIndex)}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-4 h-48 w-28 md:w-48 flex flex-col justify-end text-white relative overflow-hidden group cursor-pointer rounded-xl shadow-2xl"
            >
              <img
                src={images[cardIndex + 1]}
                alt={`Card ${cardIndex + 1}`}
                className="absolute inset-0 object-cover w-full h-full z-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="relative z-10">
                <p className="text-sm font-medium">
                  {Pagedata.cards[cardIndex].text}
                </p>
                <span className="text-orange-400 text-xl">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
