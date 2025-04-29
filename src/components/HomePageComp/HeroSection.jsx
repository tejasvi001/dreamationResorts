"use client";

import { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HeroSection = () => {
  const [adults, setAdults] = useState("Adults");
  const [room, setRoom] = useState("Room");
  const [departDate, setDepartDate] = useState(null);
  const [arrivalDate, setArrivalDate] = useState(null);

  // Background image rotation
  const backgroundImages = ["/bgg1.png", "/bgg2.png","/bgg1.png",  "/bgg2.png"]; 
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 2000); // 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url('${backgroundImages[bgIndex]}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold hover:scale-125 duration-1000 cursor-pointer">
            <span className="text-[#d69e54]">Welcome</span> to <br />
            <span className="text-white">Dreamation Resort!</span>
          </h1>
        </div>
        <div className="pt-10">
          <button className="h-[12vw] sm:h-[8vw] md:h-[5vw] w-[60vw] sm:w-[40vw] md:w-[18vw] border border-white text-lg sm:text-xl md:text-2xl text-white rounded-full hover:bg-white hover:text-black transition flex items-center justify-center cursor-pointer duration-1000">
            Explore More!
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="absolute bottom-5 w-full px-4 z-10 flex flex-wrap gap-4 md:gap-6 justify-center">
        {/* Arrival */}
        <div className="relative border border-white rounded-sm">
          <DatePicker
            selected={arrivalDate}
            onChange={(date) => setArrivalDate(date)}
            className="w-32 sm:w-40 px-3 py-2 bg-transparent text-white outline-none cursor-pointer"
            placeholderText="Arrival"
            dateFormat="MM/dd/yyyy"
          />
          <FaCalendarAlt
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector(".react-datepicker__input-container input")
                ?.focus();
            }}
          />
        </div>

        {/* Departure */}
        <div className="relative border border-white rounded-sm">
          <DatePicker
            selected={departDate}
            onChange={(date) => setDepartDate(date)}
            className="w-32 sm:w-40 px-3 py-2 bg-transparent text-white outline-none cursor-pointer"
            placeholderText="Depart"
            dateFormat="MM/dd/yyyy"
          />
          <FaCalendarAlt
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelectorAll(".react-datepicker__input-container input")[1]
                ?.focus();
            }}
          />
        </div>

        {/* Adults Dropdown */}
        <div className="relative border border-white px-3 py-2 rounded-sm text-white w-32 sm:w-40 flex items-center justify-between cursor-pointer">
          <span>{adults}</span>
          <select
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer text-black"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <IoMdArrowDropdown className="text-white" />
        </div>

        {/* Room Dropdown */}
        <div className="relative border border-white px-3 py-2 rounded-sm text-white w-32 sm:w-40 flex items-center justify-between cursor-pointer">
          <span>{room}</span>
          <select
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer text-black"
          >
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </select>
          <IoMdArrowDropdown className="text-white" />
        </div>

        {/* Book Now Button */}
        <button className="w-full sm:w-48 px-4 py-2 border border-white rounded-sm bg-transparent text-white hover:bg-white hover:text-black transition">
          Book Now!
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
