import RoomGrid from "../../components/Residentailcomp/RoomGrid.jsx";
import AttractionEvents from "../../components/HomePageComp/AttractionEvents";
import FeaturedRoom from "../../components/Accomodation/FeaturedRoom.jsx";
import Header from "../../components/Accomodation/Header.jsx";

const rooms = [
  {
    title: "Ultra Luxury",
    imageSrc: "/images/Accomodationimg/ul.webp",
    width: 500,
    height: 500,
    description: "Ultra Luxury rooms in an Acorn Luxury Cottage are thoughtfully designed to blend comfort, elegance, and functionality, making guests feel at home while offering a premium lodging experience.",
    buttonText: "For More Details",
    imgAlt: "Residential Room",
  },
  {
    title: "Luxury",
    imageSrc: "/images/Accomodationimg/reg.webp",
    width: 500,
    height: 500,
    description: "A Luxury Room in an Acorn Luxury Cottage offers a spacious, thoughtfully designed environment focused on comfort, elegance, and a touch of rustic charm. ",
    buttonText: "For More Details",
    imgAlt: "Executive Room",
  },
  {
    title: "Fern Luxury Swisstents",
    imageSrc: "/assets/tent.jpg",
    description: "The Fern Luxurious Tent Resort offers a unique blend of upscale comfort and eco-conscious design, providing guests with an exceptional glamping experience amidst serene mountain landscapes.",
    buttonText: "For More Details",
    imgAlt: "Deluxe Room",
  },
  {
    title: "Earthen echo mud house",
    imageSrc: '/earth.webp',
    description: "The Earthen Echo Mud House is rooted in the concept of sustainable living, offering a natural, earthy aesthetic while maintaining modern comforts.",
    buttonText: "For More Details",
    imgAlt: "Premium Room",
  },
];
export default function page() {
  return (
    <div className="w-full h-full">
      <Header />
      <RoomGrid rooms={rooms} />
      <FeaturedRoom />
      <AttractionEvents />
      </div>
  );
}

