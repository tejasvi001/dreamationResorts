import React from "react";
import HeroSection from "../../components/HomePageComp/HeroSection.jsx";
import Accomodations from "../../components/HomePageComp/Accomodations.jsx";
import Facilities from "../../components/HomePageComp/Facilities.jsx";
import AttractionEvents from "../../components/HomePageComp/AttractionEvents.jsx";
import Banner from "../../components/HomePageComp/Banner.jsx";
import ClientsSay from "../../components/HomePageComp/ClientsSay.jsx";
import Activities from "../../components/HomePageComp/Activities.jsx";
import Preloader from "../../components/GlobalComp/Preloader.jsx";

const page = () => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute z-20 w-full h-screen top-0 left-0">
        <Preloader />
      </div>
      <div>
        <HeroSection />
        <Accomodations />
        <Facilities />
        <AttractionEvents />
        <Banner />
        <ClientsSay />
        <Activities />
      </div>
    </div>
  );
};

export default page;
