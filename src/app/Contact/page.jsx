import React from "react";
import Cont from "../../components/Contact/cont";
import Map from "../../components/Contact/map";
const contactData = {
  mainHeading:'Contact Us',
  heroImage: "/images/Accomodationimg/b5wrkonddwzymupskqto_1_11zon.webp",
  heroAlt: "Room at Dreamation Resort",
  sectionImage: "/images/Accomodationimg/zrr34yc0jw1ip47byz0u_8_11zon.webp",
  sectionAlt: "Vacation at Dreamation Resort",
  preTitle: "Contact Us Today",
  title: "Book Your Next Vacation!",
  description: "Nestled in the heart of the majestic Himalayas, Dreamation Resort is more than just a destination—it’s an experience. Whether you have questions, special requests, or simply wish to plan your stay, we’re here to help. From savoring traditional mountain delicacies to indulging in global cuisine with a local twist, every moment at our resort is designed to delight your senses. Reach out to us and let us guide you on your next unforgettable Himalayan escape.",
};
const page = () => {
  return (
    <div>
      <Cont data={contactData} />
      <Map />
    </div>
  );
};

export default page;
