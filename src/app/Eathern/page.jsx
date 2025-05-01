"use client";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ClientsSay from "../../components/HomePageComp/ClientsSay.jsx";
import View from "../../components/Residentailcomp/View.jsx";
import RoomOverview from "../../components/Residentailcomp/RoomOverview.jsx";
import AmenitiesCard from "../../components/Residentailcomp/AmenitiesCard.jsx";
import RoomGrid from "../../components/Residentailcomp/RoomGrid.jsx";
import HeroSection from "../../components/Residentailcomp/HeroSection.jsx";
import {Earthern} from "../../data.js"

export default function ResidentialRoom() {
  return (
    <div>
      <HeroSection heroData={Earthern.heroData} />
      <RoomOverview roomOverview={Earthern.roomOverview}/>
      <AmenitiesCard amenititesData = {Earthern.amenititesData}/>
      <View viewData = {Earthern.viewData}/>
      <ClientsSay clientsSayData={Earthern.clientsSayData} />
      <RoomGrid rooms={Earthern.rooms} />
    </div>
  );
}
