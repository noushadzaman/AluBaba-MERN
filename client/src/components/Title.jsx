import { motion } from 'framer-motion';

const DURATION = 0.25;
const STAGGER = 0.025;

const Title = ({ text1 }) => {
    return (
        <section className="grid place-content-center gap-2 px-8 text-black">
            <Flip>{`${text1}`}</Flip>
        </section>
    );
};


const Flip = ({ children }) => {
    return <motion.a
        initial="initial"
        whileHover="hovered"

        className='relative block overflow-hidden whitespace-nowrap text-2xl font-black uppercase sm:text-3xl md:text-4xl lg:text-6xl'
        style={{ lineHeight: 0.95 }}
    >
        <div
        >
            {children.split("").map((l, i) => {
                return <motion.span
                    variants={{
                        initial: { y: 0 },
                        hovered: { y: "-100%" }
                    }}
                    transition={{
                        duration: DURATION,
                        ease: "easeInOut",
                        delay: STAGGER * i,
                    }}
                    key={i}
                    className='inline-block'
                >
                    {l === " " ? "\u00A0" : l}
                </motion.span>
            })}
        </div>
        <div
            className='absolute inset-0'
        >
            {children.split("").map((l, i) => {
                return <motion.span
                    variants={{
                        initial: { y: "100%" },
                        hovered: { y: 0 }
                    }}
                    transition={{
                        duration: DURATION,
                        ease: "easeInOut",
                        delay: STAGGER * i,
                    }}
                    key={i}
                    className='inline-block'
                >
                    {l === " " ? "\u00A0" : l}
                </motion.span>
            })}
        </div>
    </motion.a>
}

export default Title;