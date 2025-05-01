import React from 'react';
import BlackBackground from './BlackBackground';
import ImageContainer from './ImageContainer';

const Header = () => {
  return (
    <div className="relative w-full overflow-hidden mb-10">
      {/* background  */}
      <div className="relative z-0 min-h-[80vh] md:min-h-[100vh]">
        <BlackBackground />
      </div>

      {/* ImageContainer */}
      <div className="relative -mt-[600px] md:-mt-[450px]  z-10">

      <div className="absolute z-50 text-white -top-6 md:-top-9 w-full h-full text-4xl md:text-6xl font-semibold ">
        <p className='text-center'>Accomodations</p>
      </div>
      <div className='relative h-[160vh] md:h-[160vh] lg:h-[150vh] sm:h-[200vh] w-full'>
        <ImageContainer />
      </div>
      </div>
    </div>
  );
};

export default Header;
