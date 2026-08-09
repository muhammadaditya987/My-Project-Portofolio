import Container from "./Container";
import navbarData from "../../data/navbarData";
import siteData from "../../data/siteData";

import {
    FaGithub,
    FaLinkedinIn,
    FaEnvelope,
} from "react-icons/fa6";

import { motion } from "motion/react";


const Footer = () => {

    return (

        <footer className="
            relative
            overflow-hidden
            border-t
            border-white/10
        ">

            {/* GRADIENT */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    h-80
                    w-80
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-500/10
                    blur-[140px]
                "
            />


            <Container>

                {/* MAIN FOOTER */}

                <div className="
                    grid
                    gap-12
                    py-16
                    md:grid-cols-2
                    lg:grid-cols-3
                ">


                    {/* BRAND */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                    >

                        <h2 className="
                            text-2xl
                            font-black
                            tracking-wide
                        ">
                            {siteData.logo}
                        </h2>


                        <p className="
                            mt-4
                            max-w-sm
                            leading-7
                            text-gray-400
                        ">
                            Frontend Developer yang membangun
                            website modern, responsive,
                            dan interactive.
                        </p>


                        {/* SOCIAL */}

                        <div className="
                            mt-6
                            flex
                            gap-3
                        ">

                            <a
                                href="https://github.com/muhammadaditya987"
                                aria-label="GitHub"
                                className="
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/5
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-cyan-400
                                    hover:text-cyan-400
                                "
                            >
                                <FaGithub />
                            </a>


                            <a
                                href="https://profile.indeed.com/p/muhammada-n3kj9s1"
                                aria-label="LinkedIn"
                                className="
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/5
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-cyan-400
                                    hover:text-cyan-400
                                "
                            >
                                <FaLinkedinIn />
                            </a>


                            <a
                                href="mailto:muhammadadityajr8@gmail.com"
                                aria-label="Email"
                                className="
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/5
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-cyan-400
                                    hover:text-cyan-400
                                "
                            >
                                <FaEnvelope />
                            </a>

                        </div>

                    </motion.div>


                    {/* QUICK LINKS */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                        }}
                    >

                        <h3 className="font-bold">
                            Quick Links
                        </h3>


                        <ul className="
                            mt-5
                            space-y-3
                        ">

                            {navbarData.map((item) => (

                                <li key={item.id}>

                                    <a
                                        href={item.href}
                                        className="
                                            text-gray-400
                                            transition-colors
                                            duration-300
                                            hover:text-cyan-400
                                        "
                                    >
                                        {item.title}
                                    </a>

                                </li>

                            ))}

                        </ul>

                    </motion.div>


                    {/* CONNECT */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                        }}
                    >

                        <h3 className="font-bold">
                            Let's Connect
                        </h3>


                        <p className="
                            mt-5
                            leading-7
                            text-gray-400
                        ">
                            Interested in working together?
                            Feel free to reach out.
                        </p>


                        <a
                            href="mailto:muhammadadityajr8@gmail.com"
                            className="
                                mt-5
                                inline-flex
                                items-center
                                gap-2
                                text-cyan-400
                                transition-colors
                                hover:text-cyan-300
                            "
                        >

                            <FaEnvelope />

                            muhammadadityajr8@gmail.com

                        </a>

                    </motion.div>

                </div>


                {/* COPYRIGHT */}

                <div className="
                    flex
                    flex-col
                    gap-3
                    border-t
                    border-white/10
                    py-6
                    text-sm
                    text-gray-500
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                ">

                    <p>
                        © 2026 {siteData.logo}.
                        All rights reserved.
                    </p>

                    <p>
                        Built with React & Tailwind CSS.
                    </p>

                </div>

            </Container>

        </footer>

    );
};

export default Footer;