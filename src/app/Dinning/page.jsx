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
                <div className="relative bg-center h-screen" style={{ backgroundImage: "url('/images/Rectangle4560.webp')" }}>
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="flex justify-center h-full">
                        <h2 className="text-5xl md:text-2xl lg:text-[100px] font-semibold text-black mt-16">
                            Restaurants
                        </h2>
                    </div>
                    <div className="absolute bottom-0 w-full h-1/2">
                        <Grid image="/images/Rectangle4559.webp" />
                    </div>
                </div>
            </div>
            <ServicesGrid />
            <StatsSection />
            <ClientsSay />
        </>
    );
};

export default page;
