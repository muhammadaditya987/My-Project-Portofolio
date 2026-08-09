const SkillCard = ({ skill }) => {

    return (
        <div
            className="
                skill-item
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
            "
        >

            <div className="text-4xl text-cyan-400">
                {skill.icon}
            </div>

            <h4 className="mt-6 text-xl font-bold">
                {skill.name}
            </h4>

            <p className="mt-3 text-sm leading-6 text-gray-400">
                {skill.description}
            </p>

        </div>
    );
};

export default SkillCard;