import React, { memo } from "react";

const stats = [
  { id: 1, value: 73, label: "Food Dishes" },
  { id: 2, value: 45, label: "Types of Drinks" },
  { id: 3, value: 3, label: "Seating Area" },
];

const StatsSection = () => {
  return (
    <section
      aria-label="Statistics"
      className="relative bg-cover bg-center  text-white"
      style={{ backgroundImage: 'url("/activities/Rectangle 4561.webp")' }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 flex flex-col md:flex-row justify-around items-center text-center py-12 md:py-20 space-y-8 md:space-y-0">
        {stats.map(({ id, value, label }) => (
          <div key={id}>
            <h2 className="text-3xl md:text-4xl font-semibold">{value}</h2>
            <p className="text-base md:text-lg mt-2">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(StatsSection);
