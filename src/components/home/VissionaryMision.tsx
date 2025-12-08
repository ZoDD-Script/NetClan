import pinkShape from "../../assets/images/vector1.png";
import purpleSquares from "../../assets/images/purpleSquares.png";
import nShape from "../../assets/images/vector2.png";
import missionLargeShape from "../../assets/images/vector3.png";
import arrow from "../../assets/images/arrow.png";
import thumbsUp from "../../assets/images/thumbs.png";

import community from "../../assets/images/community.png";
import growth from "../../assets/images/growth.png";
import image1 from "../../assets/images/image1.png";
import woman from "../../assets/images/woman.png";
import logo from "../../assets/logo/netclan.svg";

export default function VisionMissionSection() {
  return (
    <section className="bg-[#E9DCD6] px-6 md:px-20 py-10 space-y-10">
      {/* ================= TOP GRID ================= */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* ================= VISION (Left, 2 columns) ================= */}
        <div className="relative bg-[#5880D1] rounded-xl p-8 text-white overflow-hidden md:col-span-2 h-[544px] md:min-h-[423px]">
          {/* Text */}
          <h2 className="text-5xl font-medium mb-4 pt-12">Our Vision</h2>
          <p className="max-w-md text-lg leading-relaxed font-extralight">
            We are a community-driven training and development organization
            dedicated to empowering aspiring <br /> network & infrastructure
            engineers.
          </p>

          {/* Pink abstract background */}
          <img
            src={pinkShape}
            alt=""
            className="absolute bottom-0 right-0 w-[494.69px] opacity-90 pointer-events-none"
          />

          {/* Woman image */}
          <img
            src={image1}
            alt="woman"
            className="absolute bottom-0 right-6 w-[600px] md:w-[600px] pointer-events-none"
          />
        </div>

        {/* ================= RIGHT BLOCK ================= */}
        <div className="relative bg-[#2A2376] rounded-xl p-8 text-white overflow-hidden flex flex-col justify-between min-h-[423px]">
          {/* Top-left branding */}
          <div className="text-xl font-bold mb-4 flex items-center gap-1">
            <img src={logo} alt="logo" className="pt-5" />
          </div>

          {/* N-shaped block */}
          <img
            src={nShape}
            alt=""
            className="absolute right-23 top-15 w-[312px] opacity-95"
          />

          {/* Purple transparent squares */}
          <img
            src={purpleSquares}
            alt=""
            className="absolute right-55 bottom-15 opacity-40 w-28 pointer-events-none bg-[#D9D9D914]"
          />
          <img
            src={purpleSquares}
            alt=""
            className="absolute right-89 bottom-79 opacity-40 w-[71px] pointer-events-none bg-[#D9D9D914]"
          />
          <img
            src={purpleSquares}
            alt=""
            className="absolute right-36 bottom-86 opacity-40 w-[52px] pointer-events-none bg-[#D9D9D914]"
          />
          <img
            src={purpleSquares}
            alt=""
            className="absolute right-20 bottom-58 opacity-40 w-[77px]  pointer-events-none bg-[#D9D9D914]"
          />
          <img
            src={purpleSquares}
            alt=""
            className="absolute right-15 bottom-23 opacity-40 w-[62px] pointer-events-none bg-[#D9D9D914]"
          />

          {/* Learn / Connect / Grow */}
          <div className="relative text-4xl text-[#DFBBFF] font-extralight leading-tight space-y-0 mt-12">
            <p>Learn</p>
            <p>Connect</p>
            <p>Grow</p>
          </div>
        </div>
      </div>

      {/* ================= MISSION SECTION ================= */}
      <div className="relative bg-[#2A2376] rounded-xl p-10 text-white overflow-hidden min-h-[407px] flex flex-col items-start justify-center h-full">
        {/* Long description */}
        <p className="max-w-[573px] text-lg leading-relaxed font-extralight align-middle">
          Our mission extends beyond simply providing technical instruction.{" "}
          <br /> We foster a supportive network of peers and mentors,
          cultivating the next generation of technical leaders.
        </p>

        {/* Title */}
        <h2 className="text-5xl font-medium mb-4 pt-7">Our Mission</h2>

        {/* Tags */}
        <div className="flex gap-3 mb-6">
          <span className="absolute right-40 top-13">
            <img src={woman} className="w-[134px]" alt="woman" />
          </span>

          <span className="absolute right-100 bottom-13">
            <img src={growth} className="w-[126px]" alt="growth" />
          </span>

          <span className="absolute right-10 bottom-23">
            <img src={community} className="w-[150.84px]" alt="community" />
          </span>
        </div>

        {/* Big diagonal purple shape */}
        <img
          src={missionLargeShape}
          alt=""
          className="absolute bottom-0 right-5 w-[866.22px]  pointer-events-none"
        />

        {/* Pink arrow */}
        <img src={arrow} alt="" className="absolute right-117 top-23 w-12" />

        {/* Thumbs up sticker */}
        <img
          src={thumbsUp}
          alt=""
          className="absolute right-70 bottom-43 w-[71px] hidden md:block"
        />
      </div>
    </section>
  );
}
