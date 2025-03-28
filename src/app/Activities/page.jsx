import Gallery from "../../components/Activities/Gallery.jsx";
import Topbox from "../../components/Activities/Topbox.jsx";
import Bottombox from "../../components/Activities/Bottombox.jsx";


export default function Home() {
  return (
    <div>
      <Topbox/>
      <Gallery />
      <Bottombox/>
    </div>
  );
}