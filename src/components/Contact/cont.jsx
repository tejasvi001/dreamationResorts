import Image from "next/image";

const Contact = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Top Hero Section */}
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <Image
          src="/images/Accomodationimg/b5wrkonddwzymupskqto.webp"
          alt="Room Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="absolute text-white text-4xl md:text-6xl font-semibold z-10">
          Contact Us
        </h1>
      </div>

    
        <div className="w-full flex flex-col lg:flex-row mt-0">
           
            <div className="relative w-full lg:w-1/2 h-[529.px] -mt-32 z-20">
          <Image
            src="/images/Accomodationimg/zrr34yc0jw1ip47byz0u.webp"
            alt="Vacation Image"
            fill
            className="object-cover rounded-t-3xl"
          />
            </div>

            {/* Right Text Content (No Padding Around Section) */}
        <div className="w-full lg:w-1/2 bg-[#D69D52] px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-16 text-white flex flex-col justify-center mt-8 lg:mt-0 h-auto min-h-[400px]">
          <h3 className="text-sm sm:text-base md:text-lg mb-2">
            Contact Us Today
          </h3>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Book Your Next Vacation!
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed">
            Mauris varius interdum erat, et ultrices justo imperdiet nec. <br />
            Cras ac porttitor tortor, id iaculis neque. <br />
            Fusce et malesuada nibh, et consectetur risus. <br />
            Suspendisse dictum orci eget cursus viverra. <br />
            Vestibulum a mauris urna. Aliquam eget risus vitae lorem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
