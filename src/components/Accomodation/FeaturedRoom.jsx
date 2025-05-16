const FeaturedRoom = () => {
  return (
    <div className='horiztalBetimage my-16 relative min-h-[480px] h-full'>
      <img
        src='/assets/dubed.webp'
        alt="Featured Room"
        className='absolute inset-0 w-full min-h-[450px] py-8 h-auto -z-10'
      />
      <div className='md:w-1/2 w-2/3 ml-auto flex items-center flex-col justify-center'>
        <div className='bg-[#d69d52] h-full min-h-[460px] w-full z-50 max-w-lg p-10'>
          <div className='justify-start text-white text-2xl font-bold font-Lato'>
            Featured Room
          </div>
          <div className='justify-start text-white text-3xl font-normal font-Abhaya_Libre'>
            Deluxe Suite
          </div>
          <ul className='list list-disc text-white list-inside'>
            <li>55 Sq Metres of interior space</li>
            <li>Shared Swimming Pool</li>
            <li>Spa Service for Free</li>
            <li>King Size Bed (1.80 x 1.70)</li>
            <li>Mountain View</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRoom;
