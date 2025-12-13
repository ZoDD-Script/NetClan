import { Clock, Users, DollarSign } from "lucide-react";
import CommunityButtonFill from "../buttons/CommunityButtonFill";
import icon from "../../assets/images/Icon.png";

export default function InstituteCourses() {
  const courseSections = [
    {
      id: 1,
      title: "Networking",
      courses: [
        {
          id: 1,
          image:
            "https://plus.unsplash.com/premium_photo-1723867236011-6099f308dab0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV0d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
          title: "Networking Basics",
          description:
            "The internet is built on computer networks. So no matter what kind of tech career you are interested in, it is essential to know some networking basics!",
          detail:
            "Start learning the basics of computer networking and discover how networks operate.",
          hours: "22 hours",
        },
        {
          id: 2,
          image:
            "https://plus.unsplash.com/premium_photo-1754507733579-20c328705ef8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRpZ2l0YWwlMjBuZXR3b3JraW5nfGVufDB8fDB8fHww",
          title: "Introduction to IoT and Digital Transformation",
          description:
            "Billions of devices connect to the network every day. Discover how IoT, along with emerging technologies such as data analytics and artificial intelligence and cybersecurity, are digitally transforming industries and expanding career opportunities.",
          detail: "",
          hours: "6 hours",
        },
      ],
    },
    {
      id: 2,
      title: "Cybersecurity",
      courses: [
        {
          id: 3,
          image:
            "https://images.unsplash.com/photo-1618060932014-4deda4932554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGN5YmVyJTIwc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D",
          title: "Introduction to Cybersecurity",
          description:
            "This introductory course takes you inside the world of cybersecurity. You will learn cybersecurity basics to protect your personal digital life and gain insights into the biggest security challenges companies, governments, and educational institutions face today.",
          detail: "",
          hours: "6 hours",
        },
      ],
    },
    {
      id: 3,
      title: "Artificial Intelligence",
      courses: [
        {
          id: 4,
          image:
            "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
          title: "AI Fundamentals with IBM SkillsBuild",
          description:
            "Learn the basics of machine learning, deep learning, natural language processing, and computer vision as you try out IBM Watson Studio.",
          detail: "",
          hours: "10 hours",
        },
        {
          id: 5,
          image:
            "https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
          title: "Introduction to Modern AI",
          description:
            "Learn to use AI in your daily life, craft effective prompt chatbots, and use computer vision and machine translation. If you are new to AI and ready to start using AI in your life today, this course is designed to help you learn key AI concepts and get hands-on practice with AI-enabled apps.",
          detail: "",
          hours: "6 hours",
        },
      ],
    },
    {
      id: 4,
      title: "Operating Systems",
      courses: [
        {
          id: 6,
          image:
            "https://plus.unsplash.com/premium_photo-1687463804252-23a91b3b7f51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG9wZXJhdGluZyUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D",
          title: "Linux Unhatched",
          description:
            "Want to start a career at the cutting edge of innovation? Linux is an open-source operating system used by organizations worldwide, and it is the driving force behind technological progress in supercomputers, cloud computing, and much more.",
          detail: "",
          hours: "8 hours",
        },
        {
          id: 7,
          image:
            "https://images.unsplash.com/photo-1617228679684-890412dc57a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3BlcmF0aW5nJTIwc3lzdGVtfGVufDB8fDB8fHww",
          title: "Linux Essentials",
          description:
            "Linux, an open source operating system, has a global reach in the world of tech. Whether you want to become a system administrator or enhance your skills for IT jobs in software development, network engineering, or cybersecurity, learning Linux is foundational.",
          detail: "",
          hours: "70 hours",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen px-4 py-8 md:px-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Tags */}
        <div className="flex flex-wrap justify-center items-center gap-10 mb-8 text-base">
          <div className="flex items-center gap-2 text-[#2A2376]">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="font-medium">Online</span>
          </div>

          <div className="text-gray-400">|</div>

          <div className="flex items-center gap-2 text-[#2A2376]">
            <DollarSign className="w-6 h-6" strokeWidth="2" />
            <span className="font-medium">Free</span>
          </div>

          <div className="text-gray-400">|</div>

          <div className="flex items-center gap-2 text-[#2A2376]">
            <Users className="w-6 h-6" strokeWidth="2" />
            <span className="font-medium">Audience: Members</span>
          </div>
        </div>

        {/* Course Sections */}
        {courseSections.map((section, sectionIndex) => (
          <div
            key={section.id}
            className={`${sectionIndex > 0 ? "mt-26" : ""} pt-12`}
          >
            {/* Section Title */}
            <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-6 md:mb-8">
              {section.title}
            </h1>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {section.courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
                >
                  {/* Course Image */}
                  <div className="relative h-48 md:h-[404px] overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <img src={icon} alt={course.title} />
                      {/* <div className="w-6 h-6 rounded-md border-2 border-purple-600 flex items-center justify-center">
                        <div className="w-3 h-3 bg-purple-600 rounded-sm"></div>
                      </div> */}
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-8 flex flex-col h-full">
                    <h2 className="text-xl md:text-3xl font-light text-[#060429] mb-3">
                      {course.title}
                    </h2>

                    <div className="">
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {course.description}
                      </p>
                      {course.detail && (
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {course.detail}
                        </p>
                      )}
                    </div>

                    {/* Bottom-aligned content */}
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 text-[#476CC8] mb-6">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-light">
                          {course.hours}
                        </span>
                      </div>

                      <CommunityButtonFill bg="bg-[#FFFFFF]" text="text-sm">
                        Get Started
                      </CommunityButtonFill>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
