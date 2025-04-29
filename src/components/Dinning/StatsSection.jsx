const StatsSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white "
      style={{ backgroundImage: 'url("/activities/Rectangle 4561.png")' }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col md:flex-row justify-around items-center text-center py-12 md:py-20 space-y-8 md:space-y-0">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">73</h2>
          <p className="text-base md:text-lg mt-2">Food Dishes</p>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">45</h2>
          <p className="text-base md:text-lg mt-2">Types of Drinks</p>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">17</h2>
          <p className="text-base md:text-lg mt-2">Restaurants</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
