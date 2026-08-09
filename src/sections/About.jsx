import Container from "../components/common/Container";
import aboutData from "../data/aboutData";
import { motion } from "motion/react";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import {
    RiCodeSSlashLine,
    RiReactjsLine,
    RiTailwindCssLine,
} from "react-icons/ri";

const About = () => {

    const aboutRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.from(".about-item", {
                opacity: 0,
                y: 40,
                duration: 0.8,
                stagger: 0.15,
            });

        }, aboutRef);

        return () => ctx.revert();

    }, []);

    return (
        <section
            ref={aboutRef}
            id="about"
            className="relative overflow-hidden py-32"
        >

            <div
                className="
                    absolute
                    right-0
                    top-1/3
                    h-80
                    w-80
                    rounded-full
                    bg-purple-500/10
                    blur-[120px]
                "
            />
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
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                >

                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                        {/* LEFT */}

                        <div className="about-item">

                            <p className="text-sm font-semibold uppercase tracking-[6px] text-cyan-400">
                                {aboutData.label}
                            </p>

                            <h2 className="mt-4 text-4xl font-black md:text-5xl">
                                {aboutData.title}
                            </h2>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
                                {aboutData.description}
                            </p>

                            <p className="mt-5 max-w-xl leading-8 text-gray-400">
                                {aboutData.secondDescription}
                            </p>

                        </div>


                        {/* RIGHT */}

                        <div
                            className="
                                about-item
                                relative
                                overflow-hidden
                                rounded-4xl
                                border
                                border-white/10
                                bg-white/5
                                p-8
                                backdrop-blur-xl
                            "
                        >

                            <p className="text-sm uppercase tracking-[4px] text-gray-400">
                                My Skills
                            </p>

                            <h3 className="mt-3 text-3xl font-bold">
                                Technologies I Use
                            </h3>


                            {/* FEATURES */}

                            <div className="mt-8 grid gap-4 sm:grid-cols-3">

                                <div className="about-item rounded-2xl border border-white/10 bg-black/20 p-5">

                                    <RiCodeSSlashLine className="text-3xl text-cyan-400" />

                                    <h4 className="mt-4 font-bold">
                                        Clean Code
                                    </h4>

                                    <p className="mt-2 text-sm leading-6 text-gray-400">
                                        Menulis kode yang terstruktur dan mudah dipahami.
                                    </p>

                                </div>


                                <div className="about-item rounded-2xl border border-white/10 bg-black/20 p-5">

                                    <RiReactjsLine className="text-3xl text-cyan-400" />

                                    <h4 className="mt-4 font-bold">
                                        React
                                    </h4>

                                    <p className="mt-2 text-sm leading-6 text-gray-400">
                                        Membangun interface menggunakan component React.
                                    </p>

                                </div>


                                <div className="about-item rounded-2xl border border-white/10 bg-black/20 p-5">

                                    <RiTailwindCssLine className="text-3xl text-cyan-400" />

                                    <h4 className="mt-4 font-bold">
                                        Responsive
                                    </h4>

                                    <p className="mt-2 text-sm leading-6 text-gray-400">
                                        Membuat website yang nyaman digunakan di berbagai ukuran layar.
                                    </p>

                                </div>

                            </div>


                            {/* SKILLS */}

                            <div className="mt-8 flex flex-wrap gap-3">

                                {aboutData.skills.map((skill) => (

                                    <span
                                        key={skill}
                                        className="
                                            rounded-full
                                            border
                                            border-cyan-400/20
                                            bg-cyan-400/10
                                            px-4
                                            py-2
                                            text-sm
                                            text-cyan-300
                                        "
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>


                            {/* STATS */}

                            <div className="mt-10 grid grid-cols-3 gap-4">

                                {aboutData.stats.map((stat) => (

                                    <div
                                        key={stat.label}
                                        className="
                                            rounded-2xl
                                            border
                                            border-white/10
                                            bg-black/20
                                            p-4
                                            text-center
                                        "
                                    >

                                        <p className="text-2xl font-black text-cyan-400">
                                            {stat.number}
                                        </p>

                                        <p className="mt-1 text-xs text-gray-400">
                                            {stat.label}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>
                </motion.div>

            </Container>

        </section>
    );
};

export default About;