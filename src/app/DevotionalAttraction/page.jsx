import GalleryItems from "../../components/Activities/GalleryItems.jsx";
import HeroSection from "../../components/Activities/Topbox.jsx";

const Gallerydata = [
  {
    image: "/images/Detivonal/cm.webp",
    title: "Chamunda Devi Temple",
    description:
      "Chamunda Devi Temple is a renowned Hindu temple located near Dharamshala in Himachal Pradesh. Dedicated to Goddess Chamunda, a fierce form of Durga, the temple is set against the backdrop of the Dhauladhar mountain range and the Baner River. It is a sacred Shakti Peeth and attracts devotees seeking blessings and spiritual peace. The temple complex also features a scenic pond and offers a tranquil atmosphere for meditation and worship.",
  },
  
  {
    image: "/images/Detivonal/IMG_4955.webp",
    title: "Buddhist Stupa (Chorten)",
    description:
      "A Buddhist stupa, also known as a chorten in Tibetan culture, is a dome-shaped structure that serves as a sacred monument housing relics, scriptures, or ashes of revered monks and teachers. It symbolizes the enlightened mind of the Buddha and is used as a place for meditation and spiritual reflection. The design of a stupa typically represents the five elements—earth, water, fire, air, and space—and follows a symbolic path to enlightenment. ",
  },
  {
    image: "/images/Detivonal/IMG_5013.webp",
    title: " Baijnath Temple",
    description:
      "Baijnath Temple, located in Himachal Pradesh’s Kangra district, is an ancient Hindu shrine dedicated to Lord Shiva, worshipped here as Vaidyanath, the 'Lord of Healing.'' Built in 1204 AD, the temple showcases classic Nagara-style architecture with intricately carved stone walls and a towering shikhara. ",
  },
  {
    image: "/images/Detivonal/IMG_5036.webp",
    title: " Tapt Kund",
    description:
      "Tattapani, located in Himachal Pradesh, is famous for its natural hot water springs along the banks of the Sutlej River. These springs are believed to have healing properties and attract visitors for both spiritual and wellness reasons. The site also features beautifully crafted shelters and temples, making it a serene spot for bathing and offering prayers. ",
  },
  {
    image: "/images/Detivonal/IMG_5009.webp",
    title: "Tibetan Buddhist Monastery Building",
    description:
      "A Tibetan Buddhist monastery building is a spiritual center where monks live, study, and practice the teachings of the Buddha. These monasteries, often called gompas, are characterized by their vibrant architecture, prayer halls (dukhang) with large statues of Buddhas and Bodhisattvas, colorful thangka paintings, and rows of prayer wheels outside.",
  },
  {
    image: "/images/Detivonal/vt.webp",
    title: "Shaktipeeth Shri Brijeshwari Devi Temple",
    description:
      "Shaktipeeth Shri Brijeshwari Devi Temple, located in Kangra, Himachal Pradesh, is one of the 51 sacred Shaktipeeths in India. It is believed to be the site where the goddess Sati’s breast fell, making it a powerful center of divine feminine energy and devotion. The temple is renowned for its rich history, spiritual significance, and vibrant Navratri celebrations.",
  },
  {
    image: "/images/Detivonal/jt.webp",
    title: "Jawalamukhi Temple",
    description:
      "The Jawalamukhi Temple, located in the Kangra district of Himachal Pradesh, is one of the 51 Shakti Peethas and is dedicated to Goddess Jwalamukhi, the deity of flame. Unlike other temples, it does not have a traditional idol—instead, natural eternal flames emerge from the rock inside the sanctum, believed to be the manifestation of the goddess. ",
  },
   {
    image: "/images/Detivonal/dl.webp",
    title: "Little Lhasa",
    description:
      "In Himachal Pradesh, the Dalai Lama resides in McLeod Ganj, near Dharamshala, which is often referred to as 'Little Lhasa' due to its large Tibetan population. This area is home to the Tsuglagkhang Complex, which includes the Dalai Lama’s residence, Namgyal Monastery, and a Tibetan museum. It serves as the spiritual and administrative center of the Tibetan government-in-exile. ",
  },
   {
    image: "/images/Detivonal/bt.webp",
    title: "Bhagsunath Temple",
    description:
      "The Bhagsunath Temple, also known as Bhagsu Nag Temple, is an ancient and revered shrine located in the village of Bhagsu, approximately 2–3 kilometers from McLeod Ganj in the Kangra district of Himachal Pradesh. Dedicated to Lord Shiva and the serpent deity Bhagsu Nag, the temple holds significant spiritual and historical importance, especially among the local Gorkha and Hindu communities.",
  },
   {
    image: "/images/Detivonal/kt.webp",
    title: "Kalachakra Temple",
    description:
      "The Kalachakra Temple in McLeod Ganj, Dharamshala, is a significant spiritual and cultural center for Tibetan Buddhism. Established in 1992 under the guidance of His Holiness the 14th Dalai Lama, the temple is dedicated to the Kalachakra Tantra, or 'Wheel of Time,' a complex Buddhist teaching that emphasizes the interdependence of the universe and the individual.",
  },
   {
    image: "/images/Detivonal/bmm.webp",
    title: "Mata Baglamukhi Temple",
    description:
      "The Maa Baglamukhi Temple in Bankhandi, Kangra district, Himachal Pradesh, is a revered Siddha Shaktipeeth dedicated to Goddess Baglamukhi, one of the ten Mahavidyas in Hinduism. Known for her power to paralyze enemies and remove obstacles, the goddess is often associated with the color yellow and is also referred to as Pitambara. ",
  },
];

export default function Page() {
  return (
    <div className="">
      <HeroSection
        backgroundImages={[
          "/images/Detivonal/IMG_5036.webp",
          "/images/Detivonal/IMG_5010.webp",
        ]}
        heading="Welcome to Devotional Attraction"
      />
      <GalleryItems data={Gallerydata} className/>
    </div>
  );
}
