import { Clock, Users, DollarSign } from "lucide-react";
import CommunityButtonFill from "../buttons/CommunityButtonFill";

export default function InstituteCourses() {
  const courseSections = [
    {
      id: 1,
      title: "Networking",
      courses: [
        {
          id: 1,
          image:
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
          title: "Networking Basics",
          description:
            "The internet is built on computer networks. So no matter what kind of tech career you are interested in, it is essential to have some networking basics.",
          detail:
            "Start learning the basics of computer networking and discover how networks operate.",
          hours: "22 HOURS",
        },
        {
          id: 2,
          image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
          title: "Introduction to IoT and Digital Transformation",
          description:
            "Billions of devices connect to the network every day. Discover how IoT, along with emerging technologies such as data analytics and artificial intelligence and cybersecurity, are digitally transforming industries and expanding career opportunities.",
          detail: "",
          hours: "6 HOURS",
        },
        {
          id: 3,
          image:
            "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=400&fit=crop",
          title: "Networking Basics",
          description:
            "The internet is built on computer networks. So no matter what kind of tech career you are interested in, it is essential to have some networking basics.",
          detail:
            "Start learning the basics of computer networking and discover how networks operate.",
          hours: "22 HOURS",
        },
        {
          id: 4,
          image:
            "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&h=400&fit=crop",
          title: "Introduction to IoT and Digital Transformation",
          description:
            "Billions of devices connect to the network every day. Discover how IoT, along with emerging technologies such as data analytics and artificial intelligence and cybersecurity, are digitally transforming industries and expanding career opportunities.",
          detail: "",
          hours: "6 HOURS",
        },
      ],
    },
    {
      id: 2,
      title: "Cybersecurity Courses",
      courses: [
        {
          id: 5,
          image:
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
          title: "Introduction to Cybersecurity",
          description:
            "The internet is built on computer networks. So no matter what kind of tech career you are interested in, it is essential to have some networking basics.",
          detail:
            "Start learning the basics of computer networking and discover how networks operate.",
          hours: "22 HOURS",
        },
        {
          id: 6,
          image:
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
          title: "Introduction to IoT and Digital Transformation",
          description:
            "Billions of devices connect to the network every day. Discover how IoT, along with emerging technologies such as data analytics and artificial intelligence and cybersecurity, are digitally transforming industries and expanding career opportunities.",
          detail: "",
          hours: "6 HOURS",
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
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <div className="w-6 h-6 rounded-md border-2 border-purple-600 flex items-center justify-center">
                        <div className="w-3 h-3 bg-purple-600 rounded-sm"></div>
                      </div>
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
