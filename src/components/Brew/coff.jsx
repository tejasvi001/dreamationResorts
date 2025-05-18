'use client';
import Image from 'next/image';

export default function Coff({ Coffdata }) {
  return (
    <section className="max-w-7xl mx-auto px-8 md:px-0 py-4 md:py-8 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {Coffdata.title}
        </h2>
        <div className="w-24 h-1 bg-orange-500 mb-6" />
        <p className="text-gray-600 text-lg leading-relaxed">
          {Coffdata.description}
        </p>
        {/* <button className="bg-orange-500 cursor-pointer text-white px-6 py-3 rounded hover:bg-orange-600 transition flex items-center gap-2">
          {Coffdata.buttonText}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button> */}
      </div>

      <div className="relative w-full h-[400px] rounded-2xl md:rounded-[2vw] overflow-hidden">
        <Image
          src={Coffdata.image}
          alt={Coffdata.imageAlt}
          fill
          className="object-cover rounded-2xl md:rounded-[2vw] shadow-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </section>
  );
}
