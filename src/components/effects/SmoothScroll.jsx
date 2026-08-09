// UNTUK SMOOTH SCROLL
// LALU DIIMPORT KE APP.JSX

import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = () => {

    useEffect(() => {

        const lenis = new Lenis({
            smoothWheel: true,
        });

        let animationFrame;

        const raf = (time) => {
            lenis.raf(time);
            animationFrame = requestAnimationFrame(raf);
        };

        animationFrame = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(animationFrame);
            lenis.destroy();
        };

    }, []);

    return null;
};

export default SmoothScroll;