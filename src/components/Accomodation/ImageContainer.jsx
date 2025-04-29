import RoomHighlight from "./RoomHighlight";
import BottomBox from "./BottomBox";

export default function ImageContainer() {
  return (
    <div
      className="relative top-16 left-16 w-[90%] h-[100vh] bg-white shadow-lg rounded-lg overflow-hidden z-10"
      style={{
        backgroundImage: "url('/images/Accomodationimg/Rectangle13.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        {/* overlay Image */}
      <div className="flex flex-col md:flex-row p-8 h-full">
      <img
      src="/images/Accomodationimg/Rectangle 37.png"
      alt="Deluxe Room"
      className="w-3/6  object-cover rounded-lg" />

       
      </div>
      <RoomHighlight />
      <BottomBox />
    </div>
  );
}
