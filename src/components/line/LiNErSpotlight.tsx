import liner from "../../assets/images/liner.png";
import CommunityButton from "../buttons/CommunityButton";
import CommunityButtonFill from "../buttons/CommunityButtonFill";
import logo from "../../assets/logo/netclancolored.svg";

export default function LiNErSpotlight() {
  return (
    <div className="min-h-screen py-16 px-4 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Card - Pink Background with Image */}
          <div className="bg-[#E588A4] rounded-3xl p-12 flex flex-col items-center">
            {/* Logo */}
            <div className="mb-8">
              <img src={logo} alt="LiNE Logo" loading="lazy" className="w-15" />
            </div>

            {/* Title */}
            <h2 className="text-5xl font-light text-[#2A2376] text-center">
              LiNEr
            </h2>
            <h3 className="text-5xl font-light text-[#2A2376] text-center mb-2">
              Spotlight:
            </h3>

            {/* Subtitle */}
            <p className="text-[#39364F] text-center mb-8 text-lg">
              From Skincare Specialist to Network <br /> Security Engineer
            </p>

            {/* Image with decorative text */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img src={liner} alt="Agina Sualeze" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <h4 className="text-2xl font-normal text-[#060429] mb-8">
              Hear from other girls like Agina
            </h4>

            {/* Quote */}
            <blockquote className="text-[#39364F] text-2xl leading-relaxed mb-8">
              "Passing the CCNA was a huge accomplishment. I was the first one
              in my cohort to pass, which was so exciting! And of course,
              landing my dream role as a system engineer in a network security
              team was a dream come true."
            </blockquote>

            {/* Name and Title */}
            <div className="mb-8">
              <h5 className="text-3xl font-light text-[#39364F] mb-1">
                Agina Sualeze
              </h5>
              <p className="text-[#666666] text-2xl">LiNEr</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <CommunityButton text="text-white max-w-[260px] h-[50px] text-sm ">
                Sponsor A LiNEr Today
              </CommunityButton>
              <CommunityButtonFill text="max-h-[48px] text-sm">
                See Linkein Post
              </CommunityButtonFill>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
