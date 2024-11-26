import clsx from 'clsx';
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';
import NavLogoLight from '../assets/frontend_assets/nav-logo-light.png';
import NavLogoDark from '../assets/frontend_assets/nav-logo-dark.png';
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { FaOpencart } from "react-icons/fa";
import { ShopContext } from '../context/ShopContext';


const Header = () => {
    const { initialLoading, setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
    // const [visible, setVisible] = useState(false);
    const [scrolled, setScrolled] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const loc = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const logOut = () => {
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
        navigate('/login');
    }

    return (
        <>
            {
                !initialLoading &&
                <motion.header
                    initial={{ opacity: 0.90, y: -141 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: 'spring',
                            delay: 1,
                            bounce: 0.5,
                            duration: 1
                        }
                    }}
                    className={
                        clsx("fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4 mx-auto", scrolled > 32 && "py-2 bg-black-100 backdrop-blur-[8px]")
                    }
                >
                    <div className={`mx-auto px-16 max-xl:px-10 max-sm:px-4 flex h-14 items-center max-lg:px-5 
                ${scrolled > 950 || loc.pathname !== '/' ? "" : "text-white"}`}>
                        <a className="md:hidden flex-1 cursor-pointer z-2">
                            <img src={scrolled > 950 || loc.pathname !== '/' ? NavLogoDark : NavLogoLight} width={40} height={55} alt="Logo" />
                        </a>

                        <div className={clsx('w-full max-md:fixed max-md:top-0 max-md:left-0 max-md:w-full max-md:bg-[#3eb5a9]', !isOpen && 'max-md:pointer-events-none max-md:opacity-0')}>
                            <div className="max-md:relative max-md:flex max-md:flex-col max-md:min-h-screen max-md:p-6 max-md:overflow-hidden sidebar-before max-md:px-4">
                                <nav className='max-md:relative max-md:z-2 max-md:my-auto'>
                                    <ul className="flex flex-col md:flex-row justify-center md:justify-between max-md:px-12">

                                        <li className="relative flex items-center justify-between max-md:flex-col max-md:items-start">
                                            <ul className="flex max-md:gap-12 gap-5 text-lg test-gray-700 tracking-widest">

                                                <NavLink to={'/collection'} className="flex flex-col items-center gap-1">
                                                    <p>Collection</p>
                                                    <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
                                                </NavLink>

                                                <NavLink to={'/about'} className="flex flex-col items-center gap-1">
                                                    <p>About</p>
                                                    <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
                                                </NavLink>

                                                <NavLink to={'/contact'} className="flex flex-col items-center gap-1">
                                                    <p>Contact</p>
                                                    <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
                                                </NavLink>

                                            </ul>
                                        </li>



                                        <li className="relative flex items-center justify-between max-lg:flex-col max-lg:items-start">
                                            <div className="flex items-center gap-6 max-md:mt-12 max-md:mx-auto">
                                                {/* <FiSearch className='cursor-pointer' /> */}

                                                <div className="group relative">
                                                    <CgProfile
                                                        size={"30px"}
                                                        onClick={() => token ? null : navigate('/login')}
                                                        className="cursor-pointer w-10" src={assets.profile_icon} alt="profile icon"
                                                    />
                                                    {/* Dropdown Menu */}
                                                    {
                                                        token &&
                                                        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                                                            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                                                                {/* <Link to="/profile">
                                                            <p className="cursor-pointer hover:text-black">My profile</p>
                                                        </Link> */}
                                                                <Link to="/orders">
                                                                    <p className="cursor-pointer hover:text-black">Orders</p>
                                                                </Link>
                                                                <p
                                                                    onClick={logOut}
                                                                    className="cursor-pointer hover:text-black">Logout</p>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                                <Link to="/cart" className="relative">
                                                    <FaOpencart size={'30px'} alt="cart icon" />
                                                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-gray-500 text-white aspect-square rounded-full text-[12px]">
                                                        {getCartCount()}
                                                    </p>
                                                </Link>
                                                {/* <img
                                                    onClick={() => setVisible(true)}
                                                    src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="" /> */}
                                            </div>
                                        </li>

                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(prev => !prev)}
                            className='md:hidden z-20 size-10 border-2 border-[#ce3936] border-s4/25 rounded-full flex justify-center items-center'>
                            <img
                                className='size-1/2 object-contain'
                                src={`/public/images/${isOpen ? 'close' : 'magic'}.svg`}
                                alt=""
                            />
                        </button>
                    </div>
                    <li className="mt-[-50px] flex flex-1 items-center justify-center">
                        <Link
                            to={'/'}
                            offset={-250}
                            spy
                            smooth
                            className={clsx("max-md:hidden transition-transform duration-500 cursor-pointer")}
                        >
                            <img src={scrolled > 950 || loc.pathname !== '/' ? NavLogoDark : NavLogoLight} width={50} height={55} />
                        </Link>
                    </li>
                </motion.header>
            }
        </>
    )
}

export default Header