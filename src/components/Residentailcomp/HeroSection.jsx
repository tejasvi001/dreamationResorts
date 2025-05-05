const HeroSection = ({ heroData }) => {
  return (
    <div
      className="relative w-full h-[90vh] md:h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('${heroData.backgroundImage}')` }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div>
          <div className="text-center text-white text-6xl sm:text-6xl md:text-8xl lg:text-[105px] font-normal font-['Abhaya_Libre']">
            {heroData.title}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[18vh] z-10"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center gap-12"></div>
    </div>
  );
};
export default HeroSection;