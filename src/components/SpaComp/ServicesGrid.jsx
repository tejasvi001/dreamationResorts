'use client';

import Image from 'next/image';

const services = [
    { title: 'Good Health', image: '/images/Spaimg/Rectangle81.png' },
    { title: 'Wellness', image: '' },
    { title: 'Steam Room', image: '/images/Spaimg/Rectangle81.png' },
    { title: 'Boutique', image: '' },
    { title: 'Relaxation', image: '' },
    { title: 'Yoga Classes', image: '/images/Spaimg/Rectangle81.png' },
    { title: 'Massages', image: '' },
    { title: 'Private Spa', image: '/images/Spaimg/Rectangle81.png' }
  ];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-4 gap-1p-8">
      {services.map((service, index) => (
        <div
          key={index}
          className={`relative flex items-center justify-center p-3 h-60 ${
            service.image ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          {service.image && (
            <Image
            src={service.image}
            alt={service.title}
            fill
            style={{ objectFit: 'cover' }}
            className="absolute inset-0 opacity-50"
          />
          )}
          <div className="relative z-10 text-center">
            <h3 className="text-xl font-semibold text-gold-500">{service.title}</h3>
            <p className="text-sm">Mauris quam turpis, tinci ac congue quis, rutrum in tellus. Suspendisse potenti</p>
          </div>
        </div>
      ))}
      
    </div>
  );
}

