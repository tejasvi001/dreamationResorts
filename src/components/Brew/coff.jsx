import Image from "next/image";


export default function coff() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Integer pharetra magna <br /> non ante blandit lobortis
        </h2>
        <div className="w-24 h-1 bg-orange-500 mb-6" />
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Libero pharetra vel. Pellentesque lorem augue, fermentum nec nibh et, fringilla
          sollicitudin orci. Integer pharetra magna non ante blandit lobortis. Sed mollis.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition flex items-center gap-2">
          SEE MENU CART
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/brew/feature_image_88786a36-1b01-40fb-a4d2-b6f0a661d850.webp"
          alt="Reading group"
          layout="fill"
          objectFit="cover"
          className=" shadow-lg"
        />
      </div>
    </section>
  );
}
