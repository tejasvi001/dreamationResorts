import Image from "next/image";



const GalleryItems = ({data}) => {
  return (
    <div className="w-full h-full flex flex-col gap-[10vw] md:gap-20 mt-[15vw] md:mt-[10vw]">
      {data.map((item, index) =>
        index % 2 === 0 ? (
          // Left Section
          <div
            key={index}
            className="relative w-full sm:w-1/2 mt-[-5vh] sm:mt-[-11vh]"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={960}
              height={640}
              className="w-full h-[60vh] sm:h-[80vh] object-cover"
            />
            <div
              className="sm:absolute sm:left-[85%] sm:top-1/2 sm:transform sm:-translate-y-1/2
              bg-[#D69D52] text-white p-4 rounded-lg shadow-lg 
              w-full sm:w-[400px] xl:w-[500px] h-[60vh]
              flex flex-col justify-center items-center text-center sm:items-center sm:text-center 
              mt-6 sm:mt-6"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">
                {item.title}
              </h3>
              <p className="text-sm sm:text-md md:text-lg mb-4">{item.description}</p>
            </div>
          </div>
        ) : (
          // Right Section
          <div
            key={index}
            className="relative w-full sm:w-1/2 mt-[-5vh] sm:mt-[-11vh] sm:ml-auto"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={960}
              height={640}
              className="w-full h-[60vh] sm:h-[80vh] object-cover"
            />
            <div
              className="sm:absolute sm:right-[85%] sm:top-1/2 sm:transform sm:-translate-y-1/2
              bg-black text-white p-6 rounded-lg shadow-lg 
              w-full sm:w-[400px] xl:w-[500px] 
              flex flex-col justify-center items-center text-center sm:items-center sm:text-center 
              mt-6 sm:mt-6"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">
                {item.title}
              </h3>
              <p className="text-sm sm:text-md md:text-lg mb-4">{item.description}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};
export default GalleryItems;