import React from "react";
import BedIcon from "../../assets/bed.png";
import DuBedIcon from "../../assets/dubed.png";
import roomImage from "../../assets/room.png";
import Image from "next/image";
import RoomGrid from "../../components/Residentailcomp/RoomGrid.jsx";
import AttractionEvents from "../../components/HomePageComp/AttractionEvents";
import FeaturedRoom from "../../components/Accomodation/FeaturedRoom.jsx";

const rooms = [
  {
    title: "Residential",
    imageSrc: BedIcon,
    description: "Aliquam vulputate ligula et nisl dapibus ultrices sed dolores ipsums.",
    buttonText: "View More Details",
  },
  {
    title: "Executive",
    imageSrc: BedIcon,
    description: "Aliquam vulputate ligula et nisl dapibus ultrices sed dolores ipsums.",
    buttonText: "View More Details",
  },
  {
    title: "Deluxe",
    imageSrc: BedIcon,
    description: "Aliquam vulputate ligula et nisl dapibus ultrices sed dolores ipsums.",
    buttonText: "View More Details",
  },
  {
    title: "Premium",
    imageSrc: BedIcon,
    description: "Aliquam vulputate ligula et nisl dapibus ultrices sed dolores ipsums.",
    buttonText: "View More Details",
  },
]
export default function page() {
  return (
    <div>
      <div className='header bg-black w-full h-full border-0 overflow-auto min-h-[80svh]'>
        <Image
          src={roomImage}
          alt=""
          className='w-full max-w-[90%] brightness-50 ml-auto object-cover h-screen pt-56'
        />
        {/* <div className=' h-[838px] bg-white' /> */}
      </div>
    
     <RoomGrid rooms={rooms} />
     <FeaturedRoom />
     <AttractionEvents />
        
      </div>
  );
}

