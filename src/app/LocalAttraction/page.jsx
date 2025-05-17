import GalleryItems from "../../components/Activities/GalleryItems.jsx";
import HeroSection from "../../components/Activities/Topbox.jsx";

const Gallerydata = [
  {
    image: "/rr.webp",
    title: "The Ridge",
    description:
      "Scenic open space with views of the mountains.",
  },
  {
    image: "/sv.webp",
    title: "Solang Valley",
    description:
      "Paragliding, skiing, and other adventure sports.",
  },
  {
    image: "/kf.webp",
    title: "Kangra Fort",
    description:
      "Ancient fort with great valley views.",
  },
  {
    image: "/cl.webp",
    title: "Chandratal Lake",
    description:
      "High-altitude lake with crystal-clear water.",
  },
  {
    image: "/tv.webp",
    title: "Tirthan Valley",
    description:
      "Pristine nature, fishing, and homestays.",
  },
  {
    image: "/pg.webp",
    title: "Bir Billing",
    description:
      "Asia’s best spot for paragliding.",
  },
];

export default function Page() {
  return (
    <div>
      <HeroSection
        backgroundImages={[
          // "/activities/xgvgq4sol9lhmxwby2ye.webp",
          // "/activities/xkwaq8gonythkoznkxxd.webp",
          "/rr.webp",
          "/lbg.webp",
        ]}Painting
        heading="Welcome to Local Attraction"
      />
      <GalleryItems data={Gallerydata} />
    </div>
  );
}
