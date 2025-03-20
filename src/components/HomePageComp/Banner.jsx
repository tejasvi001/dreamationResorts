const Banner = () => {
  return (
    <div className="w-full h-28 md:h-[16vw] flex text-white">
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#D69D52]">
        <div className="h-12 w-12 md:w-[6vw] md:h-[6vw] overflow-hidden">
          <img
            src="/food.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-xs text-center md:text-[1.5vw]">
          Delicious Breakfast
        </p>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center text-[#B16C11]">
        <div className="h-12 w-12 md:w-[6vw] md:h-[6vw] overflow-hidden">
          <img
            src="/parking-sign.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-xs text-center md:text-[1.5vw]">24 Hour Parking</p>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#D69D52]">
        <div className="h-12 w-12 md:w-[6vw] md:h-[6vw] overflow-hidden">
          <img
            src="/wi-fi-icon.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-xs text-center md:text-[1.5vw]">WiFi Network</p>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center text-[#B16C11]">
        <div className="h-12 w-12 md:w-[6vw] md:h-[6vw] overflow-hidden">
          <img
            src="/room-service.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-xs text-center md:text-[1.5vw]">Room Service</p>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#D69D52]">
        <div className="h-12 w-12 md:w-[6vw] md:h-[6vw] overflow-hidden">
          <img
            src="/car-rental.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-xs text-center md:text-[1.5vw]">Car Rentals</p>
      </div>
    </div>
  );
};
export default Banner;