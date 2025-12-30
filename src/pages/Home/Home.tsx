import VisionMissionSection from "@/components/home/VissionaryMision";
import Hero from "@/components/home/Hero";
import WhyNetworkEngineering from "@/components/home/WhyNetworkEngineering";
import Stats from "@/components/home/Stats";
import Carousel from "@/components/home/Carousel";
import Initiatives from "@/components/home/Initiatives";
import Testimonials from "@/components/home/Testimonials";
import CommunitySection from "@/components/home/Community";
import PartnersSection from "@/components/home/Partners";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyNetworkEngineering />
      <VisionMissionSection />
      <Stats />
      <Carousel />
      <Initiatives />
      <div className="text-center mt-16">
        <h1 className="font-grotesk text-5xl font-normal text-gray-800 mb-6">
          <span className="text-[#39364F]">Success</span>
          <span className="text-[#E588A4]"> Stories</span>
        </h1>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
          Discover the inspiring stories of our students and sponsors as they
          share their experiences and the impact our program has had on their
          lives.{" "}
          <span className="font-semibold">
            From personal growth to professional development,
          </span>{" "}
          hear firsthand how our community is making a difference.
        </p>
      </div>
      <Testimonials />
      <CommunitySection />
      <PartnersSection />
    </div>
  );
}
