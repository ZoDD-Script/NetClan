import orgamizations from "../../../assets/images/oraganizations.jpg";
import barrow from "../../../assets/images/bluearrow.png";
import parrow from "../../../assets/images/pinkarrow.png";
import dbarrow from "../../../assets/images/darkbluearrow.png";
import iarrow from "../../../assets/images/indigoarrow.png";

const Offers = () => {
  const contributionItems = [
    {
      title: "Customised Training Solutions",
      text: "Tailored programs designed to meet your team's skill development goals.",
      icon: barrow,
    },
    {
      title: "Hands-On, Practical Learning",
      text: "Real-world scenarios and interactive labs to ensure learning is applied effectively.",
      icon: parrow,
    },
    {
      title: "Expert-Led Instruction",
      text: "Access to highly skilled trainers with industry experience.",
      icon: dbarrow,
    },
    {
      title: "Emerging Technologies Focus",
      text: "Stay ahead by training your team on the latest advancements such as SDN, AI/ML, Programmability & Automation, etc.",
      icon: iarrow,
    },
  ];

  return (
    <div className="max-w-full mx-auto px-4 md:px-20 pb-25">
      <p className="text-center text-[#39364F] mb-12 max-w-3xl mx-auto">
        We specialize in curating customized training programs for organizations
        looking to enhance their teams' technical skills. Our professional
        services are designed to address your business needs while driving
        innovation and productivity.
      </p>

      <div className="grid md:grid-cols-2 gap-18 items-start max-w-[1600px] mx-auto">
        {/* Team Image */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E4E4E4] w-full h-[650px]">
            <img
              src={orgamizations}
              alt="Organizations"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* What We Offer */}
        <div className="py-18 text-[#39364F]">
          <h2 className="text-3xl md:text-5xl text-[#060429] font-light mb-10">
            What We Offer
          </h2>

          <div className="space-y-10">
            {contributionItems.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-7 h-7 flex items-center justify-center">
                    <img src={item.icon} alt="Icon" loading="lazy" />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
