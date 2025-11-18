import React from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  shapeColor: string;
}

const OurTeam: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Abigail Jefta",
      role: "Co-founder",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      shapeColor: "#F5A7C3",
    },
    {
      name: "Chukwudi Onije",
      role: "Co-founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      shapeColor: "#6B93D6",
    },
    {
      name: "Emmanuel Sam",
      role: "Lead Instructor",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      shapeColor: "#D4C5F9",
    },
    {
      name: "Olumayowa Akinkuehimi",
      role: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      shapeColor: "#D4C5F9",
    },
    {
      name: "Gbolahan Oguntula",
      role: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      shapeColor: "#D4C5F9",
    },
  ];

  return (
    <section className="bg-[#E6DADA] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#39364F] mb-4">
            Our Team
          </h2>
          <p className="text-[#39364F] text-lg">
            Meet the{" "}
            <span className="font-semibold">
              dedicated individuals leading our mission
            </span>{" "}
            to empower aspiring network engineers.
          </p>
        </div>

        {/* Team Grid */}
        <div className="space-y-12">
          {/* First Row - Co-founders */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.slice(0, 2).map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-6">
                  {/* Decorative Shape */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      width="410"
                      height="410"
                      viewBox="0 0 410 410"
                      fill="none"
                      className="absolute"
                    >
                      <rect
                        x="60"
                        y="0"
                        width="80"
                        height="80"
                        rx="8"
                        fill={member.shapeColor}
                      />
                      <rect
                        x="0"
                        y="80"
                        width="80"
                        height="80"
                        rx="8"
                        fill={member.shapeColor}
                      />
                      <rect
                        x="60"
                        y="80"
                        width="200"
                        height="80"
                        rx="8"
                        fill={member.shapeColor}
                      />
                      <rect
                        x="270"
                        y="80"
                        width="140"
                        height="80"
                        rx="8"
                        fill={member.shapeColor}
                      />
                      <rect
                        x="330"
                        y="160"
                        width="80"
                        height="80"
                        rx="8"
                        fill={member.shapeColor}
                      />
                    </svg>
                  </div>
                  {/* Photo */}
                  <div className="relative z-10 w-64 h-64 mx-auto">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-b-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#39364F] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#39364F]">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Second Row - Team Members */}
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {teamMembers.slice(2).map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-6">
                  {/* Background Shape with Clip Path */}
                  <div
                    className="w-[450px] h-[350px] mx-auto"
                    style={{
                      backgroundColor: member.shapeColor,
                      clipPath:
                        "polygon(0% 30%, 20% 30%, 20% 0%, 85% 0%, 85% 30%, 100% 30%, 100% 100%, 85% 100%, 85% 70%, 20% 70%, 20% 100%, 0% 100%)",
                    }}
                  >
                    {/* Photo positioned within the shape */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-b-full"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#39364F] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#39364F]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
