import React from 'react';

const attractions = [
  {
    name: 'Shimla Ridge',
    description: 'A wide open space in the heart of Shimla offering stunning views of the snow-capped mountains.',
    image: '/image/d9a89dd4b69b590866f8c27044f6795c_1000x1000.png'
  },
  {
    name: 'Solang Valley',
    description: 'A beautiful valley near Manali known for adventure sports like paragliding, skiing, and zorbing.',
    image: '/images/solang-valley.jpg'
  },
  {
    name: 'Triund Hill',
    description: 'A serene trekking spot near Dharamshala offering breathtaking views of the Dhauladhar range.',
    image: '/images/triund-hill.jpg'
  },
  {
    name: 'Parvati Valley',
    description: 'A stunning valley with scenic landscapes, known for its peaceful vibe and vibrant cafes.',
    image: '/images/parvati-valley.jpg'
  },
  {
    name: 'Spiti Valley',
    description: 'A cold desert mountain valley known for its stunning landscapes, Buddhist monasteries, and high-altitude villages.',
    image: '/images/spiti-valley.jpg'
  },
  {
    name: 'Khajjiar',
    description: 'Known as the "Mini Switzerland of India," this picturesque hill station is famous for its lush meadows and dense forests.',
    image: '/images/khajjiar.jpg'
  },
  {
    name: 'Chail',
    description: 'A peaceful hill station known for its dense forests, the world’s highest cricket ground, and breathtaking mountain views.',
    image: '/images/chail.jpg'
  },
  {
    name: 'Kullu',
    description: 'A beautiful valley known for its vibrant culture, apple orchards, and the famous Dussehra festival.',
    image: '/images/kullu.jpg'
  },
  {
    name: 'McLeod Ganj',
    description: 'Known as Little Lhasa, this is the residence of the Dalai Lama and a hub for Tibetan culture.',
    image: '/images/mcleod-ganj.jpg'
  },
  {
    name: 'Mashobra',
    description: 'A quaint town near Shimla, known for its pristine beauty and dense deodar forests.',
    image: '/images/mashobra.jpg'
  },
  {
    name: 'Tirthan Valley',
    description: 'A hidden gem known for its beautiful trekking trails, rivers, and the Great Himalayan National Park.',
    image: '/images/tirthan-valley.jpg'
  }
];

const HimachalLocalAttractionsPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-indigo-800 to-purple-900 min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">Himachal Pradesh's Hidden Gems</h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-10">Explore the breathtaking landscapes and cultural treasures of Himachal Pradesh.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {attractions.map((attraction, index) => (
          <div
            key={index}
            className="relative rounded-2xl shadow-xl overflow-hidden group hover:scale-105 transition-transform flex"
            style={{ minHeight: '300px' }}
          >
            <img
              src={attraction.image}
              alt={attraction.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative z-10 flex flex-col justify-end h-full w-full p-4 md:p-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white drop-shadow group-hover:text-blue-200 transition-colors">
                {attraction.name}
              </h2>
              <p className="text-sm md:text-lg text-gray-200 mb-4 drop-shadow hidden sm:block">
                {attraction.description}
              </p>
              <button className="bg-blue-700 text-white py-2 px-4 md:px-6 rounded-full hover:bg-blue-800 transition mt-auto shadow-lg">
                Discover More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HimachalLocalAttractionsPage;
