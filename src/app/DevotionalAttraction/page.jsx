import GalleryItems from "../../components/Activities/GalleryItems.jsx";
import HeroSection from "../../components/Activities/Topbox.jsx";

const Gallerydata = [
  {
    image: "/images/Detivonal/aj5mdntuqq9ml17runur.webp",
    title: "Nature Trails & Hiking",
    description:
      "Nature trails and hiking adventures offer a rejuvenating escape from daily life...",
  },
  {
    image: "/images/Detivonal/c2nz9a7j6lyy90xs3kcg.webp",
    title: "carved wooden temple",
    description:
      "A beautifully carved wooden temple entrance, likely from a Himalayan region like Himachal Pradesh...",
  },
  {
    image: "/images/Detivonal/jjx5cu0vuvjrrty0md24.webp",
    title: "Buddhist stupa (chorten)",
    description:
      " Buddhist stupa (chorten) surrounded by vibrant prayer flags...",
  },
  {
    image: "/images/Detivonal/kg41o5etpsqwy4isw6mv.webp",
    title: " Baijnath Temple",
    description:
      " Dedicated to Lord Shiva as Vaidyanath (the Lord of Physicians), this 13th-century temple ...",
  },
  {
    image: "/images/Detivonal/sakrhohmug44q974bkxl.webp",
    title: "Painting & Sketching Sessions",
    description:
      "Painting and sketching sessions provide a creative outlet for self-expression...",
  },
  {
    image: "/images/Detivonal/yldqgfotu1oxfnbl9uck.webp",
    title: "Tibetan Buddhist monastery building",
    description:
      "likely part of a major monastic complex in India, such as the Mindrolling Monastery in Dehradun or a similar institute in the Himalayan region...",
  },
];

export default function Page() {
  return (
    <div>
      <HeroSection
        backgroundImages={[
          "/images/Detivonal/sakrhohmug44q974bkxl.webp",
          "/images/Detivonal/kg41o5etpsqwy4isw6mv.webp",
        ]}
        heading="Welcome to Devotional Attraction"
      />
      <GalleryItems data={Gallerydata} />
    </div>
  );
}
