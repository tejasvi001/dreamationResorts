import React from "react";

const View = ({ viewData }) => {
  const { title, subheading, description, imageUrl } = viewData;

  return (
    <div className="flex flex-col md:flex-row px-6 md:px-0 gap-4 relative">
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center md:absolute md:top-[20%] md:left-[15%]">
        <div
          className="p-8 w-full lg:w-4/5 z-10 rounded-3xl md:rounded-[2vw] overflow-hidden"
          style={{ backgroundColor: "#D69D52" }}
        >
          <h3 className="text-white font-lato font-bold mb-2 text-2xl">{title}</h3>
          <h2 className="text-white font-AbhayaLibre text-2xl lg:text-4xl mb-6 font-normal">
            {subheading}
          </h2>
          <p className="text-white font-lato text-lg font-normal">{description}</p>
        </div>
      </div>

      {/* Placeholder for layout */}
      <div className="w-1/2 h-full hidden md:flex" />

      {/* Image Section */}
      <div
        className="bg-cover bg-center md:w-1/2 min-h-[600px] rounded-3xl md:rounded-none md:rounded-tl-3xl"
        style={{ backgroundImage: `url(${imageUrl})` }}
        role="img"
        aria-label={subheading}
      />
    </div>
  );
};

export default View;
