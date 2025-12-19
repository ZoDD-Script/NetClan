import React from "react";
import thumbs from "../../assets/images/thumbs2.png";
import plant from "../../assets/images/plant.png";
import group from "../../assets/images/Group.png";
import woman from "../../assets/images/woman1.png";
import CommunityButtonFill from "../buttons/CommunityButtonFill";

interface ValueCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
  iconbgColor: string;
  border?: string;
  titleColor?: string;
}

const ValuesComponent = () => {
  const values: ValueCard[] = [
    {
      title: "Community First",
      description:
        "We believe in the power of community and peer-to-peer learning.",
      icon: group,
      iconbgColor: "bg-[#E588A5]",
      bgColor: "bg-[#5880D1]",
      textColor: "text-[#2A2376]",
      border: "border-2 border-white",
    },
    {
      title: "Continuous Learning",
      description:
        "Technology evolves, and so should we. We foster a culture of lifelong learning.",
      icon: thumbs,
      iconbgColor: "bg-[#E588A4]",
      bgColor: "bg-[#2A2376]",
      textColor: "text-[#DFBBFF]",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from curriculum to mentorship.",
      icon: plant,
      iconbgColor: "bg-[#2A2376]",
      bgColor: "bg-[#E588A4]",
      textColor: "text-[#2A2376]",
      border: "border-2 border-white",
    },
    {
      title: "Inclusivity",
      titleColor: "text-[#2A2376]",
      description:
        "Everyone deserves access to quality education regardless of background.",
      icon: woman,
      iconbgColor: "bg-[#E588A4]",
      bgColor: "bg-[#DFBBFF]",
      textColor: "text-[#5880D1]",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-6 md:px-12 lg:px-24">
      {/* Values Section */}
      <div className="mx-auto mb-24 max-w-[1296px] flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12 space-y-9">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-extralight text-[#39364F] mb-6">
            Our Values
          </h1>
          <p className="text-gray-700 text-lg">
            These core values guide{" "}
            <span className="font-semibold">everything we do</span> and shape
            our community culture.
          </p>
        </div>

        {/* Values Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`${value.bgColor} ${value.textColor} rounded-2xl p-8 py-12 max-h-[432px] max-w-[291px] shadow-lg transition-transform hover:scale-105 hover:shadow-xl flex flex-col items-center text-center`}
            >
              {/* Icon */}
              <div
                className={`${value.iconbgColor} ${value.border} bg-opacity-30 rounded-full w-16 h-16 flex items-center justify-center mb-6`}
              >
                <img
                  src={value.icon as string}
                  alt={value.title}
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3
                className={`text-3xl font-extralight mb-4 pt-12 ${
                  value.titleColor ?? "text-white"
                }`}
              >
                {value.title}
              </h3>

              {/* Description */}
              <p
                className={`text-lg leading-relaxed font-extralight opacity-90 ${value.textColor}`}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center pt-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#2A2376] mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-gray-700 text-md mb-8">
          Join our community and begin your journey to becoming a skilled
          network engineer
        </p>
        <CommunityButtonFill>Join the Community</CommunityButtonFill>
      </div>
    </div>
  );
};

export default ValuesComponent;
