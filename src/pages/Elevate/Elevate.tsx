import Hero from "@/components/elevate/Hero";
import elevate from "../../assets/images/elevate.png";
import TrainingPrograms from "@/components/elevate/TrainingProgramme";

const Elevate = () => {
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center py-23">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-light text-[#39364F] mb-8">
              Unlocking Potential, Driving Innovation
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are dedicated to empowering organizations and individuals with
              cutting-edge, hands-on training in the field of network
              engineering. Whether you're a business looking to upskill your
              workforce or an individual ready to take your career to the next
              level, we offer tailor-made learning experiences led by our pool
              of highly skilled trainers and instructors. Let us help you build
              expertise and stay ahead in today's fast-evolving technological
              landscape.
            </p>
          </div>

          {/* Image with Torn Paper Effect */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full">
              <img
                src={elevate}
                alt="Team members"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <TrainingPrograms />
    </div>
  );
};

export default Elevate;
