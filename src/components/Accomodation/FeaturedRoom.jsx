'use client'
import { useRouter } from "next/navigation";

const FeaturedRoom = () => {
  const router = useRouter();
  return (
    <div className="relative h-full px-6 md:px-0 py-[5vw] flex flex-col gap-8 md:gap-0">
      <div className="w-full h-[40vh] overflow-hidden rounded-2xl md:rounded-none">
        <img
          src="/activities/xkwaq8gonythkoznkxxd.webp"
          alt="Featured Room"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="md:absolute right-[20vw] top-0 md:w-1/4 w-full ml-auto flex items-center flex-col justify-center rounded-2xl overflow-hidden">
        <div className="bg-[#d69d52] min-h-[50vh] lg:min-h-[60vh] w-full z-20 p-10 flex flex-col gap-2">
          <div className="justify-start text-white text-2xl md:text-[1.5vw] font-bold font-Lato">
            Luxury in Mountain
          </div>
          <div className="justify-start text-white text-3xl md:text-[2vw] font-normal font-Abhaya_Libre">
            View & Dense Forest
          </div>
          <ul className="list list-disc text-white list-inside text-xl md:text-[1.2vw]">
            <li>Nature Trails & Hiking
            </li>
            <li>Avi Fauna Exploration
            </li>
            <li>Yoga & Meditation
            </li>
            <li>Bonfire Nights
            </li>
            <li>Photography Walks
            </li>
             <li>Bar Lounge
            </li>
             <li>Open Dining
            </li>
             <li>Waterfall
            </li>
          </ul>
          <button
            className="mt-4 px-4 w-full max-w-[340px] cursor-pointer py-2 border font-normal border-white hover:bg-white text-white hover:text-black text-sm rounded-full transition-all"
            onClick={() => router.push('/Activities')}
          >
            Let's Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRoom;
