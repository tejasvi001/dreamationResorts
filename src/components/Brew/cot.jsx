import { BrewPageData } from '../../data';

export default function CoffeeInfoSection({Cotdata}) {



  return (
    <section className="flex flex-col md:flex-row items-center bg-white py-12">
      {/* Text Block */}
      <div className="md:w-1/2 bg-[#F8F6F2] p-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          {Cotdata.title} <br />
          <span className="block">{Cotdata.subtitle}</span>
        </h2>
        <p className="text-gray-500 mb-6">
          {Cotdata.paragraph}
        </p>

        <ul className="space-y-4 text-gray-600">
          {Cotdata.listItems.map((item, idx) => (
            <li key={idx} className="flex items-start space-x-3 border-t pt-4">
              <span className="text-green-600 text-xl">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Block */}
      <div className="md:w-1/2   overflow-hidden duration-1000 cursor-pointer rounded-l-xl md:rounded-l-[1vw]">
        <img
          src={Cotdata.image} 
          alt={Cotdata.imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
