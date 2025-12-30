import { ChevronRight } from "lucide-react";

const Bootcamps = () => {
  return (
    <div>
      <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        We provide targeted training programs for individuals seeking to master
        new tech skills. Our courses are designed to meet your learning goals
        while boosting your expertise and career prospects.
      </p>

      {/* Paid Bootcamps Section */}
      <div className="rounded-lg p-8 md:px-20">
        <h2 className="font-grotesk text-5xl font-normal text-gray-900 text-center mb-8">
          Paid Bootcamps
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Network Essentials Bootcamp */}
          <div className="bg-white rounded-lg p-8 shadow-sm flex flex-col">
            <h3 className="font-grotesk text-3xl font-normal text-[#060429] mb-4">
              Network Essentials Bootcamp
            </h3>
            <p className="text-[#39364F] font-grotesk mb-4 text-xl font-normal">
              Instructor: Cisco Nerd & Olúmáyọ̀wá.dev
            </p>

            <p className="text-[#39364F]">
              Ideal for beginners starting their journey in network engineering.
            </p>
            <ul className="list-disc text-g[#39364F] space-y-1 mb-6 pl-6">
              <li>
                Covers networking basics, IP addressing, subnetting, and an
                introduction to routing and switching.
              </li>
              <li>
                Hands-on labs to help you build a solid foundation in network
                engineering fundamentals.
              </li>
            </ul>

            <div className="font-grotesk space-y-1 text-lg mb-8 text-[#476CC8] tracking-widest">
              <p>
                <span className="font-light">DURATION:</span> 12 Weeks
              </p>
              <p>
                <span className="font-light">HOURS:</span> 4 hours a week
              </p>
              <p>
                <span className="font-light">SCHEDULE:</span> Mondays & Tuesdays
                6pm - 8pm WAT
              </p>
            </div>

            {/* Button aligned bottom-left */}
            <button className="text-[#D06F95] font-grotesk tracking-widest text-lg font-normal flex items-center gap-1 hover:gap-2 transition-all mt-auto cursor-pointer">
              REGISTER <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* CCNA Bootcamp */}
          <div className="bg-white rounded-lg p-8 shadow-sm flex flex-col">
            <h3 className="font-grotesk text-3xl font-normal text-[#060429] mb-4">
              CCNA Bootcamp
            </h3>
            <p className="text-[#39364F] font-grotesk mb-4 text-xl font-normal">
              Instructor: Cisco Nerd & Olúmáyọ̀wá.dev
            </p>

            <p className="text-[#39364F] mb-6">
              A deep dive into Cisco's CCNA curriculum, covering networking
              fundamentals, routing and switching, security, and automation.
              Includes hands-on labs and preparation for the CCNA certification
              exam.
            </p>

            <div className="font-grotesk space-y-1 text-lg mb-8 text-[#476CC8] tracking-widest">
              <p>
                <span className="font-light">DURATION:</span> 12 Weeks
              </p>
              <p>
                <span className="font-light">HOURS:</span> 4 hours a week
              </p>
              <p>
                <span className="font-light">SCHEDULE:</span> Mondays & Tuesdays
                6pm - 8pm WAT
              </p>
            </div>

            <button className="text-[#D06F95] font-grotesk tracking-widest text-lg font-normal flex items-center gap-1 hover:gap-2 transition-all mt-auto cursor-pointer">
              REGISTER <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* CCNP Bootcamp */}
          <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col">
            <h3 className="font-grotesk text-3xl font-normal text-[#060429] mb-4">
              CCNP Bootcamp
            </h3>
            <p className="text-[#39364F] font-grotesk mb-4 text-xl font-normal">
              Instructor: Cisco Nerd & Olúmáyọ̀wá.dev
            </p>

            <p className="text-[#39364F]">
              Designed for professionals advancing to the next level of
              expertise in Cisco networking.
            </p>
            <ul className="list-disc text-gray-700 space-y-1 mb-6 pl-6">
              <li>
                Covers advanced routing, switching, and troubleshooting, along
                with automation, SD-WAN, and network programmability.
              </li>
              <li>Hands-on labs prepare you for CCNP certification exams.</li>
            </ul>

            <div className="font-grotesk space-y-1 text-lg mb-8 text-[#476CC8] tracking-widest">
              <p>
                <span className="font-light">DURATION:</span> 12 Weeks
              </p>
              <p>
                <span className="font-light">HOURS:</span> 4 hours a week
              </p>
              <p>
                <span className="font-light">SCHEDULE:</span> Mondays & Tuesdays
                6pm - 8pm WAT
              </p>
            </div>

            <button className="text-[#D06F95] font-grotesk tracking-widest text-lg font-normal flex items-center gap-1 hover:gap-2 transition-all mt-auto cursor-pointer">
              REGISTER <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootcamps;
