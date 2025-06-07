import HeroSection from "../../components/Activities/Topbox.jsx";
import Bottombox from "../../components/Activities/Bottombox.jsx";
import GalleryItems from "../../components/Activities/GalleryItems.jsx";
import Parallax from "../../components/Activities/Parallax.jsx";

const data = [
  {
    title: "Pool Side Sunbath",
    description:
      "Relax and unwind by our stunning pool, set against the breathtaking backdrop of the mountains. Enjoy the warmth of the sun as you lounge on comfortable chairs, sip on refreshing drinks, and take in the peaceful surroundings. Whether you're catching up on a good book or simply soaking up the view, our poolside area offers the perfect escape. Embrace the calm, breathe in the fresh mountain air, and let the sunshine rejuvenate your soul.",
    image: "/Activities/Pool.webp",
  },
  {
    title: "Nature Trails & Hiking",
    description:
      "Nature trails and hiking adventures offer a rejuvenating escape from daily life, allowing individuals to connect with the natural world while promoting physical health and mental well-being. Whether through dense forests, mountain ridges, coastal paths, or serene meadows, hiking provides an opportunity to explore breathtaking landscapes, observe wildlife, and experience the rhythm of nature firsthand.",
    image: "/Activities/Rectangle57.jpg",
    isPortrait: true,
  },
  {
    title: "Avi Fauna Exploration",
    description:
      "Chirping is a serene and rewarding activity that invites individuals to connect with nature while observing the beauty and diversity of avian life. Whether in urban parks, wetlands, forests, or coastal areas, bird watchers can enjoy the thrill of spotting various species, learning about their behaviors, and appreciating their unique adaptations.",
    image: "/Activities/Rectangle 59.jpg",
  },
  {
    title: "Yoga & Meditation",
    description:
      "Yoga and meditation are transformative practices that promote physical, mental, and emotional well-being. Yoga combines physical postures, breath control, and mindfulness to enhance flexibility, strength, and relaxation. Meditation cultivates inner peace and clarity through focused attention and awareness.",
    image: "/Activities/Rectangle 61.webp",
  },
  {
    title: "Bonfire Nights",
    description:
      "Bonfire nights are enchanting gatherings that bring people together around a warm, crackling fire under the stars. These evenings are filled with laughter, storytelling, and the comforting aroma of roasting marshmallows. The flickering flames create a cozy ambiance, fostering connections and camaraderie among friends and family.",
    image: "/Activities/Rectangle 63.jpg",
  },
  {
    title: "Painting & Sketching Sessions",
    description:
      "Painting and sketching sessions provide a creative outlet for self-expression, mindfulness, and artistic exploration. Whether you're a seasoned artist or a curious beginner, these sessions offer a space to unwind, observe, and translate emotions or surroundings onto paper or canvas. Guided or freeform, they encourage focus, patience, and a deeper appreciation for color, form, and perspective.",
    image: "/Activities/Rectangle 65.webp",
  },
  {
    title: "Photography Walks",
    description:
      "Photography walks are immersive experiences that blend exploration and creativity, inviting individuals to capture the beauty of their surroundings through the lens of a camera. These walks encourage participants to observe details often overlooked in daily life, fostering a deeper connection to nature and urban environments.",
    image: "/Activities/Rectangle 67.jpg",
  },
];

const sampleImages = [
  {
    src: "/Activities/Ludo.webp",
  },
  {
    src: "/Activities/Chess.webp",
  },
  {
    src: "/Activities/Reading.webp",
  },
  {
    src: "/Activities/Tennis.webp",
  },
  {
    src: "/Activities/Billards.webp",
  },
  {
    src: "/Activities/Foosball.webp",
  },
];

export default function Home() {
  return (
    <div>
      <HeroSection
        backgroundImages={[
          "/Activities/xgvgq4sol9lhmxwby2ye.webp",
          "/Activities/xkwaq8gonythkoznkxxd.webp",
        ]}
        heading="Welcome to Activities"
      />
      <h1 className="w-full h-full text-center font-bold md:text-[3vw] mt-6 md:mt-[3vw]">
        Indoor Activities
      </h1>
      <Parallax images={sampleImages} />
      <h1 className="w-full h-full text-center font-bold md:text-[3vw] -mb-2 md:-mb-[1vw]">
        Outdoor Activities
      </h1>
      <GalleryItems data={data} />
      <Bottombox />
    </div>
  );
}
