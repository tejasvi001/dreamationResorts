import React from "react";

const View = ({ viewData }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 flex justify-center items-center">
        <div
          style={{ backgroundColor : "#D69D52" }}
          className="p-8 relative md:left-[20%] lg:w-4/5 md:w-full w-4/5 top-[100px] z-10 rounded-2xl md:rounded-[2vw] overflow-hidden"
        >
          <h3 className="text-white font-lato font-bold mb-2 text-2xl">{viewData.title}</h3>
          <h2 className="text-white text-2xl lg:text-4xl font-AbhayaLibre mb-6 font-normal">
            {viewData.subheading}
          </h2>
          <p className="text-white font-Lato font-normal text-lg">{viewData.description}</p>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${viewData.imageUrl})` }}
        className="bg-cover bg-center md:w-1/2 min-h-[600px]"
      ></div>
    </div>
  );
};

export default View;
