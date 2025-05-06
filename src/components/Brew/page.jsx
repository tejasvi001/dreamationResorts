"use client";
import React, { useState, useEffect } from "react";

const Page = ({ sectionRef, Pagedata }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % Pagedata.cards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [Pagedata.cards.length]);

  const getInactiveCards = () => {
    return Pagedata.cards
      .map((card, i) => ({ ...card, index: i }))
      .filter((_, i) => i !== activeIndex);
  };

  const handleCardClick = (clickedIndex) => {
    if (clickedIndex === activeIndex) return;
    setActiveIndex(clickedIndex);
  };

  const activeCardData = Pagedata.cards[activeIndex];
  const inactiveCards = getInactiveCards();

  return (
    <section className="relative h-[90vh] md:h-screen w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        {Pagedata.cards.map((card, index) => (
          <img
            key={index}
            src={card.image}
            alt={`Background ${index}`}
            className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-60 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      <div className="relative z-20 flex flex-col md:flex-row justify-between items-center h-full px-6 md:px-20 py-10">
        <div className="max-w-xl space-y-6 text-sm md:text-xl">
          <p className="text-orange-500 font-semibold">{activeCardData.subtitle}</p>
          <h1 className="text-2xl md:text-5xl font-bold leading-tight">
            {activeCardData.title}
          </h1>
          <button
            onClick={() => {
              sectionRef.current.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-3 md:mt-6 px-6 py-3 border border-orange-500 text-white hover:bg-orange-500 transition rounded-xl cursor-pointer"
          >
            {Pagedata.buttonText} <span className="ml-1">▼</span>
          </button>
        </div>

        <div className="flex gap-4 mt-6 md:mt-0">
          {inactiveCards.map((card) => (
            <div
              key={card.index}
              onClick={() => handleCardClick(card.index)}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-4 h-48 w-28 md:w-48 flex flex-col justify-end text-white relative overflow-hidden group cursor-pointer rounded-xl shadow-2xl"
            >
              <img
                src={card.image}
                alt={`Card ${card.index + 1}`}
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