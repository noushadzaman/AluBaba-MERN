import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const About = () => {

    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <div className="pt-[141px] text-2xl text-center border-t">
                <Title text1={"ABOUT US"} />
            </div>

            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img
                    className="w-full md:max-w-[450px]"
                    src={assets.about_img}
                    alt=""
                />
                <div className="flex flex-col flex-center justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere dolore voluptates ex veniam? Illum delectus cum neque, veritatis expedita, esse nesciunt consectetur at tempora aspernatur minima molestiae nobis. Eos, maiores.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem saepe laboriosam blanditiis tempora molestias, excepturi voluptatibus quam modi animi! Accusamus recusandae vel illum consectetur et? Vero adipisci a inventore nobis.</p>
                    <b className="text-gray-800">Our mission</b>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores voluptatum voluptas facere aliquam itaque facilis unde illo libero repudiandae ipsum.</p>
                </div>
            </div>

            <div className="text-4xl py-4">
                <Title text1={"WHY"} text2={"CHOOSE US"} />
            </div>

            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Quality Assurance: </b>
                    <p className="text-gray-600 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, in cupiditate. Recusandae fuga unde provident impedit, sunt asperiores mollitia quas? Inventore cumque, expedita vitae alias nulla consequatur beatae necessitatibus, sapiente quasi non nisi ex repudiandae qui nihil quod id modi. Voluptates deserunt ipsam dolor quisquam pariatur aliquid? A, ex esse?</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Convenience: </b>
                    <p className="text-gray-600 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, in cupiditate. Recusandae fuga unde provident impedit, sunt asperiores mollitia quas? Inventore cumque, expedita vitae alias nulla consequatur beatae necessitatibus, sapiente quasi non nisi ex repudiandae qui nihil quod id modi. Voluptates deserunt ipsam dolor quisquam pariatur aliquid? A, ex esse?</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Exceptional Customer service: </b>
                    <p className="text-gray-600 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, in cupiditate. Recusandae fuga unde provident impedit, sunt asperiores mollitia quas? Inventore cumque, expedita vitae alias nulla consequatur beatae necessitatibus, sapiente quasi non nisi ex repudiandae qui nihil quod id modi. Voluptates deserunt ipsam dolor quisquam pariatur aliquid? A, ex esse?</p>
                </div>
            </div>
            <NewsLetterBox />
        </div>
    );
};

export default About;