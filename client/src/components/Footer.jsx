import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
    
    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div>
                    <img className="mb-5 w-32" src={assets.logo} alt="" />
                    <p className="w-full md:w-2/3 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, non distinctio explicabo provident suscipit reiciendis nostrum repudiandae velit!
                    </p>
                </div>

                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <li>+880 1534 6724 18</li>
                    <li>noushadzaman333@gmail.com</li>
                </div>
            </div>
            <div>
                <hr />
                <p className="py-5 text-sm text-center">© Copyright 2024 all rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;