"use client"

import { useRouter } from "next/navigation";
import React from "react";

const Facilities = () => {
  const router = useRouter()
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full z-20 text-white p-12 md:p-[6vw] flex flex-col gap-12 md:gap-[5vw] px-[5vw]">
        {/* first */}
        <div className="w-full h-full flex flex-col md:flex-row gap-[5vw] px-[8vw]">
          <div className="w-full h-60 md:h-[30vw] relative">
            <div className="absolute w-9/12 h-9/12 overflow-hidden bottom-0 left-0 z-20 hover:z-40 hover:scale-105 duration-1000 rounded-[1vw] hover:rounded-[3vw] cursor-pointer">
              <img
                className="w-full h-full object-cover object-center"
                src="/Facility4.webp"
                alt=""
              />
            </div>
            <div className="absolute z-30 w-7/12 h-9/12 overflow-hidden top-0 right-0 hover:scale-110 duration-1000 rounded-[1vw] hover:rounded-[3vw] cursor-pointer">
              <img
                className="w-full h-full object-cover object-center"
                src="/Facility3.webp"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-center gap-[1vw]">
            <h1 className="text-2xl md:text-[3vw]">Facilities</h1>
            <p className="text-sm md:text-[1.5vw]">
              Our resort features a range of facilities to enhance your stay.
              Enjoy amenities such as clean restrooms and showers, a camp store
              stocked with essentials, picnic areas with barbecue grills, and a
              communal fire pit for cozy evenings spent sharing stories and
              making memories with fellow campers.
            </p>
            <button className="text-sm w-32 md:text-[1.5vw] border-2 py-[0.5vw] md:w-[15vw] border-gray-300 rounded-full cursor-pointer hover:bg-white hover:text-black duration-1000"
            onClick={()=>router.push('/Activities')}>
              Discover More?
            </button>
          </div>
        </div>

        {/* Second */}
        <div className="w-full h-full py-[5vw] relative md:py-0 md:mt-[2vw] md:pb-[8vw] flex">
          <div className="absolute w-full h-full flex items-center justify-center -z-10 top-0">
            <div className="w-3/4 sm:w-1/2 md:w-1/4 h-60 md:h-[25vw] rounded-[1vw] overflow-hidden">
              <img
                className="w-full h-full object-top object-cover"
                src="/cutlery.webp"
                alt=""
              />
            </div>
          </div>
          <div className="w-full md:h-full flex justify-center md:py-[1vw] md:px-[5vw]">
            <div className=" w-full md:w-3/4">
              <p className="text-sm md:text-[1.25vw] text-center">
                “Nestled in the heart of the majestic Himalayas, our Dreamation
                resort invites you on a culinary journey that celebrates the
                rich and diverse flavors of this enchanting region. From
                traditional mountain delicacies to global cuisine with a local
                twist, our dining experience promises to tantalize your taste
                buds and leave you craving for more..”
              </p>
              <h1 className="text-center text-xl md:text-[2.2vw] font-bold text-[#B16C11] mt-[2vw] hover:scale-105 duration-1000">
                Twist to a Himachali Cuisine!
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center gap-4 md:gap-[1vw]">
          <h1 className=" text-2xl text-center md:text-[3vw]">
            Enjoy & Remember Great Times with us
          </h1>
          <p className="text-md text-center md:text-[1.5vw]">
            Create an unforgettable memories at our Dreamation resorts!
          </p>
          <button className="text-sm md:text-[1.35vw] border-2 py-[1vw] w-40 md:w-[18vw] border-gray-300 hover:text-black hover:bg-white rounded-full cursor-pointer hover:scale-105 duration-1000"
          onClick={()=>router.push('/Contact')}>
            
            Get started with us
          </button>
        </div>

        <div className="w-full h-full flex flex-col md:flex-row gap-2 md:gap-[5vw] px-[5vw] py-[3vw] justify-center items-center">
          <div className="w-full h-full flex flex-col justify-center items-center gap-4 md:gap-[1vw]">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="w-16 h-16 md:w-[8vw] md:h-[8vw]">
                <img
                  className="w-full h-full object-cover object-center"
                  src="./cutlery.png"
                  alt=""
                />
              </div>
              <p className="text-md  md:text-[1.25vw] text-center">
                Best Restaurant
              </p>
              <h1 className="text-2xl  md:text-[2.5vw] text-center">Dining</h1>
            </div>
            <p className="text-sm md:text-[1.25vw] text-center">
              Immerse yourself in the breathtaking beauty of the Himalayas as
              you dine al fresco amidst panoramic views of snow-capped peaks and
              lush forests. Our dining area offers the perfect setting to enjoy
              a leisurely meal with friends and family, surrounded by the sights
              and sounds of nature.
            </p>
          </div>

          <div className="w-full h-full">
            <div className="w-full h-full md:h-[40vw] overflow-hidden z-20 hover:z-40 hover:scale-105 duration-1000 rounded-[1.5vw] hover:rounded-[5vw] cursor-pointer">
              <img
                className="w-full h-full object-cover object-center"
                src="/Facility2.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* black opacity */}

      <div className="absolute w-full h-full bg-black opacity-70 top-0 -z-10"></div>

      <div className="w-full h-full overflow-hidden absolute top-0 -z-20">
        <img
          className="w-full h-full object-cover object-center"
          src="\Facility1.webp"
          alt="j"
        />
      </div>
    </div>
  );
};

export default Facilities;
