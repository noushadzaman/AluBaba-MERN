import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const About = () => {

    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <div className="pt-[141px] text-2xl text-center border-t">
                <Title text1={"About FutureFits"} />
            </div>

            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img
                    className="w-full md:max-w-[450px]"
                    src={assets.about_img}
                    alt=""
                />
                <div className="flex flex-col flex-center justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>At FutureFits, we are redefining the fashion landscape with a bold and futuristic approach. Our collection features innovative designs, blending style with cutting-edge trends to create clothing and footwear that stand out. We believe in empowering individuals to express themselves through fashion that’s both forward-thinking and timeless.</p>

                    <p>Our platform is designed to provide a seamless shopping experience, with a sleek, modern interface and intuitive navigation. Whether {`you're`} exploring the latest trends or curating your unique wardrobe, FutureFits ensures quality, style, and convenience at every step. Join us on this journey to the future of fashion.</p>
                    <b className="text-gray-800">Our mission</b>
                    <p>At FutureFits, our mission is to revolutionize fashion by combining innovation, quality, and individuality. We strive to inspire confidence and self-expression through futuristic designs that push the boundaries of style. By blending cutting-edge trends with exceptional craftsmanship, we aim to redefine how people connect with fashion and create a lasting impact on the industry.</p>
                </div>
            </div>

            <div className="text-4xl py-4">
                <Title text1={"WHY CHOOSE US"} />
            </div>

            <div className="mt-5 flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Quality Assurance: </b>
                    <p className="text-gray-600 ">At FutureFits, quality is at the heart of everything we do. Every piece in our collection is crafted with precision and care, ensuring it meets the highest standards of durability, comfort, and style. We are committed to delivering products that not only look good but also stand the test of time.</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Convenience: </b>
                    <p className="text-gray-600 ">We believe shopping should be effortless and enjoyable. With a sleek, user-friendly platform, FutureFits offers seamless navigation, fast checkout, and reliable delivery, ensuring a hassle-free experience from browsing to receiving your order.</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Exceptional Customer service: </b>
                    <p className="text-gray-600 ">Our customers are at the core of our mission. FutureFits is dedicated to providing personalized support, timely responses, and solutions tailored to your needs. We’re here to make your shopping journey smooth, satisfying, and memorable.
                        Let me know if {`you'd`} like further adjustments!</p>
                </div>
            </div>
            <NewsLetterBox />
        </div>
    );
};

export default About;