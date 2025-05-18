"use client";
import React, { useRef } from "react";
import Page from "../../components/Brew/page.jsx";
import Coffee from "../../components/Brew/coffee.jsx";
import Coff from "../../components/Brew/coff.jsx";
import Cot from "../../components/Brew/cot.jsx";
import { IndoorPageData } from "../../data.js";

export default function PageComponent() {
  const sectionRef = useRef(null);

  return (
    <div>
      <Page sectionRef={sectionRef} Pagedata={IndoorPageData.Page} />
      <Coffee Coffeedata={IndoorPageData.CoffeeFeature} />
      <div ref={sectionRef}>
        <Coff Coffdata={IndoorPageData.Coff} />
      </div>
      <Cot Cotdata={IndoorPageData.CoffeeInfoSection} />
    </div>
  );
}
