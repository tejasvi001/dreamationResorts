import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import { IoMdArrowDropdown } from 'react-icons/io';

const HeroSection = ({ title, backgroundImage }) => {
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departDate, setDepartDate] = useState(null);
  const [adults, setAdults] = useState('Adult');
  const [room, setRoom] = useState("Room");
  return (
    <div
      className='relative w-full h-screen bg-cover bg-center'
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4'>
        <div>
          <div className="text-center text-white text-4xl sm:text-6xl md:text-8xl lg:text-[105px] font-normal font-['Abhaya_Libre']">
            {title}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[18vh] bg-black opacity-60 z-10"></div>

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
        <button className='w-60 px-4 py-2 border border-white rounded-sm bg-transparent text-white hover:bg-white hover:text-black transition'>
          Book Now!
        </button>
      </div>
      </div>
  );
};

export default HeroSection;
