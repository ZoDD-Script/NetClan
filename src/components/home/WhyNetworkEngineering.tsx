import CommunityButtonFill from "../buttons/CommunityButtonFill";

const WhyNetworkEngineering = () => {
  return (
    <section className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <div className="max-w-3xl">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-[#2A254B] mb-6">
          Why <span className="text-[#D36E93]">Network Engineering</span>?
        </h2>

        {/* Paragraph */}
        <p className="text-lg leading-relaxed text-[#2A254B] mb-10">
          Network engineering is the{" "}
          <strong>backbone of our interconnected world</strong>. From ensuring
          seamless communication to securing global systems, network engineers
          play a vital role in shaping the future of technology. Network
          Engineers have a crucial role to play in driving innovation and
          building a safer, more connected world.
        </p>

        {/* Gradient Button */}
        <CommunityButtonFill link="/donate">
          Donate to Our Cause
        </CommunityButtonFill>
      </div>
    </section>
  );
};

export default WhyNetworkEngineering;
