// components/CoffeeInfoSection.tsx
export default function CoffeeInfoSection() {
    return (
      <section className="flex flex-col md:flex-row items-center bg-white">
        {/* Text Block */}
        <div className="md:w-1/2 bg-[#F8F6F2] p-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Curabitur sed iaculis dolor, non congue ligula. <br />
            <span className="block">Maecenas imperdiet ante eget</span>
          </h2>
          <p className="text-gray-500 mb-6">
            Nunc urna libero, congue porta nibh a, semper feugiat sem. Sed auctor dui eleifend, 
            scelerisque eros ut, pellentesque nibh. Nam lacinia suscipit accumsan. Donec sodales, neque.
          </p>
  
          <ul className="space-y-4 text-gray-600">
            {[
              "Suspendisse a pellentesque dui, non felis.",
              "Quisque lorem tortor fringilla sed.",
              "Quisque cursus et, porttitor risus.",
              "Nulla ipsum dolor lacus, suscipit adipiscing."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3 border-t pt-4">
                <span className="text-green-600 text-xl">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Image Block */}
        <div className="md:w-1/2">
          <img
            src="/images/brew/black-iced-coffee-beans-on-600nw-2481549469.webp" // Place image in public folder
            alt="Coffee Beans"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    );
  }
  