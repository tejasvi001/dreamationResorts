import StatsSection from "../../components/Dinning/StatsSection.jsx";
import ClientsSay from "../../components/HomePageComp/ClientsSay.jsx";
import ServicesGrid from "../../components/SpaComp/ServicesGrid.jsx";
import Cont from "../../components/Contact/cont.jsx";


const contactData = {
  mainHeading: 'Restaurants',
  heroImage: "/images/Rectangle4560_2_11zon.webp",
  heroAlt: "dine",
  sectionImage: "/images/Accomodationimg/res_6_11zon.webp",
  sectionAlt: "dine",
  preTitle: "",
  title: "Dine & Drink Experience",
  description: 'Welcome to an unforgettable dining journey in the heart of nature.{"\n"} From locally sourced ingredients to handcrafted cocktails,{"\n"} every bite and sip celebrates taste, tradition, and togetherness.{"\n"} Whether you\'re enjoying breakfast with a view or an evening under the stars, our Hamlet Eatery delivers exceptional hospitality in every meal.'
};

const Page = () => {
  return (
    <div>
      <Cont data={contactData} />
      <ServicesGrid />
      <StatsSection />
      <ClientsSay />
    </div>
  );
};

export default Page;
