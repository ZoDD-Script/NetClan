import overview1 from "../../assets/images/overview1.jpg";
import overview2 from "../../assets/images/overview2.jpg";
import overview3 from "../../assets/images/overview3.jpg";

export default function ProgramOverview() {
  const highlights = [
    {
      title: "Comprehensive CCNA Curriculum",
      description:
        "Gain in-depth knowledge of networking fundamentals, routing and switching, security, automation, and more.",
      image: overview1,
    },
    {
      title: "Hands-On Learning",
      description:
        "Practical labs, team-based projects, and interactive sessions to build skills that matter.",
      image: overview2,
    },
    {
      title: "CCNA Certification Opportunity",
      description:
        "Select students will have the chance to attain the globally recognized CCNA certification at no cost.",
      image: overview3,
    },
  ];

  return (
    <div className="w-full bg-[#E8E5FF] py-25 px-4 flex justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        {/* Overview Section */}
        <div className="text-center mb-16">
          <h1 className="font-grotesk text-5xl font-light text-[#060429] mb-6">
            Overview
          </h1>
          <p className="text-[#39364F] text-lg max-w-4xl mx-auto leading-relaxed">
            This is a free and intensive program, designed to equip women with
            the technical knowledge and soft skills needed to succeed in network
            engineering. This program covers the full CCNA curriculum, providing
            participants with a strong foundation in networking concepts.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="mb-16 max-w-[1296px]">
          <h2 className="font-grotesk text-4xl font-normal text-[#01060B] mb-8">
            Key Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-16">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex flex-col">
                {/* Image Card */}
                <div className="relative mb-4 rounded-3xl overflow-hidden shadow-lg h-64">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="font-grotesk text-2xl font-normal text-[#01060B] mb-3 -tracking-tightest [word-spacing:-2px]">
                    {highlight.title}
                  </h3>
                  <p className="text-[#01060B] leading-relaxed text-lg">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Duration Section */}
        <div className="text-center">
          <h2 className="font-grotesk text-3xl font-normal text-[#060429] mb-3">
            Duration | 7 Months
          </h2>
          <p className="text-[#01060B] font-medium mb-6">
            Registrations are now CLOSED
          </p>

          <button
            disabled
            className="px-13 py-3 bg-linear-to-r from-[#1D439E] to-[#D36E93] text-white font-medium rounded-md cursor-not-allowed opacity-25"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
