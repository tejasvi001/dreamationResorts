const FeaturedRoom = () => {
  return (
    <div className="relative h-full px-6 md:px-0 py-[5vw] flex flex-col gap-8 md:gap-0">
      <div className="w-full h-[40vh] overflow-hidden rounded-2xl md:rounded-none">
        <img
          src="/assets/dubed.webp"
          alt="Featured Room"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="md:absolute right-[20vw] top-0 md:w-1/4 w-full ml-auto flex items-center flex-col justify-center rounded-2xl overflow-hidden">
        <div className="bg-[#d69d52] min-h-[50vh] lg:min-h-[60vh] w-full z-20 p-10 flex flex-col gap-2">
          <div className="justify-start text-white text-2xl md:text-[1.5vw] font-bold font-Lato">
            Featured Room
          </div>
          <div className="justify-start text-white text-3xl md:text-[2vw] font-normal font-Abhaya_Libre">
            Deluxe Rooms
          </div>
          <ul className="list list-disc text-white list-inside text-xl md:text-[1.2vw]">
            <li>55 Sq Metres of interior space</li>
            <li>Shared Swimming Pool</li>
            <li>Spa Service for Free</li>
            <li>King Size Bed (1.80 x 1.70)</li>
            <li>Mountain View</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRoom;
