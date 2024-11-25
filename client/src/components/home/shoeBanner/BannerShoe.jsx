import Shoe1 from '../../../assets/frontend_assets/banner-shoe-1.png';
import Shoe2 from '../../../assets/frontend_assets/banner-shoe-2.png';
import Shoe3 from '../../../assets/frontend_assets/banner-shoe-3.png';
import Shoe4 from '../../../assets/frontend_assets/banner-shoe-4.png';

const BannerShoe = ({ selectedShoe }) => {

    return (
            <div
                className={`
               w-[437.61px] z-30 md:w-[1312.52px] h-[437.61px] md:h-[1312.52px] rounded-full absolute right-[-150px] md:right-[-656px] md:flex items-center justify-center gap-[50px] ease-in duration-500 hidden
                ${selectedShoe === 0 && 'rotate-[0deg]'}
                ${selectedShoe === 1 && 'rotate-[90deg]'}
                ${selectedShoe === 2 && 'rotate-[180deg]'}
                ${selectedShoe === 3 && 'rotate-[270deg]'}
                `}
            >
                <div className="hidden md:flex flex-col gap-[350px] shrink-0 items-center justify-center ">
                    <img
                        className={`w-[600px] shrink-0 rotate-45  ${selectedShoe !== 0 && 'transition-opacity duration-500 delay-100 opacity-0'}`}
                        src={Shoe1}
                        width={100}
                        height={284}
                        alt={"Dish picture"}
                    />
                    <img
                        className={`w-[600px] shrink-0 rotate-[-45deg]  ${selectedShoe !== 1 && 'transition-opacity duration-500 delay-100 opacity-0'}`}
                        src={Shoe2}
                        width={176}
                        height={284}
                        alt={"Dish picture"}
                    />

                </div>

                <div className="hidden md:flex flex-col gap-[200px] shrink-0 items-center justify-center ">
                    <img
                        className={`w-[600px] shrink-0 rotate-[145deg] ${selectedShoe !== 3 && 'transition-opacity duration-500 delay-100 opacity-0'}`}
                        src={Shoe4}
                        width={176}
                        height={284}
                        alt={"Dish picture"}
                    />
                    <img
                        className={`w-[600px] shrink-0  rotate-[-145deg] ${selectedShoe !== 2 && 'transition-opacity duration-500 delay-100 opacity-0'}`}
                        src={Shoe3}
                        width={176}
                        height={284}
                        alt={"Dish picture"}
                    />
                </div>
            </div>
    )
}

export default BannerShoe