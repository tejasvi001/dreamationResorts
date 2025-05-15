"use client";
import React from "react";
import Page from "../../components/Brew/page.jsx";
import Coffee from "../../components/Brew/coffee.jsx";
import Coff from "../../components/Brew/coff.jsx";
import Cup from "../../components/Brew/cup.jsx";
import Cot from "../../components/Brew/cot.jsx";
import {BrewPageData} from "../../data.js"
import { useRef } from "react";

const page = () => {
  const sectionRef = useRef(null);
  return (
    <div>
      <div>
        <Page sectionRef={sectionRef} Pagedata ={BrewPageData.Page} />
      </div>
      <div>
        <Coffee Coffeedata ={BrewPageData.CoffeeFeature}/>
      </div>
      <div ref={sectionRef}>
        <Coff Coffdata ={BrewPageData.Coff}/>
      </div>
      {/* <div>
        <Cup Cupdata ={BrewPageData.Cup}/>
      </div> */}
      <div>
        <Cot Cotdata ={BrewPageData.CoffeeInfoSection}/>
      </div>
    </div>
  );
};
export default page;