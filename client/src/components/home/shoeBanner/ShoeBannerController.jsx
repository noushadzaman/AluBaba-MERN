import Shoe1 from '../../../assets/frontend_assets/banner-shoe-1.png'
import Shoe2 from '../../../assets/frontend_assets/banner-shoe-2.png'
import Shoe3 from '../../../assets/frontend_assets/banner-shoe-3.png'
import Shoe4 from '../../../assets/frontend_assets/banner-shoe-4.png'


const ShoeBannerController = ({ selectedDish, setSelectedDish, selectDish }) => {

    const fourDishes = [
        { shoe: 0, showImg: Shoe1 },
        { shoe: 1, showImg: Shoe2 },
        { shoe: 2, showImg: Shoe3 },
        { shoe: 3, showImg: Shoe4 },
    ];

    return (
        <div className="flex gap-[20px]  lg:pb-[102px] pt-[70px] md:pt-[10px] ">
            {
                fourDishes.map(d => <div
                    key={d.shoe}
                    onClick={() => {
                        if (window.innerWidth >= 768) {
                            selectDish(d.shoe);
                        }
                    }}
                    className="flex flex-col gap-2 justify-between relative rotate-45"
                >
                    <img src={d.showImg} width={80} alt={'Dish picture'} />
                    <div className={`${selectedDish === d.shoe ? 'bg-white' : 'bg-transparent'} h-[4px]  rounded-xl ease-in duration-300`}>
                    </div>
                </div>)
            }
        </div>
    )
}

export default ShoeBannerController