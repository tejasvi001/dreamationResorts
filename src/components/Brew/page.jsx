"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Page = ({ sectionRef, Pagedata }) => {
  const { cards = [], buttonText = "" } = Pagedata || {};
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (cards.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [cards.length]);

  const handleCardClick = (index) => {
    if (index !== activeIndex) setActiveIndex(index);
  };

  const activeCard = cards[activeIndex];
  const inactiveCards = cards
    .map((card, index) => ({ ...card, index }))
    .filter((_, index) => index !== activeIndex);

  return (
    <section className="relative h-[90vh] md:h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Images with scale/translate effect */}
      <div className="absolute inset-0 z-0">
        {cards.map((card, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform
                ${isActive
                  ? "scale-100 translate-x-0 translate-y-0 opacity-60 z-10"
                  : "scale-0 translate-x-[30%] translate-y-[30%] opacity-0 z-0"
                }`}
            >
              <Image
                src={card.image}
                alt={`Background ${index}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          );
        })}
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between items-center h-full px-6 md:px-20 py-10">
        {/* Active Card Text */}
        <div className="max-w-xl mt-[20vh] md:mt-0 space-y-6 text-sm md:text-xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {activeCard?.title}
          </h1>
          <button
            onClick={() =>
              sectionRef?.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-3 md:mt-6 px-6 py-3 border border-orange-400 bg-orange-400 text-white hover:bg-orange-600 hover:border-orange-600 transition rounded-xl"
          >
            {buttonText} <span className="ml-1">▼</span>
          </button>
        </div>

        {/* Inactive Cards for Desktop */}
        <div className="hidden md:flex gap-4 mt-6 md:mt-0 md:absolute md:bottom-[2vw] md:right-[2vw] h-[25vw] w-[25vw] relative">
          {inactiveCards.slice(0, 2).map(({ image, index }, i) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`absolute ${
                i === 0
                  ? "top-0 left-0 w-[15vw] h-[15vw]"
                  : "bottom-0 right-0 w-[10vw] h-[10vw]"
              } rounded-3xl overflow-hidden cursor-pointer`}
            >
              <Image
                src={image}
                alt={`Card ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Inactive Cards for Mobile */}
        <div className="md:hidden flex gap-4 mt-6">
          {inactiveCards.map(({ index, image, text }) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className="relative bg-white bg-opacity-10 backdrop-blur-sm p-4 h-48 w-28 flex flex-col justify-end text-white overflow-hidden group cursor-pointer rounded-xl shadow-2xl"
            >
              <Image
                src={image}
                alt={`Card ${index + 1}`}
                fill
                className="object-cover z-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="relative z-10">
                <p className="text-sm font-medium">{text}</p>
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
