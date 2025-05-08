const Banner = () => {
  return (
    <div className="w-full h-full md:h-[16vw] flex flex-col md:flex-row text-white items-center justify-center py-12 md:py-0">
      <div className="w-1/2 md:w-full p-4 md:p-0 h-full flex flex-col items-center justify-center bg-[#D69D52]">
        <div className="h-32 w-32 md:w-[6vw] md:h-[6vw] overflow-hidden">
          <img
            src="/food.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-xs text-center md:text-[1.5vw]">
          Delicious cuisine.
        </p>
      </div>
      <div className="w-1/2 md:w-full p-4 md:p-0 h-full flex flex-col items-center justify-center text-[#B16C11]">
        <div className="h-32 w-32 md:w-[6vw] md:h-[6vw] overflow-hidden">
          <img
            src="/parking-sign.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-xs text-center md:text-[1.5vw]">Valet Parking</p>
      </div>
      <div className="w-1/2 md:w-full p-4 md:p-0 h-full flex flex-col items-center justify-center bg-[#D69D52]">
        <div className="h-32 w-32 md:w-[6vw] md:h-[6vw] overflow-hidden">
          <img
            src="/wi-fi-icon.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-xs text-center md:text-[1.5vw]">WiFi Network</p>
      </div>
      <div className="w-1/2 md:w-full p-4 md:p-0 h-full flex flex-col items-center justify-center text-[#B16C11]">
        <div className="h-32 w-32 md:w-[6vw] md:h-[6vw] overflow-hidden">
          <img
            src="/room-service.png"
            alt=""
            className="w-1/2 md:w-full  h-full object-cover object-center"
          />
        </div>
        <p className="text-xs text-center md:text-[1.5vw]">Room Service</p>
      </div>
      <div className="w-1/2 md:w-full p-4 md:p-0 h-full flex flex-col items-center justify-center bg-[#D69D52]">
        <div className="h-32 w-32 md:w-[6vw] md:h-[6vw] overflow-hidden">
          <img
            src="/power.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-xs text-center md:text-[1.5vw]">Power Backup</p>
      </div>
    </div>
  );
};
export default Banner;
