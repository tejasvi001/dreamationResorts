export default function RoomHighlight() {
  return (
    <div className="p-6 sm:p-8 md:p-12 bg-white flex flex-col justify-center text-gray-800 w-full max-w-[700px] mx-auto">
      <p className="text-lg sm:text-xl text-[#B16C11] font-semibold">Featured Room</p>
      <h2 className="text-xl sm:text-2xl font-bold mb-2">Deluxe Suite</h2>
      <p className="text-sm sm:text-base mb-4">
        Our resort features a range of facilities to enhance your stay. Enjoy
        amenities such as clean restrooms and showers, a camp store stocked with
        essentials, picnic areas with barbecue grills, and a communal fire pit.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 text-sm gap-2 mb-4">
        <li><span className="text-[#B16C11] text-2xl font-bold mr-2">•</span>55 sq Metres</li>
        <li><span className="text-[#B16C11] text-2xl font-bold mr-2">•</span>King Size Bed</li>
        <li><span className="text-[#B16C11] text-2xl font-bold mr-2">•</span>Shared Pool</li>
        <li><span className="text-[#B16C11] text-2xl font-bold mr-2">•</span>Mountain View</li>
      </ul>

      <button className="border border-[#B16C11] text-[#B16C11] text-sm px-4 py-2 w-full sm:w-[180px]  hover:bg-amber-400 transition rounded-3xl">
        For More Details
      </button>
    </div>
  );
}
