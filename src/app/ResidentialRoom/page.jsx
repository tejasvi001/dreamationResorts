"use client";
import React, { useState } from "react";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import ClientsSay from "../../components/HomePageComp/ClientsSay.jsx";
import BedIcon from "../../assets/bed.png";
import View from "../../components/Residentailcomp/View.jsx";
import RoomOverview from "../../components/Residentailcomp/RoomOverview.jsx";
import AmenitiesCard from "../../components/Residentailcomp/AmenitiesCard.jsx";
import RoomGrid from "../../components/Residentailcomp/RoomGrid.jsx";
import HeroSection from "../../components/Residentailcomp/HeroSection.jsx";

const amenities = [
  "Air conditioning", "Room service", "Spa Service for Free", "Wireless Internet",
  "Shared Swimming Pool", "24-Hour Fitness Facility", "Valet Parking", "Concierge Service",
  "1000 sq ft", "60” LCD TV", "Coffee and tea set", "Hair Dryer", "Telephone",
  "Seaside view", "Free Mini Bar", "Luxurious bathroom", "Bath cosmetics", "Handmade bed",
  "2 Queen Beds", "3 Person Maximum",
];

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

export default function ResidentialRoom() {  
  return (
    <div>
      <HeroSection
  title="Residential Rooms"
  backgroundImage="/bg.jpg"
/>
      <RoomOverview
        heading="Room Overview"
        subheading="Residential Room"
        paragraphs={[
          "Pellentesque nulla magna, accumsan sed ante quis, gravida feugiat turpis. Vivamus et fringilla ligula. Etiam sapien tellus, imperdiet eget posuere nec, cursus vel arcu.",
          "Ut molestie at posuere ante, at volutpat tellus egestas. Sed ut nunc egestas, porta tortor a, tempor sem. Suspendisse porta, leo eget viverra aliquam, leo justo pulvinar libero, quis tempor nulla dui eu tellus.",
          "Nunc accumsan tincidunt dui non eleifend. Sed facilisis augue nec lacus dapibus, tempus sit amet lorem.",
          "Donec efficitur augue eget lacus placerat gravida. Nunc id dolor condimentum, ullamcorper ipsum quis, tristique ante. Phasellus rutrum tellus nec eleifend tincidunt. Ut ut mollis purus. Sed arcu augue, consectetur id blandit vitae, sollicitudin id nunc.",
          "Nulla placerat eros non cursus pellentesque. Nunc justo quam, consequat id tincidunt sed."
        ]}
        backgroundColor="#d69d52"
        textColor="text-white"
      />
      
      <AmenitiesCard
        title="Residential Room Amenities"
        backgroundColor="#D69D52"
        textColor="text-white"
        layout="right"
        amenities={amenities} 
      />
      
      <View
        title="Outdoor Patio"
        subheading="Amazing Views"
        description="Pellentesque nulla magna, accumsan sed ante quis, gravida feugiat turpis. Vivamus et fringilla ligula. Etiam sapien tellus, imperdiet eget posuere nec, cursus vel arcu. Ut molestie at posuere ante, at volutpat tellus egestas. Sed ut nunc egestas, porta tortor a, tempor sem. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
        imageUrl="/images/ResidentialRoom/Rectangle55.png"
        backgroundColor="#D69D52"
      />
      
      <ClientsSay />
      <RoomGrid rooms={rooms} />
    </div>
  );
}

