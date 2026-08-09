// DIIMPORT KE APP.JSX

import { motion, useMotionValue, useSpring } from "motion/react";
import {useEffect} from "react";


const FloatingCursor = () => {

    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const x = useSpring(cursorX, {
    stiffness: 300,
    damping: 25,
    });

    const y = useSpring(cursorY, {
        stiffness: 300,
        damping: 25,
    });
    
    const handleMouseMove = (event) => {
        cursorX.set(event.clientX);
        cursorY.set(event.clientY);
    };

    useEffect(() => {

        window.addEventListener(
            "pointermove",
            handleMouseMove
        );

        return () => {
            window.removeEventListener(
                "pointermove",
                handleMouseMove
            );
        };

    }, []);

    return (
        <motion.div
            style={{
                x,
                y,
            }}
            className="
                pointer-events-none
                fixed
                left-0
                top-0
                z-9999
                h-8
                w-8
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-cyan-400
                bg-cyan-400/10
            "
        >
            <div
                className="
                    absolute
                    left-1/2
                    top-1/2
                    h-1.5
                    w-1.5
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-cyan-400
                "
            />
        </motion.div>
    );
};

export default FloatingCursor;

