import mission from "../../assets/images/mission.png";
import vision from "../../assets/images/vision.png";

const MissionVision = () => {
  return (
    <div className="min-h-screen p-8 md:p-16 lg:p-24">
      {/* Mission Section */}
      <div className="max-w-7xl mx-auto mb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower future technical leaders with core skills to{" "}
              <span className="font-semibold text-gray-800">
                build the foundation for innovation
              </span>{" "}
              and a connected world.
            </p>
          </div>

          {/* Image with Torn Paper Effect */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src={mission}
                alt="Team members"
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
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-md">
              <img
                src={vision}
                alt="Team group"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
              Our Vision
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
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
