
const GalleryItems = ({data}) => {
   return (
    <div className="w-full h-full py-[5vw]">
      {data.map((item, index) => (
        <div className="w-full h-full" key={index}>
          {index % 2 == 0 ? (
            <div className="relative w-full h-[70vh] md:h-[80vh] flex overflow-hidden items-center ">
              <div className="absolute text-center flex flex-col gap-[1vw] p-4 bg-[#D69D52] md:p-[2vw] text-white max-w-[60vw] md:max-w-[35vw] right-[5vw] md:right-[20vw] rounded-xl overflow-hidden h-auto">
                <h1 className=" text-lg md:text-[2vw]">
                  {item.title}
                </h1>
                <p className=" text-sm md:text-[1.2vw]">
                  {item.description}
                </p>
              </div>

              <div className="w-full h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover  ${item.isPortrait ? 'object-right-bottom' : 'object-center' }`}
                />
              </div>
              <div className="w-full h-full"></div>
            </div>
          ) : (
            <div className="relative w-full h-[70vh] md:h-[80vh] flex overflow-hidden items-center ">
              <div className="absolute text-center flex flex-col gap-[1vw] p-4 bg-black md:p-[2vw] text-white max-w-[60vw] md:max-w-[35vw] left-[5vw] md:left-[20vw] rounded-xl overflow-hidden h-auto">
                <h1 className=" text-lg md:text-[2vw]">
                  {item.title}
                </h1>
                <p className=" text-sm md:text-[1.2vw]">
                  {item.description}
                </p>
              </div>
              <div className="w-full h-full"></div>
              <div className="w-full h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover  ${item.isPortrait ? 'object-right-bottom' : 'object-center' }`}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default GalleryItems;