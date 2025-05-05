"use client";
import HeroSection from "../../components/HomePageComp/HeroSection.jsx";
import Accomodations from "../../components/HomePageComp/Accomodations.jsx";
import Facilities from "../../components/HomePageComp/Facilities.jsx";
import AttractionEvents from "../../components/HomePageComp/AttractionEvents.jsx";
import Banner from "../../components/HomePageComp/Banner.jsx";
import ClientsSay from "../../components/HomePageComp/ClientsSay.jsx";
import Activities from "../../components/HomePageComp/Activities.jsx";
import { useRef } from "react";

const Page = () => {
const HomeRef = useRef(null)
  return (
    <div className="w-full h-full relative">
        <HeroSection HomeRef={HomeRef} />
        <Accomodations />
        <div ref={HomeRef} >
        <Facilities/>
        </div>
        <AttractionEvents />
        <Banner />
        <ClientsSay />
        <Activities />
      </div>
  );
};

export default Page;
