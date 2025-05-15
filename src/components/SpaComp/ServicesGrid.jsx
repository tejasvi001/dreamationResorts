'use client';

import { div } from 'framer-motion/client';
import Image from 'next/image';

const services = [
  { title: 'Good Health', image: '/images/Spaimg/Rectangle57.png' },
  { title: 'Wellness', image: '' },
  { title: 'Steam Room', image: '/images/Spaimg/Rectangle8.png' },
  { title: 'Boutique', image: '' },
  { title: 'Relaxation', image: '' },
  { title: 'Yoga Classes', image: '/activities/Rectangle 61.webp' },
  { title: 'Massages', image: '' },
  { title: 'Private Spa', image: '/images/Spaimg/Rectangle81.png' }
  ];

export default function ServicesGrid() {
  return (
  <div className='w-full h-full p-4 md:p-8'>
    <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4 ">
      {services.map((service, index) => (
        <div
          key={index}
          className={`relative flex items-center justify-center p-3 h-60 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 duration-2000 cursor-pointer ${
            service.image ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          {service.image && (
            <Image
              src={service.image}
              alt={service.title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 opacity-50"
            />
          )}
          <div className="relative z-10 text-center">
            <h3 className="text-xl font-semibold text-gold-500">{service.title}</h3>
            <p className="text-sm">Enjoy </p>
          </div>
        </div>
      ))}
    </div>
   
  </div>
  );
}
