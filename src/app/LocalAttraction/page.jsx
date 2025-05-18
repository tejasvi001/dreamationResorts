import GalleryItems from "../../components/Activities/GalleryItems.jsx";
import HeroSection from "../../components/Activities/Topbox.jsx";

const Gallerydata = [

  {
    image: "/images/Local/bll.webp",
    title: "Bir Billing Landing Location",
    description:
      "Bir Billing, located in the Kangra district of Himachal Pradesh, is one of the world’s top paragliding destinations, attracting adventure seekers from across the globe. Known for hosting the Paragliding World Cup, this scenic spot offers ideal wind conditions, clear skies, and breathtaking views of the Dhauladhar mountain range.",
  },
 {
    image: "/images/Local/to.webp",
    title: "Take of Point Billing",
    description:
      "Billing, in Himachal Pradesh, is the takeoff point for paragliding in the famous Bir Billing area, located in the Kangra district. It is perched at an altitude of around 2,400 meters (7,874 feet) above sea level and is considered one of the best paragliding takeoff sites in the world.",
  },
  {
    image: "/images/Local/bbv.webp",
    title: "Bir: A Serene Village Retreat",
    description:
      "Bir is a peaceful village in Himachal Pradesh, renowned for its Tibetan monasteries, vibrant cafés, and lush landscapes. It offers a perfect blend of spirituality, culture, and adventure, making it a favorite spot for travelers seeking both tranquility and thrill.",
  },

  {
    image: "/images/Local/tg.webp",
    title: "The Tea Gardens",
    description:
      "Himachal Pradesh is renowned for its picturesque tea gardens, particularly in the Kangra Valley region. The most notable tea gardens are located in Palampur and Dharamshala, offering visitors a blend of natural beauty and cultural heritage.",
  },
  
  {
    image: "/images/Local/tp.webp",
    title: " Traditional Himachali Photography",
    description:
      "Himachal Pradesh, with its rich cultural heritage and stunning landscapes, offers incredible opportunities for traditional photography.",
  },
   {
    image: "/images/Local/bw.webp",
    title: " Bangoru Waterfall",
    description:
      "Bangoru Waterfall, also known as Bheem Pather, is a hidden gem near Bir, Himachal Pradesh. Surrounded by dense forests, it offers a peaceful escape and is accessible via a short trek from Gunehar village. Its serene setting makes it perfect for nature walks and quiet reflection.",
  },
   {
    image: "/images/Local/gw.webp",
    title: "Gunehar Waterfall",
    description:
      "Gunehar Waterfall is a serene natural cascade located near Gunehar village in Bir, Himachal Pradesh. Surrounded by lush greenery, it offers a peaceful escape and is accessible via a short, scenic trek. Its tranquil ambiance and untouched beauty make it a favorite spot for nature lovers and photographers.",
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
