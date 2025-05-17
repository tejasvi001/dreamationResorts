import GalleryItems from "../../components/Activities/GalleryItems.jsx";
import HeroSection from "../../components/Activities/Topbox.jsx";

const Gallerydata = [
  {
    image: "/images/Detivonal/IMG_5024.webp",
    title: "Chintpurni Temple",
    description:
      "the Chintpurni Temple complex, a prominent Hindu pilgrimage site in the Una district of Himachal Pradesh, India. It is one of the 51 Shakti Peethas and is dedicated to Mata Chintpurni, a form of the Hindu goddess Durga. ...",
  },
  {
    image: "/images/Detivonal/IMG_4940.webp",
    title: "carved wooden temple",
    description:
      "A beautifully carved wooden temple entrance, likely from a Himalayan region like Himachal Pradesh or Uttarakhand in India, known for its distinct architectural style. ...",
  },
  {
    image: "/images/Detivonal/IMG_4955.webp",
    title: "Buddhist stupa (chorten)",
    description:
      " a beautiful Buddhist stupa (chorten) surrounded by vibrant prayer flags, likely from a Himalayan region, possibly Sikkim, Himachal Pradesh, or Ladakh in India. The stupa, a symbol of peace and enlightenment,...",
  },
  {
    image: "/images/Detivonal/IMG_5013.webp",
    title: " Baijnath Temple",
    description:
      " This image captures the ancient Baijnath Temple in the Kangra district of Himachal Pradesh, India. Dedicated to Lord Shiva as Vaidyanath (the Lord of Physicians), this 13th-century temple is a stunning example of early medieval North Indian temple architecture.  ...",
  },
  {
    image: "/images/Detivonal/IMG_5036.webp",
    title: " Tapt Kund",
    description:
      " the Tapt Kund hot water springs near the famous Baijnath Temple in Himachal Pradesh, India. These natural sulfur springs are considered sacred, with visitors...",
  },
  {
    image: "/images/Detivonal/IMG_5009.webp",
    title: "Tibetan Buddhist monastery building",
    description:
      "Tibetan Buddhist monastery building, likely part of a major monastic complex in India, such as the Mindrolling Monastery in Dehradun or a similar institute in the Himalayan region.  ...",
  },
];

export default function Page() {
  return (
    <div>
      <HeroSection
        backgroundImages={[
          "/images/Detivonal/IMG_5004.webp",
          "/images/Detivonal/IMG_5010.webp",
        ]}
        heading="Welcome to Devotional Attraction"
      />
      <GalleryItems data={Gallerydata} />
    </div>
  );
}
