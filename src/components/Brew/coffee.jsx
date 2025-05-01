import Image from 'next/image';
import { BrewPageData } from '../../data2.js';

export default function Coffee() {
  const coffeeFeature = BrewPageData.CoffeeFeature;

  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-0">
        {/* Left Image */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <div className="relative w-full h-96">
            <Image
              src={coffeeFeature.image}
              alt={coffeeFeature.altText}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-semibold text-gray-900 leading-tight mb-2">
            {coffeeFeature.heading.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <div className="w-20 h-1 bg-orange-400 mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            {coffeeFeature.paragraph}
          </p>
        </div>
      </div>
    </section>
  );
}
