import Container from "../components/common/Container";
import skillsData from "../data/skillsData";
import SkillCard from "../components/skills/SkillCard";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "motion/react";


const Skills = () => {

    const skillsRef = useRef(null);

    useEffect(() => {

    const ctx = gsap.context(() => {
        const items = skillsRef.current.querySelectorAll(".skill-item");
        gsap.from(items, {
            opacity: 0,
            y: 40,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
        });

    }, skillsRef);

    return () => ctx.revert();

}, []);


    return (

        <section
            ref={skillsRef}
            id="skills"
            className="relative min-h-[calc(100vh-5rem)] scroll-mt-20 overflow-hidden py-20"
        >
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

                {/* HEADING */}

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

                    <p className="text-sm font-semibold uppercase tracking-[6px] text-cyan-400">
                        SKILLS
                    </p>

                    <h2 className="mt-4 text-4xl font-black md:text-5xl">
                        Technologies I Use
                    </h2>


                    {/* FRONTEND */}

                    <div className="mt-12">

                        <h3 className="text-2xl font-bold">
                            Frontend
                        </h3>


                        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                            {skillsData.frontend.map((skill) => (

                                <SkillCard
                                    key={skill.name}
                                    skill={skill}
                                />

                            ))}

                        </div>

                    </div>
                </motion.div>

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
                    
                    {/* TOOLS */}

                    <div className="mt-16">

                        <h3 className="text-2xl font-bold">
                            Tools & Technologies
                        </h3>


                        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                            {skillsData.tools.map((skill) => (

                                <SkillCard
                                    key={skill.name}
                                    skill={skill}
                                />

                            ))}

                        </div>

                    </div>
                </motion.div>

                

            </Container>

        </section>

    );

};


export default Skills;