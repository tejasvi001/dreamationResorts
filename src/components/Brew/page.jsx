"use client";
import { Link } from 'lucide-react';
import React from 'react';

const brew = ({sectionRef}) => {
    return (
      <section className="relative h-screen w-full bg-black text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/brew/how-to-brew-the-healthiest-cup-of-coffee-1440x810.jpg" // Replace with your image path
            // alt="Coffee Cup"
            className="object-cover w-full h-full opacity-60"
          />
        </div>
  
        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full px-6 md:px-20 py-10">
          {/* Left Text Content */}
          <div className="max-w-xl space-y-6">
            <p className="text-orange-500 font-semibold">A real Italian cafe</p>
            <h1 className="text-5xl font-bold leading-tight">
              Discover the <br /> taste of real <br /> coffee
            </h1>
            <button
                 onClick={() => {
                  sectionRef.current.scrollIntoView({ behavior: "smooth" });
                  
                    }}
                    className="mt-6 px-6 py-3 border border-orange-500 text-white hover:bg-orange-500 transition"
                            >
                          MEET US <span className="ml-1">▼</span>
                            </button>

          </div>
  
          {/* Right Bottom Cards */}
          <div className="flex gap-4 mt-12 md:mt-0">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 w-48 h-48 flex flex-col justify-end text-white relative overflow-hidden group">
              <img
                src="/images/brew/istockphoto-1093593288-612x612.jpg"
                alt="Beans"
                className="absolute inset-0 object-cover w-full h-full z-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="relative z-10">
                <p className="text-sm font-medium">Explore the history of the cafe</p>
                <span className="text-orange-400 text-xl">→</span>
              </div>
            </div>
  
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 w-48 h-48 flex flex-col justify-end text-white relative overflow-hidden group">
              <img
                src="/images/brew/pexels-pixabay-159291.jpg"
                alt="Coffee Machine"
                className="absolute inset-0 object-cover w-full h-full z-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="relative z-10">
                <p className="text-sm font-medium">Discover our unique coffee</p>
                <span className="text-orange-400 text-xl">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  export default brew;