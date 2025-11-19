import React from "react";
import { ChevronRight } from "lucide-react";
import community from "../../assets/images/community1.png";
import CommunityButton from "../buttons/CommunityButton";

const CommunitySection: React.FC = () => {
  return (
    <div className="min-h-[817px] bg-[#DFBBFF4D] p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-[1269px] max-h-[673px] bg-[#1F1862] rounded-2xl overflow-hidden shadow-2xl p-5">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side - Image */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[600px] h-[635px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={community}
                alt="Community meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-normal text-white mb-4">
              How to get involved
            </h2>

            {/* Join our webex community */}
            <div className="border-b border-white/20 pt-8 space-y-4">
              <h3 className="text-2xl md:text-3xl font-normal text-white">
                Join our webex community
              </h3>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Join our exclusive community for network engineering enthusiasts
                to gain knowledge, sharpen skills, and explore the latest
                technologies.
              </p>
              <a
                href="#"
                className="pb-4 inline-flex items-center gap-2 text-[#DFBBFF] hover:text-white transition-colors text-sm uppercase tracking-wider font-medium group"
              >
                BE PART OF THE CONVERSATION
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Partner with us */}
            <div className="border-b border-white/20 pb-4 pt-2">
              <h3 className="text-xl md:text-2xl font-normal text-white">
                Partner with us
              </h3>
            </div>

            {/* Fuel the future */}
            <div className="border-b border-white/20 pb-4 pt-2">
              <h3 className="text-xl md:text-2xl font-normal text-white">
                Fuel the future of network engineering
              </h3>
            </div>

            {/* Button */}
            <div className="pt-15">
              <CommunityButton text="text-white">
                Join The Community
              </CommunityButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
