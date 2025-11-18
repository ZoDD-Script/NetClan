import React from "react";
import missionImage from "../../assets/images/missionImage.jpg";
// import missionframe from "../../assets/images/missionframe.svg";

interface MissionVisionProps {
  missionImage?: string;
  visionImage?: string;
}

const MissionVision: React.FC<MissionVisionProps> = ({
  visionImage = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop",
}) => {
  return (
    <section className="bg-[#E6DADA] py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Our Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#39364F]">
              Our Mission
            </h2>
            <p className="text-[#39364F] text-lg leading-relaxed">
              To empower future technical leaders with core skills to{" "}
              <span className="font-semibold">
                build the foundation for innovation
              </span>{" "}
              and a connected world.
            </p>
          </div>

          {/* Image with Custom Shape */}
          <div className="relative">
            <div className="relative w-full h-[450px] overflow-hidden max-w-[459px] max-h-[449px]">
              <img
                src={missionImage}
                alt="Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with Custom Shape - Left Side */}
          <div className="relative order-2 md:order-1">
            <div
              className="relative w-full h-[450px] overflow-hidden"
              style={{
                clipPath:
                  "polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%)",
              }}
            >
              <img
                src={visionImage}
                alt="Vision"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-[#39364F]">
              Our Vision
            </h2>
            <p className="text-[#39364F] text-lg leading-relaxed">
              To create a safer, more connected world by{" "}
              <span className="font-semibold">
                empowering individuals with the foundational skills to build and
                secure the networks that drive innovation
              </span>
              , protect critical systems, and shape the future of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
