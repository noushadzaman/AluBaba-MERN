import { useContext } from "react";
import LOGO from "../../assets/frontend_assets/main-logo.png";
import { ShopContext } from "../../context/ShopContext";

const Footer = () => {
    const { initialLoading } = useContext(ShopContext);

    return (
        <>
            {
                !initialLoading &&
                <div>
                    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
                        <div>
                            <img className="mb-5 w-14" src={LOGO} alt="" />
                            <p className="w-full md:w-2/3 text-gray-600">
                                We are a forward-thinking fashion brand blending innovative designs with cutting-edge materials. Our mission is to redefine style for those who embrace the future.
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
                            <ul>
                                <li>+880 1534 6724 18</li>
                                <li>noushadzaman333@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <hr />
                        <p className="py-5 text-sm text-center">© Copyright 2024 all rights reserved</p>
                    </div>
                </div >
            }
        </>
    );
};

export default Footer;