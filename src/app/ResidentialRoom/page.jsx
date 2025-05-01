"use client";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ClientsSay from "../../components/HomePageComp/ClientsSay.jsx";
import View from "../../components/Residentailcomp/View.jsx";
import RoomOverview from "../../components/Residentailcomp/RoomOverview.jsx";
import AmenitiesCard from "../../components/Residentailcomp/AmenitiesCard.jsx";
import RoomGrid from "../../components/Residentailcomp/RoomGrid.jsx";
import HeroSection from "../../components/Residentailcomp/HeroSection.jsx";


export default function ResidentialRoom({data}) {
  return (
    <div>
      <HeroSection heroData={data.heroData} />
      <RoomOverview roomOverview={data.roomOverview}/>
      <AmenitiesCard amenititesData = {data.amenititesData}/>
      <View viewData = {data.viewData}/>
      <ClientsSay clientsSayData={data.clientsSayData} />
      <RoomGrid rooms={data.rooms} />
    </div>
  );
}
