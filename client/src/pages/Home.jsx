import Banner from "../components/home/Banner";
import BannerThree from "../components/home/BannerThree";
import BannerTwo from "../components/home/BannerTwo";
import BestSeller from "../components/home/BestSeller";
import LatestCollection from "../components/home/LatestCollection";
import ShoeBanner from "../components/home/shoeBanner/ShoeBanner";
import NewsLetterBox from "../components/NewsLetterBox";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
    return (
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
    );
};

export default Home;