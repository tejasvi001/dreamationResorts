import Image from "next/image";

const SpaHero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Spaimg/Rectangle 8.png"
          alt="Spa Image"
          width={1920}
          height={1600}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-semibold mt-60">Beauty & Wellness</h1>
        <p className="mt-4 text-lg">Enjoy a relaxing and rejuvenating experience</p>

        {/* Spa Card */}
        <div className="mt-52 flex flex-col md:flex-row items-center gap-32 md:ml-[-8%]">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/Spaimg/Rectangle 57.png"
              alt="Spa card Image"
              width={876}
              height={962}
              className="shadow-lg"
            />
          </div>

          {/* Spa Card Content */}
          <div className="bg-transparent p-6 mt-52 w-full md:w-1/2 text-left md:mt-0">
            <h2 className="text-5xl font-bold mb-4">Spa Services</h2>
            <h1 className="text-8xl">The Spa Center</h1>
            <p className="mt-8 text-2xl leading-relaxed">
              Mauris varius interdum erat, et ultrices justo imperdiet nec. <br />
              Cras ac porttitor tortor, id iaculis neque. <br />
              Fusce et malesuada nibh, et consectetur risus. <br />
              Suspendisse dictum orci eget cursus viverra. <br />
              Vestibulum a mauris urna. Aliquam eget risus vitae lorem.
            </p>
            <button className="mt-6 px-6 py-2 border border-white rounded-full text-white 
            hover:bg-white hover:text-black transition-all">
              Book Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaHero;
