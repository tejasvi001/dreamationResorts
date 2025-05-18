import Image from "next/image";

const GalleryItems = ({ data }) => {
  return (
    <div className="w-full h-full py-[5vw]">
      {data.map((item, index) => {
        const isEven = index % 2 === 0;
        const textBg = isEven ? "bg-[#D69D52]" : "bg-black";
        const textPosition = isEven ? "right-[5vw] md:right-[20vw]" : "left-[5vw] md:left-[20vw]";

        return (
          <div key={index} className="relative w-full h-[80vh] flex overflow-hidden items-center">
            <div
              className={`absolute flex flex-col gap-[1vw] p-4 md:p-[2vw] text-white max-w-[60vw] md:max-w-[35vw] rounded-xl overflow-hidden h-auto text-center ${textBg} ${textPosition}`}
              style={{ zIndex: 10 }}
            >
              <h1 className="text-lg md:text-[2vw]">{item.title}</h1>
              <p className="text-sm md:text-[1.2vw]">{item.description}</p>
            </div>

            {isEven ? (
              <>
                <div className="w-full h-full relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`object-cover ${item.isPortrait ? "object-right-bottom" : "object-center"}`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2} // prioritize first two images for faster loading
                  />
                </div>
                <div className="w-full h-full"></div>
              </>
            ) : (
              <>
                <div className="w-full h-full"></div>
                <div className="w-full h-full relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`object-cover ${item.isPortrait ? "object-right-bottom" : "object-center"}`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GalleryItems;
