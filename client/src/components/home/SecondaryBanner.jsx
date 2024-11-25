import FloatingImg from "./FloatingImg"
import Title from "../Title"

const SecondaryBanner = ({ img, num, title, subtitle }) => {
    return (
        <section className='bg-[#fafbff] px-[40px]'>
            <div className={`text-center md:flex justify-center items-center space-y-6 max-w-[1300px] mx-auto ${num % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                <div
                    className="max-w-[40%] mx-auto"
                >
                    <FloatingImg img={img} />
                </div>
                <div className="flex md:max-w-[60%] md:pl-[80px] lg:pl-[110px] xl:pl-[180px]  xxl:pl-[250px] md:items-start flex-col gap-4">
                    <div
                        className={`flex justify-center flex-col`}
                    >
                        <p
                            className="text-[#f08270] font-[600] text-[14px] mb-2"
                        >{title}</p>
                        <Title text1={subtitle} />
                        <p
                            className="tracking-wider text-[#606060] text-[16px] leading-[25px] mt-2"
                        >Explore a collection of futuristic clothing that blends innovative design with advanced materials. From tech-infused streetwear to cutting-edge activewear, our apparel is made for those who dare to push boundaries. Step into tomorrow, today.</p>
                    </div >
                    <div className="py-[15px] w-[100%] flex flex-col text-[18px] gap-[15px]">
                        <div className="flex items-center justify-between md:justify-start lg:w-[90%] mx-auto gap-3">
                            {/* <div className="flex items-center gap-[10px] md:text-[18px] text-[16px]">
                                <p className="text-[#00030e] font-[600] shrink-0">Expert Instructors</p>
                            </div>
                            <div className="flex items-center gap-[10px] md:text-[18px] text-[16px]">
                                <p className="text-[#00030e] font-[600] shrink-0">Remote Learning</p>
                            </div> */}
                        </div>
                        <div className="flex items-center justify-between md:justify-start lg:w-[90%] mx-auto gap-3">
                            {/* <div className="flex items-center gap-[10px] md:text-[18px] text-[16px]">
                                <p className="text-[#00030e] font-[600] shrink-0">Lifetime Access</p>
                            </div>
                            <div className="flex items-center gap-[10px] md:text-[18px] text-[16px]">
                                <p className="text-[#00030e] font-[600] shrink-0">Self Development</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap justify-center">
                        {/* <Link
                            href="/courses"
                            className={cn(buttonVariants({ size: "lg" }))}
                        >
                            View all courses
                        </Link> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecondaryBanner