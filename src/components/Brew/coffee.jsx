'use client';

import Image from 'next/image';

export default function Coffee({ Coffeedata }) {
  const { image, altText, heading, paragraph } = Coffeedata || {};

  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto flex flex-col md:flex-row items-center px-8 md:px-0 max-w-7xl">
        {/* Left Image */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0 overflow-hidden rounded-xl md:rounded-[2vw] relative h-96">
          <Image
            src={image}
            alt={altText}
            fill
            className="object-cover rounded-xl md:rounded-none md:rounded-r-[1vw]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-semibold text-gray-900 leading-tight mb-2">
            {heading?.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <div className="w-20 h-1 bg-orange-400 mb-6"></div>
          <p className="text-gray-600 leading-relaxed">{paragraph}</p>
        </div>
      </div>
    </section>
  );
}
