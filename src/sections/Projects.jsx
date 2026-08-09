// MENGAMBIL DATA DARI PROJECTdATA.JS & PROJECTcARD.JSX UNTUK DITAMPILKAN DI HALAMAN PROJECTS.JSX
// LALU PROJECT.JSX INI, AKAN DIEXPORT KE APP.JSX

import Container from "../components/common/Container";
import ProjectCard from "../components/projects/ProjectCard";
import projectsData from "../data/projectsData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "motion/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {

    return (

        <section
            id="projects"
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

                    {/* HEADING */}

                    <div>

                        <p className="text-sm font-semibold uppercase tracking-[6px] text-cyan-400">
                            PROJECTS
                        </p>

                        <h2 className="mt-4 text-4xl font-black md:text-5xl">
                            Selected Works
                        </h2>

                    </div>


                    {/* SWIPER */}

                    <div className="mt-12">

                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation
                            pagination={{ clickable: true }}
                            spaceBetween={24}
                            slidesPerView={1}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                },
                            }}
                        >

                            {projectsData.map((project) => (

                                <SwiperSlide key={project.id}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>

                            ))}

                        </Swiper>

                    </div>
                </motion.div>

            </Container>

        </section>

    );
};

export default Projects;