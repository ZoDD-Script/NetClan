import team from "../../assets/images/team.png";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";
import team4 from "../../assets/images/team4.png";
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const Teams = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Abigail Jefia",
      role: "Co-founder",
      image: team,
    },
    {
      name: "Chukwudi Onije",
      role: "Co-founder",
      image: team1,
    },
    {
      name: "Emmanuel Sam",
      role: "Learning & Development",
      image: team2,
    },
    {
      name: "Olumayowa Akinkuehinmi",
      role: "Strategy & Operations",
      image: team3,
    },
    {
      name: "Gbolahan Oguntula",
      role: "Strategy & Operations",
      image: team4,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF50] py-16 px-10 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 mb-6">
            Our Team
          </h1>
          <p className="text-[#39374F] text-lg max-w-[788px] mx-auto">
            Meet the{" "}
            <span className="font-semibold text-gray-800">
              dedicated individuals leading our mission
            </span>{" "}
            to empower aspiring network engineers.
          </p>
        </div>

        {/* Co-founders Row */}
        <div className="grid md:grid-cols-2 gap-30 mb-20 items-center">
          {teamMembers.slice(0, 2).map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center max-w-[422px]"
            >
              <div className="relative mb-6">
                {/* Background Shape */}
                <div className={`absolute inset-0 opacity-60`} />
                {/* Profile Image */}
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-lg max-w-[422px]"
                  />
                </div>
              </div>
              <h3 className="font-grotesk text-xl font-semibold text-[#39364F] mb-1">
                {member.name}
              </h3>
              <p className="font-grotesk text-[#666666] text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Other Team Members Row */}
        <div className="grid md:grid-cols-3 gap-12">
          {teamMembers.slice(2).map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-6">
                {/* Background Shape */}
                <div className={`absolute inset-0 opacity-60`} />
                {/* Profile Image */}
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#39364F] mb-1">
                {member.name}
              </h3>
              <p className="text-[#666666] text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
