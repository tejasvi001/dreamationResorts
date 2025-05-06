import RoomHighlight from "./RoomHighlight";
import BottomBox from "./BottomBox";

export default function ImageContainer() {
  return (
    <div
      className="absolute right-0 w-full max-w-[1200px] mx-auto h-full shadow-lg z-10 overflow-hidden"
      style={{
        backgroundImage: "url('/images/Accomodationimg/b5wrkonddwzymupskqto.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute w-full h-full z-50 bg-black opacity-40"></div>
      
      {/* Overlay image and content */}
      <div className="flex flex-col md:flex-row pt-12 md:pt-14 h-[120vh] md:h-[80vh] gap-4 relative">
        {/* Image div */}
        <img
          src="/images/Accomodationimg/iakywbn5nixqn01lmosp.webp"
          alt="Deluxe Room"
          className="w-full h-[350px] md:w-2/3 md:h-auto object-cover"
        />
        
        {/* RoomHighlight */}
        <div className="absolute h-full top-[30%] z-60  md:top-[50%] left-[60%] md:left-[71%] w-full md:w-2/3 transform -translate-x-1/2 p-4">
          <RoomHighlight />
        </div>
      </div>

      {/* Bottom Box */}
      <div className="absolute bottom-0 left-0 w-full md:w-[1000px] mt-8 sm:mt-12 md:mt-0">
        <BottomBox />
      </div>
    </div>
  );
}
