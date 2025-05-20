import RoomGrid from "../../components/Residentailcomp/RoomGrid.jsx";
import AttractionEvents from "../../components/HomePageComp/AttractionEvents";
import FeaturedRoom from "../../components/Accomodation/FeaturedRoom.jsx";
import Hero from "../../components/Contact/cont";

const AccomodationData = {
  mainHeading: "Accomodation",
  heroImage: "/assets/bed3.webp",
  heroAlt: "Room at Dreamation Resort",
  sectionImage: "/images/Accomodationimg/aabb.webp",
  sectionAlt: "Vacation at Dreamation Resort",
  preTitle: "",
  title: "Experience Diverse Stays in Nature’s Lap",
  description:
    "At our resort, we offer four exceptional accommodation options tailored to your preferences. Indulge in the lavish comfort of our Ultra Luxury rooms, where elegance meets modern amenities. Opt for our Luxury rooms for a spacious, stylish stay with rustic charm. For a unique glamping experience, the Fern Luxury Swisstents combine eco-conscious living with upscale design amidst serene mountains. Finally, embrace sustainability in our Earthen Echo Mud House, built with natural materials and modern comforts. Each option offers a distinct experience, ensuring your stay is as memorable as the breathtaking surroundings that envelop you.",
};

const rooms = [
  {
    title: "Ultra Luxury",
    imageSrc: "/images/Accomodationimg/ul.webp",
    width: 500,
    height: 500,
    description:
      "Ultra Luxury rooms in an Acorn Luxury Cottage are thoughtfully designed to blend comfort, elegance, and functionality, making guests feel at home while offering a premium lodging experience.",
    buttonText: "For More Details",
    imgAlt: "Residential Room",
    redirectLink: "/Acorn",
  },
  {
    title: "Luxury",
    imageSrc: "/images/Accomodationimg/reg.webp",
    width: 500,
    height: 500,
    description:
      "A Luxury Room in an Acorn Luxury Cottage offers a spacious, thoughtfully designed environment focused on comfort, elegance, and a touch of rustic charm. ",
    buttonText: "For More Details",
    imgAlt: "Executive Room",
    redirectLink: "/Acorn",
  },
  {
    title: "Fern Luxury Swisstents",
    imageSrc: "/assets/tent.jpg",
    description:
      "The Fern Luxurious Tent Resort offers a unique blend of upscale comfort and eco-conscious design, providing guests with an exceptional glamping experience amidst serene mountain landscapes.",
    buttonText: "For More Details",
    imgAlt: "Deluxe Room",
    redirectLink: "/Fern",
  },
  {
    title: "Earthen echo mud house",
    imageSrc: "/earth.webp",
    description:
      "The Earthen Echo Mud House is rooted in the concept of sustainable living, offering a natural, earthy aesthetic while maintaining modern comforts.",
    buttonText: "For More Details",
    imgAlt: "Premium Room",
    redirectLink: "/Eathern",
  },
];
export default function page() {
  return (
    <div className="w-full h-full">
      <Hero data={AccomodationData} />
      <RoomGrid rooms={rooms} />
      <FeaturedRoom />
      <AttractionEvents />
    </div>
  );
}
