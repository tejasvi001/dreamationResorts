import { BrewPageData } from '../../data'; 
import Image from 'next/image';

export default function Cup() {
  const { leftColumn, centerImage, rightColumn } = BrewPageData.Cup;

  return (
    <div id='cup' className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 py-12">
      {/* Left Column */}
      <div className="lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
        <div className={`inline-block ${leftColumn.backgroundColor} ${leftColumn.padding} rounded`}>
          <svg className={leftColumn.icon.size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d={leftColumn.icon.path} />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">{leftColumn.title}</h2>
        <div className="w-12 h-1 bg-orange-500 mb-4"></div>
        <p className={`text-gray-500 max-w-xs mx-auto lg:mx-0 ${leftColumn.textColor}`}>
          {leftColumn.description}
        </p>
      </div>

      {/* Center Image */}
      <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0">
        <Image
          src={centerImage.src}
          alt={centerImage.alt}
          width={centerImage.width}
          height={centerImage.height}
          className={centerImage.className}
        />
      </div>

      {/* Right Column */}
      <div className="lg:w-1/4 bg-white rounded shadow-lg overflow-hidden ml-3">
        <div className="p-6">
          <p className="text-orange-500 font-semibold mb-2">{rightColumn.title}</p>
          <p className="text-3xl font-bold text-gray-800 mb-2 ml-3"> {rightColumn.price}</p>
          <a href={rightColumn.buttonLink} className="text-sm text-gray-800 font-semibold hover:underline">
            {rightColumn.buttonText} <span className={rightColumn.buttonColor}>›</span>
          </a>
        </div>
        <div className="bg-gray-900 p-6 flex justify-center">
          {/* Optional Icon */}
        </div>
      </div>
    </div>
  );
}
