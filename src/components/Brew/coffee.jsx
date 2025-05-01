// components/CoffeeFeature.js

import Image from 'next/image';


export default function CoffeeFeature() {
  return (
    <section className=" py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-0">
        {/* Left Image */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <div className="relative w-full h-96">
            <Image
              src="/images/brew/home_coffee2_pic1.jpg"
              alt="Coffee brewing"
              fill
              className="object-cover "
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-semibold text-gray-900 leading-tight mb-2">
            Vivamus in diam<br />condimentum<br />maximus
          </h2>
          <div className="w-20 h-1 bg-orange-400 mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel
            vestibulum libero pharetra vel. Pellentesque lorem augue, fermentum
            nec nibh et, fringilla sollicitudin orci. Integer pharetra magna non
            ante blandit lobortis. Sed mollis.
          </p>
        </div>
      </div>
    </section>
  );
}
