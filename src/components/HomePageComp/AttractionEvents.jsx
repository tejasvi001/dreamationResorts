import React from "react";

const AttractionEvents = () => {
  return (
    <div className="w-full h-full py-[5vw] px-[10vw] flex flex-col md:flex-row gap-[3vw]">
      <div className="w-full h-[60vw] sm:h-[30vw] relative flex items-center justify-center rounded-2xl md:rounded-[2vw] overflow-hidden shadow-gray-400 shadow-2xl">
        <img
          className="w-full h-full object-cover object-center"
          src="/images/Accomodationimg/nheiyd6dycyhbdagjsac.webp"
          alt=""
        />
        <div className="absolute z-20">
          onClick={() => router.push("/Local-page")}
          <p className="text-white text-[8vw] leading-[8vw] md:text-[4vw] text-center md:leading-[4vw] hover:scale-125 duration-2000 cursor-pointer">
            Local <br /> Attraction
          </p>
        </div>
        <div className="absolute w-full h-full bg-black opacity-50 z-10"></div>
      </div>

      <div className="w-full h-[60vw] sm:h-[30vw] relative flex items-center justify-center rounded-2xl md:rounded-[2vw] overflow-hidden shadow-gray-400 shadow-2xl">
        <img
          className="w-full h-full object-cover object-center"
          src="/LocalAttraction.webp"
          alt=""
        />
        <div className="absolute z-20">
          <p className="text-white text-[8vw] leading-[8vw] md:text-[4vw] text-center md:leading-[4vw] hover:scale-125 duration-2000 cursor-pointer">
            Devotional <br /> Attraction
          </p>
        </div>
        <div className="absolute w-full h-full bg-black opacity-50 z-10"></div>
      </div>
    </div>
  );
};

export default AttractionEvents;
