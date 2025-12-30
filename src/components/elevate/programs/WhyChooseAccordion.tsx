import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function WhyChooseAccordion() {
  const accordionItems = [
    {
      title: "Tailored Learning Experiences",
      content:
        "We design training that aligns with your specific goals–whether you're an individual or an organization.",
    },
    {
      title: "Industry-Experienced Trainers",
      content:
        "Learn from experts with hands-on experience in network engineering and emerging technologies.",
    },
    {
      title: "Hands-On Approach",
      content:
        "Our programs emphasize practical, real-world applications to ensure you're job-ready.",
    },
    {
      title: "Focus on Emerging Technologies",
      content:
        "Stay ahead of the curve with training on the latest trends and innovations.",
    },
    {
      title: "Certification Opportunities",
      content:
        "Many of our programs prepare you for industry-recognized certifications, giving your skills a competitive edge.",
    },
  ];

  // Set all items open initially
  const [openItems, setOpenItems] = useState<number[]>(
    accordionItems.map((_, index) => index)
  );

  const toggleAccordion = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-[#E8E5FF] p-16 px-4 md:px-20">
      <div className="">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-grotesk text-5xl font-normal text-gray-900 mb-8">
            Why Choose NetClan Elevate?
          </h1>
          <p className="text-gray-700 text-lg">
            Here's what sets us apart from the rest
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-0">
          {accordionItems.map((item, index) => (
            <div key={index} className="border-b border-[#BDBDBD]">
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-6 flex items-center justify-between text-left hover:bg-white/30 transition-colors px-0"
              >
                <h3 className="font-grotesk text-2xl font-normal text-[#000000]">
                  {item.title}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-gray-900 shrink-0 transition-transform duration-500 ease-in-out ${
                    openItems.includes(index) ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openItems.includes(index)
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-6 px-0">
                  <p className="text-[#000000] text-lg leading-relaxed max-w-3xl">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
