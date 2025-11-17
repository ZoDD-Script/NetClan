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
      <Testimonials />
      <CommunitySection />
      <PartnersSection />
    </div>
  );
}
