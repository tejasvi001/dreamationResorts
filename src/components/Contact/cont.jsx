"use client";
import Image from "next/image";

const Contact = ({ data }) => {

  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src={data.heroImage}
          alt={data.heroAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="absolute z-10 text-white text-4xl md:text-[4vw] font-semibold">
          {data.mainHeading}
        </h1>
      </section>

      <section className="flex flex-col md:flex-row w-full">
        {/* Image side */}
        <div className="relative w-full md:w-1/2 h-[75vh] mt-8 md:-mt-[20vh] md:rounded-tr-3xl overflow-hidden z-20">
          <Image
            src={data.sectionImage}
            alt={data.sectionAlt}
            fill
            className="object-cover"
            loading="lazy"
            // sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        {/* Text side */}
        <article className="w-full md:w-1/2 bg-[#D69D52] text-white flex flex-col justify-center p-6 md:p-10 mt-8 md:mt-0 min-h-[400px]">
          <h3 className="text-sm md:text-[1.3vw] mb-2">{data.preTitle}</h3>
          <h2 className="text-xl md:text-[2vw] font-semibold">{data.title}</h2>
          <p className="mt-4 text-sm md:text-[1.2vw] leading-relaxed">
            {data.description}
          </p>
        </article>
      </section>
    </main>
  );
};

export default Contact;
