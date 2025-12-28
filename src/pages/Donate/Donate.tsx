import CommunityCard from "@/components/contact/CommunityCard";
import Hero from "@/components/donate/donate";
import donate from "../../assets/images/donate.png";
import CommunityButton from "@/components/buttons/CommunityButton";
import { useState } from "react";
import DonationModal from "@/components/donate/DonationModal";

const Donate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const headerLines = [
    { pink: "JOIN", gray: " Us" },
    { pink: "EMPOWER", gray: " Talents" },
    { pink: "SHAPE", gray: " Tomorrow" },
  ];

  return (
    <div>
      <Hero />

      <div className="min-h-screen flex flex-col items-center">
        <div className="w-full ">
          {/* ========= HEADER SECTION ========= */}
          <div className="md:mb-16 space-y-12 py-29">
            {headerLines.map((line, idx) => (
              <h1
                key={idx}
                className="text-3xl md:text-6xl font-light text-center"
              >
                <span className="text-[#D87095]">{line.pink}</span>
                <span className="text-[#2A2376]">{line.gray}</span>
              </h1>
            ))}
          </div>

          <div className="mx-auto mb-20 flex items-center justify-center min-h-[400px]">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-[1246px]">
              <div className="px-4">
                <h1 className="text-3xl md:text-5xl font-light text-[#39364F] mb-6 leading-tight">
                  Become A Part Of Those Fueling The Future
                </h1>
                <p className="text-[#38364F] leading-relaxed">
                  Your donation supports emerging network engineers with
                  training, mentorship, and career opportunities.
                </p>
                <p className="text-[#38364F] mb-8 leading-relaxed">
                  Help us build a stronger, more connected future, one engineer
                  at a time.
                </p>
                <CommunityButton link="/donate" text="text-white">
                  Start Making Impact
                </CommunityButton>
              </div>
              <div className="flex justify-center px-4">
                <div className="relative">
                  <img src={donate} alt="Network engineers" loading="lazy" />
                </div>
              </div>
            </div>
          </div>

          {/* Ways to Donate Section */}
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-light text-center text-[#39364F] mb-12">
              Ways to donate
            </h2>

            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* In-Kind Donations Card */}
              <div className="bg-[#E588A4] rounded-2xl p-8 text-[#FFFFFF] shadow-xl">
                <h3 className="text-3xl font-light mb-4">In-Kind Donations</h3>
                <p className="mb-6 opacity-90">
                  We welcome in-kind contributions that directly support our
                  mission. <br /> Here's how you can help:
                </p>

                <ul className="space-y-4 mb-6 font-light px-3">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Laptops: Provide students with the tools to participate in
                      training and hands-on labs.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Network Engineering Gear: Equipment like routers,
                      switches, and other networking tools are invaluable for
                      hands-on learning.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Books: Technical books and study guides on networking and
                      emerging technologies.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Vouchers: Contribute by offering vouchers for
                      certifications, training platforms, or educational tools.
                    </span>
                  </li>
                </ul>

                <p className="opacity-90 text-[#2A2376]">
                  Please reach out to us on{" "}
                  <span className="font-semibold">info@thenetclan.org</span> to
                  donate items in kind
                </p>
              </div>

              {/* Cash Donations Card (shorter) */}
              <div className="bg-[#5880D1] rounded-2xl p-8 text-white shadow-xl self-start">
                <h3 className="text-3xl font-light mb-4">Cash Donations</h3>
                <p className="mb-10 leading-relaxed">
                  Are you an NGO or organization seeking skilled networking
                  talent? Partner with us to connect with emerging professionals
                  who are ready to make an impact. Together, we can bridge the
                  gap between talent and opportunity while fostering innovation
                  in network engineering.
                </p>

                <CommunityButton
                  link="/donate"
                  onClick={() => setIsModalOpen(true)}
                >
                  Donate to Our Cause
                </CommunityButton>
              </div>
              <DonationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                paystackPublicKey="pk_test_a5da60db68f5a05a0a45c12d80e56e9581a127aa"
                onSuccess={handleDonationSuccess}
              />
            </div>
          </div>

          {/* ========= FOOTER CTA ========= */}
          <CommunityCard />
        </div>
      </div>
    </div>
  );
};

export default Donate;
