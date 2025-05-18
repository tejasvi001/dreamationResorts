"use client";
import React, { useRef } from "react";
import Page from "../../components/Brew/page.jsx";
import Coffee from "../../components/Brew/coffee.jsx";
import Coff from "../../components/Brew/coff.jsx";
import Cot from "../../components/Brew/cot.jsx";
import { AkhadaPageData } from "../../data.js";

export default function AkhadaPage() {
  const sectionRef = useRef(null);

  return (
    <div>
      <Page sectionRef={sectionRef} Pagedata={AkhadaPageData.Page} />
      <Coffee Coffeedata={AkhadaPageData.CoffeeFeature} />
      <div ref={sectionRef}>
        <Coff Coffdata={AkhadaPageData.Coff} />
      </div>
      <Cot Cotdata={AkhadaPageData.CoffeeInfoSection} />
    </div>
  );
}
