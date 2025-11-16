import VisionMissionSection from "@/components/home/VissionaryMision";
import Hero from "@/components/home/Hero";
import WhyNetworkEngineering from "@/components/home/WhyNetworkEngineering";
import Stats from "@/components/home/Stats";
import Carousel from "@/components/home/Carousel";
import Initiatives from "@/components/home/Initiatives";
import Testimonials from "@/components/home/Testimonials";

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
    </div>
  );
}
