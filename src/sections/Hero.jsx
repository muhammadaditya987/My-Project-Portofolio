import Container from "../components/common/Container";
import heroData from "../data/heroData";
import heroImage from "../assets/images/profile/b.jpg";

import {
    FaReact,
    FaMapMarkerAlt,
    FaArrowRight,
} from "react-icons/fa";

import {
    SiTailwindcss
} from "react-icons/si";

import { FaBolt } from "react-icons/fa";

import Tilt from "react-parallax-tilt";
import { motion } from "motion/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";


const Hero = () => {

    // VARIABEL GSAP
    const roleRef = useRef(null);
    const stackRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonRef = useRef(null);
    const cardRef = useRef(null);
    
    // UNTUK ANIMASI GSAP
useEffect(() => {

    const ctx = gsap.context(() => {

        const tl = gsap.timeline();

        tl.from(roleRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.6,
        })

        .from(stackRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.6,
        }, "-=0.4")

        .from(titleRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
        }, "-=0.3")

        .from(descriptionRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.8,
        }, "-=0.5")

        .from(buttonRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.8,
        }, "-=0.5")

        .from(cardRef.current, {
            opacity: 0,
            x: 100,
            duration: 1,
        }, "-=0.7");

            });

    return () => ctx.revert();

}, []);

    return (
    <section 
        className="relative min-h-[calc(100vh-5rem)] scroll-mt-20 overflow-hidden"

        id="home" //Karena Navbar kita memakai anchor link, maka Hero.jsx juga harus memakai id="home" 
        //agar bisa di scroll ke Hero.jsx ketika Navbar diklik.
    >
        <div 
            className= "absolute left-1/2 top-40 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]"
        />
        
      <Container>
        <div className="grid min-h-screen items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="text-cyan-400 uppercase tracking-[8px]"
            ref={roleRef}
            >
              {heroData.role}
            </p>

             <p className="text-white uppercase tracking-[8px]"
                    ref={stackRef}
             >
              {heroData.stack}
            </p>

            <h1 
                className="mt-6 text-6xl font-black leading-tight"
                ref={titleRef}
            >
              {heroData.greeting}
              <br />
              {heroData.name}
            </h1>

            <p 
                className="mt-8 max-w-lg text-lg leading-8 text-gray-300"
                ref={descriptionRef}
            >
                {heroData.description}
            </p>

            <div 
                className="mt-10 flex flex-wrap gap-5"
                ref={buttonRef}
            >
                <a
                    href="/public/cv/ResumeMuhammadAditya.pdf" 
                    download
                    className=" rounded-full bg-cyan-500 px-8 py-4 font-semibold transition-all duration-300 hover:scale-110 "
                > 
                    {heroData.buttonOne }
                </a>

                <a
                    href="https://wa.me/628551768170"
                    target="_blank"
                    rel="noopener noreferrer"
                    className= "rounded-full border border-white/20 px-8 py-4 transition-all duration-300 hover:border-cyan-400 "
                > 
                    {heroData.buttonTwo}
                </a>
            </div>

          </div>

          {/* RIGHT */}

        <div className="flex flex-col items-center">

            {/* PROFILE CARD */}

            <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1500}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glarePosition="all"
            >

                <motion.div
                    ref={cardRef}
                    className="
                        relative
                        h-140
                        w-105
                        overflow-hidden
                        rounded-[40px]
                        border
                        border-white/10
                        bg-white/5
                        backdrop-blur-xl
                    "
                    transition={{
                        duration: 0.3,
                    }}
                    whileHover={{
                        y: -5,
                    }}
                >

                    {/* GRADIENT */}

                    <div
                        className="
                            absolute
                            inset-0
                            rounded-[40px]
                            bg-linear-to-br
                            from-cyan-500/20
                            via-transparent
                            to-purple-500/20
                        "
                    />

                    {/* IMAGE */}

                    <img
                        src={heroImage}
                        alt={heroData.name}
                        className="
                            relative
                            z-10
                            h-full
                            w-full
                            rounded-[40px]
                            object-cover
                            transition-transform
                            duration-500
                            hover:scale-105
                        "
                    />

                    {/* PROFILE INFO */}

                    <div
                        className="
                            absolute
                            bottom-0
                            left-0
                            right-0
                            z-20
                            flex
                            items-end
                            justify-between
                            bg-black/40
                            p-6
                            backdrop-blur-xl
                        "
                    >

                        <div>

                            <h3 className="text-xl font-bold">
                                {heroData.name}
                            </h3>

                            <p className="mt-1 text-sm text-gray-400">
                                {heroData.role}
                            </p>

                            <div
                                className="
                                    mt-2
                                    flex
                                    items-center
                                    gap-2
                                    text-sm
                                    text-gray-400
                                "
                            >

                                <FaMapMarkerAlt />

                                {heroData.location}

                            </div>

                        </div>

                        <div
                            className="
                                rounded-full
                                bg-cyan-500
                                p-3
                            "
                        >
                            <FaArrowRight />
                        </div>

                    </div>

                </motion.div>

            </Tilt>


            {/* TECHNOLOGY BADGES */}

            <div
                className="
                    mt-6
                    flex
                    flex-wrap
                    justify-center
                    gap-3
                "
            >

                {/* REACT */}

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-black/40
                        px-5
                        py-3
                        backdrop-blur-xl
                    "
                >

                    <FaReact className="text-cyan-400" />

                    React

                </div>


                {/* TAILWIND */}

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-black/40
                        px-5
                        py-3
                        backdrop-blur-xl
                    "
                >

                    <SiTailwindcss className="text-cyan-400" />

                    Tailwind

                </div>


                {/* MOTION */}

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-black/40
                        px-5
                        py-3
                        backdrop-blur-xl
                    "
                >

                    <FaBolt className="text-cyan-400" />

                    Motion

                </div>

            </div>

        </div>

          
        </div>
      </Container>
    </section>
    )
}

export default Hero;