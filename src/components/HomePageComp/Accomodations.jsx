import React from 'react'
import Image from "next/image";

const Accomodations = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-16 lg:px-24 flex flex-col items-center text-center">
      <h4 className="text-orange-600 font-semibold">Available Apartments</h4>
      <h2 className="text-3xl md:text-4xl font-semibold mt-2">Accommodations</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
        <div className="w-40 h-40 md:w-48 md:h-48 transform rotate-[20deg]">
          <Image
            src="/Acc1.png"
            alt=""
            width={269}
            height={310}
            className="rounded-lg"
          />
        </div>
        <div className="max-w-2xl text-gray-600 text-2xl">
          <p>
            Choose from a variety of accommodation options to your preferences. From
            spacious campsites for tents and to cozy Bamboo Nest in the woods, we
            offer a range of choices for your stay. Each accommodation is equipped
            with modern amenities to ensure a comfortable and enjoyable experience.
          </p>
        </div>
        <div className="w-40 h-40 md:w-48 md:h-48 transform -rotate-[20deg]">
          <Image
            src="/Acc2.png"
            alt=""
            width={269}
            height={310}
            className="rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};


export default Accomodations




