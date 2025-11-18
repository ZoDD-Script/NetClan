import CommunityCard from "@/components/contact/CommunityCard";
import ContactFAQ from "@/components/contact/ContactForm";
import Details from "@/components/contact/Details";
import Hero from "@/components/contact/Hero";

import arrow from "../../assets/images/arrow1.png";
import vector8 from "../../assets/images/vector8.png";

const ContactUs = () => {
  return (
    <div className="relative">
      <img src={arrow} alt="" className="absolute z-5 right-15 top-305 w-50" />
      <img src={vector8} alt="" className="absolute z-5 right-0 top-205" />
      <Hero />
      <Details />
      <ContactFAQ />
      <CommunityCard />
    </div>
  );
};

export default ContactUs;
