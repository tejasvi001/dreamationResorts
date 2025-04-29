export default function RoomHighlight() {
    return (
      <div className="p-3 bg-white flex flex-col justify-center text-gray-800 w-full max-w-[500px]">
        <p className="text-xs text-orange-600 font-semibold">Featured Room</p>
        <h2 className="text-lg font-bold mb-1">Deluxe Suite</h2>
        <p className="text-xs mb-3">
          Our resort features a range of facilities to enhance your stay. Enjoy
          amenities such as clean restrooms and showers, a camp store stocked with
          essentials, picnic areas with barbecue grills, and a communal fire pit.
        </p>
        <ul className="grid grid-cols-2 text-xs gap-1 mb-3">
          <li>• 55 sq Metres</li>
          <li>• King Size Bed</li>
          <li>• Shared Pool</li>
          <li>• Sea View Balcony</li>
          <li>• Free Spa</li>
        </ul>
        <button className="border border-orange-600 text-orange-600 text-xs px-3 py-1 rounded hover:bg-orange-100 transition">
          View More
        </button>
      </div>
    );
  }
  