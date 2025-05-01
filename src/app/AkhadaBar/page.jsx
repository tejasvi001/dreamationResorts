"use client";
import React from "react";
import Page from "../../components/Brew/page.jsx";
import Coffee from "../../components/Brew/coffee.jsx";
import Coff from "../../components/Brew/coff.jsx";
import Cup from "../../components/Brew/cup.jsx";
import Cot from "../../components/Brew/cot.jsx";
import {AkhadaPageData} from "../../data.js"
import { useRef } from "react";

const page = () => {
  const sectionRef = useRef(null);
  console.log(AkhadaPageData.Page.introText,"fa5")
  return (
    <div>
      <div>
        <Page sectionRef={sectionRef} Pagedata ={AkhadaPageData.Page} />
      </div>
      <div>
        <Coffee Coffeedata ={AkhadaPageData.CoffeeFeature}/>
      </div>
      <div ref={sectionRef}>
        <Coff Coffdata ={AkhadaPageData.Coff}/>
      </div>
      <div>
        <Cup Cupdata ={AkhadaPageData.Cup}/>
      </div>
      <div>
        <Cot Cotdata ={AkhadaPageData.CoffeeInfoSection}/>
      </div>
    </div>
  );
};
export default page;
