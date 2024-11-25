import Logo from '../assets/main-logo.png'

const NavBar = ({ setToken }) => {
    return (
        <div className='flex items-center py-2 px-[4%] justify-between '>
            <img src={Logo} className='w-[max(5%,80px)]' alt="" />
            <button
                onClick={() => setToken('')}
                className='bg-gray-60 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
        </div>
    )
}

export default NavBar