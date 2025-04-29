import React from "react";

const View = ({
  title = "Outdoor Patio", 
  subheading = "Amazing Views", 
  description = "Pellentesque nulla magna, accumsan sed ante quis, gravida feugiat turpis. Vivamus et fringilla ligula. Etiam sapien tellus,imperdiet eget posuere nec, cursus vel arcu. Ut molestie at posuere ante, at volutpat tellus egestas. Sed ut nunc egestas, porta tortor a, tempor sem. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
  imageUrl = "/images/ResidentialRoom/AmazingView.png",
  backgroundColor = "#D69D52", 
}) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 flex justify-center items-center">
        <div
          style={{ backgroundColor }}
          className="p-8 relative md:left-[20%] lg:w-4/5 md:w-full w-4/5 top-[100px] z-10"
        >
          <h3 className="text-white font-lato font-bold mb-2 text-2xl">{title}</h3>
          <h2 className="text-white text-2xl lg:text-4xl font-AbhayaLibre mb-6 font-normal">
            {subheading}
          </h2>
          <p className="text-white font-Lato font-normal text-lg">{description}</p>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="bg-cover bg-center md:w-1/2 min-h-[600px]"
      ></div>
    </div>
  );
};

export default View;
