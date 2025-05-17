import GalleryItems from "../../components/Activities/GalleryItems.jsx";
import HeroSection from "../../components/Activities/Topbox.jsx";

const Gallerydata = [
  {
    image: "/images/Local/tg.webp",
    title: "The Tea Gardens",
    description:
      "Himachal Pradesh is renowned for its picturesque tea gardens, particularly in the Kangra Valley region. The most notable tea gardens are located in Palampur and Dharamshala, offering visitors a blend of natural beauty and cultural heritage.",
  },
  {
    image: "/images/Local/bll.webp",
    title: "Bir Billing Landing Location",
    description:
      "Bir Billing, located in the Kangra district of Himachal Pradesh, is one of the world’s top paragliding destinations, attracting adventure seekers from across the globe. Known for hosting the Paragliding World Cup, this scenic spot offers ideal wind conditions, clear skies, and breathtaking views of the Dhauladhar mountain range.",
  },
  {
    image: "/kf.webp",
    title: "Kangra Fort",
    description:
      "Kangra Fort, located in Himachal Pradesh, is one of the oldest and largest forts in India, with roots dating back to the Trigarta Kingdom. Perched on a hilltop overlooking the Banganga and Manjhi rivers, the fort offers panoramic views and rich historical significance. It has witnessed numerous battles and invasions, including those by the Mughals and British. Today, it stands as a testament to the region’s royal heritage and architectural brilliance.",
  },
  {
    image: "/images/Local/to.webp",
    title: "Take of Point Billing",
    description:
      "Billing, in Himachal Pradesh, is the takeoff point for paragliding in the famous Bir Billing area, located in the Kangra district. It is perched at an altitude of around 2,400 meters (7,874 feet) above sea level and is considered one of the best paragliding takeoff sites in the world.",
  },
 

];

export default function Page() {
  return (
    <div >
      <HeroSection
        backgroundImages={[
         " /images/Local/tg.webp",
    " /images/Local/bll.webp",

        ]}Painting
        heading="Welcome to Local Attraction"
      />
      <GalleryItems data={Gallerydata}/>
    </div>
  );
}
