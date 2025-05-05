import Image from "next/image";

const Contact = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-900">
      {/* Background image with overlay */}
      <div className=" inset-0">
        <Image
          src="/images/ResidentialRoom/Rectangle 8.png"
          alt="Spa Image"
          fill
          className="object-cover w-full h-full"
        />
        <div className="inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 text-white w-full px-4 sm:px-8 lg:px-20 py-20">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-semibold text-center mb-16">Contact Us</h1>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center ">
          {/* Image section */}
                <div className="  relative mt-12 lg:mt-58 order-last lg:order-first  lg:mr- w-full lg:w-1/2">
                <Image
                  src="/images/Spaimg/Rectangle 85.png"
                  alt="Spa card Image"
                  width={1200}
                  height={900}
                  className=" relative shadow-lg w-full h-auto rounded-xl "
                />
                </div>

                {/* Text section */}
          <div className="bg-[#D69D52] p-8 w-full lg:w-1/2 text-left rounded-xl shadow-md mt-90 ">
            <h2 className="text-3xl md:text-4xl mb-4">Contat Us Today</h2>
            <h1 className="text-2xl md:text-3xl">Book Your Next</h1>
            <h1 className="text-2xl md:text-3xl mb-6">Vacation</h1>
            <p className="leading-relaxed text-sm md:text-base">
              Mauris varius interdum erat, et ultrices justo imperdiet nec. <br />
              Cras ac porttitor tortor, id iaculis neque. <br />
              Fusce et malesuada nibh, et consectetur risus. <br />
              Suspendisse dictum orci eget cursus viverra. <br />
              Vestibulum a mauris urna. Aliquam eget risus vitae lorem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
