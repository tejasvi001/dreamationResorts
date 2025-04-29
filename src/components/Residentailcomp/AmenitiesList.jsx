const AmenitiesList = ({ amenities = [] }) => {
    const mid = Math.ceil(amenities.length / 2);
    const leftList = amenities.slice(0, mid);
    const rightList = amenities.slice(mid);
  
    return (
      <div className="flex justify-center font-Lato">
        <div className="grid grid-cols-2 gap-8 p-8 max-w-2xl">
          <ul className="space-y-3">
            {leftList.map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <span className="text-yellow-500 text-lg mr-2">•</span> {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-3">
            {rightList.map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <span className="text-yellow-500 text-lg mr-2">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default AmenitiesList;
  