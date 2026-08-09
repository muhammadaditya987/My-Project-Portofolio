// UNTUK TAMPILAN GRADASI
// BISA DIPAKAI DI HERO JUGA, CARANYA, IMPORT LALU LETAKKAN DIBAWAH SECTION <GradientBackground />

const GradientBackground = () => {
  return (
    <>
      <div
        className="
        absolute
        -left-37.5
        -top-37.5
        h-100
        w-100
        rounded-full
        bg-cyan-500/20
        blur-[120px]
        "
      />

      <div
        className="
        absolute
        bottom-50
        -right-37.5
        h-112.5
        w-112.5
        rounded-full
        bg-fuchsia-500/20
        blur-[150px]
        "
      />
    </>
  );
};

export default GradientBackground;