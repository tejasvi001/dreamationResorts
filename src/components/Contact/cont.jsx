import Image from "next/image";

const cont = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-900">
      
      <div className="absolute inset-0">
        <Image
          src="/images/ResidentialRoom/Rectangle 8.png"
          alt="Spa Image"
          width={1920}
          height={1600}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-semibold mt-60">Contacts Us</h1>

        <div className="mt-52 flex flex-col md:flex-row items-center gap-32 md:ml-[-8%] md:mr-8">
          <div className="w-full md:w-4/5">
            <Image
              src="/images/Spaimg/Rectangle 85.png"
              alt="Spa card Image"
              width={1200}
              height={900}
              className="shadow-lg"
            />
          </div>

          <div className="bg-[#D69D52] p-4 mt-56 md:w-3/3 text-left md:mt-97 -mr-18 md:ml-[-8.5%]">
            <h2 className="text-5xl mb-4 ml-5">Contact Us Today</h2>
            <h1 className="text-4xl ml-5">Book Your Next</h1>
            <h1 className="text-4xl ml-5">Vacation</h1>
            <p className="mt-8 leading-relaxed ml-5">
              Mauris varius interdum erat, et ultrices justo imperdiet nec <br />
              Cras ac porttitor tortor, id iaculis neque <br />
              Fusce et malesuada nibh, et consectetur risus <br />
              Suspendisse dictum orci eget cursus viverra <br />
              Vestibulum a mauris urna. Aliquam eget risus vitae lorem
            </p>
          </div>
        </div>
      </div>
    </div>
  );};
export default cont;
