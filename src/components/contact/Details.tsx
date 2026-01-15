import trend from "../../assets/icons/trend.svg";
import hat from "../../assets/icons/hat.svg";
// import people from "../../assets/icons/people.svg";
// import fill from "../../assets/icons/fill.svg";

export default function ContactCards() {
  const contacts = [
    {
      icon: hat,
      iconBg: "bg-[#5880D1]",
      cardBg: "bg-[#E588A4]",
      title: "Email",
      content: "info@thenetclan.org",
      textColor: "text-white",
    },
    // {
    //   icon: people,
    //   iconBg: "bg-[#E588A4]",
    //   cardBg: "bg-[#2A2376]",
    //   title: "Phone",
    //   content: "+1 (555) 123-4567",
    //   textColor: "text-white",
    // },
    {
      icon: trend,
      iconBg: "bg-[#2A2376]",
      cardBg: "bg-[#5880D1]",
      title: "Office hours",
      content: "Mon-Fri: 9:00AM - 5:00PM GMT+1",
      textColor: "text-white",
    },
    // {
    //   icon: fill,
    //   iconBg: "bg-[#5880D1]",
    //   cardBg: "bg-[#DFBBFF]",
    //   title: "Address",
    //   content: "123 Tech Avenue,\nInnovation District, Tech\nCity, TC 12345",
    // },
  ];

  return (
    <div className="py-16 px-8 z-10">
      <div className="max-w-[1200px]  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {contacts.map((contact, index) => {
            return (
              <div
                key={index}
                className={`${contact.cardBg} rounded-2xl p-8 shadow-lg flex flex-col items-center text-center min-h-[280px] transition-transform hover:scale-105`}
              >
                {/* Icon Circle */}
                <div
                  className={`${contact.iconBg} rounded-full w-16 h-16 flex items-center justify-center mb-6`}
                >
                  <img
                    src={contact.icon}
                    loading="lazy"
                    className="w-5 h-5 text-white"
                  />
                </div>

                {/* Title */}
                <h3
                  className={`font-grotesk text-xl font-semibold mb-3 ${
                    contact.textColor || "text-gray-800"
                  }`}
                >
                  {contact.title}
                </h3>

                {/* Content */}
                <p
                  className={`text-sm leading-relaxed ${
                    contact.textColor ? "text-[#E6DADA]" : "text-[#4A5565]"
                  } whitespace-pre-line`}
                >
                  {contact.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
