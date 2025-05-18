"use client";
import Image from "next/image";

export default function CoffeeInfoSection({ Cotdata }) {
  return (
    <section className="flex flex-col md:flex-row items-center bg-white py-12 px-8 md:px-0 gap-8 md:gap-0">
      {/* Text Block */}
      <div className="md:w-1/2 bg-[#F8F6F2] p-10 rounded-xl md:rounded-none">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          {Cotdata.title}
          <br />
          <span className="block">{Cotdata.subtitle}</span>
        </h2>
        <p className="text-gray-500 mb-6">{Cotdata.paragraph}</p>

        <ul className="space-y-4 text-gray-600">
          {Cotdata.listItems.map((item, idx) => (
            <li key={idx} className="flex items-start space-x-3 border-t pt-4">
              <span className="text-green-600 text-xl">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Block */}
      <div className="relative w-full md:w-1/2 h-[400px] overflow-hidden duration-1000 cursor-pointer rounded-xl md:rounded-none md:rounded-l-[1vw]">
        <Image
          src={Cotdata.image}
          alt={Cotdata.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </section>
  );
}
