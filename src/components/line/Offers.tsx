import lineOffers from "../../assets/images/lineOffers.jpg";
import barrow from "../../assets/images/bluearrow.png";
import parrow from "../../assets/images/pinkarrow.png";
import dbarrow from "../../assets/images/darkbluearrow.png";

const Offers = () => {
  const contributionItems = [
    {
      title: "Industry-Standard Curriculum",
      text: "Our premier curriculum offers training that equips you with vital skills for today's competitive market, ensuring you stay ahead of industry trends.",
      icon: barrow,
    },
    {
      title: "Expert Mentorship",
      text: "Gain insights from seasoned professionals in our mentorship program, connecting you with industry leaders to apply your knowledge in a supportive environment.",
      icon: parrow,
    },
    {
      title: "Community",
      text: "Join our vibrant community to enhance your skills in network engineering. Together, let's shape the future of technology!",
      icon: dbarrow,
    },
  ];

  return (
    <div className="max-w-full mx-auto md:px-20 pb-25 px-4">
      <div className="grid md:grid-cols-2 gap-18 items-start max-w-[1600px] mx-auto">
        {/* What We Offer */}
        <div className="py-18 text-[#39364F]">
          <h2 className="font-grotesk text-3xl md:text-5xl text-[#060429] font-normal mb-10">
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
                  <h4 className="font-grotesk text-2xl font-normal mb-2">
                    {item.title}
                  </h4>
                  <p className="leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Image */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E4E4E4] w-full h-[650px]">
            <img
              src={lineOffers}
              alt="Organizations"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
