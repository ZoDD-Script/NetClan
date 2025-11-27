import { ArrowRight } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const Initiatives = () => {
  const initiatives = [
    {
      title: "Accessible Education for Network Enthusiasts",
      program: "NetClan Institute",
      bgColor: "bg-[#5880D1]",
      textColor: "text-white",
      programColor: "text-[#DFBBFF]",
      hasArrow: true,
      link: "/institute",
    },
    {
      title: "Bridging the Gap in Network Engineering",
      program: "LiNE Development Initiative",
      bgColor: "bg-[#E588A4]",
      textColor: "text-white",
      programColor: "text-[#2A2376]",
      hasArrow: false,
      link: "/line",
    },
    {
      title: "Training Talent, Empowering Business",
      program: "NetClan Elevate",
      bgColor: "bg-[#DFBBFF]",
      programColor: "text-[#5880D1]",
      textColor: "text-[#2A2376]",
      hasArrow: false,
      link: "/elevate2",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 text-[#39364F]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-gray-800 mb-6">
            <span className="text-[#E588A4]">Our</span>
            <span className="text-[#39364F]"> Initiatives</span>
          </h2>
          <p className="text-[#39374F] text-lg max-w-[867px] mx-auto">
            Our programs are tailored to provide{" "}
            <span className="font-semibold">
              the best support at every phase of your networking journey
            </span>
            .
            <br />
            From beginner prep to intensive skill-building sessions and career
            mentorship, we've got you covered.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 ">
          {initiatives.map((initiative, index) => (
            <RouterLink to={initiative.link}>
              <div
                key={index}
                className={`${initiative.bgColor} ${initiative.textColor} rounded-xl p-10 min-h-[450px] flex flex-col justify-between relative overflow-hidden transition-all duration-300 cursor-pointer group`}
              >
                {/* Background decorative elements */}
                <div className="absolute bottom-17 left-1/4 w-32 h-32 bg-white/10 rounded-md"></div>
                <div className="absolute bottom-15 right-8 w-[62px] h-[63px] bg-white/10 rounded-md"></div>
                <div className="absolute top-28 right-10 w-[77px] h-[78px] bg-white/10 rounded-md"></div>
                <div className="absolute top-8 right-27 w-[52px] h-[53px] bg-white/10 rounded-md"></div>
                <div className="absolute top-8 left-7 w-[71px] h-[74px] bg-white/10 rounded-md"></div>

                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-3xl font-light leading-tight mb-4">
                    {initiative.title}
                  </h2>
                </div>

                <div className="relative z-10 flex items-end justify-between">
                  <div>
                    <h3
                      className={`text-3xl max-w-[214px] font-light leading-tight ${initiative.programColor}`}
                    >
                      {initiative.program}
                    </h3>
                  </div>
                  <div className="flex items-center justify-center translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <ArrowRight className="w-10 h-10" strokeWidth={2} />
                  </div>
                </div>
              </div>
            </RouterLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Initiatives;
