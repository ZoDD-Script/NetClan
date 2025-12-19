import institutebg from "../../assets/images/institute.jpg";

const Hero = () => {
  return (
    <section
      className="relative h-screen min-h-[560px] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${institutebg})` }}
    >
      {/* Dark + gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#1D439E]/20 to-[#D36E93]/40"></div>
      <div className="absolute inset-0 bg-[#2A2376]/50"></div>
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-6 py-6 md:text-center text-left w-full md:w-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          NetClan Institute
        </h1>

        <p className="text-gray-200 text-xl mb-8 max-w-[767px] font-extralight">
          An exclusive, self-paced learning platform available only to members,
          designed to help network engineering enthusiasts build foundational
          knowledge, master core skills, and explore emerging technologies.
        </p>
      </div>
    </section>
  );
};

export default Hero;
