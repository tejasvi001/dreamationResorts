import React from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <>
      {/* Header Section */}
      <div
        className="bg-gray-100 py-24 mt-10 w-full overflow-hidden"
        style={{
          backgroundImage: "url('images/Spaimg/Rectangle8.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          color: "#D69D52",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-lg text-white">Best Plans For Your Body</h2>
          <h1 className="text-4xl font-bold text-white">Our Prices</h1>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative flex flex-wrap justify-center gap-4 z-10 max-w-full sm:max-w-6xl mx-auto mt-[-10vh] md:mt-[-20vh] mb-20 px-4">
        {[ 
          {
            name: "Personal",
            price: "$45",
            features: [
              "Sed convallis cursus porta",
              "Pellentesque convallis cursus",
              "Aliquam eu tincidunt magna",
              "Etiam non diam ultricies",
              "Cras pellentesque magna",
            ],
          },
          {
            name: "Couple",
            price: "$75",
            features: [
              "Sed convallis cursus porta",
              "Pellentesque convallis cursus",
              "Aliquam eu tincidunt magna",
              "Etiam non diam ultricies",
              "Cras pellentesque magna",
            ],
          },
          {
            name: "Private",
            price: "$95",
            features: [
              "Sed convallis cursus porta",
              "Pellentesque convallis cursus",
              "Aliquam eu tincidunt magna",
              "Etiam non diam ultricies",
              "Cras pellentesque magna",
            ],
          },
        ].map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-lg w-80 text-center overflow-hidden border-2 border-[#D69D52] mx-auto"
          >
            <div className="bg-[#D69D52] text-white py-5 text-xl font-semibold">
              {plan.name}
            </div>
            <div className="py-5">
              <span className="text-3xl font-bold text-[#D69D52]">{plan.price}</span>
              <span className="text-black">/Month</span>
            </div>
            <hr className="border-t-2 border-orange-300 mx-1" />
            <ul className="mt-4 mb-6 space-y-4 text-gray-700 text-sm text-left px-12">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-x-[12px] leading-relaxed">
                  <div className="w-5 h-5 border-2 border-[#D69D52] rounded-full flex items-center justify-center">
                    <Check className="text-[#D69D52]" size={14} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="py-6">
              <button className="border-2 border-[#D69D52] text-[#D69D52] px-8 py-2 rounded-full transition duration-300 hover:bg-[#D69D52] hover:text-white font-semibold">
                Reserve
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pricing;
