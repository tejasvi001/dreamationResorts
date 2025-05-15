import React from 'react';
import Image from 'next/image';

const Accommodations = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-16 lg:px-24 flex flex-col items-center text-center">
      <h4 className="text-orange-600 font-semibold">Available Apartments</h4>
      <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-8">Accommodations</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 w-full max-w-6xl">
        {/* Left Image */}
        <div className="flex justify-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 ">
            <Image
              src="/Acc1.webp"
              alt="Accommodation 1"
              width={269}
              height={310}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-gray-700 text-lg md:text-xl leading-relaxed px-2">
          <p>
            Choose from a variety of accommodation options to your preferences. From
            spacious campsites for tents to cozy Bamboo Nests in the woods, we offer a range
            of choices for your stay. Each accommodation is equipped with modern amenities
            to ensure a comfortable and enjoyable experience.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
            <Image
              src="/Acc2.webp"
              alt="Accommodation 2"
              width={269}
              height={310}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;
