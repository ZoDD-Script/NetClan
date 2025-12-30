import mission from "../../assets/images/mission.png";
import vision from "../../assets/images/vision.png";

const MissionVision = () => {
  return (
    <div className="min-h-screen p-8 md:p-16 lg:p-24">
      {/* Mission Section */}
      <div className="max-w-7xl mx-auto pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-1 md:order-1 md:pl-18">
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-normal text-[#39374F] mb-8">
              Our Mission
            </h2>
            <p className="text-[#39374F] text-lg leading-relaxed max-w-[450px]">
              To empower future technical leaders with core skills to{" "}
              <span className="font-semibold text-gray-800">
                build the foundation for innovation
              </span>{" "}
              and a connected world.
            </p>
          </div>

          {/* Image with Torn Paper Effect */}
          <div className="order-2 md:order-2 flex justify-center md:justify-middle">
            <div className="relative w-full">
              <img
                src={mission}
                alt="Team members"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with Torn Paper Effect */}
          <div className="flex justify-center md:justify-middle order-2 md:order-1  ">
            <div className="relative w-full">
              <img
                src={vision}
                alt="Team group"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-normal text-[#39374F] mb-8">
              Our Vision
            </h2>
            <p className="text-[#39374F] text-lg leading-relaxed max-w-[450px]">
              To create a safer, more connected world by{" "}
              <span className="font-semibold text-gray-800">
                empowering individuals with the foundational skills to build and
                secure the networks that drive innovation
              </span>
              , protect critical systems, and shape the future of technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
