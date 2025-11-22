import CommunityButton from "@/components/buttons/CommunityButton";
import Hero from "@/components/institute/Hero";
import InstituteCourses from "@/components/institute/InstituteCourses";

const Institute = () => {
  return (
    <div>
      <Hero />
      <InstituteCourses />
      <div className="max-w-4xl mx-auto text-center pt-14 pb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#2A2376] mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-gray-700 text-md mb-8">
          Join our community and begin your journey to becoming a skilled
          network engineer
        </p>
        <CommunityButton text="text-[#FFFFFF]">
          Join the Community
        </CommunityButton>
      </div>
    </div>
  );
};

export default Institute;
