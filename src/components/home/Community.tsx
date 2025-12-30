import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import community from "../../assets/images/community1.png";
import CommunityButton from "../buttons/CommunityButton";

const CommunitySection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0); // default first open

  const accordionItems = [
    {
      title: "Join our webex community",
      content: (
        <>
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            Join our exclusive community for network engineering enthusiasts to
            gain knowledge, sharpen skills, and explore the latest technologies.
          </p>
          <a
            href="/communityApplication"
            className="font-grotesk pb-4 inline-flex items-center gap-2 text-[#DFBBFF] hover:text-white transition-colors text-sm uppercase tracking-wider font-medium group"
          >
            BE PART OF THE CONVERSATION
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </>
      ),
    },
    {
      title: "Partner with us",
      content: (
        <>
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            Join the innovators and professionals driving the evolution of
            Network Engineering in Africa, and help create groundbreaking
            advancements and new opportunities in this vital field.
          </p>
          <a
            href="#"
            className="font-grotesk pb-4 inline-flex items-center gap-2 text-[#DFBBFF] hover:text-white transition-colors text-sm uppercase tracking-wider font-medium group"
          >
            BECOME AN OFFICIAL PARTNER
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </>
      ),
    },
    {
      title: "Fuel the future of network engineering",
      content: (
        <>
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            Help us provide hands-on training, mentorship, and resources to
            passionate individuals eager to build their skills and advance their
            careers in network engineering.
          </p>
          <a
            href="#"
            className="font-grotesk pb-4 inline-flex items-center gap-2 text-[#DFBBFF] hover:text-white transition-colors text-sm uppercase tracking-wider font-medium group"
          >
            HELP US DO MORE GOOD
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </>
      ),
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div className="min-h-[817px] bg-[#DFBBFF4D] p-4 md:p-8 flex items-center justify-center">
      <div className="h-[992px] w-full max-w-[1269px] md:max-h-[673px] bg-[#1F1862] rounded-2xl overflow-hidden shadow-2xl p-5">
        {/* MOBILE: Image on top, content below — DESKTOP unchanged */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* TOP ON MOBILE — LEFT ON DESKTOP */}
          <div className="flex items-center justify-center order-1 md:order-0">
            <div className="w-full max-w-[600px] h-[300px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={community}
                alt="Community meeting"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* BOTTOM ON MOBILE — RIGHT ON DESKTOP */}
          <div className="flex flex-col justify-center space-y-2 order-2 md:order-0">
            <h2 className="font-grotesk text-3xl md:text-5xl font-normal text-white mb-4">
              How to get involved
            </h2>

            {accordionItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-white/20 pb-4 pt-8 cursor-pointer"
              >
                <h3
                  className="font-grotesk text-xl md:text-2xl font-normal text-white flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  {/* <ChevronRight
                    className={`w-5 h-5 transform transition-transform ${
                      openIndex === index ? "rotate-90" : ""
                    }`}
                  /> */}
                </h3>

                {openIndex === index && (
                  <div className="mt-4 space-y-4">{item.content}</div>
                )}
              </div>
            ))}

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
