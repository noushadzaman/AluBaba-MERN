'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ShapeDiv = ({ variations, children }) => {
    const shapes = [
        "88% 68% 73% 90% / 53% 80% 60% 70%",
        "50% 50% 85% 25% / 20% 80% 60% 60%",
        "50% 90% 70% 40% / 30% 20% 90% 60%",
        "50% 50% 90% 30% / 60% 90% 20% 50%",
        "60% 30% 90% 10% / 10% 90% 30% 50%",
        "40% 80% 50% 90% / 60% 60% 90% 50%",
        "88% 68% 73% 90% / 53% 80% 60% 70%",
    ];

    const getRandomShapes = () => {
        const shuffledShapes = [...shapes].sort(() => 0.5 - Math.random());
        return shuffledShapes;
    };

    const [randomShapes, setRandomShapes] = useState(getRandomShapes);

    useEffect(() => {
        const interval = setInterval(() => {
            setRandomShapes(getRandomShapes());
        }, 15000);
        return () => clearInterval(interval);
    }, []);

    const blobVariants = {
        animate: {
            borderRadius: randomShapes,
            transition: {
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <>
            <motion.div
                className={`${variations} border-none flex items-center justify-center`}
                animate="animate"
                variants={blobVariants}
            >{children}</motion.div>
        </>
    );
};

export default ShapeDiv;