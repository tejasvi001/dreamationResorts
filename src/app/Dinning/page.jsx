import StatsSection from "../../components/Dinning/StatsSection.jsx";

import GalleryItemLeft from "../../components/Activities/GalleryItemLeft.jsx";
import ClientsSay from "../../components/HomePageComp/ClientsSay.jsx";
import ServicesGrid from "../../components/SpaComp/ServicesGrid.jsx";
import Image from "next/image";
import Grid from "../../components/Dinning/grid.jsx";

const page = () => {
    return (
        <>
            <div className="">
                <div className="relative bg-center h-[180vh]" style={{ backgroundImage: "url('/images/Rectangle4560.webp')" }}>
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="flex justify-center h-full mt-">
                        <h2 className="text-5xl md:text-2xl lg:text-[100px]  text-black mt-40  ">
                            Restaurants
                        </h2>
                    </div>

                    
                    </div>
                </div>
                <Grid
                image="/images/Rectangle4559.webp"/>

                <div className="my-">
                    <ServicesGrid />
                </div>
                <div className="">
                    <StatsSection />
                </div>
                <div className="">
                    <ClientsSay />
                </div>
            {/* </div> */}
        </>
    );
};

export default page;
