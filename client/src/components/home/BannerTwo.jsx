import BannerImg from '../../assets/frontend_assets/banner-two-img.png'
import SecondaryBanner from './SecondaryBanner';

const BannerTwo = () => {
    return (
        <SecondaryBanner img={BannerImg} num={2} title="Perfect Fits" subtitle="Find Your Fit" />
    );
};

export default BannerTwo;