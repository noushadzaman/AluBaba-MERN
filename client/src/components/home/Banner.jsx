import { Link } from 'react-router-dom'
import Fig from '../../assets/frontend_assets/banner-fig.png'
import { motion } from 'framer-motion'

const Banner = () => {

    return (
        <div className="relative h-64 min-h-screen bg-[url('assets/frontend_assets/banner-bg.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 h-full">
                <div className='flex justify-center items-center h-full pointer-events-none'>
                    <motion.div
                        initial={{
                            y: "800px",
                            opacity: 0.7,
                            scale: 0.8
                        }}
                        animate={{
                            y: ["900px", "-40px", "0px"],
                            scale: [1.8, 0.92, 1],
                            opacity: [0, 1, 1],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.5, 1]
                        }}
                        viewport={{ once: true }}
                    >
                        <img className='max-h-[85vh]' src={Fig} alt="" />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0.90, x: -750 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            type: 'spring',
                            delay: 2,
                            bounce: 0.4,
                            duration: 1
                        }
                    }}
                >
                    <div className="bg-transparent backdrop-blur-lg bg-gradient-to-r from-white/20 to-black/20 absolute bottom-[50px] md:left-[50px] rounded-3xl flex flex-col text-white tracking-wider justify-center pl-[20px] p-[45px]">
                        <h2 className=' text-2xl'>FutureFits</h2>
                        <p>Bold, innovative fashion that blends style and technology for the next generation.</p>
                        <div className='flex items-center justify-center gap-3'>
                            <Link to={'/collection'} className="w-full border-[1px] mt-2 border-white text-white text-xs px-10 py-4 rounded-3xl text-center" type="submit">Top wears</Link>
                            <Link to={'/collection'} className="w-full border-[1px] mt-2 border-white text-white text-xs px-10 py-4 rounded-3xl text-center" type="submit">Bottom wears</Link>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Banner