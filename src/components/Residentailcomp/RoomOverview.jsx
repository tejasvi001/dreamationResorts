const RoomOverview = ({ roomOverview }) => {
  const { backgroundColor, textColor, heading, subheading, paragraphs, overviewimg } = roomOverview;

  return (
    <div className="flex flex-col justify-center items-center py-8 md:py-[5vw] w-full h-full px-6 md:px-0">
      {/* Image */}
      <div className="w-full h-[50vh] overflow-hidden rounded-3xl md:rounded-none">
        <img
          src={overviewimg}
          alt="Room Overview"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Container */}
      <div
        className={`h-full font-Lato w-full md:-mt-[6vw] md:w-[80%] ${textColor} p-8 text-center rounded-3xl`}
        style={{ backgroundColor }}
      >
        <div className="mb-2 text-xl md:text-[1.5vw]">{heading}</div>
        <h2 className="text-3xl mb-4 md:text-[2vw]">{subheading}</h2>
        {paragraphs.map((text, index) => (
          <p key={index} className="text-md md:text-[1.2vw]">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default RoomOverview;