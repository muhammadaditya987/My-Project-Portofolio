const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-16">
      <p className="text-sm uppercase tracking-[6px] text-cyan-400">
        {subtitle}
      </p>

      <h2 className="mt-2 text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;