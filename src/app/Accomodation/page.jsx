import RoomGrid from "../../components/Residentailcomp/RoomGrid.jsx";
import AttractionEvents from "../../components/HomePageComp/AttractionEvents";
import FeaturedRoom from "../../components/Accomodation/FeaturedRoom.jsx";
import Hero from "../../components/Contact/cont";

const AccomodationData = {
  mainHeading: "Accomodation",
  heroImage: "/images/Accomodationimg/b5wrkonddwzymupskqto_1_11zon.webp",
  heroAlt: "Room at Dreamation Resort",
  sectionImage: "/images/Accomodationimg/zrr34yc0jw1ip47byz0u_8_11zon.webp",
  sectionAlt: "Vacation at Dreamation Resort",
  preTitle: "Contact Us Today",
  title: "Book Your Next Vacation!",
  description:
    "Nestled in the heart of the majestic Himalayas, Dreamation Resort is more than just a destination—it’s an experience. Whether you have questions, special requests, or simply wish to plan your stay, we’re here to help. From savoring traditional mountain delicacies to indulging in global cuisine with a local twist, every moment at our resort is designed to delight your senses. Reach out to us and let us guide you on your next unforgettable Himalayan escape.",
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
