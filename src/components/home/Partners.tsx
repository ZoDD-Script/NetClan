import React from "react";
import partners from "../../assets/images/partners.png";
import vector4 from "../../assets/images/vector4.png";
import purpleSquares from "../../assets/images/purpleSquares.png";
import CommunityButtonFill from "../buttons/CommunityButtonFill";

const PartnersSection: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Partners Card */}
        <div className="relative bg-[#FFFFFFE5] rounded-3xl shadow-lg p-12 md:p-16 max-w-[1269px] w-full mx-auto">
          <img src={vector4} alt="" className="absolute left-0 bottom-5" />

          <img
            src={purpleSquares}
            alt=""
            className="absolute right-57 top-6 rounded-md opacity-10 w-28 pointer-events-none bg-[#5880D1]"
          />
          <img
            src={purpleSquares}
            alt=""
            className="absolute right-15 bottom-47 rounded-md opacity-10 w-[71px] pointer-events-none bg-[#5880D1]"
          />
          <img
            src={purpleSquares}
            alt=""
            className="absolute right-56 bottom-13 rounded-md opacity-10 w-[52px] pointer-events-none bg-[#5880D1]"
          />

          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-light pb-9">
              <span className="text-[#39364F]">Our</span>{" "}
              <span className="text-[#5880D1]"> Partners</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Our partners supporting in our journey
            </p>
          </div>

          {/* Partner Logo */}
          <div className="flex items-center justify-center py-8">
            <div className="flex items-center gap-4">
              {/* Cisco Logo */}
              <img
                src={partners}
                alt="partners_logo"
                className="max-w-[247px]"
              />
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-medium text-[#2A2376]">
            Lets Get Your Career Boosted
          </h2>

          <p className="text-gray-600 text-md max-w-[680px] mx-auto">
            Ready to take your career to the next level? Join The Net Clan and
            gain access to cutting-
            <br />
            edge training, mentorship, and a supportive community. Start your
            journey towards
            <br /> becoming a tech leader today!
          </p>

          <CommunityButtonFill>Join The Community</CommunityButtonFill>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
