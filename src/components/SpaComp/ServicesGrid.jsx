'use client';

import { div } from 'framer-motion/client';
import Image from 'next/image';

const services = [
 
  { title: 'Fine Dining', image: '/images/fine.webp' },
  { title: 'Family Seating', image: '/images/family.webp' },
  { title: 'Live Kitchen', image: '/images/lk.webp' },
  { title: 'Outdoor Seating', image: '/images/od.webp' },
  { title: 'Private Dining', image: '/images/pd.webp' },
  // { title: 'Buffet Section', image: '/images/restaurant/buffet.png' },
  // { title: 'Bar & Lounge', image: '/images/restaurant/bar-lounge.png' },
  { title: 'Chef’s Specials', image: '/images/cs.webp' }
]


export default function ServicesGrid() {
  return (
  <div className='w-full h-full p-4 md:p-8'>
    <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3 ">
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
