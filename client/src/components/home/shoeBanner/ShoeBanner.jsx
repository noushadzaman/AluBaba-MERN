import { useEffect, useState } from "react";
import BannerShoe from "./BannerShoe"
import ShoeBannerController from "./ShoeBannerController"
import ShapeDiv from "./ShapeDiv";
import Title from "../../Title";

const ShoeBanner = () => {
    const [selectedShoe, setSelectedShoe] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSelectedShoe(prev => prev === 3 ? 0 : prev + 1)
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    function selectDish(dishNum) {
        setSelectedShoe(dishNum);
    }

    return (
        <div className="relative mx-auto max-w-[1200px] h-[70vh] overflow-hidden">
            <div className="flex">
                <div className="flex flex-col max-w-[550px] items-center justify-center mt-[250px] z-30">
                    <Title text1={"Futuristic Footwear"} />
                    <p
                        className="tracking-wider text-[#606060] text-[16px] leading-[25px] mt-2 text-center"
                    >Explore our innovative collection of shoes that blend cutting-edge design with comfort and performance. Perfect for those who step boldly into the future.</p>
                    <ShoeBannerController
                        selectedShoe={selectedShoe}
                        setSelectedShoe={setSelectedShoe}
                        selectDish={selectDish}
                    />
                </div>
                <BannerShoe selectedShoe={selectedShoe} />

            </div>
            <ShapeDiv variations={`hidden md:block h-[550px] w-[50vw] 2xl:w-[40vw] bg-[#202020] shadow-lg absolute top-[100px] right-0`} />
        </div>
    )
}

export default ShoeBanner