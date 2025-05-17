import Gallery from "../../components/Activities/Gallery.jsx";
import HeroSection from "../../components/Activities/Topbox.jsx";
import Bottombox from "../../components/Activities/Bottombox.jsx";

export default function Home() {
  return (
    <div>
      <HeroSection
        backgroundImages={[
          "/activities/xgvgq4sol9lhmxwby2ye.webp",
          "/activities/xkwaq8gonythkoznkxxd.webp",
        ]}
        heading="Welcome to Activities"
      />
      <Gallery />
      <Bottombox />
    </div>
  );
}
