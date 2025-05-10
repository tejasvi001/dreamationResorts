import Image from 'next/image';

export default function Coffee({ Coffeedata }) {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-0">
        {/* Left Image */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0 rounded-r-xl md:rounded-r-[1vw] overflow-hidden">
          <div className="relative w-full h-96">
            <Image
              src={Coffeedata.image}
              alt={Coffeedata.altText}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-semibold text-gray-900 leading-tight mb-2">
            {Coffeedata.heading.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <div className="w-20 h-1 bg-orange-400 mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            {Coffeedata.paragraph}
          </p>
        </div>
      </div>
    </section>
  );
}
