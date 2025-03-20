import React from 'react'
import HeroSection from "../../components/HomePageComp/HeroSection.jsx"
import Accomodations from "../../components/HomePageComp/Accomodations.jsx"
import Facilities from "../../components/HomePageComp/Facilities.jsx"
import AttractionEvents from "../../components/HomePageComp/AttractionEvents.jsx"
import Banner from "../../components/HomePageComp/Banner.jsx"
import ClientsSay from "../../components/HomePageComp/ClientsSay.jsx"
import Activities from "../../components/HomePageComp/Activities.jsx"

const page = () => {
  return (
    <div className='w-full h-full'>
      <HeroSection/>
      <Accomodations/>
      <Facilities/>
      <AttractionEvents/>
      <Banner/>
      <ClientsSay/>
      <Activities/>
    </div>
  )
}

export default page