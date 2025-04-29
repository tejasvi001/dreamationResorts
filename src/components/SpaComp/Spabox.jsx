import Image from "next/image";

const Spabox = () => {
  return (
    <div className="flex flex-col items-center bg-[#FFF8EF] p-10">
      {/* Box Container */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-start w-full max-w-6xl">
        {/* First Box */}
        <div className="relative w-full md:w-1/2 h-[400px] md:h-[600px] overflow-hidden shadow-lg">
          <Image
            src="/images/Spaimg/Frame 1618873205.png"
            alt="Spa Accessories"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Second Box */}
        <div className="relative w-full md:w-1/2 h-[400px] md:h-[600px] overflow-hidden shadow-lg">
          <Image
            src="/images/Spaimg/Frame 1618873206.png"
            alt="Spa Menu"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black opacity-50 flex flex-col items-center justify-center p-4">
            <h2 className="text-white text-lg font-semibold text-center">Spa Menu</h2>
            <button className="mt-2 px-4 py-2 border border-white rounded-full text-white text-sm 
            hover:bg-white hover:text-black transition-all">
              View More Details
            </button>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center mt-12 px-4">
        <h2 className="text-xl text-[#B16C11] font-semibold">Featured Room</h2>
        <h2 className="text-3xl mt-6">Deluxe Suite</h2>
        <p className="text-lg mt-6 max-w-4xl mx-auto">
          Our resort features a range of facilities to enhance your stay.
          Enjoy amenities such as clean restrooms and showers, a camp store stocked with essentials, picnic areas with barbecue grills, and a communal fire pit for cozy evenings spent sharing stories and making memories with fellow campers.
        </p>
      </div>
    </div>
  );
};

export default Spabox;
