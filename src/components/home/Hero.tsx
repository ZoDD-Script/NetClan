import homebg from "../../assets/images/homebg.jpg";
import collapse from "../../assets/icons/collaspe.png";
import CommunityButton from "../buttons/CommunityButton";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen md:h-screen bg-cover bg-center flex flex-col items-start md:items-center justify-center text-left md:text-center text-white"
      style={{ backgroundImage: `url(${homebg})` }}
    >
      {/* Dark + gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#1D439E]/20 to-[#D36E93]/40"></div>
      <div className="absolute inset-0 bg-[#2A2376]/50"></div>
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-6 py-32 md:py-6 mt-0 md:mt-0 max-w-7xl w-full">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Championing the Rise of Tomorrow's Technical Leaders.
        </h1>
        <p className="text-gray-200 text-lg mb-8 max-w-xl md:max-w-none md:mx-auto">
          Empowering future technical leaders with core skills to build the
          foundation for innovation and a connected world.
        </p>

        <CommunityButton>Join Our Community</CommunityButton>
      </div>

      {/* Bounce arrow */}
      <div className="relative md:absolute bottom-8 left-1/2 md:transform md:-translate-x-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={collapse}
          alt="collapse icon"
          className="w-8 h-8 animate-bounce"
        />
      </div>
    </section>
  );
};

export default Hero;
