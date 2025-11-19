import communitybg from "../../assets/images/community.jpg";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-center text-white max-h-[560px]"
      style={{ backgroundImage: `url(${communitybg})` }}
    >
      {/* Dark + gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#1D439E]/20 to-[#D36E93]/40"></div>{" "}
      <div className="absolute inset-0 bg-[#2A2376]/50"></div>
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Content */}
      <div className="relative z-10 px-6 py-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Join our Community
        </h1>
        <p className="text-gray-200 text-xl mb-8 max-w-[767px] font-extralight">
          Become a part of our exclusive community! Our community initiatives
          are tailored for members who are passionate about network engineering.
          Here, you can build essential knowledge, hone your skills, and dive
          into the latest technologies.
        </p>
      </div>
    </section>
  );
};

export default Hero;
