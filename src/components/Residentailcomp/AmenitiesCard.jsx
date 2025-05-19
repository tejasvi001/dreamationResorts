import AmenitiesList from "./AmenitiesList";

const AmenitiesCard = ({ amenititesData }) => {
  return (
    <div className="relative w-full h-full md:h-[70vh] overflow-hidden flex flex-col md:flex-row px-6 gap-8 md:gap-[5vw] md:px-0 items-center">
      <div className="w-full md:w-full h-full rounded-3xl md:rounded-none overflow-hidden md:rounded-r-[1.5vw]">
        <img
          src={amenititesData.image}
          alt="img"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="md:absolute h-full w-full md:w-auto md:h-auto md:right-[45%] flex justify-center flex-col items-center  p-8 md:p-[3vw] rounded-2xl md:rounded-[2vw] overflow-hidden"
        style={{ backgroundColor: amenititesData.backgroundColor }}
      >
        {/* Aligning title text to the left */}
        <div
          className={`text-2xl md:text-[2vw] font-normal font-Abhaya_Libre ${amenititesData.textColor} text-left`}
        >
          {amenititesData.title}
        </div>
      </div>

      <div className="w-full h-full">
        <AmenitiesList amenities={amenititesData.amenities} />
      </div>
    </div>
  );
};

export default AmenitiesCard;
