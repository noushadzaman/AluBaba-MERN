import { useContext, useState } from "react";
import Banner from "../components/home/Banner";
import BannerThree from "../components/home/BannerThree";
import BannerTwo from "../components/home/BannerTwo";
import BestSeller from "../components/home/BestSeller";
import LatestCollection from "../components/home/LatestCollection";
import ShoeBanner from "../components/home/shoeBanner/ShoeBanner";
import NewsLetterBox from "../components/NewsLetterBox";
import OurPolicy from "../components/OurPolicy";
import { useEffect } from "react";
import Fig from '../assets/frontend_assets/banner-fig.png'
import BG from '../assets/frontend_assets/banner-bg.jpg'
import LoadingComponent from "../components/home/LoadigComponent";
import { ShopContext } from "../context/ShopContext";

const Home = () => {
    const { initialLoading, setInitialLoading } = useContext(ShopContext);
    const [isLoading, setIsLoading] = useState(initialLoading);
    const imagesToPreload = [
        Fig,
        BG,
    ];

    useEffect(() => {
        imagesToPreload.forEach((src) => {
            const img = new Image();
            img.src = src;
        });

        const timer = setTimeout(() => {
            setIsLoading(false);
            setInitialLoading(false)
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ? (
                <LoadingComponent />
            ) : (
                <>
                    <Banner />
                    <LatestCollection />
                    <BannerTwo />
                    <ShoeBanner />
                    <BestSeller />
                    <BannerThree />
                    <OurPolicy />
                    <NewsLetterBox />
                </>
            )}
        </>
    );
};


export default Home;