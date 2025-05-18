"use client";
import React, { useRef } from "react";
import Page from "../../components/Brew/page.jsx";
import Coffee from "../../components/Brew/coffee.jsx";
import Coff from "../../components/Brew/coff.jsx";
import Cot from "../../components/Brew/cot.jsx";
import { BrewPageData } from "../../data.js";

const BrewPage = () => {
  const sectionRef = useRef(null);

  return (
    <div>
      <Page sectionRef={sectionRef} Pagedata={BrewPageData.Page} />
      <Coffee Coffeedata={BrewPageData.CoffeeFeature} />
      <div ref={sectionRef}>
        <Coff Coffdata={BrewPageData.Coff} />
      </div>
      <Cot Cotdata={BrewPageData.CoffeeInfoSection} />
    </div>
  );
};

export default BrewPage;
