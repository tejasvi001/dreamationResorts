


"use client";
import { useState } from "react";

import Image from "next/image";


const testimonials = [
  {
    id: 1,
    name: "Anuj Kumar",
    quote:
      "Staying at Dreamation was an absolute delight! From the warm welcome at check-in to the impeccable service throughout my stay, every moment felt like a luxurious escape.",
    image: "/user1.jpg", // Replace with actual image paths
  },
  {
    id: 2,
    name: "Sarah Johnson",
    quote:
      "The attention to detail was remarkable. The staff anticipated our needs before we even had to ask. I've never experienced such personalized service anywhere else.",
    image: "/user2.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    quote:
      "From the gourmet breakfast to the sunset views from our balcony, everything exceeded our expectations. We're already planning our return visit!",
    image: "/user3.jpg",
  },
];

const ClientsSay = ({clientsSayData}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full   mx-auto px-4 py-12 text-center bg-amber-50">
    <div className=" flex justify-between ">
          {/* Left Image */}
               
          <div className="ml-28    md:block ">
          <div className="w-24 h-24 relative -rotate-6 ">
            <Image
              src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].image}
              alt="Previous Testimonial"
              width={80}
              height={80}
              className="object-cover border-4 border-white shadow-md rounded-md"
            />
          </div>
        </div>

        <div className=" ">
          <img src="/getQuote.png" alt="" className="h-20 w-20 relative top-14"  />
        </div>
          {/* Right image */}
        <div className="   md:block  mt-4 ">
          <div className="w-24 h-24 relative rotate-6 mt-4">
            <Image
              src={testimonials[(currentIndex + 1) % testimonials.length].image}
              alt="Next Testimonial"
              width={80}
              height={80}
              className="object-cover border-4 border-white shadow-md rounded-md"
            />
          </div>
        </div>
    </div>
      {/* <h2 className="text-4xl font-serif text-amber-700 mb-6">
        What Our Clients Say?
      </h2> */}
       
<div className="  mt-4">
<div>
        <h2 className="text-4xl font-serif text-amber-700 mb-6">
        What Our Clients Say?
      </h2>
        </div>
<div className="flex items-center justify-center mt-9  ">
        {/* Left Image
        <div className="absolute left-0 -top-4 hidden md:block border-2 border-red-700">
          <div className="w-24 h-24 relative -rotate-6">
            <Image
              src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].image}
              alt="Previous Testimonial"
              width={80}
              height={80}
              className="object-cover border-4 border-white shadow-md rounded-md"
            />
          </div>
        </div> */}
      
        {/* Quotation Marks */}
     

        {/* Testimonial Content */}
    

        {/* Quotation Marks */}
     

        {/* Right Image */}
        {/* <div className="absolute right-0 -top-4 hidden md:block">
          <div className="w-24 h-24 relative rotate-6">
            <Image
              src={testimonials[(currentIndex + 1) % testimonials.length].image}
              alt="Next Testimonial"
              width={80}
              height={80}
              className="object-cover border-4 border-white shadow-md rounded-md"
            />
          </div>
        </div> */}
      </div>
</div>

      {/* Navigation Arrows */}
      <div className="flex justify-between items-center w-[90%] mx-auto  ">
        <button
          onClick={goToPrevious}
          className="text-amber-700 hover:text-amber-500 transition transform scale-110 cursor-pointer"
        >
        <img src="/leftButton.svg" alt="" className="w-12 h-12" />
        </button>
        <div className="max-w-lg px-4">
          <p className="text-lg text-gray-800 italic">
            "{testimonials[currentIndex].quote}"
          </p>
          <p className="mt-4 text-amber-700 font-medium text-lg">
            {testimonials[currentIndex].name}
          </p>
        </div>
        <button
          onClick={goToNext}
          className="text-amber-700 hover:text-amber-500 transition transform scale-110 cursor-pointer"
        >
                  
        <img src="/rightButton.svg" alt="" className="w-12 h-12" />
        </button>
      </div>
    </div>
  );
};

export default ClientsSay;
