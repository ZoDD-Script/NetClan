import pinkShape from "../../assets/images/vector1.png";
import purpleSquares from "../../assets/images/purpleSquares.png";
import nShape from "../../assets/images/vector2.png";
import missionLargeShape from "../../assets/images/vector3.png";
import vector9 from "../../assets/images/vector9.png";
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
        <div className="relative bg-[#5880D1] rounded-xl p-8 text-white overflow-hidden md:col-span-2 h-[544px] md:max-h-[423px]">
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
        <div className="relative bg-[#2A2376] rounded-xl p-8 text-white overflow-hidden min-h-[423px]">
          {/* 🔒 LOGO + N SHAPE (OVERLAY, NOT FLEX ITEM) */}
          <div className="absolute top-0 left-0 pointer-events-none">
            <div className="relative top-8 left-6">
              <img src={logo} alt="logo" className="w-20" />
            </div>

            <img
              src={nShape}
              alt=""
              className="relative left-8 -top-8 w-[312px] opacity-95"
            />
          </div>

          {/* Purple transparent squares */}
          <img
            src={purpleSquares}
            alt=""
            className="absolute right-55 bottom-15 opacity-40 w-28 pointer-events-none"
          />
          <img
            src={purpleSquares}
            alt=""
            className="absolute right-89 bottom-79 opacity-40 w-[71px] pointer-events-none"
          />
          <img
            src={purpleSquares}
            alt=""
            className="absolute right-36 bottom-86 opacity-40 w-[52px] pointer-events-none"
          />
          <img
            src={purpleSquares}
            alt=""
            className="absolute right-20 bottom-58 opacity-40 w-[77px] pointer-events-none"
          />
          <img
            src={purpleSquares}
            alt=""
            className="absolute right-15 bottom-23 opacity-40 w-[62px] pointer-events-none"
          />

          {/* ✅ BOTTOM-LEFT TEXT (EXPLICITLY ANCHORED) */}
          <div className="absolute bottom-8 left-8 text-4xl text-[#DFBBFF] font-extralight leading-tight">
            <p>Learn</p>
            <p>Connect</p>
            <p>Grow</p>
          </div>
        </div>
      </div>

      {/* ================= MISSION SECTION ================= */}
      <div className="relative bg-[#2A2376] rounded-xl py-10 px-4 md:p-10 text-white overflow-hidden min-h-[478px] md:min-h-[407px] flex flex-col items-start">
        {/* 🔒 TEXT BLOCK */}
        <div className="max-w-[573px] flex flex-col /* Mobile → bottom */ mt-auto /* Desktop → center vertically */ md:my-auto">
          {/* TITLE */}
          <h2 className="text-5xl font-medium mb-4 /* Mobile first */ order-1 /* Desktop after paragraph */ md:order-2">
            Our Mission
          </h2>

          {/* PARAGRAPH */}
          <p className="text-lg leading-relaxed font-extralight /* Mobile second */ order-2 /* Desktop first */ md:order-1">
            Our mission extends beyond simply providing technical instruction.
            <br />
            We foster a supportive network of peers and mentors, cultivating the
            next generation of technical leaders.
          </p>
        </div>

        {/* TAG IMAGES */}
        <img
          src={woman}
          className="absolute -right-4 top-45 w-[120px] md:right-40 md:top-13 md:w-[134px]"
        />
        <img
          src={growth}
          className="absolute right-10 w-[120px] md:right-100 md:bottom-13 md:w-[126px]"
        />
        <img
          src={community}
          className="absolute top-35 w-[120px] md:right-10 md:bottom-23 md:w-[150.84px]"
        />

        {/* BACKGROUND SHAPE */}
        <img
          src={missionLargeShape}
          alt=""
          className="absolute md:block hidden bottom-0 right-5 w-[866.22px] pointer-events-none"
        />
        <img
          src={vector9}
          alt=""
          className="absolute md:hidden block left-0 top-15 md:bottom-0 md:right-5 pointer-events-none"
        />

        {/* DECORATIONS */}
        <img
          src={arrow}
          alt=""
          className="absolute md:right-117 md:top-23 md:w-12 w-10"
        />
        <img
          src={thumbsUp}
          alt=""
          className="absolute right-70 bottom-43 w-[71px] hidden md:block"
        />
      </div>
    </section>
  );
}
