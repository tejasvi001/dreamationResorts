"use client";
import React from "react";

import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function page() {
  return (
    <div>
      <HeroSection />
      <RoomOverview />
      <AmenitiesCard /> <AmazingView />
    </div>
  );
}

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
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4'>
        <div>
          <div className="text-center justify-start text-white text-[105px] font-normal font-['Abhaya_Libre']">
            Residential Rooms
          </div>
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

function RoomOverview() {
  return (
    <div className='relative half-background flex justify-center items-center w-full min-h-[500px] '>
      {/* Text Container */}
      <div className='origin-bottom font-Lato w-[80%] bg-[#d69d52] text-white p-8 text-center'>
        <div className='mb-2'>Room Overview</div>
        <h2 className='text-3xl  mb-4'>Residential Room</h2>

        <p className='text-sm mb-4'>
          Pellentesque nulla magna, accumsan sed ante quis, gravida feugiat
          turpis. Vivamus et fringilla ligula. Etiam sapien tellus, imperdiet
          sed posuere nec, cursus vel arcu. Ut molestie et posuere eros, at
          volutpat ligula sagittis. Sed in nisl, egestas, porta tortor a, tempor
          sem. Suspendisse porta, leo eget viverra aliquam, leo justo pulvinar
          libero, quis tempor nulla dui eu tellus. Nunc accumsan tincidunt
          lacus, sed finibus augue nec lacus lobortis, tempus.
        </p>

        <p className='text-sm'>
          Donec efficitur augue eget lacus placerat gravida. Nam id dolor
          condimentum, ultricorper ipsum quis, bibendum ante. Phasellus rutrum
          tellus nec eleifend tincidunt. Ut et mollis purus. Sed eros augue,
          convallis id blandit sed, facilisis in nunc. Nulla placerat eros non
          cursus pellentesque. Nunc justo orci, consequat id tincidunt sed.
        </p>
      </div>
    </div>
  );
}

const AmenitiesCard = () => {
  return (
    <div className='grid grid-cols-2  gap-5 '>
      <div className='relative h-[600px] half-background-2 flex justify-center flex-col'>
        <div className='p-8 min-h-[300px] break-all bg-[#d69d52]  max-w-[530px]  ml-auto text-white md:text-[60px] sm:text-[40px] font-normal font-Abhaya_Libre'>
          Residential Room Amenities
        </div>
      </div>

      <AmenitiesList />
    </div>
  );
};

function AmenitiesList() {
  const amenities = [
    "Air conditioning",
    "Room service",
    "Spa Service for Free",
    "Wireless Internet",
    "Shared Swimming Pool",
    "24-Hour Fitness Facility",
    "Valet Parking",
    "Concierge Service",
    "1000 sq ft",
    "60” LCD TV",
  ];

  const amenities2 = [
    "Coffee and tea set",
    "Hair Dryer",
    "Telephone",
    "Seaside view",
    "Free Mini Bar",
    "Luxurious bathroom",
    "Bath cosmetics",
    "Handmade bed",
    "2 Queen Beds",
    "3 Person Maximum",
  ];

  return (
    <div className='flex justify-center font-Lato'>
      <div className='grid grid-cols-2 gap-8 p-8 max-w-2xl'>
        <ul className='space-y-3'>
          {amenities.map((item, index) => (
            <li key={index} className='flex items-center text-gray-700'>
              <span className='text-yellow-500 text-lg mr-2'>•</span> {item}
            </li>
          ))}
        </ul>
        <ul className='space-y-3'>
          {amenities2.map((item, index) => (
            <li key={index} className='flex items-center text-gray-700'>
              <span className='text-yellow-500 text-lg mr-2'>•</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const AmazingView = () => {
  return (
    <div className='half-background-3 min-h-[600px] w-full grid grid-cols-2 border-4 border-black'>
      <div className='flex border-4 border-black justify-center items-center'>
        {" "}
        <div className='break-all  p-16 h-auto bg-[#d69d52] text-white md:text-[60px] sm:text-[40px] font-normal font-Abhaya_Libre'>
          <div className=' relative'>
            <div className='justify-start text-white text-4xl font-bold font-Lato'>
              Outdoor Patio
            </div>
            <div className='justify-start text-white text-[80px] font-normal font-Abhaya_Libre'>
              Amazing Views
            </div>
            <div className=' justify-start text-white text-4xl font-normal font-Lato'>
              Pellentesque nulla magna, accumsan sed ante quis, gravida feugiat
              turpis. Vivamus et fringilla ligula. Etiam sapien tellus,
              imperdiet eget posuere nec, cursus vel arcu. Ut molestie at
              posuere ante, at volutpat tellus egestas. Sed ut nunc egestas,
              porta tortor a, tempor sem. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
