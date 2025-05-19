const AmenitiesList = ({ amenities = [] }) => {
  const mid = Math.ceil(amenities.length / 2);
  const leftList = amenities.slice(0, mid);
  const rightList = amenities.slice(mid);

  const renderList = (list) =>
    list.map((item, index) => (
      <li
        key={index}
        className="flex items-center text-black opacity-80 justify-start gap-2 text-lg md:text-[1.4vw] font-medium"
      >
        <span className="text-yellow-500">•</span>
        <span>{item}</span>
      </li>
    ));

  return (
    <div className="flex justify-center font-Lato">
      <div className="grid grid-cols-1 sm:grid-cols-2 p-8 md:px-[5vw]">
        <ul className="space-y-2 sm:space-y-3 md:space-y-[0.3vw]">
          {renderList(leftList)}
        </ul>
        <ul className="space-y-3 md:space-y-[0.3vw]">
          {renderList(rightList)}
        </ul>
      </div>
    </div>
  );
};

export default AmenitiesList;
