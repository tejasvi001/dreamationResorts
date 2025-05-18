import StatsSection from "../../components/Dinning/StatsSection.jsx";

import ClientsSay from "../../components/HomePageComp/ClientsSay.jsx";
import ServicesGrid from "../../components/SpaComp/ServicesGrid.jsx";
import Grid from "../../components/Dinning/grid.jsx";

const page = () => {
    return (
        <>
            <div className="">
                <div className="relative bg-center h-screen" style={{ backgroundImage: "url('/images/Rectangle4560_2_11zon.webp')" }}>
                    <div className="flex justify-center h-full">
                        <h2 className="text-5xl md:text-2xl lg:text-[100px] font-semibold text-gray-900 mt-16">
                            Restaurants
                        </h2>
                    </div>
                    <div className="absolute bottom-0 w-full h-1/2">
                        <Grid/>
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
