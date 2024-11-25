import { motion } from 'framer-motion'

const FloatingImg = ({ img }) => {
    
    return (
        <motion.div
            className=" mx-auto  flex justify-center items-center"
            animate={{
                opacity: 1,
                y: [0, -20, 0],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: "easeInOut"
            }}
        >
            <img src={img} alt="" />
        </motion.div>
    )
}

export default FloatingImg