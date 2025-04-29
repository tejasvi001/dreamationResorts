import React from "react";
import BedIcon from "../../assets/bed.png";
import DuBedIcon from "../../assets/dubed.png";
import roomImage from "../../assets/room.png";
import Image from "next/image";
import RoomGrid from "../../components/Residentailcomp/RoomGrid.jsx";
import AttractionEvents from "../../components/HomePageComp/AttractionEvents";
import FeaturedRoom from "../../components/Accomodation/FeaturedRoom.jsx";
import BlackBackground from "../../components/Accomodation/BlackBackground.jsx";
import ImageContainer from "../../components/Accomodation/ImageContainer.jsx";

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
    <div className="w-full h-full">
      <BlackBackground />
      <ImageContainer />
      <RoomGrid rooms={rooms} />
      <FeaturedRoom />
      <AttractionEvents />
        
      </div>
  );
}

