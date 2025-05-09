import Image from "next/image";

const GalleryItemLeft = ({ image, title, description }) => {
  return (
    <div className="relative w-full sm:w-1/2 mt-[-5vh] sm:mt-[-11vh]">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={960}
        height={640}
        className="w-full h-[60vh] sm:h-[80vh]  object-cover"
      />

      {/* Text box */}
      <div
        className="sm:absolute sm:left-[85%] sm:top-1/2 sm:transform sm:-translate-y-1/2
        bg-[#D69D52] text-white p-6 sm:p-10 rounded-lg shadow-lg 
        w-full sm:w-[400px]  xl:w-[500px] h-[60vh]
        flex flex-col justify-center items-center text-center sm:items-center sm:text-center 
        mt-6 sm:mt-6"
      >
        <h3 className="text-xl  sm:text-3xl font-semibold mb-4 sm:mb-6">{title}</h3>
        <p className="text-sm  sm:text-lg mb-4">{description}</p>
        <button className="w-full py-2 border border-white rounded-full text-white 
          hover:bg-white hover:text-black transition-all">
          Let's Explore
        </button>
      </div>
    </div>
  );
};

export default GalleryItemLeft;
