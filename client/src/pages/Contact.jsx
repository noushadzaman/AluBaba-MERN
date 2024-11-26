import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const Contact = () => {
    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <div className="pt-[141px] text-center text-2xl border-t">
                <Title text1={"CONTACT US"} />
            </div>
            <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
                <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />
                <div className="flex flex-col justify-center items-start gap-6">
                    <p className="font-semibold text-xl text-gray-600">Our Store</p>
                    <p className="text-gray-500">We’d love to hear from you! Whether you have a question, need assistance, or want to share feedback, the FutureFits team is here to help. Reach out to us anytime, and we’ll ensure your concerns are addressed promptly and professionally. Together, let’s make your experience with FutureFits nothing short of exceptional.</p>
                    <p className="text-gray-500">Tel: 0153467218<br />noushadozi333@gmail.com</p>
                    <p className="font-semibold text-xl text-gray-600">Careers at FutureFits</p>
                    <p className="tex-gray-500">Learn more about our job openings.</p>
                    <button className="border border-black px-8 py-4 text-sm hover;bg-black hover:bg-black hover:text-white transition-all duration-500 rounded-full">Explore Jobs</button>
                </div>
            </div>

            <NewsLetterBox />
        </div>
    );
};

export default Contact;