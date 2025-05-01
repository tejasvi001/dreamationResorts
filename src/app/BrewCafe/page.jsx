"use client";
import React from "react";
import Page from "../../components/Brew/page.jsx";
import Coffee from "../../components/Brew/coffee.jsx";
import Coff from "../../components/Brew/coff.jsx";
import Cup from "../../components/Brew/cup.jsx";
import Cot from "../../components/Brew/cot.jsx";

import { useRef } from "react";

const page = () => {
  const sectionRef = useRef(null);
  return (
    <div>
      <div>
        <Page sectionRef={sectionRef} />
      </div>
      <div>
        <Coffee />
      </div>
      <div ref={sectionRef}>
        <Coff />
      </div>
      <div>
        <Cup />
      </div>
      <div>
        <Cot />
      </div>
    </div>
  );
};
export default page;
