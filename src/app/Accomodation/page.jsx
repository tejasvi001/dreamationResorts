import RoomGrid from "../../components/Residentailcomp/RoomGrid.jsx";
import AttractionEvents from "../../components/HomePageComp/AttractionEvents";
import FeaturedRoom from "../../components/Accomodation/FeaturedRoom.jsx";
import Header from "../../components/Accomodation/Header.jsx";

const rooms = [
  {
    title: "Residential",
    imageSrc: "/images/Accomodationimg/zrr34yc0jw1ip47byz0u.webp",
    width: 500,
    height: 500,
    description: "Residential rooms in an Acorn Luxury Cottage are thoughtfully designed to blend comfort, elegance, and functionality, making guests feel at home while offering a premium lodging experience.",
    buttonText: "For More Details",
    imgAlt: "Residential Room",
  },
  {
    title: "Executive",
    imageSrc: "/images/Accomodationimg/ofqa9cva1kkgkizumnsi.webp",
    width: 500,
    height: 500,
    description: "An Executive Room in an Acorn Luxury Cottage is designed to offer a premium blend of comfort, functionality, and understated luxury. ",
    buttonText: "For More Details",
    imgAlt: "Executive Room",
  },
  {
    title: "Deluxe",
    imageSrc: "/images/Accomodationimg/wmm1on7se9tjvjncr10e.webp",
    description: "A Deluxe Room in an Acorn Luxury Cottage offers a spacious, thoughtfully designed environment focused on comfort, elegance, and a touch of rustic charm.",
    buttonText: "For More Details",
    imgAlt: "Deluxe Room",
  },
  {
    title: "Premium",
    imageSrc: "/images/Accomodationimg/nrdauuexkyqsyeuhhx0q.webp",
    description: "A Premium Room in an Acorn Luxury Cottage represents the highest tier of luxury and comfort, designed for guests seeking an indulgent, exclusive, and immersive experience.",
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

