import React from "react";
import BedIcon from "../../assets/bed.png";
import DuBedIcon from "../../assets/dubed.png";
import roomImage from "../../assets/room.png";
import Image from "next/image";
import AttractionEvents from "../../components/HomePageComp/AttractionEvents";
export default function page() {
  return (
    <div>
      <div className='header bg-black w-full h-full border-0 overflow-auto min-h-[80svh]'>
        <Image
          src={roomImage}
          className='w-full max-w-[90%] brightness-50 ml-auto object-cover h-screen pt-56'
        />
        {/* <div className=' h-[838px] bg-white' /> */}
      </div>
      <RoomGrid />

      <div className='horiztalBetimage my-16 relative min-h-[480px] h-full'>
        <Image
          src={DuBedIcon}
          className='absolute inset-0 w-full min-h-[450px] py-8 h-auto -z-10'
        />
        <div className='md:w-1/2 w-2/3 ml-auto flex items-center  flex-col justify-center'>
          <div className='bg-[#d69d52] h-full min-h-[460px] w-full z-50 max-w-lg p-10'>
            <div className=' justify-start text-white text-2xl font-bold font-Lato'>
              Featured Room
            </div>
            <div className='justify-start text-white text-3xl font-normal font-Abhaya_Libre'>
              Deluxe Suite
            </div>
            <ul className='list list-disc text-white list-inside'>
              <li>55 Sq Metres of interior space</li>
              <li>Shared Swimming Pool</li>
              <li>Spa Service for Free</li>
              <li>King Size Bed (1.80 x 1.70)</li>
              <li>Balcony to Sea View</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        {/* <div className='grid grid-cols-2'>
          <Image src={SofaImage} className='w-full h-full' />
          <Image src={SofaImage} className='w-full h-full' />
        </div> */}
        <AttractionEvents />
      </div>
    </div>
  );
}

const rooms = [
  { title: "Residential", bg: "bg-white", textColor: "text-black" },
  { title: "Executive", bg: "bg-orange-300", textColor: "text-white" },
  { title: "Deluxe", bg: "bg-white", textColor: "text-black" },
  { title: "Premium", bg: "bg-orange-300", textColor: "text-white" },
];

const RoomCard = ({ order, title }) => {
  return (
    <div className='relative flex flex-col sm:flex-row w-full'>
      <Image
        src={BedIcon} // Replace with actual image path
        alt={title}
        className={`sm:w-1/2 md:w-1/2 order-${
          order === 1 ? "last" : "first"
        } object-cover border-2 grid border-blue-500`}
      />
      <div
        className={`sm:max-w-1/3 p-6 bg-white text-black flex flex-col justify-center`}
      >
        <h2 className='justify-start text-[#484848] text-5xl font-normal font-Abhaya_Libre'>
          {title}
        </h2>
        <p className='mt-2 justify-start text-[#484848] text-2xl font-normal font-Lato'>
          Aliquam vulputate ligula et nisl dapibus ultrices sed dolores ipsums.
        </p>
        <button className='mt-4 px-4 w-full max-w-[340px] py-2 border border-[#b16c11] text-sm rounded-full text-[#b16c11] transition-all'>
          View More Details
        </button>
      </div>
    </div>
  );
};
const RoomCardRTL = ({ order, title }) => {
  return (
    <div className='relative flex flex-col sm:flex-row w-full'>
      <div
        className={`sm:max-w-1/2 bg-[#d69d52] p-6 w-full text-black flex flex-col justify-center`}
      >
        <div className='sm:max-w-lg  mx-auto'>
          <h2 className='justify-start text-[#484848] text-5xl font-normal font-Abhaya_Libre'>
            {title}
          </h2>
          <p className='mt-2 justify-start text-[#484848] text-2xl font-normal font-Lato'>
            Aliquam vulputate ligula et nisl dapibus ultrices sed dolores
            ipsums.
          </p>
          <button className='mt-4 px-4 w-full max-w-[340px] py-2 border border-[#b16c11] text-sm rounded-full text-[#b16c11] transition-all'>
            View More Details
          </button>
        </div>
      </div>
      <Image
        src={BedIcon} // Replace with actual image path
        alt={title}
        className={`sm:w-1/2 md:w-1/2 order-${
          order === 1 ? "last" : "first"
        } object-cover border-2 grid border-blue-500`}
      />
    </div>
  );
};

const RoomGrid = () => {
  return (
    <div className='grid grid-cols-1 gap-4 p-4 mx-auto'>
      <RoomCard key={0} {...rooms[0]} />
      <RoomCardRTL key={1} {...rooms[1]} />
      <RoomCard key={2} {...rooms[2]} />
      <RoomCardRTL key={3} {...rooms[3]} />
    </div>
  );
};
