import GalleryItems from "../../components/Activities/GalleryItems.jsx";
import HeroSection from "../../components/Activities/Topbox.jsx";

const Gallerydata = [
  {
    image: "/rr.webp",
    title: "The Ridge",
    description:
      "The Ridge in Shimla is a spacious open area along Mall Road, serving as the city's cultural and social hub. It offers panoramic views of the surrounding mountains and is home to landmarks like Christ Church and the Gaiety Theatre. The Ridge hosts various festivals and events, including the famous Summer Festival, making it a vibrant spot for both locals and tourists. Its central location and scenic beauty make it a must-visit destination in Shimla. ",
  },
  {
    image: "/sv.webp",
    title: "Solang Valley",
    description:
      "Solang Valley, located near Manali in Himachal Pradesh, is a popular destination known for its adventure sports and scenic beauty. Surrounded by snow-capped peaks and lush greenery, it's a year-round hub for activities like paragliding, zorbing, skiing, and snowboarding. In winter, the valley transforms into a snowy playground, attracting tourists and thrill-seekers alike. Its breathtaking landscapes make it a must-visit for nature lovers and adventure enthusiasts.",
  },
  {
    image: "/kf.webp",
    title: "Kangra Fort",
    description:
      "Kangra Fort, located in Himachal Pradesh, is one of the oldest and largest forts in India, with roots dating back to the Trigarta Kingdom. Perched on a hilltop overlooking the Banganga and Manjhi rivers, the fort offers panoramic views and rich historical significance. It has witnessed numerous battles and invasions, including those by the Mughals and British. Today, it stands as a testament to the region’s royal heritage and architectural brilliance.",
  },
  {
    image: "/cl.webp",
    title: "Chandratal Lake",
    description:
      "Chandratal Lake, also known as the 'Moon Lake' is a stunning high-altitude lake located in the Spiti Valley of Himachal Pradesh. Surrounded by the mighty Himalayas, its crystal-clear waters reflect the changing hues of the sky. A popular spot for trekkers and campers, the lake sits at an altitude of about 4,300 meters. Its serene beauty and remote location make it a favorite among adventure seekers and nature lovers.",
  },
  {
    image: "/tv.webp",
    title: "Tirthan Valley",
    description:
      "Tirthan Valley, located in Himachal Pradesh's Kullu district, is a hidden gem known for its untouched natural beauty and tranquility. Nestled along the Tirthan River, it's a paradise for nature lovers, trekkers, and anglers. The valley serves as a gateway to the Great Himalayan National Park, a UNESCO World Heritage Site. With its charming villages and scenic landscapes, Tirthan offers a peaceful escape from the hustle of city life.",
  },
  {
    image: "/pg.webp",
    title: "Bir Billing",
    description:
      "Bir Billing, located in Himachal Pradesh, is renowned as the paragliding capital of India. Nestled amidst the Dhauladhar mountain range, it offers breathtaking views and thrilling adventure sports. Bir serves as the landing site, while Billing is the take-off point, making it a top destination for paragliders worldwide. The area also attracts nature lovers, trekkers, and spiritual seekers with its serene monasteries and scenic beauty.",
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
