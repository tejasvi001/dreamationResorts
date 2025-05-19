const HeroSection = ({ heroData: { backgroundImage, title } }) => (
  <div
    className="w-full h-[90vh] md:h-screen bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: `url('${backgroundImage}')` }}
  >
    <p className="text-center text-white text-6xl md:text-8xl lg:text-[105px] font-normal font-['Abhaya_Libre']">
      {title}
    </p>
  </div>
);

export default HeroSection;
