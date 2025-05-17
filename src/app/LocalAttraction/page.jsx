import GalleryItems from "../../components/Activities/GalleryItems.jsx";
import HeroSection from "../../components/Activities/Topbox.jsx";

const Gallerydata = [
  {
    image: "/activities/Rectangle57.jpg",
    title: "Nature Trails & Hiking",
    description:
      "Nature trails and hiking adventures offer a rejuvenating escape from daily life...",
  },
  {
    image: "/activities/Rectangle 59.jpg",
    title: "Avi Fauna Exploration",
    description:
      "Chirping is a serene and rewarding activity that invites individuals...",
  },
  {
    image: "/activities/Rectangle 61.webp",
    title: "Yoga & Meditation",
    description:
      "Yoga and meditation are transformative practices that promote physical...",
  },
  {
    image: "/activities/Rectangle 63.jpg",
    title: "Bonfire Nights",
    description:
      "Bonfire nights are enchanting gatherings that bring people together...",
  },
  {
    image: "/activities/Rectangle 65.webp",
    title: "Painting & Sketching Sessions",
    description:
      "Painting and sketching sessions provide a creative outlet for self-expression...",
  },
  {
    image: "/activities/Rectangle 67.jpg",
    title: "Photography Walks",
    description:
      "Photography walks are immersive experiences that blend exploration and creativity...",
  },
];

export default function Page() {
  return (
    <div>
      <HeroSection
        backgroundImages={[
          "/activities/xgvgq4sol9lhmxwby2ye.webp",
          "/activities/xkwaq8gonythkoznkxxd.webp",
        ]}
        heading="Welcome to Local Attraction"
      />
      <GalleryItems data={Gallerydata} />
    </div>
  );
}
