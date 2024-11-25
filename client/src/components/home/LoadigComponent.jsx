import { useEffect, useState } from 'react';
import Logo from '../../assets/frontend_assets/nav-logo-dark.png'

const LoadingComponent = () => {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartAnimation(true);
        }, 9000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`flex justify-center items-center h-screen transition-all duration-1000 ${startAnimation ? '-translate-y-[600px]' : ''}`}
        >
            <img className='animate-spin w-[50px]' src={Logo} alt="" />
        </div>
    )
}

export default LoadingComponent;