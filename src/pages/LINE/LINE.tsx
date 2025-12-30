import Hero from "@/components/line/Hero";
import line from "../../assets/images/line.png";
import GoalsCard from "@/components/line/GoalsCard";
import Offers from "@/components/line/Offers";
import ProgramOverview from "@/components/line/ProgramOverview";
import Testimonials from "@/components/home/Testimonials";
import StatsSection from "@/components/line/Stats";
// import LiNErSpotlight from "@/components/line/LiNErSpotlight";

const LINE = () => {
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center py-23">
          {/* Image with Torn Paper Effect */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <div className="relative w-full">
              <img
                src={line}
                alt="Team members"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <h2 className="font-grotesk text-2xl md:text-3xl lg:text-5xl font-normal text-[#39364F] mb-8">
              Nurturing Future Women in Network Engineering
            </h2>
            <p className="text-[#38364F] text-lg leading-relaxed">
              At LiNE,{" "}
              <span className="font-bold text-[#38364F]">
                {" "}
                we're on a mission to support, inspire, and empower African
                women to thrive in the dynamic field of network engineering.
              </span>{" "}
              Whether you're just starting your journey or you're a seasoned
              professional, this program is your gateway to launching a
              successful career in network engineering while building the
              confidence and expertise to thrive in a competitive industry.
            </p>
          </div>
        </div>
      </div>
      <GoalsCard />
      <Offers />
      <ProgramOverview />
      <StatsSection />
      <Testimonials />
      {/* <LiNErSpotlight /> */}
    </div>
  );
};

export default LINE;
