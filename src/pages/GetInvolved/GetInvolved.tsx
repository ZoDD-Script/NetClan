import contribute from "../../assets/images/contribute.png";
import barrow from "../../assets/images/bluearrow.png";
import parrow from "../../assets/images/pinkarrow.png";
import dbarrow from "../../assets/images/darkbluearrow.png";
import iarrow from "../../assets/images/indigoarrow.png";

import Hero from "@/components/getInvolved/Hero";
import CommunityCard from "@/components/contact/CommunityCard";
import CommunityButtonFill from "@/components/buttons/CommunityButtonFill";
import CommunityButton from "@/components/buttons/CommunityButton";
import { useState } from "react";
import PartnerModal from "@/components/partner/PartnerModal";
import DonationModal from "@/components/donate/DonationModal";

export default function GetInvolved() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const handleDonationSuccess = (reference: string, amount: number) => {
    console.log("Donation successful!");
    console.log("Reference:", reference);
    console.log("Amount:", amount);

    // You can send this to your backend for verification
    // await fetch('/api/verify-donation', {
    //   method: 'POST',
    //   body: JSON.stringify({ reference, amount })
    // });
  };
  // ========= HEADER TITLES =========
  const headerLines = [
    { pink: "EMPOWER", gray: " Futures" },
    { pink: "BUILD", gray: " Connections" },
    { pink: "TRANSFORM", gray: " Networking" },
  ];

  // ========= CARDS (WAYS TO GET INVOLVED) =========
  const involvementCards = [
    {
      title: "Partner with us",
      text: "Are you an NGO or organization seeking skilled technology talent? Partner with us to connect with emerging professionals who are ready to make an impact. Together, we can bridge the gap between talent and opportunity while fostering innovation in network engineering.",
      button: "Become A Partner",
      bg: "bg-[#DFBBFF]",
      textColor: "text-[#2A2376]",
      pColor: "text-[#39364F]",
      type: "partner",
    },
    {
      title: "Fuel the Future of Networking",
      text: "Together, we're building a brighter future where curiosity meets opportunity. And learning knows no limits. Every contribution powers the tools, talks, and collaborations that shape tomorrow's breakthroughs.",
      button: "Send A Donation",
      bg: "bg-[#E588A4]",
      textColor: "text-[#2A2376]",
      pColor: "text-[#39364F]",
      type: "donation",
    },
  ];

  // ========= CONTRIBUTION METHODS =========
  const contributionItems = [
    {
      title: "Mentorship",
      text: "Share your expertise and experience to guide and inspire our participants throughout their CCNA certification journey.",
      icon: barrow,
    },
    {
      title: "Training",
      text: "Assist in delivering high-quality training sessions, workshops, and hands-on labs to help our participants develop their skills and confidence.",
      icon: parrow,
    },
    {
      title: "Career Guidance",
      text: "Provide valuable career advice, resume-building tips, and interview preparation to help our participants transition smoothly into networking-related careers.",
      icon: dbarrow,
    },
    {
      title: "Community Engagement",
      text: "Help us build a strong and supportive community for women in network engineering by organizing events, meetups, and networking opportunities.",
      icon: iarrow,
    },
  ];

  return (
    <div>
      <Hero />

      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          {/* ========= HEADER SECTION ========= */}
          <div className="font-grotesk mb-16 space-y-12 py-29">
            {headerLines.map((line, idx) => (
              <h1
                key={idx}
                className="text-3xl md:text-6xl font-normal text-center"
              >
                <span className="text-[#D87095]">{line.pink}</span>
                <span className="text-[#2A2376]">{line.gray}</span>
              </h1>
            ))}
          </div>

          {/* ========= WAYS TO GET INVOLVED ========= */}
          <h2 className="font-grotesk text-3xl md:text-5xl font-normal text-center mb-12 text-[#060429]">
            Ways to <span className="text-[#E588A4]">get involved</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-[1312px] pb-28">
            {involvementCards.map((card, idx) => (
              <div
                key={idx}
                className={`${card.bg} p-8 rounded-lg max-w-[644px] flex flex-col`}
              >
                <h3
                  className={`font-grotesk text-4xl font-normal ${card.textColor} mb-4`}
                >
                  {card.title}
                </h3>
                <p className={`${card.pColor} mb-10 leading-relaxed`}>
                  {card.text}
                </p>

                {/* BUTTON USING YOUR CUSTOM COMPONENTS */}
                <div className="mt-auto self-start">
                  {card.type === "partner" ? (
                    <CommunityButtonFill
                      isModal
                      onClick={() => setIsModalOpen(true)}
                      // link=" /partner"
                      bg="bg-[#DFBBFF]"
                    >
                      {card.button}
                    </CommunityButtonFill>
                  ) : (
                    <CommunityButton
                      isModal
                      onClick={() => setIsDonateModalOpen(true)}
                      link="/donate"
                      text="text-white"
                    >
                      {card.button}
                    </CommunityButton>
                  )}
                  <PartnerModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={(data) => console.log(data)}
                  />
                  <DonationModal
                    isOpen={isDonateModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    paystackPublicKey="pk_test_a5da60db68f5a05a0a45c12d80e56e9581a127aa"
                    onSuccess={handleDonationSuccess}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ========= HOW TO CONTRIBUTE ========= */}
          <h2 className="font-grotesk text-3xl md:text-5xl font-normal text-center mb-4 text-[#060429]">
            How To <span className="text-[#E588A4]">Contribute</span>
          </h2>
          <p className="text-center text-lg text-[#38364F] mb-12 max-w-[867px] mx-auto pb-8">
            Your support helps us keep making a difference. Whether through
            volunteering your time, sharing your expertise, or making a
            financial donation, every contribution counts.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            {/* LEFT COLUMN */}
            <div className="space-y-8">
              {contributionItems.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                      <img src={item.icon} alt="Icon" loading="lazy" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-grotesk text-2xl font-normal text-gray-900 mb-4">
                      {item.title}
                    </h4>
                    <p className="text-[#39364F] text-lg">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN IMAGE */}
            <div className="flex items-center justify-center">
              <img src={contribute} alt="Contribute" loading="lazy" />
            </div>
          </div>

          {/* ========= FOOTER CTA ========= */}
          <CommunityCard />
        </div>
      </div>
    </div>
  );
}
