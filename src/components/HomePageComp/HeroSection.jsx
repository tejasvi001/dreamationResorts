"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const HeroSection = () => {
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState("Adults");
  const [room, setRoom] = useState("Room");
  const [departDate, setDepartDate] = useState(null);
  const [arrivalDate, setArrivalDate] = useState(null);

  return (
    <div
      className='relative w-full h-screen bg-cover bg-center'
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0  bg-opacity-50"></div> */}

      {/* Navbar */}
      {/* <div className='absolute top-0 w-full flex justify-between items-center p-5 md:px-16'>
        <button className='text-white text-3xl'>☰</button>
        <img src='/logo.png' alt='Dreamation Logo' className='h-8vw w-8vw' />
        <button className='border border-white text-white px-4 py-2 rounded-full'>
          Get in Touch
        </button>
      </div> */}

      <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4'>
        <div>
          <h1 className='text-4xl text-white md:text-6xl font-bold'>
            <span className='text-[#d69e54]'>Welcome</span> to <br />
            <span className='text-white'>Dreamation Resort!</span>
          </h1>
        </div>
        <div className='pt-14'>
          <button className='pt-4 h-[5vw] w-[18vw] border border-white text-2xl text-white rounded-full hover:bg-white hover:text-black transition flex items-center justify-center'>
            Explore More !
          </button>
        </div>
      </div>
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center gap-12'>
        {/* Arrive Button */}
        <div className='relative gap-4 border border-white rounded-sm'>
          <DatePicker
            selected={arrivalDate}
            onChange={(date) => setArrivalDate(date)}
            className='w-full px-4 py-2 bg-transparent text-white outline-none cursor-pointer'
            placeholderText='Arrival'
            dateFormat='MM/dd/yyyy'
          />
          <FaCalendarAlt
            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer'
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector(".react-datepicker__input-container input")
                .focus();
            }}
          />
        </div>

        {/* Depart Button */}
        <div className='relative gap-4 border border-white rounded-sm'>
          <DatePicker
            selected={departDate}
            onChange={(date) => setDepartDate(date)}
            className='w-full px-4 py-2 bg-transparent text-white outline-none cursor-pointer'
            placeholderText='Depart'
            dateFormat='MM/dd/yyyy'
          />
          <FaCalendarAlt
            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer'
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector(".react-datepicker__input-container input")
                .focus();
            }}
          />
        </div>

        {/* Adults Dropdown */}
        <div className='relative bg-transparent border border-white px-3 py-2 rounded-sm text-white cursor-pointer w-40 flex items-center justify-between'>
          <span className='text-white'>{adults}</span>

          <select
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className='absolute inset-0 w-full h-full text-black opacity-0 cursor-pointer'
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>

          <IoMdArrowDropdown className='text-white' />
        </div>

        {/* Room Dropdown */}
        <div className='relative bg-transparent border border-white px-3 py-2 rounded-sm text-white cursor-pointer w-40 flex items-center justify-between'>
          <span className='text-white'>{room}</span>

          <select
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className='absolute inset-0 w-full h-full text-black opacity-0 cursor-pointer'
          >
            <option value='Standard'>Standard</option>
            <option value='Deluxe'>Deluxe</option>
            <option value='Suite'>Suite</option>
          </select>

          <IoMdArrowDropdown className='text-white' />
        </div>
        {/* Book Now Button */}
        <button className='w-40 px-4 py-2 border border-white rounded-sm bg-transparent text-white hover:bg-white hover:text-black transition'>
          Book Now!
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
