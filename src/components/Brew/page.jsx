"use client";
import React from 'react';
import { BrewPageData } from '../../data2.js';



const Page = ({ sectionRef }) => {
  const { backgroundImage, introText, cards } = BrewPageData.Page; 

  return (
    <section className="relative h-screen w-full bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage} 
          alt="Background"
          className="object-cover w-full h-full opacity-60"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full px-6 md:px-20 py-10">
        {/* Left Text Content */}
        <div className="max-w-xl space-y-6">
          <p className="text-orange-500 font-semibold">{introText.subtitle}</p>
          <h1 className="text-5xl font-bold leading-tight">
            {introText.title} 
          </h1>
          <button
            onClick={() => {
              sectionRef.current.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-6 px-6 py-3 border border-orange-500 text-white hover:bg-orange-500 transition"
          >
            {introText.buttonText} <span className="ml-1">▼</span>
          </button>
        </div>

        {/* Right Bottom Cards */}
        <div className="flex gap-4 mt-12 md:mt-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-4 w-48 h-48 flex flex-col justify-end text-white relative overflow-hidden group"
            >
              <img
                src={card.image} 
                alt={card.alt} 
                className="absolute inset-0 object-cover w-full h-full z-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="relative z-10">
                <p className="text-sm font-medium">{card.text}</p>
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
