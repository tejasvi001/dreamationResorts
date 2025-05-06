import { BrewPageData } from "../../data";
import Image from "next/image";

export default function Cup({ Cupdata }) {
  return (
    <div
      id="cup"
      className="flex flex-col lg:flex-row items-center justify-center px-4 py-12 md:py-4 "
    >
      {/* Left Column */}
      <div className="lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
        <div
          className={`inline-block ${Cupdata.leftColumn.backgroundColor} ${Cupdata.leftColumn.padding} rounded`}
        >
          <svg
            className={Cupdata.leftColumn.icon.size}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d={Cupdata.leftColumn.icon.path} />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">
          {Cupdata.leftColumn.title}
        </h2>
        <div className="w-12 h-1 bg-orange-500 mb-4"></div>
        <p
          className={`text-gray-500 max-w-xs mx-auto lg:mx-0 ${Cupdata.leftColumn.textColor}`}
        >
          {Cupdata.leftColumn.description}
        </p>
      </div>

      {/* Center Image */}
      <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0">
        <Image
          src={Cupdata.centerImage.src}
          alt={Cupdata.centerImage.alt}
          width={Cupdata.centerImage.width}
          height={Cupdata.centerImage.height}
          className={Cupdata.centerImage.className}
          style={{ height: "auto" }}
        />
      </div>

      {/* Right Column */}
      <div className="lg:w-1/4 bg-white rounded shadow-lg overflow-hidden ml-3">
        <div className="p-6">
          <p className="text-orange-500 font-semibold mb-2">
            {Cupdata.rightColumn.title}
          </p>
          <p className="text-3xl font-bold text-gray-800 mb-2 ml-3">
            {" "}
            {Cupdata.rightColumn.price}
          </p>
          <a
            href={Cupdata.rightColumn.buttonLink}
            className="text-sm text-gray-800 font-semibold hover:underline"
          >
            {Cupdata.rightColumn.buttonText}{" "}
            <span className={Cupdata.rightColumn.buttonColor}>›</span>
          </a>
        </div>
        <div className="bg-gray-900 p-6 flex justify-center"></div>
      </div>
    </div>
  );
}
