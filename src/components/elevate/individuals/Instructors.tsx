import { Linkedin } from "lucide-react";
import instructor1 from "../../../assets/images/instructor1.png";
import instructor2 from "../../../assets/images/instructor2.png";

export default function InstructorsSection() {
  const instructors = [
    {
      name: "Cisco Nerd",
      image: instructor1,
      bgColor: "bg-blue-400",
      linkedin: "https://www.linkedin.com/in/chukwuditheodore/",
      twitter: "https://x.com/onijec?s=21",
    },
    {
      name: "Olúmáyọ̀wá.dev",
      image: instructor2,
      bgColor: "bg-pink-400",
      linkedin: "https://www.linkedin.com/in/olumayowaa/",
      twitter: "https://x.com/akintunero?s=21",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-16">
          Meet Your Instructors
        </h1>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-2 gap-20 max-w-4xl mx-auto">
          {instructors.map((instructor, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image with decorative background */}
              <div className="relative mb-6">
                {/* Profile Image */}
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-2xl font-normal text-gray-900 mb-4">
                {instructor.name}
              </h3>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href={instructor.linkedin}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-[#2A2376] flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" fill="white" />
                </a>
                <a
                  href={instructor.twitter}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-[#2A2376] flex items-center justify-center"
                  aria-label="Twitter/X"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
