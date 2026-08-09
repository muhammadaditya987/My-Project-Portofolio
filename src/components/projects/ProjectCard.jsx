import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectCard = ({ project }) => {

    return (
        <article
            className="
                group
                overflow-hidden
                rounded-4xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
            "
        >

            {/* IMAGE */}

            <div
                className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-black/80
                    via-transparent
                    to-transparent
                "
            />
            <div className="relative overflow-hidden">

                <img
                    src={project.image}
                    alt={project.title}
                    className="
                        h-64
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        bg-linear-to-t
                        from-black/80
                        via-transparent
                        to-transparent
                    "
                />

            </div>


            {/* CONTENT */}

            <div className="p-7">

                <p className="text-sm uppercase tracking-[4px] text-cyan-400">
                    {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-black">
                    {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                    {project.description}
                </p>


                {/* TECHNOLOGIES */}

                <div className="mt-6 flex flex-wrap gap-2">

                    {project.technologies.map((technology) => (

                        <span
                            key={technology}
                            className="
                                rounded-full
                                border
                                border-white/10
                                bg-black/20
                                px-3
                                py-1.5
                                text-xs
                                text-gray-300
                            "
                        >
                            {technology}
                        </span>

                    ))}

                </div>


                {/* LINK */}

                <button
                    className="
                        mt-7
                        flex
                        items-center
                        gap-2
                        font-semibold
                        text-cyan-400
                        transition-all
                        duration-300
                        hover:gap-4
                    "
                >
                    View Project

                    <FaArrowUpRightFromSquare />
                </button>

            </div>

        </article>
    );
};

export default ProjectCard;