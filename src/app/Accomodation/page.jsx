import React from "react";
// import BedIcon from "../../assets/bed.png";
import DuBedIcon from "../../assets/dubed.png";
import roomImage from "../../assets/room.png";
import Image from "next/image";
import RoomGrid from "../../components/Residentailcomp/RoomGrid.jsx";
import AttractionEvents from "../../components/HomePageComp/AttractionEvents";
import FeaturedRoom from "../../components/Accomodation/FeaturedRoom.jsx";
import BlackBackground from "../../components/Accomodation/BlackBackground.jsx";
import ImageContainer from "../../components/Accomodation/ImageContainer.jsx";
import Header from "../../components/Accomodation/Header.jsx";

const rooms = [
  {
    title: "Residential",
    imageSrc: "/images/Accomodationimg/zrr34yc0jw1ip47byz0u.webp",
    width: 500,
    height: 500,
    description: "Aliquam vulputate ligula et nisl dapibus ultrices sed dolores ipsums.",
    buttonText: "View More Details",
    imgAlt: "Residential Room",
  },
  {
    title: "Executive",
    imageSrc: "/images/Accomodationimg/ofqa9cva1kkgkizumnsi.webp",
    width: 500,
    height: 500,
    description: "Aliquam vulputate ligula et nisl dapibus ultrices sed dolores ipsums.",
    buttonText: "View More Details",
    imgAlt: "Executive Room",
  },
  {
    title: "Deluxe",
    imageSrc: "/images/Accomodationimg/wmm1on7se9tjvjncr10e.webp",
    description: "Aliquam vulputate ligula et nisl dapibus ultrices sed dolores ipsums.",
    buttonText: "View More Details",
    imgAlt: "Deluxe Room",
  },
  {
    title: "Premium",
    imageSrc: "/images/Accomodationimg/nrdauuexkyqsyeuhhx0q.webp",
    description: "Aliquam vulputate ligula et nisl dapibus ultrices sed dolores ipsums.",
    buttonText: "View More Details",
    imgAlt: "Premium Room",
  },
];
export default function page() {
  return (
    <div className="w-full h-full">
      <Header />
      <RoomGrid rooms={rooms} />
      <FeaturedRoom />
      <AttractionEvents />
        
      </div>
  );
}

