import Image from "next/image";

const GalleryItemRight = ({ image, title }) => {
  return (
    <div className="relative w-full md:w-1/2 mt-[-11vh] ml-[50%]">
      {/* Right Image */}
      <Image
        src={image}
        alt={title}
        width={960}
        height={640}
        className="w-full h-[80vh] object-cover"
      />

      {/* Floating Textbox */}
      <div
  className="absolute md:right-[85%] md:top-1/2 transform md:-translate-y-1/2 
  bg-black text-white p-10 rounded-lg shadow-lg w-[50vw] h-80 
  flex flex-col justify-center"
>
  <h3 className="text-3xl font-semibold mb-6">{title}</h3>
  <button className="w-[200px] py-2 border border-white rounded-full text-white 
  hover:bg-white hover:text-black transition-all mx-auto">
    View More Details
  </button>
</div>

    </div>
  );
};

export default GalleryItemRight;
