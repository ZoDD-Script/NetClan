import { Button } from "../ui/button";

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
        <div className="inline-block p-0.5 rounded-sm bg-linear-to-r from-[#1D439E] to-[#D36E93]">
          <Button
            variant="outline"
            className="px-8 py-6 border-none rounded-sm text-lg bg-[#E6DADA] hover:bg-[#E6DADA] cursor-pointer"
          >
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#1D439E] to-[#D36E93]">
              Donate To Our Cause
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyNetworkEngineering;
