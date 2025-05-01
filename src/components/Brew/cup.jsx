import Image from 'next/image';

export default function Cup() {
  return (
    <div id='cup' className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 py-12">
      {/* Left Column */}
      <div className="lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
        <div className="inline-block bg-orange-500 p-10 rounded">
          <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 21h14M12 17v4M8 5h8M7 9h10v6H7z" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Fusce interdum justo quis libero ultricies</h2>
        <div className="w-12 h-1 bg-orange-500 mb-4"></div>
        <p className="text-gray-500 max-w-xs mx-auto lg:mx-0">
          Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus, faucibus lorem eget, egestas eros.
        </p>
      </div>

      {/* Center Image */}
      <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0">
        <Image
          src="/images/brew/home_coffee2_pic4.png" // replace with actual image path
          alt="Coffee Cup"
          width={300}
          height={300}
          className="rounded-full shadow-2xl"
        />
      </div>

      {/* Right Column */}
      <div className="lg:w-1/4 bg-white rounded shadow-lg overflow-hidden ml-3">
        <div className="p-6">
          <p className="text-orange-500 font-semibold mb-2">Fusce ut velit</p>
          <p className="text-3xl font-bold text-gray-800 mb-2 ml-3"> 599</p>
          <a href="#" className="text-sm text-gray-800 font-semibold hover:underline">
            READ MORE <span className="text-orange-500">›</span>
          </a>
        </div>
        <div className="bg-gray-900 p-6 flex justify-center">
          {/* <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"> */}
            <path d="M3 7h18M3 12h18M3 17h18" />
          {/* </svg> */}
        </div>
      </div>
     </div>
  );
}
