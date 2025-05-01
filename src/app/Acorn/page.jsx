"use client";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ClientsSay from "../../components/HomePageComp/ClientsSay.jsx";
import View from "../../components/Residentailcomp/View.jsx";
import RoomOverview from "../../components/Residentailcomp/RoomOverview.jsx";
import AmenitiesCard from "../../components/Residentailcomp/AmenitiesCard.jsx";
import RoomGrid from "../../components/Residentailcomp/RoomGrid.jsx";
import HeroSection from "../../components/Residentailcomp/HeroSection.jsx";
import {Acorn} from "../../data.js"

export default function ResidentialRoom() {
  return (
    <div>
      <HeroSection heroData={Acorn.heroData} />
      <RoomOverview roomOverview={Acorn.roomOverview}/>
      <AmenitiesCard amenititesData = {Acorn.amenititesData}/>
      <View viewData = {Acorn.viewData}/>
      <ClientsSay clientsSayData={Acorn.clientsSayData} />
      <RoomGrid rooms={Acorn.rooms} />
    </div>
  );
}
