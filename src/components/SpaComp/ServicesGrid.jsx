'use client';
import Image from 'next/image';

const services = [
  { title: 'Fine Dining', image: '/images/fine.webp' },
  { title: 'Family Seating', image: '/images/family.webp' },
  { title: 'Live Kitchen', image: '/images/lk.webp' },
  { title: 'Outdoor Seating', image: '/images/od.webp' },
  { title: 'Private Dining', image: '/images/pd.webp' },
  { title: 'Chef’s Specials', image: '/images/cs.webp' },
];

export default function ServicesGrid() {
  return (
    <div className="w-full h-full p-4 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 md:grid-cols-3">
        {services.map(({ title, image }) => (
          <div
            key={title}
            className={`relative flex items-center justify-center p-3 h-60 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 duration-300 cursor-pointer ${
              image ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            {image && (
              <Image
                src={image}
                alt={title}
                fill
                style={{ objectFit: "cover" }}
                className="absolute inset-0 opacity-50"
                loading="lazy"
                priority={false}
              />
            )}
            <div className="relative z-10 text-center">
              <h3 className="text-xl font-semibold text-yellow-500">{title}</h3>
              <p className="text-sm">Enjoy</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
