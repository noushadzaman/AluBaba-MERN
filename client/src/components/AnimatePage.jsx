import { motion } from 'framer-motion';

const AnimatePage = ({ children }) => {

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ y: window.innerWidth, transition: { duration: 0.3 } }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatePage